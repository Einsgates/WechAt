(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bottle-bottle"],{"0c77":function(e,t,o){var n=o("24fb");t=n(!1),t.push([e.i,".content[data-v-9d721d48]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.Bottle_image[data-v-9d721d48]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-9d721d48]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.title[data-v-9d721d48]{font-size:%?36?%;color:#8f8f94}.send_button[data-v-9d721d48]{background-color:#4caf50; /* Green */border:none;color:#fff;padding:10px 25px;margin-top:10px;text-decoration:none;display:inline-block;font-size:16px;display:block}.change_button[data-v-9d721d48]{background-color:#4caf50; /* Green */border:none;margin-top:10px;color:#fff;padding:10px 25px;text-decoration:none;display:inline-block;font-size:16px;display:block}.discard_button[data-v-9d721d48]{background-color:#4caf50; /* Green */margin-top:10px;border:none;color:#fff;padding:10px 25px;text-decoration:none;display:inline-block;font-size:16px;display:block}uni-textarea[data-v-9d721d48]{padding:12px 20px;box-sizing:border-box;border:2px solid #ccc;border-radius:4px;background-color:#f8f8f8;font-size:16px;resize:none}p[data-v-9d721d48]{color:navy;padding:4px;text-indent:5px;text-transform:uppercase}.button-18[data-v-9d721d48]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#0a66c2;border:0;border-radius:100px;box-sizing:border-box;color:#fff;cursor:pointer;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;font-family:-apple-system,system-ui,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif;font-size:16px;font-weight:600;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;line-height:20px;max-width:480px;min-height:40px;min-width:0;overflow:hidden;padding:0;padding-left:20px;padding-right:20px;text-align:center;touch-action:manipulation;-webkit-transition:background-color .167s cubic-bezier(.4,0,.2,1) 0s,box-shadow .167s cubic-bezier(.4,0,.2,1) 0s,color .167s cubic-bezier(.4,0,.2,1) 0s;transition:background-color .167s cubic-bezier(.4,0,.2,1) 0s,box-shadow .167s cubic-bezier(.4,0,.2,1) 0s,color .167s cubic-bezier(.4,0,.2,1) 0s;user-select:none;-webkit-user-select:none;vertical-align:middle}.button-18[data-v-9d721d48]:hover,\n.button-18[data-v-9d721d48]:focus{background-color:#16437e;color:#fff}.button-18[data-v-9d721d48]:active{background:#09223b;color:hsla(0,0%,100%,.7)}.button-18[data-v-9d721d48]:disabled{cursor:not-allowed;background:rgba(0,0,0,.08);color:rgba(0,0,0,.3)}",""]),e.exports=t},"0f30":function(e,t,o){"use strict";o.r(t);var n=o("7076"),a=o("370d");for(var i in a)"default"!==i&&function(e){o.d(t,e,(function(){return a[e]}))}(i);o("ff71");var s,l=o("f0c5"),c=Object(l["a"])(a["default"],n["b"],n["c"],!1,null,"9d721d48",null,!1,n["a"],s);t["default"]=c.exports},"370d":function(e,t,o){"use strict";o.r(t);var n=o("dd80"),a=o.n(n);for(var i in n)"default"!==i&&function(e){o.d(t,e,(function(){return n[e]}))}(i);t["default"]=a.a},5216:function(e,t,o){var n=o("0c77");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=o("4f06").default;a("1a05abcf",n,!0,{sourceMap:!1,shadowMode:!1})},7076:function(e,t,o){"use strict";var n;o.d(t,"b",(function(){return a})),o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",{staticClass:"content"},[o("v-uni-image",{staticClass:"Bottle_image",attrs:{src:"/static/logo.png"}}),o("v-uni-text",{staticClass:"title"},[e._v(e._s(e.title))]),o("div",[o("v-uni-button",{staticClass:"send_button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sendMessage()}}},[e._v(e._s(e.message_send))]),e.message_box_toggle?o("v-uni-form",[o("p",[o("v-uni-label",{attrs:{for:"w3review"}},[e._v("Edit your message")])],1),o("v-uni-textarea",{attrs:{id:"w3review",name:"w3review",rows:"3",cols:"40"},model:{value:e.send_default,callback:function(t){e.send_default=t},expression:"send_default"}}),o("br"),o("v-uni-button",{staticClass:"button-18",attrs:{role:"button"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.send_out()}}},[e._v("Submit")])],1):e._e(),e.discard_box_toggle?e._e():o("v-uni-button",{staticClass:"change_button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.findBottle()}}},[e._v(e._s(e.message_find))]),e.discard_box_toggle?o("v-uni-button",{staticClass:"change_button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.seeBottle()}}},[e._v(e._s(e.message_see))]):e._e(),e.open_box_toggle?o("v-uni-textarea",{attrs:{id:"w3review",name:"w3review",rows:"3",cols:"40",readonly:!0},model:{value:e.Receive_content,callback:function(t){e.Receive_content=t},expression:"Receive_content"}},[e._v(e._s(e.Receive_content))]):e._e(),e.discard_box_toggle?o("v-uni-button",{staticClass:"discard_button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.discardBottle()}}},[e._v(e._s(e.message_discard))]):e._e()],1)],1)},i=[]},dd80:function(e,t,o){"use strict";(function(e,n){o("fb6a"),o("accc"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{title:"Bottle Message",bottleMessage:"message from the Databases",message_send:"Send Message",message_find:"Find Bottle",message_see:"Open Bottle",message_discard:"Discard Message",send_default:"Hi, how are you (edit your message here)",status:"",discard_box_toggle:!1,message_box_toggle:!1,open_box_toggle:!1,send_confirm:!1,initial_status:1,today:"",bottle_id:0,my_user_id:1,Receive_content:"",other_user_id:1,other_user_name:"",already_open:!1,receive_time:""}},methods:{sendMessage:function(){this.message_box_toggle=!this.message_box_toggle,this.message_box_toggle?this.message_send="Unsend Message":this.message_send="Send Message"},send_out:function(){var t=this;e("log",this.send_default," at pages/bottle/bottle.vue:67"),this.today=(new Date).toISOString().slice(0,10),e("log",this.today," at pages/bottle/bottle.vue:69"),n.callFunction({name:"query",data:{sentence:"INSERT INTO Bottle (Bottle_time, User_id_from, Status, Bottle_content) VALUES (?, ?, ?, ?)",arguments:[this.today,1,this.initial_status,this.send_default]},success:function(o){e("log","Success"," at pages/bottle/bottle.vue:82"),e("log",t.today,1,t.initial_status,t.send_default," at pages/bottle/bottle.vue:83")},fail:function(t){e("log",t," at pages/bottle/bottle.vue:86")}})},findBottle:function(){var t=this;e("log","find bottle"," at pages/bottle/bottle.vue:97"),this.discard_box_toggle=!0,this.already_open=!1,n.callFunction({name:"query",data:{sentence:"SELECT Bottle_id FROM Bottle WHERE Status = ? ORDER BY RAND() LIMIT 1",arguments:[1]},success:function(o){e("log",o.result[0]["Bottle_id"]," at pages/bottle/bottle.vue:108"),t.bottle_id=o.result[0]["Bottle_id"]},fail:function(t){e("log",t," at pages/bottle/bottle.vue:112")}})},seeBottle:function(){var t=this;e("log","open the bottle"," at pages/bottle/bottle.vue:119"),this.discard_box_toggle=!0,this.my_user_id=getApp().globalData.user_id,this.open_box_toggle=!this.open_box_toggle,this.already_open=!0,n.callFunction({name:"query",data:{sentence:"UPDATE Bottle SET User_id_to = ? WHERE Bottle_id = ?",arguments:[this.my_user_id,this.bottle_id]},success:function(t){e("log","Success update"," at pages/bottle/bottle.vue:132")},fail:function(t){e("log",t," at pages/bottle/bottle.vue:135")}}),n.callFunction({name:"query",data:{sentence:"SELECT Bottle_id, Bottle_time, User_id_from, Bottle_content FROM Bottle WHERE Bottle_id = ?",arguments:[this.bottle_id]},success:function(o){e("log",o.result[0]," at pages/bottle/bottle.vue:146"),t.other_user_id=o.result[0]["User_id_from"],t.Receive_content=o.result[0]["Bottle_content"],n.callFunction({name:"query",data:{sentence:"SELECT User_name FROM Chat_user WHERE User_id = ?",arguments:[t.other_user_id]},success:function(o){t.other_user_name=o.result[0]["User_name"],e("log","other's name is: "+o.result[0]["User_name"]+" other's id is: "+t.other_user_id," at pages/bottle/bottle.vue:158"),t.Receive_content=t.Receive_content+"\n\n\n\t\t ------ "+o.result[0]["User_name"]},fail:function(t){e("log",t," at pages/bottle/bottle.vue:162")}})},fail:function(t){e("log",t," at pages/bottle/bottle.vue:168")}})},discardBottle:function(){e("log","discard the bottle"," at pages/bottle/bottle.vue:175"),this.discard_box_toggle=!1,this.open_box_toggle=!1,(this.already_open=!0)&&n.callFunction({name:"query",data:{sentence:"DELETE FROM Bottle WHERE Bottle_id = ?",arguments:[this.bottle_id]},success:function(t){e("log","success: read but discard the bottle"," at pages/bottle/bottle.vue:186")},fail:function(t){e("log",t," at pages/bottle/bottle.vue:189")}})}}};t.default=a}).call(this,o("0de9")["log"],o("a9ff")["default"])},ff71:function(e,t,o){"use strict";var n=o("5216"),a=o.n(n);a.a}}]);