<!-- jiayuan is modifying -->
<template>
  <view class="content">
    <!-- button to fetch the public session list -->
    <!-- 		<button @click="getSessionList">get first message for public sessions</button> -->

    <!-- section for the public sessions -->
    <!-- text to show that this is public session section -->
    <view class="public">
      <text class="public-text">Public Sessions</text>
    </view>
    <view
      v-for="pub_session in pub_sessions"
      :key="pub_session['Session_id']"
      @click="jumpToMessage(pub_session['Session_id'])"
    >
      <div class="flex-container">
        <div class="card">
          <img class="profile" src="/static/logo.png" alt="img1" />
        </div>
        <div class="texting">
          <h4 class="name">
            <b>{{ pub_session["Chat_name"] }}</b>
          </h4>
          <!-- display the first message -->
          <p class="chatting">
            {{ String(pub_session["Msg_Content"]).substring(0, 25) }}
            <text v-if="display(pub_session['Msg_Content'])"> ... </text>
          </p>
        </div>
      </div>
    </view>

    <!-- section for the private sessions -->
    <!-- text to show that this is private session section -->
    <view class="private">
      <text class="private-text">Private Sessions</text>
    </view>
    <view
      v-for="pri_session in pri_sessions"
      :key="pri_session['Session_pri_id']"
      @click="jumpToMessage(pri_session['Session_id'])"
    >
      <div class="flex-container">
        <div class="card">
          <img class="profile" src="/static/logo.png" alt="img1" />
        </div>
        <div class="texting">
          <h4 class="name">
            <b>{{ pri_session["User_name"] }}</b>
          </h4>
          <!-- <p class="chatting">{{pri_msgs_dict[pri_session['Session_pri_id']]}}</p> -->
        </div>
      </div>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      pub_sessions: [],
      pri_sessions: [],
      pub_msgs_dict: {},
      pri_msgs_dict: {},
      my_user_id: 1,
    };
  },
  onLoad() {
    this.start_getting_session();
  },
  methods: {
    display(msg_string) {
      if (String(msg_string).length > 28) return true;
      else return false;
    },

    //========================================================================================================================
    jumpToMessage(sess_id) {
      // go to the pages/message/message page and pass the session id to it using nativateTo
      uni.navigateTo({
        url: "../message/message?session_id=" + sess_id,
      });
    },
    //========================================================================================================================

    start_getting_session() {
      this.my_user_id = getApp().globalData.user_id;

      uniCloud.callFunction({
        name: "query",
        data: {
          sentence:
            "SELECT * FROM Joined NATURAL JOIN Chat_session NATURAL JOIN (SELECT Session_id, Msg_Content FROM Contain c NATURAL JOIN Msg m NATURAL JOIN ( SELECT Session_id, MAX(Msg_time) AS MAXT FROM Joined NATURAL JOIN Chat_session NATURAL JOIN Contain NATURAL JOIN Msg WHERE User_id = ? GROUP BY Session_id) AS TEMP WHERE TEMP.Session_id = c.Session_id AND m.Msg_time = TEMP.MAXT ) AS Temp_table2 WHERE User_id = ?",
          arguments: [this.my_user_id, this.my_user_id],
        },
        success: (res) => {
          this.pub_sessions = res.result;
          console.log("kill me in uniCloud success 1");
        },
        fail: (err) => {
          console.log(err);
        },
      });

      // this query is the complementary element for the last one
      uniCloud.callFunction({
        name: "query",
        data: {
          sentence:
            "(SELECT * FROM Joined_pri JOIN Chat_user ON Joined_pri.User2_id = Chat_user.User_id WHERE User1_id = ?) UNION (SELECT * FROM Joined_pri JOIN Chat_user ON Joined_pri.User1_id = Chat_user.User_id WHERE User2_id = ?)",
          arguments: [this.my_user_id, this.my_user_id],
        },
        success: (res) => {
          this.pri_sessions = res.result;
          console.log("kill me in uniCloud success 2");
        },
        fail: (err) => {
          console.log(err);
        },
      });
    },
  },
};
</script>

<style>
text {
  font-size: 20px;
  color: darkslategrey;
}

.flex-container {
  display: flex;
  flex-direction: row;
}

.card {
  float: left;
  padding: 6px;
}

.profile {
  flex: 30%;
}

.name {
  flex: 70%;
  padding: 0.3em;
  clear: right;
}

.chatting {
  float: left;
  padding: 10px 0px 0px 3px;
}
</style>
