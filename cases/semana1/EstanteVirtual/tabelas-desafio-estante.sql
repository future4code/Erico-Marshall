CREATE TABLE estante_olimpiada_competicoes(
	id VARCHAR(255) PRIMARY KEY,
	competicao VARCHAR(255) NOT NULL UNIQUE,
    status VARCHAR(10) DEFAULT "aberta" NOT NULL
);

CREATE TABLE estante_olimpiada_atletas(
	id VARCHAR(255) PRIMARY KEY,
	nome VARCHAR(255) NOT NULL,
    competicao VARCHAR(255) NOT NULL,
    value FLOAT NOT NULL,
    unidade VARCHAR(1)
);

