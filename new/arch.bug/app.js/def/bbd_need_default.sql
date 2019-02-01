-- phpMyAdmin SQL Dump
-- version 4.4.10
-- http://www.phpmyadmin.net
--
-- Client :  localhost:8889
-- Généré le :  Ven 25 Janvier 2019 à 01:46
-- Version du serveur :  5.5.42
-- Version de PHP :  5.6.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `adonner`
--

-- --------------------------------------------------------

--
-- Structure de la table `bdd_need`
--

CREATE TABLE `bdd_need` (
  `id` text,
  `localisation` text,
  `lat` varchar(255) DEFAULT NULL,
  `lon` varchar(255) DEFAULT NULL,
  `quantity` varchar(255) DEFAULT NULL,
  `object` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `bdd_need`
--

INSERT INTO `bdd_need` (`id`, `localisation`, `lat`, `lon`, `quantity`, `object`) VALUES
('lhr', 'gueux', '49.248466', '3.909930000000031', ' 45 ', ' reims '),
