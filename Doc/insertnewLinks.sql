use ernestPortFolio;

CREATE TABLE Scientific_output (
    id int NOT NULL auto_increment,
    title varchar(255),
    url VARCHAR(255),
    PRIMARY KEY (id)
);
CREATE TABLE Areas_of_Expertise (
    id int NOT NULL auto_increment,
    title varchar(255),
    url VARCHAR(255),
    PRIMARY KEY (id)
);

INSERT INTO Areas_of_expertise (title, url) VALUES ('Service and business process engineering', 'https://imp.upc.edu/en/area-expertesa/enginyeria-de-serveis-i-de-processos-de-negoci');

INSERT INTO Areas_of_expertise (title, url) VALUES ('Ontologies and information modelling', 'https://imp.upc.edu/en/area-expertesa/ontologies-i-modelitzacio-de-la-informacio');
INSERT INTO Areas_of_expertise (title, url) VALUES ('Smart Cities', 'https://imp.upc.edu/en/area-expertesa/smart-cities');


INSERT INTO Scientific_output (title, url) VALUES ('Futur UPC','https://futur.upc.edu/ErnestTenienteLopez');

INSERT INTO Scientific_output (title, url) VALUES ('DBLP (Digital Bibliography & Library Project)','https://dblp.uni-trier.de/pid/t/ErnestTeniente.html');

INSERT INTO Scientific_output (title, url) VALUES ('Google Scholar','https://scholar.google.es/citations?user=SFWZQNIAAAAJ&hl=en');

