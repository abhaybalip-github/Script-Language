-- sql - Cases
CREATE TABLE Test(
    id int,
    user char(10),
    lev int
);
INSERT INTO Test VALUES(10,"user 1",0);
INSERT INTO Test VALUES(20,"user 2",1);
INSERT INTO Test VALUES(30,"user 3",1);
INSERT INTO Test VALUES(40,"user 4",2);
INSERT INTO Test VALUES(50,"user 5",2);
INSERT INTO Test VALUES(60,"user 6",2);
INSERT Into Test(id,user) value(70,"user 7")

SELECT * FROM Test;

SELECT id,user,
CASE
    when lev = 0 then "Level is 0"
    when lev >0 then "level is >0"
    else "error value !"
END AS 'case statement'
FROM Test;

DROP TABLE Test;