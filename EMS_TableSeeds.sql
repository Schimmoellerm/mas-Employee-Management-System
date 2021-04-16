Insert into departmentTable
    (id, name)
VALUES
    (1, "Production"),
    (2, "Process"),
    (3, "EHS"),
    (4, "Quality"),
    (5, "Maintenance");

Insert into roleTable
    (id, title, salary, department_id)
VALUES
    (1, "Production Manager", 80000.00, 1),
    (2, "Supervisor", 60000.00, 1),
    (3, "Process Manager", 80000.00, 2),
    (4, "Process Engineer", 70000.00, 2),
    (5, "EHS Manager", 80000.00, 3),
    (6, "EHS Coordinator", 60000.00, 3),
    (7, "Quality Manager", 80000.00, 4),
    (8, "Quality Engineer", 70000.00, 4),
    (9, "Maintenance Manager", 80000.00, 5),
    (10, "Maintenance Technitian", 60000.00, 5),
    (11, "Plant Manager", 100000.00, 1);

Insert into employeeTable
    (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, "Brandy", "Roberts", 1, 10),
    (2, "Thom", "Nye", 2, 1),
    (3, "Jon", "Hein", 2, 1),
    (4, "Joe", "Lortz", 3, 10),
    (5, "Jason", "Zender", 4, 4),
    (6, "Cody", "Caldwell", 4, 4),
    (7, "Andy", "Shepherd", 5, null),
    (8, "Mitch", "Schimmoeller", 6, 7),
    (9, "Doug", "Payne", 7, 10),
    (10, "Robbie", "Ratliff", 11, null),
    (11, "Erica", "Agee", 8, 9),
    (12, "Angela", "Feliciano", 8, 9),
    (13, "Jerry", "Loper", 9, 10),
    (14, "Jim", "Robertson", 10, 13),
    (15, "Mark", "Prater", 10, 13);