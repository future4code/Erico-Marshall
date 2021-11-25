```
SET SQL_SAFE_UPDATES = 0;

SELECT * FROM Actor;
SELECT * FROM Filmes;

-- exercício 1:
ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

-- exercício 1a:
-- remove a coluna salario

-- exercício 1b:
-- muda o nome da coluna gender para sex

-- exercício 1c:
-- muda a coluna gender de 6 caracteres máximos para 255

-- exercício 1d:
ALTER TABLE Actor
CHANGE gender 
gender VARCHAR(100);

-- exercício 2a:
UPDATE Actor
SET name = "Fernandinha Montenegro"
WHERE id = 3;

-- exercício 2b:
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

-- exercício 2c:
UPDATE Actor
SET name = "Wagner Moura",
salary = 200000,
birth_date = "1976-06-27",
gender = "male",
type = "Director"
WHERE id = 5;

-- exercício 2d:
UPDATE Actor
SET name = "Rogerinho do Ingá"
WHERE name = "Piloto de Kombi";
-- resposta foi positiva, porém sem alterar nenhuma linha.

-- exercício 3:
DELETE FROM Actor
WHERE name = "Tony Ramos";

-- exercício 3a:
DELETE FROM Actor
WHERE name = "Fernandinha Montenegro";

-- exercício 3b:
DELETE FROM Actor
WHERE gender = "male" AND
salary > 1000000;

-- exercício 4a:
SELECT MAX(salary)
FROM Actor;

-- exercício 4b:
SELECT MIN(salary)
FROM Actor;

-- exercício 4c:
SELECT COUNT(*)
FROM Actor
WHERE gender = "female";

-- exercício 4d:
SELECT SUM(salary)
FROM Actor;

-- exercício 5a:
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
-- retornou a quantide de atores male e female;

-- exercício 5b:
SELECT id, name
FROM Actor
ORDER BY id DESC;

-- exercício 5c:
SELECT * FROM Actor
ORDER BY salary ASC;

-- exercício 5d:
SELECT * FROM Actor
ORDER BY salary DESC LIMIT 3;

-- exercício 5e:
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;

-- exercício 6a:
ALTER TABLE Filmes
ADD playing_limit_date DATE;

-- exercício 6b:
ALTER TABLE Filmes
CHANGE avaliacao rating FLOAT;

-- exercício 6c:
UPDATE Filmes
SET playing_limit_date = "2021-12-30"
WHERE nome = "Lisbela e o prisioneiro";

UPDATE Filmes 
SET playing_limit_date = "2020-10-04"
WHERE id = 1;

-- exercício 6d:
DELETE FROM Filmes
WHERE id = 2;

UPDATE Filmes
SET nome = "Eternos",
sinopse = "A saga dos Eternos, uma raça de seres imortais que viveram na Terra e transformaram sua história e civilização",
data_de_lancamento = "2021-11-07",
rating = 6.8,
playing_limit_date = "2021-12-27"
WHERE id = 2;
-- o id também foi deletado,  com isso, ele não acha o id 2 e não atualiza a tabela.

-- exercício 7a:
SELECT * FROM Filmes
WHERE rating > 7.5;

-- exercício 7b:
SELECT AVG(rating)
FROM Filmes;

-- exercício 7c:
SELECT * FROM Filmes
WHERE playing_limit_date >= CURDATE();

-- exercício 7d:
SELECT * FROM Filmes
WHERE data_de_lancamento > CURDATE();

-- exercício 7e:
 SELECT MAX(rating) FROM Filmes;
 
 -- exercício 7f:
 SELECT MIN(rating) FROM Filmes;
 
 -- exercício 8a:
 SELECT * FROM Filmes
 ORDER BY nome ASC;
 
 -- exercício 8b:
 SELECT * FROM Filmes
 ORDER BY nome DESC
 LIMIT 5;
 
 -- exercício 8c:
 SELECT * FROM Filmes
 ORDER BY playing_limit_date DESC
 LIMIT 3;
 
 -- exercício 8d:
 SELECT * FROM Filmes
 ORDER BY rating DESC
 LIMIT 3;
 ```