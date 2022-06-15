use ernestPortFolio;

CREATE TABLE contactInfo (
    id int not null auto_increment,
    email varchar(255),
    phone varchar(255),
    office varchar(255),
    PRIMARY KEY (id)
);

INSERT INTO contactinfo (email, phone, office) VALUES ('teniente<at>essi.upc.edu', ' +34 934 137 896', 'Despatx Omega-132. Jordi Girona 1-3. 08034-Barcelona');