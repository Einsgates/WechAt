-- fetch all the sessions (Chat_session table and Chat_pri_session table) containing this user from the database

DROP PROCEDURE IF EXISTS FetchSessionList;
CREATE PROCEDURE FetchSessionList (IN User_id_input int) BEGIN
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


USE wechat;
CALL FetchSessionList(12);
select * FROM _procedure_result_tmp;
