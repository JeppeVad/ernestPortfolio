CREATE DATABASE ernestPortfolio;
use ernestPortFolio;
create table ernestProjects (
    id int NOT NULL auto_increment,
    title varchar(255),
    projectLink VARCHAR(255),
    PRIMARY KEY (id)
);
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


INSERT INTO ernestProjects (title, projectLink) VALUES ("IRIS", "https://inlab.fib.upc.edu/es/iris");

INSERT INTO ernestProjects (title, projectLink) VALUES ("TINTIN", "https://inlab.fib.upc.edu/es/tintin-tool-incremental-integrity-checking");

INSERT INTO ernestProjects (title, projectLink) VALUES ("i-3Market", "https://inlab.fib.upc.edu/es/i3-market");
INSERT INTO ernestProjects (title, projectLink) VALUES ("Predictive eBoost", "https://inlab.fib.upc.edu/es/predictive-eboost");
INSERT INTO ernestProjects (title, projectLink) VALUES ("Roses UPC", "https://inlab.fib.upc.edu/es/roses-upc-sant-jordi-digital-2022");
INSERT INTO ernestProjects (title, projectLink) VALUES ("REMEDiAL", "https://inlab.fib.upc.edu/es/remedial-razonamiento-automatico-ejecucion-de-modelos-y-analisis-de-datos-partir-de-ontologias");

INSERT INTO ernestProjects (title, projectLink) VALUES ("QaaS II", "https://inlab.fib.upc.edu/es/qaas-ii-qualification-service-i-parte-dinamica");
INSERT INTO ernestProjects (title, projectLink) VALUES ("QaaS I", "https://inlab.fib.upc.edu/es/qaas-i-qualification-service-i-parte-estatica");

INSERT INTO ernestProjects (title, projectLink) VALUES ("EruoEnergest", "https://inlab.fib.upc.edu/es/euroenergest");
