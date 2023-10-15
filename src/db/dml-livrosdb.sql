-- DML livrosdb

-- Inserts Endereços
INSERT INTO `livrosdb`.`endereco` (`logradouro`, `complemento`, `cidade`, `cep`, `estado`)
VALUES ('Rua Ministra Francisca', 'casa 4', 'Salvador', '1234567', 'BA');
INSERT INTO `livrosdb`.`endereco` (`logradouro`, `complemento`, `cidade`, `cep`, `estado`)
VALUES ('Rua José Assis, 23', 'Apt 320', 'Salvador', '45671000', 'BA');
INSERT INTO `livrosdb`.`endereco` (`logradouro`, `complemento`, `cidade`, `cep`, `estado`)
VALUES ('Rua José de Alencar, 30', 'casa', 'Salvador', '1234567', 'BA');

-- Insert de Usuarios
INSERT INTO `livrosdb`.`usuario` (`nome`, `cpf`, `email`, `telefone`, `endereco_id`)
VALUES ('Carla Melo da Silva', '99999999999', 'carla.melo@yahoo.com.br', '71994538790', 1);
INSERT INTO `livrosdb`.`usuario` (`nome`, `cpf`, `email`, `telefone`, `endereco_id`)
VALUES ('José Pereira da Silva', '88888888888', 'jose.pereira@gmail.com', '71914323878', 2);
INSERT INTO `livrosdb`.`usuario` (`nome`, `cpf`, `email`, `telefone`, `endereco_id`)
VALUES ('Roberto Melo da Silva', '77777777777', 'roberto.melo@yahoo.com.br', '71994223534', 1);
INSERT INTO `livrosdb`.`usuario` (`nome`, `cpf`, `email`, `telefone`, `endereco_id`)
VALUES ('Fernanda Montenegro', '66666666666', 'fernanda@gmail.com', '71992227654', 3);

-- Insert Conservação
INSERT INTO `livrosdb`.`conservacao` (`classificacao`) VALUES ('Novo');
INSERT INTO `livrosdb`.`conservacao` (`classificacao`) VALUES ('Semi-novo');
INSERT INTO `livrosdb`.`conservacao` (`classificacao`) VALUES ('Ruim');

-- Insert Autor
INSERT INTO `livrosdb`.`autor` (`nome`, `sobrenome`) VALUES ('Djamila', 'Ribeiro');
INSERT INTO `livrosdb`.`autor` (`nome`, `sobrenome`) VALUES ('Jorge', 'Amado');
INSERT INTO `livrosdb`.`autor` (`nome`, `sobrenome`) VALUES ('Lima', 'Barreto');

-- Insert Livro
INSERT INTO `livrosdb`.`livro` (`titulo`, `paginas`, `edicao`, `genero`, `ano_publicacao`, `autor_id`, `conservacao_id`) VALUES ('Pequeno Manual Antrracistai', '300', '2', 'Atualidade', '2019', '1', '1');
INSERT INTO `livrosdb`.`livro` (`titulo`, `paginas`, `edicao`, `genero`, `ano_publicacao`, `autor_id`, `conservacao_id`) VALUES ('Cartas para minha avó', '220', '3', 'Biografia', '2021', '1', '2');
INSERT INTO `livrosdb`.`livro` (`titulo`, `paginas`, `edicao`, `genero`, `ano_publicacao`, `autor_id`, `conservacao_id`) VALUES ('Gabriela Cravo e Canela', '290', '1', 'Romance', '1958', '2', '3');
INSERT INTO `livrosdb`.`livro` (`titulo`, `paginas`, `edicao`, `genero`, `ano_publicacao`, `autor_id`, `conservacao_id`) VALUES ('Capitães de Areia', '350', '5', 'Romance', '1937', '2', '1');

-- Favoritar livros
INSERT INTO `livrosdb`.`favorito` (`usuario_id`, `livro_id`) VALUES ('1', '1');
INSERT INTO `livrosdb`.`favorito` (`usuario_id`, `livro_id`) VALUES ('1', '3');
INSERT INTO `livrosdb`.`favorito` (`usuario_id`, `livro_id`) VALUES ('2', '1');
INSERT INTO `livrosdb`.`favorito` (`usuario_id`, `livro_id`) VALUES ('2', '2');
INSERT INTO `livrosdb`.`favorito` (`usuario_id`, `livro_id`) VALUES ('2', '3');
INSERT INTO `livrosdb`.`favorito` (`usuario_id`, `livro_id`) VALUES ('3', '4');

-- Insert tipo de negociação
INSERT INTO `livrosdb`.`tipo_negociacao` (`tipo`) VALUES ('venda');
INSERT INTO `livrosdb`.`tipo_negociacao` (`tipo`) VALUES ('troca');

-- Inserir livros no acervo
INSERT INTO `livrosdb`.`oferta` (`preco`, `aceita`, `usuario_id`, `livro_id`, `tipo_negociacao_id`) VALUES ('30', '0', '1', '1', '1');
INSERT INTO `livrosdb`.`oferta` (`preco`, `aceita`, `usuario_id`, `livro_id`, `tipo_negociacao_id`) VALUES ('28', '1', '3', '3', '1');
INSERT INTO `livrosdb`.`oferta` (`preco`, `aceita`, `usuario_id`, `livro_id`, `tipo_negociacao_id`) VALUES ('10', '0', '1', '4', '1');

-- Inserir acervo
INSERT INTO `livrosdb`.`acervo` (`usuario_id`, `livro_id`, `data_cadastro`, `aceita_ofertas`) VALUES ('1', '3', '2023-10-18', '1');
INSERT INTO `livrosdb`.`acervo` (`usuario_id`, `livro_id`, `data_cadastro`, `aceita_ofertas`) VALUES ('3', '2', '2023-04-25', '0');
INSERT INTO `livrosdb`.`acervo` (`usuario_id`, `livro_id`, `data_cadastro`, `aceita_ofertas`) VALUES ('2', '4', '2023-08-12', '0');
INSERT INTO `livrosdb`.`acervo` (`usuario_id`, `livro_id`, `data_cadastro`, `aceita_ofertas`) VALUES ('3', '1', '2023-05-20', '1');



