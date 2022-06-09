use ernestPortFolio;

CREATE TABLE Scientific_output (
    id int NOT NULL auto_increment,
    title varchar(255),
    url VARCHAR(255),
    PRIMARY KEY (id)
);

INSERT INTO Scientific_output (title, url) VALUES ('Futur UPC','https://futur.upc.edu/ErnestTenienteLopez');

INSERT INTO Scientific_output (title, url) VALUES ('DBLP (Digital Bibliography & Library Project)','https://dblp.uni-trier.de/pid/t/ErnestTeniente.html');

INSERT INTO Scientific_output (title, url) VALUES ('Google Scholar','https://scholar.google.es/citations?user=SFWZQNIAAAAJ&hl=en');

