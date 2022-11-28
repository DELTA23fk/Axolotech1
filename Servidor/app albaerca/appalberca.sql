-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 19, 2022 at 12:35 AM
-- Server version: 5.7.24
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `appalberca`
--

-- --------------------------------------------------------

--
-- Table structure for table `alarma`
--

CREATE TABLE `alarma` (
  `id` int(12) NOT NULL,
  `hora` varchar(12) NOT NULL,
  `fecha` varchar(25) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `idAlberca` int(12) DEFAULT NULL,
  `idBomba` int(12) DEFAULT NULL,
  `idNivelAgua` int(12) DEFAULT NULL,
  `idTemperatura` int(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `alarma`
--

INSERT INTO `alarma` (`id`, `hora`, `fecha`, `descripcion`, `idAlberca`, `idBomba`, `idNivelAgua`, `idTemperatura`) VALUES
(1, '12:00', '26/12/93.', 'dfjsdjdhfjdhjfdhjhjd', 1, NULL, 4, NULL),
(4, '12:00', '26/12/93.', 'dfjsdjdhfjdhjfdhjhjd', 1, NULL, 4, NULL),
(6, '12:00', '26/12/93.', 'dfjsdjdhfjdhjfdhjhjd', 1, NULL, 4, NULL),
(300, '1s:z', '26/s2/z3.', '  zzzz', 1, NULL, 4, NULL),
(1232456, '12:00', '26/12/93.', 'dfjsdjdhfjdhjfdhjhjd', 1, NULL, 4, NULL),
(1232457, '12:33:42', '18/Noviembre/2022', '   zzzz', 1, NULL, 4, NULL),
(1232458, '13:20:36', '18/Noviembre/2022', ' dfjsdjdhfjdhjfdhjhjd', 1, NULL, 4, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `alberca`
--

CREATE TABLE `alberca` (
  `id` int(12) NOT NULL,
  `ancho` float NOT NULL,
  `largo` float NOT NULL,
  `profundidad` float NOT NULL,
  `dueño` varchar(50) NOT NULL,
  `ubicacion` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `alberca`
--

INSERT INTO `alberca` (`id`, `ancho`, `largo`, `profundidad`, `dueño`, `ubicacion`) VALUES
(1, 222, 222, 22, 'wwwwwwwwwww', 'ewew'),
(2, 222, 222, 22, 'wwwwwwwwwww', 'ewew'),
(3, 222, 222, 222, 'c', 'b'),
(4, 222, 222, 222, 'c', 'b'),
(5, 222, 222, 222, 'c', 'b'),
(6, 222, 222, 222, 'c', 'b');

-- --------------------------------------------------------

--
-- Table structure for table `bomba`
--

CREATE TABLE `bomba` (
  `id` int(12) NOT NULL,
  `estado` varchar(30) NOT NULL,
  `funcionamiento` varchar(40) NOT NULL,
  `idAlberca` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bomba`
--

INSERT INTO `bomba` (`id`, `estado`, `funcionamiento`, `idAlberca`) VALUES
(1, 'dfjsdfnmsdn', 'dfmsd,nfmdn', 1),
(2, 'dfjsdfnmsdn', 'dfmsd,nfmdn', 1),
(3, 'casa', 'chacha', 1),
(4, 'casa', 'chacha', 1),
(5, 'dfjsdfnmsdn', 'dfmsd,nfmdn', 1);

-- --------------------------------------------------------

--
-- Table structure for table `nivelagua`
--

CREATE TABLE `nivelagua` (
  `id` int(12) NOT NULL,
  `hora` varchar(12) NOT NULL,
  `fecha` varchar(25) NOT NULL,
  `nivel` float NOT NULL,
  `nivelOptimo` float NOT NULL,
  `nivelMedio` float NOT NULL,
  `nivelBajo` float NOT NULL,
  `idAlberca` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nivelagua`
--

INSERT INTO `nivelagua` (`id`, `hora`, `fecha`, `nivel`, `nivelOptimo`, `nivelMedio`, `nivelBajo`, `idAlberca`) VALUES
(1, '12', '26/12/93.', 23, 23, 23, 23, 1),
(3, ' 12', '26-12-54', 23, 13, 123, 213, 1),
(4, '12', '26/12/93.', 23, 23, 23, 23, 1),
(5, '12', '-40', 23, 13, 123, 213, 1),
(6, '12', '26-12-54', 23, 13, 123, 213, 1),
(25, '13:21:23', '17/Noviembre/2022', 23, 23, 23, 23, 2),
(26, '12:33:42', '18/Noviembre/2022', 23, 23, 23, 23, 1),
(27, '12:55:10', '18/Noviembre/2022', 23, 23, 23, 23, 1),
(28, '12:55:10', '18/Noviembre/2022', 23, 23, 23, 23, 1),
(29, '13:16:24', '18/Noviembre/2022', 23, 23, 23, 23, 1),
(30, '13:20:36', '18/Noviembre/2022', 23, 23, 23, 23, 1);

-- --------------------------------------------------------

--
-- Table structure for table `temperatura`
--

CREATE TABLE `temperatura` (
  `id` int(12) NOT NULL,
  `hora` varchar(12) NOT NULL,
  `fecha` varchar(25) NOT NULL,
  `temperatura` float NOT NULL,
  `idAlberca` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `temperatura`
--

INSERT INTO `temperatura` (`id`, `hora`, `fecha`, `temperatura`, `idAlberca`) VALUES
(1, '45454', '45454', 6545, 1),
(3, '13:28:41', '17/Noviembre/2022', 11, 1),
(1212128, '1', '1', 11, 1),
(1212129, '12:33:42', '18/Noviembre/2022', 11, 1),
(1212130, '12:33:42', '18/Noviembre/2022', 11, 1),
(1212132, '12:48:44', '18/Noviembre/2022', 6545, 1),
(1212133, '12:55:10', '18/Noviembre/2022', 11, 1),
(1212135, '12:55:10', '18/Noviembre/2022', 11, 1),
(1212136, '12:55:10', '18/Noviembre/2022', 11, 1),
(1212137, '12:55:10', '18/Noviembre/2022', 11, 1),
(1212138, '12:55:10', '18/Noviembre/2022', 11, 1),
(1212139, '13:13:9', '18/Noviembre/2022', 11, 1),
(1212140, '13:18:15', '18/Noviembre/2022', 6545, 1),
(1212141, '13:20:36', '18/Noviembre/2022', 6545, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alarma`
--
ALTER TABLE `alarma`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idAlberca` (`idAlberca`),
  ADD KEY `idNivelAgua` (`idNivelAgua`),
  ADD KEY `idTemperatura` (`idTemperatura`);

--
-- Indexes for table `alberca`
--
ALTER TABLE `alberca`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bomba`
--
ALTER TABLE `bomba`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idAlberca` (`idAlberca`);

--
-- Indexes for table `nivelagua`
--
ALTER TABLE `nivelagua`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idAlberca` (`idAlberca`);

--
-- Indexes for table `temperatura`
--
ALTER TABLE `temperatura`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idAlberca` (`idAlberca`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `alarma`
--
ALTER TABLE `alarma`
  ADD CONSTRAINT `alarma_ibfk_1` FOREIGN KEY (`idAlberca`) REFERENCES `alberca` (`id`),
  ADD CONSTRAINT `alarma_ibfk_2` FOREIGN KEY (`idNivelAgua`) REFERENCES `nivelagua` (`id`),
  ADD CONSTRAINT `alarma_ibfk_3` FOREIGN KEY (`idTemperatura`) REFERENCES `temperatura` (`id`);

--
-- Constraints for table `bomba`
--
ALTER TABLE `bomba`
  ADD CONSTRAINT `bomba_ibfk_1` FOREIGN KEY (`idAlberca`) REFERENCES `alberca` (`id`);

--
-- Constraints for table `nivelagua`
--
ALTER TABLE `nivelagua`
  ADD CONSTRAINT `nivelagua_ibfk_1` FOREIGN KEY (`idAlberca`) REFERENCES `alberca` (`id`);

--
-- Constraints for table `temperatura`
--
ALTER TABLE `temperatura`
  ADD CONSTRAINT `temperatura_ibfk_1` FOREIGN KEY (`idAlberca`) REFERENCES `alberca` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
