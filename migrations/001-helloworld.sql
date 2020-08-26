-- Up
CREATE TABLE Person (
    id INTEGER PRIMARY KEY ,
    name TEXT,
    email TEXT
);

CREATE TABLE Vehicle (
    id INTEGER PRIMARY KEY,
    brand TEXT,
    model TEXT,
    ownerId INTEGER REFERENCES Person(id)
);

INSERT INTO Person (name, email) values ('bruno', 'bruno@gmail.com');
INSERT INTO Person (name, email) values ('mike', 'mike@gmail.com');
INSERT INTO Person (name, email) values ('tim', 'tim@gmail.com');

INSERT INTO Vehicle (brand, model, ownerId) values('audi', 'R8', 1);
INSERT INTO Vehicle (brand, model, ownerId) values('bmw', 'm3', 2);

-- Down

DROP TABLE Person;
DROP TABLE Vehicle;