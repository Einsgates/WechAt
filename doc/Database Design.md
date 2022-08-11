# Database Design

[TOC]

## Screenshot of the GCP Connection

<img src="http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-001108.png" alt="image-20220802191107966" style="zoom:50%;" />

<img src="http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-001442.png" alt="image-20220802191441600" style="zoom:50%;" />

<img src="http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-001555.png" alt="image-20220802191554857" style="zoom:50%;" />

## Insert at least 1000 rows in a database

We have several databases with more than 1000 rows. Here are some of them:

![image-20220803120007085](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-170007.png)

![image-20220803120017054](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-170017.png)

## Database Schema CREATE DDLs

To avoid FOREIGN KEY tables created before FOREIGN KEY constraint, we made all FOREIGN KEY constraints at the end.

```sql
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
```

## The Two Complex Queries

### Query 1: Keyword Search for chat user name, message content, and chat session name using the keyword ‘L’

#### Query

```sql
-- CREATE INDEX idx_Content ON Chat_user(User_name);
-- CREATE INDEX idx_Content ON Msg(Msg_content);
-- CREATE INDEX idx_Content ON Chat_session(Chat_name);
EXPLAIN ANALYZE
(
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
);
```

#### Top 15 Results

![image-20220803120656527](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-170656.png)

#### NO ADDED INDEX

Response:

'-> Table scan on <union temporary>  (cost=0.03..4.20 rows=137) (actual time=0.001..0.018 rows=174 loops=1)\n    

-> Union materialize with deduplication  (cost=141.45..145.62 rows=137) (actual time=2.062..2.094 rows=174 loops=1)\n        

-> Filter: (Chat_user.User_name like \'%L%\')  (cost=11.25 rows=12) (actual time=0.052..0.131 rows=37 loops=1)\n            

-> Index scan on Chat_user using User_name  (cost=11.25 rows=105) (actual time=0.044..0.102 rows=105 loops=1)\n        

-> Filter: (Msg.Msg_content like \'%L%\')  (cost=106.25 rows=114) (actual time=0.036..1.067 rows=976 loops=1)\n            

-> Table scan on Msg  (cost=106.25 rows=1025) (actual time=0.034..0.349 rows=1126 loops=1)\n        

-> Filter: (Chat_session.Chat_name like \'%L%\')  (cost=10.25 rows=11) (actual time=0.021..0.064 rows=56 loops=1)\n            

-> Table scan on Chat_session  (cost=10.25 rows=100) (actual time=0.020..0.033 rows=100 loops=1)\n'

#### 1. ADDED INDEX ON User_name

Response:

'-> Table scan on <union temporary>  (cost=0.03..4.20 rows=137) (actual time=0.001..0.017 rows=174 loops=1)\n    

-> Union materialize with deduplication  (cost=141.45..145.62 rows=137) (actual time=1.997..2.027 rows=174 loops=1)\n        

-> Filter: (Chat_user.User_name like \'%L%\')  (cost=11.25 rows=12) (actual time=0.040..0.089 rows=37 loops=1)\n            

-> Index scan on Chat_user using User_name  (cost=11.25 rows=105) (actual time=0.032..0.060 rows=105 loops=1)\n        

-> Filter: (Msg.Msg_content like \'%L%\')  (cost=106.25 rows=114) (actual time=0.040..1.053 rows=976 loops=1)\n            

-> Table scan on Msg  (cost=106.25 rows=1025) (actual time=0.038..0.359 rows=1126 loops=1)\n        

-> Filter: (Chat_session.Chat_name like \'%L%\')  (cost=10.25 rows=11) (actual time=0.017..0.060 rows=56 loops=1)\n            

-> Table scan on Chat_session  (cost=10.25 rows=100) (actual time=0.016..0.030 rows=100 loops=1)\n'

#### 2. ADDED INDEX ON Msg_content


Response:

'-> Table scan on <union temporary>  (cost=0.03..4.20 rows=137) (actual time=0.002..0.019 rows=174 loops=1)\n    

-> Union materialize with deduplication  (cost=141.45..145.62 rows=137) (actual time=2.704..2.737 rows=174 loops=1)\n        

-> Filter: (Chat_user.User_name like \'%L%\')  (cost=11.25 rows=12) (actual time=0.075..0.116 rows=37 loops=1)\n            

-> Index scan on Chat_user using User_name  (cost=11.25 rows=105) (actual time=0.064..0.084 rows=105 loops=1)\n        

-> Filter: (Msg.Msg_content like \'%L%\')  (cost=106.25 rows=114) (actual time=0.061..1.321 rows=976 loops=1)\n            

-> Index scan on Msg using idx_Content  (cost=106.25 rows=1025) (actual time=0.045..0.453 rows=1126 loops=1)\n        

-> Filter: (Chat_session.Chat_name like \'%L%\')  (cost=10.25 rows=11) (actual time=0.032..0.078 rows=56 loops=1)\n            

-> Table scan on Chat_session  (cost=10.25 rows=100) (actual time=0.029..0.043 rows=100 loops=1)\n'

#### 3. ADDED INDEX ON Chat_name


Response:

'-> Table scan on <union temporary>  (cost=0.03..4.20 rows=137) (actual time=0.002..0.018 rows=174 loops=1)\n    

-> Union materialize with deduplication  (cost=141.45..145.62 rows=137) (actual time=2.008..2.038 rows=174 loops=1)\n        

-> Filter: (Chat_user.User_name like \'%L%\')  (cost=11.25 rows=12) (actual time=0.047..0.119 rows=37 loops=1)\n            

-> Index scan on Chat_user using User_name  (cost=11.25 rows=105) (actual time=0.040..0.091 rows=105 loops=1)\n        

-> Filter: (Msg.Msg_content like \'%L%\')  (cost=106.25 rows=114) (actual time=0.042..1.029 rows=976 loops=1)\n            

-> Index scan on Msg using idx_Content  (cost=106.25 rows=1025) (actual time=0.026..0.342 rows=1126 loops=1)\n        

-> Filter: (Chat_session.Chat_name like \'%L%\')  (cost=10.25 rows=11) (actual time=0.026..0.067 rows=56 loops=1)\n            

-> Index scan on Chat_session using idx_Content  (cost=10.25 rows=100) (actual time=0.023..0.037 rows=100 loops=1)\n'

#### Analysis

Before adding indexes, the union and where operation needs to search nearly all the rows because it goes through the entire table scan.
After adding the index on chat_name, the select query starts to use the index to search tuples on Chat_user, but it obviously does not decrease the execution time.

After adding the index on Msg_content, the select query starts to use the index to search tuples on Msg, but it also does not decrease the execution time.
After adding the index on Chat_name, the select query starts to use the index to search tuples on Chat_session, but it also does not decrease the execution time.

Because we are adding indexes on varchar, the indexes contain a lot of characters. It can not actually decrease the execution time.

### Query 2: Count the bottle and post message numbers in the past year

#### Query

```sql
-- CREATE INDEX Msg_time_index ON Msg(Msg_time);
-- CREATE INDEX Publish_time_index ON Post(Publish_time);
-- CREATE INDEX Bottle_time_index ON Bottle(Bottle_time);
-- EXPLAIN
-- (
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
-- );
```

#### Top 15 Results

![image-20220803123952015](http://jacklovespictures.oss-cn-beijing.aliyuncs.com/2022-08-03-173952.png)

#### No Added Index

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

#### 1. ADDED INDEX ON Msg_time

Response:

'-> Nested loop left join  (cost=2784.12 rows=0) (actual time=7.951..7.962 rows=5 loops=1)\n   
-> Table scan on TTT3  (cost=2.50..2.50 rows=0) (actual time=0.000..0.002 rows=5 loops=1)\n        
-> Materialize  (cost=2.50..2.50 rows=0) (actual time=2.505..2.507 rows=5 loops=1)\n            
-> Table scan on <temporary>  (actual time=0.001..0.001 rows=5 loops=1)\n                
-> Aggregate using temporary table  (actual time=2.483..2.484 rows=5 loops=1)\n                    
-> Table scan on TEMP3  (cost=2.50..2.50 rows=0) (actual time=0.001..0.061 rows=803 loops=1)\n                        
-> Materialize  (cost=2.50..2.50 rows=0) (actual time=1.954..2.089 rows=803 loops=1)\n                            
-> Table scan on <temporary>  (actual time=0.001..0.108 rows=803 loops=1)\n                                
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

#### 2. ADDED INDEX ON Publish_time


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

#### 3. ADDED INDEX ON Bottle_time


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

#### Analysis

Compared with no index, when we add a index on Msg_time, the nested loop left join time becomes slower, actual time from 7.366..7.375 to 7.951..7.962. This is because nested loop left did not use index, but index will occupy more space which consume more time to execute the join operation.

However, when we Aggregate using temporary table, the actual time reduce from 2.815..2.815 to 1.621..1.818 which is much faster than using no index. This is because index can help accelerate the process of searching.

By contrast with different index. Adding index on Msg_time is faster than in Publish_time (1.621..1.818 and 2.291..2.292 respectively). This is because Aggregate using temporary table use more of attributes in Msg Table. So, index can have a more influence on accelerating the process.
