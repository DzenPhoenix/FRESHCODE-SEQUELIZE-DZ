--1 - get the student with id=3

--SELECT * FROM "students" WHERE id=3;

--2 - get groups and its number of students 

/*CREATE VIEW Groups_Count AS
(
    SELECT "groups"."name" as "GroupName",COUNT("students"."id") as "CountStudents"
    FROM "groups" INNER JOIN  "students" ON ( "students"."groupId" = "groups"."id")
    GROUP BY "groups"."name"
);


SELECT * FROM Groups_Count;*/

--3 - get adults (age >= 18)

/*SELECT "students"."fullname", "students"."age" 
FROM "students" WHERE "students"."age">=18;*/

--4 update email of the student with id=3

/*UPDATE "students" SET "email" = 'newmail@mail.com'
WHERE "students"."id"=3;*/

--5 delete the student with id=3

/*DELETE FROM "students"
WHERE "students"."id"=3;*/

--6 find the group which has max number of students 

/*SELECT *
FROM "groups_count" 
WHERE "groups_count"."CountStudents" = (SELECT MAX("groups_count"."CountStudents") FROM "groups_count");*/