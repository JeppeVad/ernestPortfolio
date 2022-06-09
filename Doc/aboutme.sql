use ernestPortFolio;

CREATE TABLE aboutme (
    id int not null auto_increment,
    content text,
    publishWhere varchar(255),
    PRIMARY KEY (id)
);

INSERT INTO aboutme (content, publishWhere) VALUES ('some lorem ipsum text', 'homepage');
INSERT INTO aboutme (content, publishWhere) VALUES ('some more detailed lorem ipsum text for the about me page', 'aboutpage');