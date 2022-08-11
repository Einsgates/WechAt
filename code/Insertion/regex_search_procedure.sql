DROP PROCEDURE IF EXISTS keywordfind;
CREATE PROCEDURE keywordfind (IN input VARCHAR(10)) BEGIN
    DROP TEMPORARY TABLE IF EXISTS _procedure_result_tmp;
    CREATE TEMPORARY TABLE _procedure_result_tmp 
        
        (SELECT Chat_user.User_name 
    FROM Chat_user 
    WHERE Chat_user.User_name  LIKE '%' || input || '%'
        
        UNION
        (
        SELECT Msg.Msg_content
        FROM Msg
        WHERE   Msg.Msg_content LIKE '%' || input || '%'
        );
END

USE wechat;
CALL keywordfind('oring');
select * FROM _procedure_result_tmp;
