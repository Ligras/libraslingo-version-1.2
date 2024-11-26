# libraslingo_LTP_Spring_JPA

CREATE DATABASE libraslingoBDD;
USE libraslingoBDD;
CREATE TABLE Jogador (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
);
select * from Jogador;


# CODIGO DO BDD