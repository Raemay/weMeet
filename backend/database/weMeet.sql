-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema weMeet
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema weMeet
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `weMeet` DEFAULT CHARACTER SET utf8 ;
USE `weMeet` ;

-- -----------------------------------------------------
-- Table `weMeet`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weMeet`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `hobby` VARCHAR(45) NOT NULL,
  `travelers` INT NOT NULL,
  `description` VARCHAR(150) NULL,
  PRIMARY KEY (`iduser`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `weMeet`.`favorite`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weMeet`.`favorite` (
  `idfavorite` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idfavorite`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `weMeet`.`user_has_favorite`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weMeet`.`user_has_favorite` (
  `user_iduser` INT NOT NULL,
  `favorite_idfavorite` INT NOT NULL,
  PRIMARY KEY (`user_iduser`, `favorite_idfavorite`),
  INDEX `fk_user_has_favorite_favorite1_idx` (`favorite_idfavorite` ASC) VISIBLE,
  INDEX `fk_user_has_favorite_user_idx` (`user_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_favorite_user`
    FOREIGN KEY (`user_iduser`)
    REFERENCES `weMeet`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_favorite_favorite1`
    FOREIGN KEY (`favorite_idfavorite`)
    REFERENCES `weMeet`.`favorite` (`idfavorite`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
