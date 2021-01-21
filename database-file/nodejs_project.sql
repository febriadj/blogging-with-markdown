-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 21, 2021 at 07:25 AM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nodejs_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `author` varchar(25) DEFAULT NULL,
  `title` varchar(225) DEFAULT NULL,
  `subject` varchar(225) DEFAULT NULL,
  `time` varchar(100) DEFAULT NULL,
  `file` varchar(225) DEFAULT NULL,
  `path` varchar(225) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `author`, `title`, `subject`, `time`, `file`, `path`) VALUES
(5, 'febri', 'Cara Sederhana Menghubungkan Aplikasi Nodejs Dengan MySql', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quaerat. Sint voluptatum, aliquam impedit veritatis vitae inventore quos. Recusandae, delectus consequuntur.', 'Rabu, 20 Januari 2021', '928MD801BL1611080419928', 'cara-sederhana-menghubungkan-aplikasi-nodejs-dengan-mysql'),
(12, 'febriadji', 'Membuat Rest API Sederhana Menggunakan Nodejs, Expressjs dan MySql', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, dolor sint blanditiis excepturi et asperiores molestias tempore dolores! Porro officiis ipsum praesentium.', 'Kamis, 21 Januari 2021', '908MD828BL1611170243908', 'membuat-rest-api-sederhana-menggunakan-nodejs,-expressjs-dan-mysql');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
