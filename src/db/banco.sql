SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema livrosdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `livrosdb` ;

-- -----------------------------------------------------
-- Schema livrosdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `livrosdb` DEFAULT CHARACTER SET utf8 ;
SHOW WARNINGS;
USE `livrosdb` ;

-- -----------------------------------------------------
-- Table `acervo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `acervo` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `acervo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `usuario_id` INT NOT NULL,
  `livro_id` INT NOT NULL,
  `data_cadastro` DATE NOT NULL,
  `aceita_ofertas` TINYINT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `autor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `autor` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `autor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(95) NOT NULL,
  `sobrenome` VARCHAR(95) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `conservacao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `conservacao` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `conservacao` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `classificacao` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `endereco`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `endereco` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `endereco` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `logradouro` VARCHAR(200) NOT NULL,
  `complemento` VARCHAR(60) NOT NULL,
  `cidade` VARCHAR(100) NOT NULL,
  `cep` VARCHAR(8) NOT NULL,
  `estado` VARCHAR(2) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `favorito`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `favorito` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `favorito` (
  `usuario_id` INT NOT NULL,
  `livro_id` INT NOT NULL,
  PRIMARY KEY (`usuario_id`, `livro_id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `livro`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `livro` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `livro` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(100) NOT NULL,
  `paginas` INT NOT NULL,
  `edicao` INT NOT NULL,
  `genero` VARCHAR(100) NOT NULL,
  `ano_publicacao` INT NOT NULL,
  `autor_id` INT NOT NULL,
  `conservacao_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `oferta`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `oferta` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `oferta` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `preco` INT NULL,
  `aceita` TINYINT NOT NULL,
  `usuario_id` INT NOT NULL,
  `livro_id` INT NOT NULL,
  `tipo_negociacao_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `tipo_negociacao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tipo_negociacao` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `tipo_negociacao` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `usuario` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `cpf` VARCHAR(11) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `telefone` VARCHAR(11) NOT NULL,
  `endereco_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
