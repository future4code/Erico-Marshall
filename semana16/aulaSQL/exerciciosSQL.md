```
-- exercício 1
CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR(6) NOT NULL
);

SHOW databases;
-- mostrou a minha database

SHOW TABLES;
-- mostrou minhas tabelas

DESCRIBE Actor;
-- mostra os campos e seus respectivos tipos de preenchimento

-- exercício 2:
INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES(
"001",
"Tony Ramos",
400000,
"1948-08-25",
"male"
);

-- exercício 2a:
INSERT INTO Actor
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);

-- exercício 2b:
INSERT INTO Actor
VALUES(
"002",
"Nicolas Cage",
40,
"1964-01-07",
"male"
);
-- da erro por ser um valor duplicado em algo Unique Key

-- exercício 2c:
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
-- da erro pois a contagem de colunas não equivale aos valores passados

-- exercício 2d:
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
-- da erro pois falta preencher o campo "nome"

-- exercício 2e:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
-- diz que há um erro de valor incorreto para birth_date, alegando ser 1950

-- exercício 2f
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

-- exercício 3:
SELECT * FROM Actor;

SELECT id, salary FROM Actor;

SELECT id, name from Actor
WHERE gender = "male";

-- exercício 3a:
SELECT * FROM Actor
WHERE gender = "female";

-- exercício 3b:
SELECT salary FROM Actor
WHERE name = "Tony Ramos";

-- exercício 3c:
SELECT * FROM Actor
WHERE gender = "invalid";
-- retprma a tabela vazia pois nenhum dado possui gender como invalid

-- exercício 3d:
SELECT id, name, salary FROM Actor
WHERE salary < 500000;

-- exercício 3e:
SELECT id, nome from Actor WHERE id = "002";
-- retorna o erro pois está escrito "nome" e não "name"
SELECT id, name from Actor WHERE id = "002";

-- exercício 4:
SELECT * from Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
-- exercício 4a:
-- Buscamos todas as informações da tabela Actor onde prioritariamente o name comece por A ou J e após,
-- que tenha o salário acima de 300.000

-- exercício 4b:
SELECT * from Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;

-- exercício 4c:
SELECT * from Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

-- exercício 4d:
SELECT * from Actor
WHERE (name LIKE "%a%" OR name LIKE "%A%"
OR name LIKE "%g%" OR name LIKE "%G%")
AND salary bETWEEN 350000 AND 900000;

-- exercício 5a:
CREATE TABLE Filmes (
id INT PRIMARY KEY,
nome VARCHAR(255) NOT NULL,
sinopse TEXT NOT NULL,
data_de_lancamento DATE NOT NULL,
avaliacao INT NOT NULL
);

-- exercício 5b:
INSERT INTO Filmes 
VALUES (
"001",
"Se eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);

-- exercício 5c:
INSERT INTO Filmes
VALUES (
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);

-- exercício 5d:
INSERT INTO Filmes
VALUES (
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);

-- exercício 5e:
INSERT INTO Filmes
VALUES (
"004",
"Lisbela e o prisioneiro",
"Lisbela é uma jovem que adora ir ao cinema. Leléu é um vigarista que viaja de cidade em cidade vendendo todo tipo de coisas e se apresentando como Mestre de Cerimônias para alguns números cafonas, como a mulher que se transforma em gorila. Ele se envolve com Inaura, uma mulher bonita e sexy que por acaso é a esposa do assassino mais assustador da área. O assassino fica sabendo do caso da esposa e persegue Leléu, que deve partir às pressas. Em outra cidade, ele conhece e se apaixona instantaneamente por Lisbela, que está noiva de Douglas, um caipira que se esforça para se passar por um cosmopolita carioca.",
"2003-08-22",
10
);

-- exercício 6a:
SELECT id, nome, avaliacao FROM Filmes
WHERE id = 4;

-- exercício 6b:
SELECT * FROM Filmes
WHERE nome = "Lisbela e o prisioneiro";

-- exercício 6c:
SELECT id, nome, sinopse FROM Filmes
WHERE Avaliacao >= 7;

-- exercício 7a:
SELECT * FROM Filmes
WHERE nome LIKE "%vida%";

-- exercício 7b:
SELECT * FROM Filmes
WHERE (nome LIKE "%prisioneiro%") OR
sinopse LIKE "%prisioneiro%";

-- exercício 7c:
SELECT * FROM Filmes
WHERE data_de_lancamento < "2021-11-22";

-- exercício 7d:
SELECT * FROM Filmes
WHERE data_de_lancamento < "2021-11-22" 
AND (sinopse LIKE "%prisioneiro%" or nome LIKE "%prisioneiro%") 
AND Avaliacao > 8;
```