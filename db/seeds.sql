USE department_db;

INSERT INTO department (department_name)
VALUES
("Sales"),
("Marketing"),
("Engineering"),
("Design"),
("Finance");

INSERT INTO role_category (role_title, role_salary, department_id)
VALUES
("Salesperson", "10000", 1),
("Marketer", "12000", 2),
("Engineer", "50000", 3),
("Designer", "15000", 4),
("Head of Finance", "14000", 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Ann", "Divine", 1, 1),
("Rav", "Divine", 2, 1),
("Tulu", "Anzana", 3, 0),
("Sana", "Karibu", 4, 2),
("Fike", "Lanet", 5, 0);