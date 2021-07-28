 SELECT * 
 FROM department 
 JOIN role_category 
 ON department.id=department_id;

 SELECT * 
 FROM role_category 
 JOIN employee 
 ON role_category.id=role_id;

--  SELECT * 
--  FROM department, role_category
--  JOIN role_category, employee  
--  ON department.id=department_id, role_category.id=role_id;