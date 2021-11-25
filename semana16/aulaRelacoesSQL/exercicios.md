```
SELECT * FROM Filmes;
SELECT * FROM Actor;

-- exercício 1:
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id INT,
    FOREIGN KEY (movie_id) REFERENCES Filmes(id)
);
-- exercício 1a:
-- uma foreign key é a maneira de poder transferir dados de uma tabela para outra através de um código de referência específico.
-- exercício 1b:
INSERT INTO Rating VALUES
(
'qwerty',
'Um dos melhores filmes do cinema brasileiro, trazendo a crítica junto à comédia embaladas por uma trilha sonora maravilhosa.',
10,
4
);
INSERT INTO Rating VALUES
(
'asdfg',
'Uma comédia clássica brasileira, a qual reflete a crítica dos papéis criados pela sociedade.',
7,
1
),
(
'zxcvb',
'Filme sessão da tarde.',
4,
3
);

-- exercício 1c:
INSERT INTO Rating VALUES
('asdw', 'esse filme não existe mas é bom', 10, 123);
-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`maryam-erico-marshall`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))
-- Não pode ser adicionado a tabela pois a foreign key utilizada não é compativel com uma id da tabela Filmes, ja que a mesma não existe.

-- exercício 1d:
ALTER TABLE Filmes
DROP COLUMN rating;

-- exercício 1e:
DELETE FROM Filmes
WHERE id = 1;
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`maryam-erico-marshall`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))
-- Não é possivel deletar ja que outra tabela está utilizado os dados dessa linha.

-- exercício 2:
CREATE TABLE MovieCast (
		movie_id INT,
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Filmes(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
-- exercício 2a:
-- essa tabela serve para relacionar um ator da tabela de atores a um filme da tabela de filmes;

-- exercício 2b:
SELECT * FROM MovieCast;
INSERT INTO MovieCast VALUES
(1, '002');
INSERT INTO Actor (id, name, salary, birth_date, gender, type) VALUES
('003', 'Selton Mello', 340000, '1972-12-30','male', 'Director');
INSERT INTO MovieCast VALUES
(4, '003');
-- exercíco 2c:
INSERT INTO MovieCast VALUES
(24, '003');
-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`maryam-erico-marshall`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))
-- Não achou a foreign key desejada, pois a mesma não existe na tabela de filmes.

-- exercício 2d:
DELETE FROM Actor
WHERE id = "002";
-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`maryam-erico-marshall`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
-- Não é possivel deletar já que está sendo utilizada como foreign key em outra tabela.

-- exercício 3:
SELECT * FROM Filmes
JOIN Rating ON Filmes.id = Rating.movie_id;

-- exercício 3a:
-- O operador ON serve para referenciar quais dados da segunda tabela referenciar em relação aos dados da primeira.alter

-- exercício 3b:
SELECT Filmes.nome, Filmes.id, Rating.rate
FROM Filmes
JOIN Rating
ON Filmes.id = Rating.movie_id;

-- exercício 4a:
SELECT Filmes.nome, Rating.rate
FROM Filmes
LEFT JOIN Rating
ON Rating.movie_id = Filmes.id;

-- exercício 4b:
SELECT Filmes.id as movie_id, Filmes.nome, MovieCast.actor_id FROM Filmes
RIGHT JOIN MovieCast
ON MovieCast.movie_id = Filmes.id;

-- exercício 4c:
SELECT AVG(Rating.rate), Filmes.id, Filmes.nome FROM Filmes
LEFT JOIN Rating ON Filmes.id = Rating.movie_id
GROUP BY (Filmes.id);
```