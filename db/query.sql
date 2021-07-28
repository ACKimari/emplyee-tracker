 SELECT * 
 FROM department 
 JOIN role_category 
 ON department.id=department_id;

 SELECT * 
 FROM role_category 
 JOIN employee 
 ON role_category.id=role_id;

SELECT *
FROM department
JOIN (role_category JOIN employee ON role_category.id=role_id) ON department.id=department_id;