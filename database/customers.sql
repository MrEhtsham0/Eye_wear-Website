-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 31, 2024 at 01:34 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eye_wear`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `address` varchar(255) NOT NULL,
  `mobileNo` varchar(13) NOT NULL,
  `leftEyesight` float NOT NULL,
  `rightEyesight` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `firstName`, `lastName`, `email`, `address`, `mobileNo`, `leftEyesight`, `rightEyesight`) VALUES
(9, 'Maggie', 'smithhh', 'maggiesmith1202@gmail.com', 'Pakistaaan', '2147483647', 2, 2.5),
(10, 'Ehtsham', 'khaliq', 'maggiesmith1202@gmail.com', 'National coloney', '2147483647', 1.5, 1.5),
(11, 'Mudassar bhai', 'khaliq', 'mudassar@gmail.com', 'Layyah', '1234567890', 6, 6),
(16, 'Maggie', 'smith', 'maggiesmith1202@gmail.com', 'Pakistan', '2147483647', 0, 0),
(17, 'Maggie', 'smith', 'maggiesmith1202@gmail.com', 'Pakistan', '2147483647', 0, 0),
(21, 'Maggie', 'smith', 'maggiesmith1202@gmail.com', 'Pakistan', '2147483647', 2, 2.5),
(23, 'Zahid', 'Javed', 'zahid@gmail.com', 'National Textile university', '03211848495', 1.1, 1.1),
(24, 'Muhammad', 'Shahid', 'shahid@gmail.com', 'National coloney', '03211848495', 1.5, 2.5),
(30, 'Fatima', 'Tariq', 'fatimatariq1222@gmail.com', 'Millat chowk Faisalabad ', '03041111111', 2, 2),
(31, 'Zainab', 'Tariq', 'zainabtariq@gmail.com', 'Faisalabad', '03211111111', 1.5, 1.5),
(32, 'zahid', 'Javed', 'Zahid@gmail.com', 'Faisalabd', '03211848495', 1.5, 0.5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
