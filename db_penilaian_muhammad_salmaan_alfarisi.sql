-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 31, 2021 at 02:21 PM
-- Server version: 8.0.22
-- PHP Version: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_penilaian_muhammad_salmaan_alfarisi`
--

-- --------------------------------------------------------

--
-- Table structure for table `tab_guru`
--

CREATE TABLE `tab_guru` (
  `id` int NOT NULL,
  `nik` varchar(20) NOT NULL,
  `nama_guru` varchar(50) NOT NULL,
  `pendidikan_terakhir` varchar(3) NOT NULL,
  `jurusan` varchar(30) NOT NULL,
  `asal_sekolah` varchar(50) NOT NULL,
  `alamat` text NOT NULL,
  `email` varchar(50) NOT NULL,
  `no_telp` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tab_guru`
--

INSERT INTO `tab_guru` (`id`, `nik`, `nama_guru`, `pendidikan_terakhir`, `jurusan`, `asal_sekolah`, `alamat`, `email`, `no_telp`) VALUES
(1, '1234567891023141 ', 'Guru Pengajar no. 1 ', 'S2', 'RPL ', 'Universitas fiktif belaka ', 'Jl. fiktif no. 76  ', 'guruFiktif@example.com', '+62-123-1441-55'),
(2, '0092312435 ', 'Guru Pengajar no. 2 ', 's3', 'TKJ ', 'Universitas fiktif 1231 ', 'Jl. fiktif no. 212 ', 'guruFiktif@example.com', '+62-978-7880-12'),
(4, '1134547891043141	', 'Guru pengajar no.3', 's1', 'TKJ', 'Universitas fiktif 321', 'Jl. fiktif no. 11', 'guruFiktif@example.com', '+62-1231-190-17');

-- --------------------------------------------------------

--
-- Table structure for table `tab_nilai_siswa`
--

CREATE TABLE `tab_nilai_siswa` (
  `id` int NOT NULL,
  `id_siswa` int DEFAULT NULL,
  `id_matapelajaran` int DEFAULT NULL,
  `nilai_uh` decimal(10,2) DEFAULT NULL,
  `nilai_uts` decimal(10,2) DEFAULT NULL,
  `nilai_uas` decimal(10,2) DEFAULT NULL,
  `rata_rata` decimal(10,2) DEFAULT NULL,
  `predikat` varchar(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tab_nilai_siswa`
--

INSERT INTO `tab_nilai_siswa` (`id`, `id_siswa`, `id_matapelajaran`, `nilai_uh`, `nilai_uts`, `nilai_uas`, `rata_rata`, `predikat`) VALUES
(5, 1, 157, '60.00', '67.00', '90.00', '72.33', 'B'),
(6, 1, 127, '87.00', '67.00', '90.00', '81.33', 'A'),
(7, 7, 182, '78.00', '76.00', '86.00', '80.00', 'A');

-- --------------------------------------------------------

--
-- Table structure for table `tab_pelajaran`
--

CREATE TABLE `tab_pelajaran` (
  `id` int NOT NULL,
  `mata_pelajaran` varchar(50) DEFAULT NULL,
  `jurusan` varchar(30) DEFAULT NULL,
  `kelas` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tab_pelajaran`
--

INSERT INTO `tab_pelajaran` (`id`, `mata_pelajaran`, `jurusan`, `kelas`) VALUES
(127, 'Pemrograman Web', 'RPL ', '11'),
(157, 'Sistem Informasi', 'RPL ', '11'),
(182, 'Desain Grafis', ' RPL', '10');

-- --------------------------------------------------------

--
-- Table structure for table `tab_setting`
--

CREATE TABLE `tab_setting` (
  `id` int NOT NULL,
  `judul` varchar(100) NOT NULL,
  `footer` text NOT NULL,
  `running` text NOT NULL,
  `logo` text NOT NULL,
  `pavicon` text NOT NULL,
  `isaktif` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tab_siswa`
--

CREATE TABLE `tab_siswa` (
  `id` int NOT NULL,
  `nis` varchar(15) NOT NULL,
  `nama_lengkap` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `kelas` varchar(3) NOT NULL,
  `jurusan` varchar(30) NOT NULL,
  `tempat_lahir` varchar(50) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `alamat` text NOT NULL,
  `email` varchar(50) NOT NULL,
  `no_telp` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tab_siswa`
--

INSERT INTO `tab_siswa` (`id`, `nis`, `nama_lengkap`, `kelas`, `jurusan`, `tempat_lahir`, `tanggal_lahir`, `alamat`, `email`, `no_telp`) VALUES
(1, '185018', 'Ahmad', '10', 'RPL', 'NULL', '2021-01-09', 'Jl. fiktif no. 21312', 'ahmad@example.com', '+62-838-5553-79'),
(2, '146418', 'Budi', '12', 'MM', 'unknown', '2021-01-18', 'Jl. fiktif no. 211', 'budi@example.com', '+62-838-5555-17'),
(7, '170829', 'Desi', '11', 'TKJ', 'Antah', '2021-01-25', 'Jl.fiktif no. 545', 'desi@example.com', '+62-897-5555-30');

-- --------------------------------------------------------

--
-- Table structure for table `tab_user`
--

CREATE TABLE `tab_user` (
  `id` int NOT NULL,
  `username` varchar(50) NOT NULL DEFAULT ''' ''',
  `password` varchar(32) NOT NULL DEFAULT ''' ''',
  `lastlogin` datetime NOT NULL,
  `email` varchar(100) NOT NULL,
  `nomerhp` varchar(15) NOT NULL,
  `Userinsert` varchar(100) NOT NULL,
  `tglinsert` datetime NOT NULL,
  `Useredit` varchar(100) NOT NULL,
  `tgledit` datetime NOT NULL,
  `jmlogin` int NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tab_user`
--

INSERT INTO `tab_user` (`id`, `username`, `password`, `lastlogin`, `email`, `nomerhp`, `Userinsert`, `tglinsert`, `Useredit`, `tgledit`, `jmlogin`) VALUES
(1, 'admin', 'a', '2021-01-16 16:02:07', 'adfg@example.com', '08123789322', '', '2021-01-16 16:02:07', '', '2021-01-16 16:02:07', 1),
(2, 'dev', 'a', '2021-01-25 19:58:40', 'jkl@example.com', '08976555', '1', '2021-01-25 19:58:40', '1', '2021-01-25 19:58:40', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tab_guru`
--
ALTER TABLE `tab_guru`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tab_nilai_siswa`
--
ALTER TABLE `tab_nilai_siswa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_siswa` (`id_siswa`),
  ADD KEY `id_matapelajaran` (`id_matapelajaran`);

--
-- Indexes for table `tab_pelajaran`
--
ALTER TABLE `tab_pelajaran`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tab_setting`
--
ALTER TABLE `tab_setting`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tab_siswa`
--
ALTER TABLE `tab_siswa`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tab_user`
--
ALTER TABLE `tab_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tab_guru`
--
ALTER TABLE `tab_guru`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tab_nilai_siswa`
--
ALTER TABLE `tab_nilai_siswa`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tab_setting`
--
ALTER TABLE `tab_setting`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tab_siswa`
--
ALTER TABLE `tab_siswa`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tab_user`
--
ALTER TABLE `tab_user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tab_nilai_siswa`
--
ALTER TABLE `tab_nilai_siswa`
  ADD CONSTRAINT `tab_nilai_siswa_ibfk_1` FOREIGN KEY (`id_siswa`) REFERENCES `tab_siswa` (`id`),
  ADD CONSTRAINT `tab_nilai_siswa_ibfk_2` FOREIGN KEY (`id_matapelajaran`) REFERENCES `tab_pelajaran` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
