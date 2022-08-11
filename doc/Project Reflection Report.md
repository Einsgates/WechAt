# Final Project Report

[TOC]

## 1. Changes to Final Project Proposal (Jack)

> Please list out changes in your project directions if the final project is different from your original proposal (based on your stage 1 proposal submission).

Compared to our final outcome, the stage 1 proposal is very naive. At that stage, we were not able to figure what langauge to use and what the whole system should look like. We were also not sure whether we can achieve our goal, to develop a comprehensive project including the login system. 

The final outcome is productive. We figured out that we can use cloud functions for querying the database system on GCP without a local server running, and we find that the original **Chat_session** system is not applicable. 

Also, the original project proposal did not point out the core usefulness of this project. In fact, the chat system is not the most important part, instead, the product/post system *together with* the chat system is the most exiting part. After we see a product or post, we can consult the seller or poster of the resource. Thus, we added a creative point that, we can get a snippet of the product in the chat, for fatser reference.

## 2. Application Successes and failures (Puyu)

> Discuss what you think your application achieved or failed to achieve regarding its usefulness.

Archived: The application is designed to provide a communication platform for users who register for this application. This APP allows users to sign-up for free profiles, and users can connect to their friends, sell products, make posts, and have thrift bottles. After a user registers an account and logs in, there are fives pages, including the homepage (users can view their information and change their usernames and passwords), the chat session page (users can go inside the chat sessions and chat with their friends), the posting page (users can share their posts and see their friends' posts), drift bottle page(user can pick up random drift bottles from random users and also throw a drift bottle), and product page (users can sell and buy products here, and they can search by price or search by keyword).

Not Archived: Users cannot share videos and music on the posting page; users cannot add a friend privately to have to private chat (so far, they are only joining a group chat with others); sellers cannot negotiate with the buyer in the product page; friends are not able to like your post if they find it interesting...

However, to implement all the features, we must put more time into it. So far, the application is enough because it has all the basic functionalities and satisfies the course requirements.


## 3. Schema and Data Changes (Jack)

> Discuss if you changed the schema or source of the data for your application

Yes. After practice, we find that the `friendship` table is not applicable, as as mentioned by our project TA Hongtai Cao. Thus, we changed it to the `Chat_session_pri` table, which is an entity instead of a relationship. We think that both `Chat_session` table and `Chat_session_pri` table should be entity tables instead of relationship tables.

In the data part, we changed the `link` attribute of the snippet from 2 options (Internet link or product ID link) to only 1 option (product ID). The reason is that we find that the relational database schema is not flexible. If we have a link and an URI existing at the same time, it's very hard to manage it on the front-end.


## 4. ER/UML Diagram and Table Implementation Changes (Jack)

> Discuss what you change to your ER/UML diagram and/or your table implementations. What are some differences between the original design and the final design? Why? What do you think is a more suitable design? 

This questions asks for an ER diagram, but according to the former requirements we have an UML diagram. Here are the differences between them:

- Original UML diagram:

![image-20220803134123843](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-184124.png)

- Current UML diagram:

![](https://i.imgur.com/K4ENVYD.png)

According to the UML diagrams, we made lots of representation changes our of them. For example, the original UML diagram is not standard because we have wrong cardinalities and we have keys like `User_name` in the **Bottle** table. Thanks to our project TA Hongtai Cao, we successfully changed the tables to the standard one, and we add assumptions to the UML diagram in order to get a good explanation of the cardinalities.


## 5. Added and Removed Functionalities (Puyu)

> Discuss what functionalities you added or removed. Why?

ADDED: We implemented some functionalities after the midterm demo:
1. When a repeated message appears right after the second last one, the "(+1)" will be added at the end of this message. This functionality is common in other multimedia instant messaging apps. (Trigger 1)
2. When a user types some swear words, the message will be blocked. (trigger 2)
3. Sort the sellers based on their credits
4. Find a product within some price ranges.

REMOVED: we remove all the functionalities for private sessions because we believe a private session is a subset of group sessions. After all, a private session is a group session with only two members.

## 6. Advanced Database Programs (Puyu)

> Explain how you think your advanced database programs complement your application.

For example: when a repeated message appears right after the second last one, the "(+1)" will be added at the end of this message. When a user types some swear words, the message will be blocked. These triggers are implemented inside the database instead of the back-end code, meaning the database will update itself and respond without letting other codes step into the data.
As well as the procedure, the back-end code does not know anything from the data in the database and only knows the result. For example, in our application, the procedure will sort the sellers by credits and return the result instead of giving the original data to the back-end code and letting the code sort the sellers.

## 7. Technical Challenges (Puyu)

> Each team member should describe one technical challenge that the team encountered. This should be sufficiently detailed such that another future team could use this as helpful advice if they were to start a similar project or where to maintain your project. 

Puyu Yang: When implementing the drift **bottle** session, I must decide if some buttons can appear. For example, suppose I do not pick up a drift bottle by clicking the "find bottle" button but click the "discard bottle" button. In that case, the deletion can not be executed in the database because it may cause unexpected errors if it is executed. Deciding the action chain of the database is essential but challenging here. 

Jack Bai: When implementing the **posts** section, I found it hard to add items with the same format. Later I found that I can use the `component` functionality in `Vue.js`, which creates a template component, and we can fill in the components using items in the database.

Zhongqi Wu: When implementing the **snippet** section, I find that it's very hard to get the HTML source code using the JavsScript language. I also find that the heterogeneous data (HTTP address and the product ID) pretty hard to manipulate in the database schema. Thus, I changed the two options to one to avoid confusions.

Jiayuan Hong: When implementing the **Chat_session** section, I found it very hard to deal with the private chatting part. Thus, I only implemented part of the functions proposed in the plan. I guess we still need to refract the **Chat_pri_session** and **Chat_session** into one table, in order to make manipulations easier.

## 8. Other Changes 

> Are there other things that changed comparing the final application with the original proposal?

Yes, we also have some other changes for the project. The largest change is that we did not follow the initial plan to design the user interface. Because the course do not provide points for front-end engineering, we put more efforts to database design and indexing. Thus, we made a very simple user interface just to achieve the basic interface for the back-end code to be triggered.

We also changes some details when implementing the interfacing code between front-end and back-end. For example, we planed to use the store procedure for the snippet functionality, but we end with using several sequential front-end code parts to finish the snippet functionality. On the other hand, we planed to use the front-end code to implement the search process with calculating the credit for each product seller, but we end with using the trigger to achieve this.

## 9. Future Work (Jack)

> Describe future work that you think, other than the interface, that the application can improve on

In the future work, we plan to transplant our project onto our mother project. Except for the interface, we need to switch the GCP relational database into the NoSQL database hosted by Uniapp. This approch is much more standard for developing a Uniapp application, because the cloud functions provide original supports for Uniapp databases. 

The main work concerns refracting the database schema into a NoSQL database (strictly speaking, NoSQL does not provide a database schema), to cut off the unnecessary ones and twitch the input/output of each part. We sincerely thanks the course stuff providing such a good opportunity to complete the whole project, which may greatly contribute to our capability of transplanting the project to industrial ones.

## 10. Division of Labor (Jack)

> Describe the final division of labor and how well you managed teamwork. 

We share a fair division of labor in the project. Jack is the captain, who is in charge of the whole process of the project. He is also the main developer of the **Post** and **Product** system. Puyu is the main developer of the **advanced database program** and **Bottle** page. He is very productive and helped with other team members a lot. Zhongqi is the main developer of the `Snippet`, which is a creative point of this project. She is also the main developer of the **Login** system. Jiayuan is the main developer of the **Chat_session** and **Msg** system, and he also contributes to writting the corrections of PT2 & PT3.

# Corrections of PT2 & PT3

Here are the corrections of the mistakes we made in PT2 and PT3. We sincerely thank you for reading all our mistakes again. All mistakes have been corrected in the `Proposal.md` (PT2) and `Database Desgin.md` (PT3), but we made a comprehensive copy here. You can check either of them.

## PT2

### Problem 2:

![image-20220803134115114](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-184115.png)

#### Fixed:

Original UML diagram:

![image-20220803134123843](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-184124.png)

Corrected UML diagram:

![UML](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-013529.png)

*(Some modification showed that friendship connect the correct entity & cardinality constraints common)*

1. **Post**: We deleted `post_sender` attribute which occurs in other entities. Instead, we add post relationship to connect **Post** and **Chat_user**.
2. **Product**: We deleted `user_id` attribute which occurs in other entities.
3. **Msg**: To avoid confliction, we change **Friendship** relationship to **Chat_session_pri** and its cardinality constraints to avoid confusion. 
4. **Bottle**: We deleted `user` attribute which occurs in other entities. Instead, we add send_to and send_from relationship to connect **Bottle** and **Chat_user**.
5. **Chat_session_pri**: We deleted both User_id in **Friendship** Table and replace it with **Session_pri_id**.
6. **Cardinality constraints**: We changed several cardinality constraints. For example, we change **Send** relation from 1...* to 0...* and **post** from 1...* to 0...* which are more appropriate.

### Problem 4:

![image-20220803134134192](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-184134.png)

#### Fixed:

We have updated the relational schema, by rephrasing the code generated by database as follows:

```
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



### Problem 5:

![image-20220803134146208](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-184146.png)

#### Fixed:

We have already updated assumptions. We delete words like 'chat_box' to avoid confusion. We fixed the one you said for the second point by restricting the Chat_session cardinality constraints to 0..*

#### Per-entity description & Assumptions

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
     2. One **Msg** can be sent by exactly one **Chat_user**. 
     3. One **Msg** can be appended by no Snippet or more **Snippet**.

### Problem 6:

![image-20220803134159270](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-184159.png)

#### Fixed:

We have changed 1...* to 0...* of relationship **Post_like**.

We have changed 1...* to 0...* of relationship **contain**.

Like the UML showed:

![UML](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-013529.png)

#### Problem 8:

![image-20220803134210131](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-184210.png)

#### Fixed:

We update the **Creativity** and **Summary** as follows:

**Creativity**:

The mother project is designed to provide a communication platform for ZJU students in China. The mother project integrates a Posts page (which is the index page), a square page (which is the trading center for products), a group activity sign-up page, and a login page. The mother-project also has a message page, but not yet developed. Thus, this project is used to develop the **Chat_session** page with messages in them.

However, simply a chat session page is not much creative. Thus, our goal is to integrate the snippets of the products into the communication system. With the minimal set of the mother project, we use entities like **User**, **Posts**, **Products** to construct the framework, and we fulfill the **Chat_session** and **Msg** entities ourselves. The **Snippet** is used to create a snapshot of the product and append it to the chat or the post, for other user’s reference.

**Summary**:

This project is the sub-project of the mother project **IntLife.** The mother project is designed to provide a communication platform for ZJU students in China. The mother project integrates a **Posts** page (which is the index page), a square page (which is the trading center for products), a group activity sign-up page, and a login page. The mother-project also has a message page, but not yet developed. Thus, this project is used to develop the **Chat_session** page with messages in them.



## PT3

### Problem 1:

![image-20220803134219025](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-184219.png)

#### Fixed:

Our IP:

![](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-001442.png)

Successfully connected:

![image-20220803134233653](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-184234.png)

Accessing tables and shown in terminal.

### Problem 2:

![image-20220803134255091](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-184255.png)

#### Fixed:

**Adjust the table created order.**

We put all foreign keys into the bottom of the created table lines.

```sql
/*
 Navicat MySQL Data Transfer

 Source Server         : wechat
 Source Server Type    : MySQL
 Source Server Version : 80026
 Source Host           : 35.225.243.81:3306
 Source Schema         : wechat

 Target Server Type    : MySQL
 Target Server Version : 80026
 File Encoding         : 65001

 Date: 02/08/2022 19:19:53
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for Admin
-- ----------------------------
DROP TABLE IF EXISTS `Admin`;
CREATE TABLE `Admin` (
  `User_id` int NOT NULL,
  `Session_id` int NOT NULL,
  `Time_begin` date DEFAULT NULL,
  `Time_end` date DEFAULT NULL,
  PRIMARY KEY (`User_id`,`Session_id`) USING BTREE,
  KEY `se__id` (`Session_id`),
  KEY `idx_Time_begin` (`Time_begin`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Append_msg
-- ----------------------------
DROP TABLE IF EXISTS `Append_msg`;
CREATE TABLE `Append_msg` (
  `Snippet_id` int DEFAULT NULL,
  `Msg_id` int DEFAULT NULL,
  KEY `snipid` (`Snippet_id`),
  KEY `msgid` (`Msg_id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Append_post
-- ----------------------------
DROP TABLE IF EXISTS `Append_post`;
CREATE TABLE `Append_post` (
  `Snippet_id` int DEFAULT NULL,
  `Post_id` int DEFAULT NULL,
  KEY `snippetid` (`Snippet_id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Bottle
-- ----------------------------
DROP TABLE IF EXISTS `Bottle`;
CREATE TABLE `Bottle` (
  `Bottle_id` int NOT NULL AUTO_INCREMENT,
  `Bottle_time` text,
  `User_id_from` int NOT NULL,
  `User_id_to` int DEFAULT NULL,
  `Status` int DEFAULT NULL,
  `Bottle_content` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Bottle_id`),
  UNIQUE KEY `Bottle_id_UNIQUE` (`Bottle_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1107 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Chat_pri_session
-- ----------------------------
DROP TABLE IF EXISTS `Chat_pri_session`;
CREATE TABLE `Chat_pri_session` (
  `Session_pri_id` int NOT NULL,
  `Pending_flag` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Blacklist_flag` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`Session_pri_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Chat_session
-- ----------------------------
DROP TABLE IF EXISTS `Chat_session`;
CREATE TABLE `Chat_session` (
  `Session_id` int NOT NULL,
  `Chat_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`Session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Chat_user
-- ----------------------------
DROP TABLE IF EXISTS `Chat_user`;
CREATE TABLE `Chat_user` (
  `User_id` int NOT NULL AUTO_INCREMENT,
  `User_name` varchar(255) NOT NULL,
  `User_password` varchar(255) NOT NULL,
  `Avator` varchar(255) DEFAULT NULL,
  `Email` varchar(255) NOT NULL,
  `Chatbot_flag` int DEFAULT '0',
  `Status` varchar(6) DEFAULT 'online',
  PRIMARY KEY (`User_id`),
  KEY `User_name` (`User_name`),
  KEY `idx_User_name` (`User_name`)
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Contain
-- ----------------------------
DROP TABLE IF EXISTS `Contain`;
CREATE TABLE `Contain` (
  `Msg_id` int NOT NULL,
  `Session_id` int NOT NULL,
  PRIMARY KEY (`Session_id`,`Msg_id`),
  KEY `Msg_id` (`Msg_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Joined
-- ----------------------------
DROP TABLE IF EXISTS `Joined`;
CREATE TABLE `Joined` (
  `User_id` int NOT NULL,
  `Session_id` int NOT NULL,
  `Time_begin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Time_end` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`User_id`,`Session_id`) USING BTREE,
  KEY `seid` (`Session_id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Joined_pri
-- ----------------------------
DROP TABLE IF EXISTS `Joined_pri`;
CREATE TABLE `Joined_pri` (
  `User1_id` int NOT NULL,
  `User2_id` int NOT NULL,
  `Session_pri_id` int DEFAULT NULL,
  `Time_begin` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Time_end` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`User1_id`,`User2_id`) USING BTREE,
  KEY `user2` (`User2_id`),
  KEY `session_pri` (`Session_pri_id`),
  CONSTRAINT `session_pri` FOREIGN KEY (`Session_pri_id`) REFERENCES `Chat_pri_session` (`Session_pri_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Msg
-- ----------------------------
DROP TABLE IF EXISTS `Msg`;
CREATE TABLE `Msg` (
  `Msg_id` int NOT NULL AUTO_INCREMENT,
  `Msg_time` text,
  `Msg_status` varchar(7) DEFAULT NULL,
  `Msg_sender` int DEFAULT NULL,
  `Msg_content` varchar(265) DEFAULT NULL,
  PRIMARY KEY (`Msg_id`),
  KEY `the_sender` (`Msg_sender`),
  KEY `idx_Msg_Status` (`Msg_status`),
  KEY `idx_Content` (`Msg_content`)
) ENGINE=InnoDB AUTO_INCREMENT=1035 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Post
-- ----------------------------
DROP TABLE IF EXISTS `Post`;
CREATE TABLE `Post` (
  `Post_id` int NOT NULL AUTO_INCREMENT,
  `Post_sender` int DEFAULT NULL,
  `Publish_time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Post_content` varchar(12000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`Post_id`),
  KEY `sender` (`Post_sender`)
) ENGINE=InnoDB AUTO_INCREMENT=1201 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Post_Like
-- ----------------------------
DROP TABLE IF EXISTS `Post_Like`;
CREATE TABLE `Post_Like` (
  `User_id` int NOT NULL,
  `Post_id` int NOT NULL,
  `Like_amount` int DEFAULT NULL,
  PRIMARY KEY (`User_id`,`Post_id`),
  KEY `post` (`Post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Product
-- ----------------------------
DROP TABLE IF EXISTS `Product`;
CREATE TABLE `Product` (
  `Product_id` int NOT NULL AUTO_INCREMENT,
  `User_id` int DEFAULT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `Price` int DEFAULT NULL,
  `Photo_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Product_id`),
  KEY `userid` (`User_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1007 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Table structure for Snippet
-- ----------------------------
DROP TABLE IF EXISTS `Snippet`;
CREATE TABLE `Snippet` (
  `Snippet_id` int NOT NULL AUTO_INCREMENT,
  `Snippet_link` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Snippet_content` varchar(12000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`Snippet_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=1229 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-------------------------------------------------------------------
-- All the corresponding foreign keys, using alter tables.
-- Admin
ALTER TABLE `Admin` ADD CONSTRAINT `se_id` FOREIGN KEY `Session_id` REFERENCES `Chat_session` (`Session_id`);
ALTER TABLE `Admin` ADD CONSTRAINT `usid_` FOREIGN KEY `User_id` REFERENCES `Chat_user` (`User_id`);

-- Append_msg
ALTER TABLE `Append_msg` ADD CONSTRAINT `msgid` FOREIGN KEY `Msg_id` REFERENCES `Msg` (`Msg_id`);
ALTER TABLE `Append_msg` ADD CONSTRAINT `snippet` FOREIGN KEY `Snippet_id` REFERENCES `Snippet` (`Snippet_id`);

-- Append_post
ALTER TABLE `Append_post` ADD CONSTRAINT `snippetid` FOREIGN KEY `Snippet_id` REFERENCES `Snippet` (`Snippet_id`);

-- Contain
ALTER TABLE `Contain` ADD CONSTRAINT `Contain_ibfk_1` FOREIGN KEY `Session_id` REFERENCES `Chat_session` (`Session_id`);
ALTER TABLE `Contain` ADD CONSTRAINT `Contain_ibfk_2` FOREIGN KEY `Msg_id` REFERENCES `Msg` (`Msg_id`)

-- Joined
ALTER TABLE `Joined` ADD CONSTRAINT `seid` FOREIGN KEY `Session_id` REFERENCES `Chat_session` (`Session_id`);
ALTER TABLE `Joined` ADD CONSTRAINT `user___id` FOREIGN KEY `User_id` REFERENCES `Chat_user` (`User_id`);

-- Joined_pri
ALTER TABLE `Joined_pri` ADD CONSTRAINT `user1` FOREIGN KEY `User1_id` REFERENCES `Chat_user` (`User_id`);
ALTER TABLE `Joined_pri` ADD CONSTRAINT `user2` FOREIGN KEY `User2_id` REFERENCES `Chat_user` (`User_id`)

-- Msg
ALTER TABLE `Msg` ADD CONSTRAINT `the_sender` FOREIGN KEY `Msg_sender` REFERENCES `Chat_user` (`User_id`);

-- Post
ALTER TABLE `Post` ADD CONSTRAINT `sender` FOREIGN KEY `Post_sender` REFERENCES `Chat_user` (`User_id`);

-- Post_like
ALTER TABLE `Post_like` ADD CONSTRAINT `post` FOREIGN KEY `Post_id` REFERENCES `Post` (`Post_id`);
ALTER TABLE `Post_like` ADD CONSTRAINT `user` FOREIGN KEY `User_id` REFERENCES `Chat_user` (`User_id`);

-- Product
ALTER TABLE `Product` ADD CONSTRAINT `userid` FOREIGN KEY `User_id` REFERENCES `Chat_user` (`User_id`);
-- ----------------------------
-- Procedure structure for FetchSessionList
-- ----------------------------
DROP PROCEDURE IF EXISTS `FetchSessionList`;
delimiter ;;
CREATE PROCEDURE `FetchSessionList`(IN User_id_input int)
BEGIN
    DROP TEMPORARY TABLE IF EXISTS _procedure_result_tmp;
    CREATE TEMPORARY TABLE _procedure_result_tmp 
        (
        SELECT Joined.Session_id 
        FROM Joined 
        WHERE Joined.User_id = User_id_input
        )
        UNION
        (
        SELECT Joined_pri.Session_pri_id 
        FROM Joined_pri 
        WHERE Joined_pri.User1_id = User_id_input OR Joined_pri.User2_id = User_id_input
        );
END
;;
delimiter ;

-- ----------------------------
-- Procedure structure for keywordfind
-- ----------------------------
DROP PROCEDURE IF EXISTS `keywordfind`;
delimiter ;;
CREATE PROCEDURE `keywordfind`(IN input VARCHAR(10),id INT)
BEGIN
    DROP TEMPORARY TABLE IF EXISTS _procedure_result_tmp;
    CREATE TEMPORARY TABLE _procedure_result_tmp 
        
        (SELECT Chat_user.User_name 
    FROM Chat_user 
    WHERE Chat_user.User_name  LIKE  input AND Chat_user.User_id=id )
        
        UNION
        (
        SELECT Msg.Msg_content
        FROM Msg
        WHERE   Msg.Msg_content LIKE  input AND Msg.Msg_sender=id
        );
END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
```



### Problem 3:

![image-20220803134313771](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-184313.png)

#### Fixed:

To add variety, we change **both two queries:**

```sql
-- Query 1 Keyword Search for chat user name, message content, and chat session name using the keyword ‘L’
(
 SELECT Chat_user.User_name 
 FROM Chat_user 
 WHERE Chat_user.User_name  LIKE  '%L%' 
 )
 UNION
 (
 SELECT Msg.Msg_content
 FROM Msg
 WHERE   Msg.Msg_content LIKE  '%L%'
 )
  UNION
  (
  SELECT Chat_session.Chat_name
 FROM Chat_session
 WHERE   Chat_session.Chat_name LIKE  '%L%'
  )
```

And we present the **top 15** results from **Query 1**:

![image-20220803134333062](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-184333.png)

```sql
-- Query 2 Count the bottle and post message numbers in the past year
SELECT * FROM
(
 SELECT MT3 AS Year_Bottle, SUM(Bottle_Num) 
    FROM (
  SELECT Year(Bottle_time) AS MT3, COUNT(*) 
        AS Bottle_Num 
        FROM wechat.Bottle 
        GROUP BY Bottle_time
        ) 
AS TEMP3 
GROUP BY TEMP3.MT3
)
AS TTT3
LEFT OUTER JOIN
(
SELECT MT2 AS Year_Post, SUM(Post_Num) 
FROM (
 SELECT Year(Publish_time) AS MT2, COUNT(*) AS Post_Num 
    FROM wechat.Post 
    GROUP BY Publish_time
    ) 
AS TEMP1 
GROUP BY TEMP1.MT2)
AS TTT2
ON Year_Bottle = Year_Post
LEFT OUTER JOIN
(
SELECT MT AS Year_Msg, SUM(Msg_Num) 
FROM (
 SELECT Year(Msg_time) AS MT, COUNT(*) AS Msg_Num 
    FROM wechat.Msg 
    GROUP BY Msg_Time
    ) 
AS TEMP2 
GROUP BY TEMP2.MT
)
AS TTT1
ON Year_Bottle = Year_Msg
```

And we present the **top 5** results from **Query 2** (because the output does not have 15 results):

![image-20220803134355849](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-184356.png)

### Problem 4:

![image-20220803134424156](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-184424.png)

#### Fixed:

We added **3** queries from our tables to show each of these have more than **1000** lines.

**Message** Table

![image-20220803134435154](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-184435.png)

**Bottle** Table

![image-20220803134446887](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-184447.png)

**Product** Table

![image-20220803134455274](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-184455.png)

#### Problem 5:

![image-20220803134501991](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-184502.png)

#### Fixed:

For query 1, we add **User_name, Msg_content, Chat_name** indexes.

```
###### NO ADDED INDEX

Response:

'-> Table scan on <union temporary>  (cost=0.03..4.20 rows=137) (actual time=0.001..0.018 rows=174 loops=1)\n    

-> Union materialize with deduplication  (cost=141.45..145.62 rows=137) (actual time=2.062..2.094 rows=174 loops=1)\n        

-> Filter: (Chat_user.User_name like \'%L%\')  (cost=11.25 rows=12) (actual time=0.052..0.131 rows=37 loops=1)\n            

-> Index scan on Chat_user using User_name  (cost=11.25 rows=105) (actual time=0.044..0.102 rows=105 loops=1)\n        

-> Filter: (Msg.Msg_content like \'%L%\')  (cost=106.25 rows=114) (actual time=0.036..1.067 rows=976 loops=1)\n            

-> Table scan on Msg  (cost=106.25 rows=1025) (actual time=0.034..0.349 rows=1126 loops=1)\n        

-> Filter: (Chat_session.Chat_name like \'%L%\')  (cost=10.25 rows=11) (actual time=0.021..0.064 rows=56 loops=1)\n            

-> Table scan on Chat_session  (cost=10.25 rows=100) (actual time=0.020..0.033 rows=100 loops=1)\n'

###### 1. ADDED INDEX ON User_name

Response:

'-> Table scan on <union temporary>  (cost=0.03..4.20 rows=137) (actual time=0.001..0.017 rows=174 loops=1)\n    

-> Union materialize with deduplication  (cost=141.45..145.62 rows=137) (actual time=1.997..2.027 rows=174 loops=1)\n        

-> Filter: (Chat_user.User_name like \'%L%\')  (cost=11.25 rows=12) (actual time=0.040..0.089 rows=37 loops=1)\n            

-> Index scan on Chat_user using User_name  (cost=11.25 rows=105) (actual time=0.032..0.060 rows=105 loops=1)\n        

-> Filter: (Msg.Msg_content like \'%L%\')  (cost=106.25 rows=114) (actual time=0.040..1.053 rows=976 loops=1)\n            

-> Table scan on Msg  (cost=106.25 rows=1025) (actual time=0.038..0.359 rows=1126 loops=1)\n        

-> Filter: (Chat_session.Chat_name like \'%L%\')  (cost=10.25 rows=11) (actual time=0.017..0.060 rows=56 loops=1)\n            

-> Table scan on Chat_session  (cost=10.25 rows=100) (actual time=0.016..0.030 rows=100 loops=1)\n'

###### 2. ADDED INDEX ON Msg_content


Response:

'-> Table scan on <union temporary>  (cost=0.03..4.20 rows=137) (actual time=0.002..0.019 rows=174 loops=1)\n    

-> Union materialize with deduplication  (cost=141.45..145.62 rows=137) (actual time=2.704..2.737 rows=174 loops=1)\n        

-> Filter: (Chat_user.User_name like \'%L%\')  (cost=11.25 rows=12) (actual time=0.075..0.116 rows=37 loops=1)\n            

-> Index scan on Chat_user using User_name  (cost=11.25 rows=105) (actual time=0.064..0.084 rows=105 loops=1)\n        

-> Filter: (Msg.Msg_content like \'%L%\')  (cost=106.25 rows=114) (actual time=0.061..1.321 rows=976 loops=1)\n            

-> Index scan on Msg using idx_Content  (cost=106.25 rows=1025) (actual time=0.045..0.453 rows=1126 loops=1)\n        

-> Filter: (Chat_session.Chat_name like \'%L%\')  (cost=10.25 rows=11) (actual time=0.032..0.078 rows=56 loops=1)\n            

-> Table scan on Chat_session  (cost=10.25 rows=100) (actual time=0.029..0.043 rows=100 loops=1)\n'

###### 3. ADDED INDEX ON Chat_name


Response:

'-> Table scan on <union temporary>  (cost=0.03..4.20 rows=137) (actual time=0.002..0.018 rows=174 loops=1)\n    

-> Union materialize with deduplication  (cost=141.45..145.62 rows=137) (actual time=2.008..2.038 rows=174 loops=1)\n        

-> Filter: (Chat_user.User_name like \'%L%\')  (cost=11.25 rows=12) (actual time=0.047..0.119 rows=37 loops=1)\n            

-> Index scan on Chat_user using User_name  (cost=11.25 rows=105) (actual time=0.040..0.091 rows=105 loops=1)\n        

-> Filter: (Msg.Msg_content like \'%L%\')  (cost=106.25 rows=114) (actual time=0.042..1.029 rows=976 loops=1)\n            

-> Index scan on Msg using idx_Content  (cost=106.25 rows=1025) (actual time=0.026..0.342 rows=1126 loops=1)\n        

-> Filter: (Chat_session.Chat_name like \'%L%\')  (cost=10.25 rows=11) (actual time=0.026..0.067 rows=56 loops=1)\n            

-> Index scan on Chat_session using idx_Content  (cost=10.25 rows=100) (actual time=0.023..0.037 rows=100 loops=1)\n'
```



For query 2, we add **Msg_time, Publish_time, Bottle_time** indexes.

```
###### No Added Index

Response:

'-> Nested loop left join  (cost=2784.12 rows=0) (actual time=7.366..7.375 rows=5 loops=1)\n    

-> Table scan on TTT3  (cost=2.50..2.50 rows=0) (actual time=0.000..0.001 rows=5 loops=1)\n        

-> Materialize  (cost=2.50..2.50 rows=0) (actual time=2.467..2.469 rows=5 loops=1)\n            

-> Table scan on <temporary>  (actual time=0.000..0.001 rows=5 loops=1)\n                

-> Aggregate using temporary table  (actual time=2.458..2.459 rows=5 loops=1)\n                    

-> Table scan on TEMP3  (cost=2.50..2.50 rows=0) (actual time=0.000..0.053 rows=803 loops=1)\n                        

-> Materialize  (cost=2.50..2.50 rows=0) (actual time=2.059..2.178 rows=803 loops=1)\n                            

-> Table scan on <temporary>  (actual time=0.001..0.084 rows=803 loops=1)\n                                

-> Aggregate using temporary table  (actual time=1.817..1.967 rows=803 loops=1)\n                                    

-> Table scan on Bottle  (cost=112.20 rows=1107) (actual time=0.025..0.694 rows=1107 loops=1)\n    

-> Nested loop left join  (cost=27979.82 rows=0) (actual time=0.980..0.980 rows=0 loops=5)\n        

-> Index lookup on TTT2 using <auto_key0> (Year_Post=TTT3.Year_Bottle)  (actual time=0.001..0.001 rows=0 loops=5)\n            

-> Materialize  (cost=0.00..0.00 rows=0) (actual time=2.063..2.064 rows=2 loops=1)\n                

-> Table scan on <temporary>  (actual time=0.000..0.000 rows=2 loops=1)\n                    

-> Aggregate using temporary table  (actual time=2.051..2.052 rows=2 loops=1)\n                        

-> Table scan on TEMP1  (cost=2.50..2.50 rows=0) (actual time=0.000..0.061 rows=981 loops=1)\n                            

-> Materialize  (cost=2.50..2.50 rows=0) (actual time=1.579..1.720 rows=981 loops=1)\n                                

-> Table scan on <temporary>  (actual time=0.000..0.089 rows=981 loops=1)\n                                    

-> Aggregate using temporary table  (actual time=1.297..1.466 rows=981 loops=1)\n                                        

-> Table scan on Post  (cost=101.25 rows=985) (actual time=0.039..0.352 rows=1045 loops=1)\n        

-> Filter: (TTT1.Year_Msg = TTT3.Year_Bottle)  (cost=0.25..2.51 rows=10) (actual time=1.417..1.417 rows=0 loops=2)\n            

-> Index lookup on TTT1 using <auto_key0> (Year_Msg=TTT2.Year_Post)  (actual time=0.001..0.001 rows=0 loops=2)\n                

-> Materialize  (cost=0.00..0.00 rows=0) (actual time=2.830..2.831 rows=4 loops=1)\n                    

-> Table scan on <temporary>  (actual time=0.000..0.000 rows=4 loops=1)\n                        

-> Aggregate using temporary table  (actual time=2.815..2.815 rows=4 loops=1)\n                            

-> Table scan on TEMP2  (cost=2.50..2.50 rows=0) (actual time=0.000..0.068 rows=1080 loops=1)\n                                

-> Materialize  (cost=2.50..2.50 rows=0) (actual time=2.296..2.452 rows=1080 loops=1)\n                                    

-> Table scan on <temporary>  (actual time=0.001..0.122 rows=1080 loops=1)\n                                        

-> Aggregate using temporary table  (actual time=1.952..2.162 rows=1080 loops=1)\n                                            

-> Table scan on Msg  (cost=106.35 rows=1026) (actual time=0.008..0.731 rows=1127 loops=1)\n'

###### 1. ADDED INDEX ON Msg_time

Response:
														
'-> Nested loop left join  (cost=2784.12 rows=0) (actual time=7.951..7.962 rows=5 loops=1)\n   
-> Table scan on TTT3  (cost=2.50..2.50 rows=0) (actual time=0.000..0.002 rows=5 loops=1)\n        
-> Materialize  (cost=2.50..2.50 rows=0) (actual time=2.505..2.507 rows=5 loops=1)\n            
-> Table scan on <temporary>  (actual time=0.001..0.001 rows=5 loops=1)\n                
-> Aggregate using temporary table  (actual time=2.483..2.484 rows=5 loops=1)\n                    
-> Table scan on TEMP3  (cost=2.50..2.50 rows=0) (actual time=0.001..0.061 rows=803 loops=1)\n                        
-> Materialize  (cost=2.50..2.50 rows=0) (actual time=1.954..2.089 rows=803 loops=1)\n                            
-> Table scan on <temporary>  (actual time=0.001..0.108 rows=803 loops=1)\n                               2.291..2.292
-> Aggregate using temporary table  (actual time=1.621..1.818 rows=803 loops=1)\n                                    
-> Table scan on Bottle  (cost=112.20 rows=1107) (actual time=0.053..0.525 rows=1107 loops=1)\n    
-> Nested loop left join  (cost=27990.05 rows=0) (actual time=1.090..1.090 rows=0 loops=5)\n        
-> Index lookup on TTT2 using <auto_key0> (Year_Post=TTT3.Year_Bottle)  (actual time=0.001..0.001 rows=0 loops=5)\n            
-> Materialize  (cost=0.00..0.00 rows=0) (actual time=3.133..3.134 rows=2 loops=1)\n                
-> Table scan on <temporary>  (actual time=0.000..0.000 rows=2 loops=1)\n                    
-> Aggregate using temporary table  (actual time=3.107..3.108 rows=2 loops=1)\n                        
-> Table scan on TEMP1  (cost=2.50..2.50 rows=0) (actual time=0.001..0.071 rows=981 loops=1)\n                            
-> Materialize  (cost=2.50..2.50 rows=0) (actual time=2.524..2.685 rows=981 loops=1)\n                                
-> Table scan on <temporary>  (actual time=0.003..0.223 rows=981 loops=1)\n                                    
-> Aggregate using temporary table  (actual time=2.037..2.354 rows=981 loops=1)\n                                        
-> Table scan on Post  (cost=101.25 rows=985) (actual time=0.072..0.542 rows=1045 loops=1)\n        
-> Filter: (TTT1.Year_Msg = TTT3.Year_Bottle)  (cost=0.25..2.52 rows=10) (actual time=1.155..1.155 rows=0 loops=2)\n            
-> Index lookup on TTT1 using <auto_key0> (Year_Msg=TTT2.Year_Post)  (actual time=0.001..0.002 rows=0 loops=2)\n                
-> Materialize  (cost=0.00..0.00 rows=0) (actual time=2.306..2.307 rows=4 loops=1)\n                    
-> Table scan on <temporary>  (actual time=0.000..0.001 rows=4 loops=1)\n                        
-> Aggregate using temporary table  (actual time=2.294..2.294 rows=4 loops=1)\n                            
-> Table scan on TEMP2  (cost=0.01..16.59 rows=1127) (actual time=0.001..0.094 rows=1080 loops=1)\n                                
-> Materialize  (cost=341.86..358.44 rows=1127) (actual time=1.643..1.837 rows=1080 loops=1)\n                                    
-> Group aggregate: count(0)  (cost=229.15 rows=1127) (actual time=0.091..1.043 rows=1080 loops=1)\n                                        
-> Index scan on Msg using Msg_time_index  (cost=116.45 rows=1127) (actual time=0.078..0.422 rows=1127 loops=1)\n'

###### 2. ADDED INDEX ON Publish_time


Response:

'-> Nested loop left join  (cost=2784.12 rows=0) (actual time=6.396..6.409 rows=5 loops=1)\n    
-> Table scan on TTT3  (cost=2.50..2.50 rows=0) (actual time=0.001..0.002 rows=5 loops=1)\n        
-> Materialize  (cost=2.50..2.50 rows=0) (actual time=2.180..2.183 rows=5 loops=1)\n            
-> Table scan on <temporary>  (actual time=0.001..0.002 rows=5 loops=1)\n                
-> Aggregate using temporary table  (actual time=2.163..2.164 rows=5 loops=1)\n                    
-> Table scan on TEMP3  (cost=2.50..2.50 rows=0) (actual time=0.000..0.131 rows=803 loops=1)\n                        
-> Materialize  (cost=2.50..2.50 rows=0) (actual time=1.618..1.820 rows=803 loops=1)\n                            
-> Table scan on <temporary>  (actual time=0.001..0.076 rows=803 loops=1)\n                                
-> Aggregate using temporary table  (actual time=1.382..1.524 rows=803 loops=1)\n                                    
-> Table scan on Bottle  (cost=112.20 rows=1107) (actual time=0.052..0.430 rows=1107 loops=1)\n    
-> Nested loop left join  (cost=27990.05 rows=0) (actual time=0.843..0.844 rows=0 loops=5)\n        
-> Index lookup on TTT2 using <auto_key0> (Year_Post=TTT3.Year_Bottle)  (actual time=0.001..0.002 rows=0 loops=5)\n            
-> Materialize  (cost=0.00..0.00 rows=0) (actual time=1.900..1.902 rows=2 loops=1)\n                
-> Table scan on <temporary>  (actual time=0.000..0.000 rows=2 loops=1)\n                    
-> Aggregate using temporary table  (actual time=1.858..1.858 rows=2 loops=1)\n                        
-> Table scan on TEMP1  (cost=0.02..14.81 rows=985) (actual time=0.001..0.069 rows=981 loops=1)\n                            
-> Materialize  (cost=298.27..313.06 rows=985) (actual time=1.342..1.502 rows=981 loops=1)\n                                
-> Group aggregate: count(0)  (cost=199.75 rows=985) (actual time=0.099..0.875 rows=981 loops=1)\n                                    
-> Index scan on Post using Publish_time_index  (cost=101.25 rows=985) (actual time=0.084..0.383 rows=1045 loops=1)\n        
-> Filter: (TTT1.Year_Msg = TTT3.Year_Bottle)  (cost=0.25..2.52 rows=10) (actual time=1.156..1.156 rows=0 loops=2)\n            
-> Index lookup on TTT1 using <auto_key0> (Year_Msg=TTT2.Year_Post)  (actual time=0.002..0.002 rows=0 loops=2)\n                
-> Materialize  (cost=0.00..0.00 rows=0) (actual time=2.308..2.309 rows=4 loops=1)\n                    
-> Table scan on <temporary>  (actual time=0.000..0.001 rows=4 loops=1)\n                        
-> Aggregate using temporary table  (actual time=2.291..2.292 rows=4 loops=1)\n                            
-> Table scan on TEMP2  (cost=0.01..16.59 rows=1127) (actual time=0.002..0.077 rows=1080 loops=1)\n                                
-> Materialize  (cost=341.86..358.44 rows=1127) (actual time=1.715..1.883 rows=1080 loops=1)\n                                    
-> Group aggregate: count(0)  (cost=229.15 rows=1127) (actual time=0.045..1.041 rows=1080 loops=1)\n                                        
-> Index scan on Msg using Msg_time_index  (cost=116.45 rows=1127) (actual time=0.041..0.433 rows=1127 loops=1)\n'

###### 3. ADDED INDEX ON Bottle_time


Response:

'-> Nested loop left join  (cost=2784.12 rows=0) (actual time=5.378..5.388 rows=5 loops=1)\n    
-> Table scan on TTT3  (cost=2.50..2.50 rows=0) (actual time=0.000..0.001 rows=5 loops=1)\n        
-> Materialize  (cost=2.50..2.50 rows=0) (actual time=1.544..1.545 rows=5 loops=1)\n            
-> Table scan on <temporary>  (actual time=0.000..0.001 rows=5 loops=1)\n                
-> Aggregate using temporary table  (actual time=1.528..1.528 rows=5 loops=1)\n                    
-> Table scan on TEMP3  (cost=0.01..16.34 rows=1107) (actual time=0.001..0.054 rows=803 loops=1)\n                        
-> Materialize  (cost=333.61..349.94 rows=1107) (actual time=1.119..1.238 rows=803 loops=1)\n                            
-> Group aggregate: count(0)  (cost=222.90 rows=1107) (actual time=0.052..0.792 rows=803 loops=1)\n                                
-> Index scan on Bottle using Bottle_time_index  (cost=112.20 rows=1107) (actual time=0.044..0.356 rows=1107 loops=1)\n    
-> Nested loop left join  (cost=27990.05 rows=0) (actual time=0.768..0.768 rows=0 loops=5)\n        
-> Index lookup on TTT2 using <auto_key0> (Year_Post=TTT3.Year_Bottle)  (actual time=0.001..0.001 rows=0 loops=5)\n            
-> Materialize  (cost=0.00..0.00 rows=0) (actual time=1.741..1.743 rows=2 loops=1)\n                
-> Table scan on <temporary>  (actual time=0.000..0.000 rows=2 loops=1)\n                    
-> Aggregate using temporary table  (actual time=1.731..1.731 rows=2 loops=1)\n                        
-> Table scan on TEMP1  (cost=0.02..14.81 rows=985) (actual time=0.001..0.066 rows=981 loops=1)\n                            
-> Materialize  (cost=298.27..313.06 rows=985) (actual time=1.234..1.381 rows=981 loops=1)\n                                
-> Group aggregate: count(0)  (cost=199.75 rows=985) (actual time=0.041..0.818 rows=981 loops=1)\n                                    
-> Index scan on Post using Publish_time_index  (cost=101.25 rows=985) (actual time=0.039..0.345 rows=1045 loops=1)\n        
-> Filter: (TTT1.Year_Msg = TTT3.Year_Bottle)  (cost=0.25..2.52 rows=10) (actual time=1.046..1.047 rows=0 loops=2)\n            
-> Index lookup on TTT1 using <auto_key0> (Year_Msg=TTT2.Year_Post)  (actual time=0.001..0.001 rows=0 loops=2)\n                
-> Materialize  (cost=0.00..0.00 rows=0) (actual time=2.091..2.091 rows=4 loops=1)\n                    
-> Table scan on <temporary>  (actual time=0.000..0.000 rows=4 loops=1)\n                        
-> Aggregate using temporary table  (actual time=2.082..2.083 rows=4 loops=1)\n                            
-> Table scan on TEMP2  (cost=0.01..16.59 rows=1127) (actual time=0.001..0.072 rows=1080 loops=1)\n                                
-> Materialize  (cost=341.86..358.44 rows=1127) (actual time=1.540..1.708 rows=1080 loops=1)\n                                    
-> Group aggregate: count(0)  (cost=229.15 rows=1127) (actual time=0.035..0.964 rows=1080 loops=1)\n                                        
-> Index scan on Msg using Msg_time_index  (cost=116.45 rows=1127) (actual time=0.032..0.395 rows=1127 loops=1)\n'
```



### Problem 6:

![image-20220803134518770](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-184519.png)

#### Fixed:

Analysis for **first** adding indexes:

Before adding indexes, the union and where operation needs to search nearly all the rows because it goes through the entire table scan.
After adding the index on chat_name, the select query starts to use the index to search tuples on Chat_user, but it obviously **does not decrease** the execution time.
After adding the index on Msg_content, the select query starts to use the index to search tuples on Msg, but it also **does not decrease** the execution time.
After adding the index on Chat_name, the select query starts to use the index to search tuples on Chat_session, but it also **does not decrease** the execution time.
Because we are adding indexes on varchar, the indexes contain a lot of characters. It can **not actually decrease** the execution time.

Analysis for **second** adding indexes:

Compared with no index, when we add a index on Msg_time, the nested loop left join time becomes **slower**, actual time from 7.366..7.375 to 7.951..7.962. This is because  nested loop left did not use index, but index will occupy more space which consume more time to execute the join operation.

However, when we Aggregate using temporary table, the actual time reduce from  2.815..2.815 to 1.621..1.818  which is much **faster** than using no index. This is because index can help accelerate the process of searching.

By contrast with different index. Adding index on Msg_time is **faster** than in Publish_time (1.621..1.818 and 2.291..2.292 respectively). This is because Aggregate using temporary table use more of attributes in Msg Table. So, index can have a more influence on accelerating the process.