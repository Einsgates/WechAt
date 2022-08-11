# Project Proposal

[TOC]

## Summary

This project is the sub-project of the mother project **IntLife.** The mother project is designed to provide a communication platform for ZJU students in China. The mother project integrates a **Posts** page (which is the index page), a square page (which is the trading center for products), a group activity sign-up page, and a login page. The mother project also has a message page, but not yet developed. Thus, this project is used to develop the **Chat_session** page with messages in them.


## Realness

> Describe what data is stored in the database. (Where is the data from, what attributes and information would be stored?)

We decide to inject our dataset using randomly generated data from https://generatedata.com/.

![UML](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-013529.png)

## Creativity, Functions, Application And Usefulness

This course project is the sub-project of **IntLife**, which has a DBMS UML graph below:

<img src="http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-07-06-033128.png" alt="img"  />

The mother project is designed to provide a communication platform for ZJU students in China. The mother project integrates a Posts page (which is the index page), a square page (which is the trading center for products), a group activity sign-up page, and a login page. The mother-project also has a message page, but not yet developed. Thus, this project is used to develop the **Chat_session** page with messages in them.

However, simply a chat session page is not much creative. Thus, our goal is to integrate the snippets of the products into the communication system. With the minimal set of the mother project, we use entities like **User**, **Posts**, **Products** to construct the framework, and we fulfill the **Chat_session** and **Msg** entities ourselves. The **Snippet** is used to create a snapshot of the product and append it to the chat or the post, for other user’s reference.

For your information, please take a look at the following tabs from the mother project, which better tell you what the mother project looks like.

#### Mother Project Tabs

These are the mother project tabs (without the “message” tab).

<img src="http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-07-06-041706.png" alt="image-20220705231705510" style="zoom:25%;" />

<img src="http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-07-06-041721.png" alt="image-20220705231721007" style="zoom:25%;" />

<img src="http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-07-06-041735.png" alt="image-20220705231735205" style="zoom:25%;" />

<img src="http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-07-06-041806.png" alt="image-20220705231755409" style="zoom:25%;" />

## Description

For your convenience, we include the same UML graph here:

![UML](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-013529.png)

### Attributes

1.   **Chat_user**

     1.   `User_id`: uniquely identifies the user.
     2.   `User_name`: the name entitled by the user.
     3.   `User_password`: the login password.
     4.   `Avatar`: the network address to the user’s avatar image.
     5.   `Email`: the E-mail (which is specified when registering) of the user.
     6.   `Chatbot_flag`: decide whether the user is a chatbot. Yes is `1`, no is `0`.
     7.   `Status`: the current status of the user, can be `online`, `busy`, or `offline`.

2.   **Bottle**

     1.   `Bottle_id`: uniquely identify a drift bottle.

     2.   `Time`: the time when the bottle is sent from a **Chat_user**.

     3.   `Status`: the flag marking whether the bottle has been opened.

     4.   `Content`: the content of the bottle written by the sender.

3.   **Post**

     1.   `Post_id`: uniquely identify a post.
     2.   `Post_content`: the content of the post.
     3.   `Publish_time`: the time when the post is published.

4.   **Product**

     1. `Product_id`: uniquely identify a Product.
     2. `Name`: The name of a Product.
     3. `Price`: The name of a Product.
     4. `Photo_uri`: The link to the Product.

5.   **Snippet**
   1. `Snippet_id`: uniquely identify a Snippet.
   2. `Snippet_content`: The contents of a Snippet

6.   **Chat_sesssion**
   1. `Session_id`: uniquely identify a Chat_session.
   2. `Chat_name`: The name of the Chat_session

7.   **Chat_session_pri**

     1.   `Session_pri_id`: uniquely identify a private session.
     2.   `Pending_flag`: after a friend invitation is sent, the pending flag will be set to `1`. After the invitation is accepted, it will be set to `0`.
     3.   `Blacklisg_flag`: if a friend is in the blacklist (the flag is `1`), then both sides of the friendship can neither send or receive any message from the other side.

8.   **Msg**
   1. `Msg_id`: uniquely identify a Msg.
   2. `Msg_time`: The time when the Msg is sent.
   3. `Msg_status`: Whether the Msg is sending or pending
   4. `Msg_content`: The contents of the Msg.

   

### Per-entity description & Assumptions

1.   **Chat_user** is the main entity of this chat system. Each chat user can post or like **Posts**, send and receive **Bottles**, sell **Products**, join **Chat_session**, be the admin of **Chat_session**, or send **Msg**. 
     1.   **Chat_user** can post or like 0 or more **Post**.
     2.   **Chat_user** can send or receive 0 or more **Bottle**.
     3.   **Chat_user** can sell 0 or more **Product**.
     4.   **Chat_user** can join or be the admin of 0 or more **Chat_session**.
     5.   **Chat_user** can send 0 or more **Msg**.
2.   **Bottle** is a drift bottle that is created by a **Chat_user**, and randomly picked by another **Chat_user** when requested by him/her.
     1.   **Bottle** can be sent from a **Chat_user**.
     2.   When **Bottle** is not yet picked up, it has no been sent to any **Chat_user**. After it is picked up by another **Chat_user**, it will be assigned to that person.

3.   **Post** is posted by a **Chat_user** to share their business ideas and advertise their **Product** (using **Snippet**). 
     1.   **Post** can be posted by only 1 **Chat_user**, but liked by multiple **Chat_user**. 
     2.   **Post** can append 0 or more **Snippet**. Each snippet links to a **Product**.

4.   **Product** is the main component of the chat system and is sold by some **Chat_user**, it also linked by **Snippet**.
     1. One **Product** can be sold by exactly one **Chat_user**.
     2. One **Product** can be linked by exactly one **Snippet**.
5.   **Snippet** is a kind of small card. It can display contents of the Product. It links **Product**. It also has relation with **Post** and **Msg**, connected by Append_post and Append_msg respectively. 
   1. One **Snippet** can link exactly one **Product**.
   2. One **Snippet** can be appended by exactly one **Post**. 
   3. One **Snippet** can be appended by exactly one **Msg**.
6.   **Chat_session** is a collection of many Msg. It has relationship with **Chat_user** and **Msg**. 
   1. One **Chat_session** can be Joined/Admined by at least one **Chat_user.**
   2. One **Chat_session** contain 0 or more **Msg.**
7.   **Chat_session_pri** is another collection of **Msg**, but it only contains 2 **Chat_user**. We use this approach to store friendships.
     1.   **Chat_session_pri** can be privately joined by 2 friends at the same time, which means that if one quits the friendship, this **Chat_session_pri** will be deleted.
     2.   One **Chat_session** contain 0 or more **Msg.**

8.   **Msg** contains information of a message sent by Chat_user. **Msg** has relationship with **Chat_session, Snippet**, and **Chat_user**. 
   1. One **Msg** is contained in exactly one **Chat_session**.
   2.  One **Msg** can be sent by exactly one **Chat_user**. 
   3. One **Msg** can be appended by no Snippet or more **Snippet**.

## Dataset Schema 

```sql
Admin(User_id:INT [PK], Session_id:INT [FK to Chat_session.Session_id], Time_begin:Date, Time_end:Date)

Append_msg(Snippet_id:int [PK], Msg_id:int [FK to Msg.Msg_id])

Bottle(Bottle_id:INT [PK], Bottle_time:VARCHAR(255), User_id_from:INT [FK to User.User_id], User_id_to:INT [FK to User.User_id], Status:INT, Bottle_content:VARCHAR(255))

Chat_pri_session(Session_pri_id:INT [PK], Pending_flag:VARCHAR(5), Blacklist_flag:VARCHAR(5))

Chat_session(Session_id:INT [PK], Chat_name:VARCHAR(30))

Chat_user(User_id:INT [PK], User_name:VARCHAR(255), User_password:VARCHAR(255), Avator:VARCHAR(255), Email:VARCHAR(255), Chatbot_flag:INT, Status:VARCHAR(6))

Contain(Msg_id:INT [PK], Session_id:INT [PK], [FK to Chat_session.Session_id], [FK to Msg.Msg_id])

Contain_pri(Msg_id:INT [PK], Session_pri_id:INT [PK])

Joined(User_id:INT [PK], Session_id:INT [PK], Time_begin:VARCHAR(255), Time_end:VARCHAR(255))

Joined_pri(User1_id:INT [PK], User2_id:INT [PK], Session_pri_id:INT, Time_begin:VARCHAR(255), Time_end:VARCHAR(255))

Msg(Msg_id: INT [PK], Msg_time: TEXT, Msg_status: VARCHAR(7), Msg_sender: INT [FK to Chat_user.User_id], Msg_content: VARCHAR(265))

Post(Post_id: INT [PK], Post_sender: INT [FK to Chat_user.User_id], Publish_time: VARCHAR(255), Post_content: VARCHAR(12000))

Post_Like(User_id: INT [PK][FK to Chat_user.User_id], Post_id: INT [PK][FK to Post.Post_id], Like_amount: INT)

Product(Product_id:INT [PK], User_id:INT [FK to Chat_user.User_id], Name:VARCHAR(255), Price:INT, Photo_url:VARCHAR(255))

Snippet(Snippet_id:INT [PK], Snippet_link:VARCHAR(255), Snippet_content:VARCHAR(12000))
```

## UI Mockup

### Chat Session, User Information, Product, Post and Message

![UI](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-07-06-044235.png)

## Work Distribution

| Work | Member |
| --- | --- |
| Front-end | Jack |
| Chatbots | Jack |
| Back-end | Zhongqi |
| Login system | Jiayuan |
| Front-back Interaction | Puyu |
