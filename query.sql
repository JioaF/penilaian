SET foreign_key_checks = 0;

drop table if exists `tab_nilai_siswa`;
create table `tab_nilai_siswa`(
    `id` int(11) NOT NULL auto_increment,
    `id_siswa` int(11) NOT NULL,
    `id_matapelajaran` int(11) NOT NULL,
    `nilai_uh` decimal(10,2) NOT NULL,
    `nilai_uts` decimal(10,2) NOT NULL,
    `nilai_uas` decimal(10,2) NOT NULL,
    `rata_rata` decimal(10,2) NOT NULL,
    `predikat` varchar(1) NOT NULL,
    primary key (`id`)
) engine=InnoDB auto_increment=4 default charset=utf8mb4;