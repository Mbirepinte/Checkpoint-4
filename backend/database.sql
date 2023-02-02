CREATE TABLE `user` (
    `userId` int AUTO_INCREMENT NOT NULL ,
    `email` VARCHAR(50)  NOT NULL ,
    `firstname` VARCHAR(50)  NOT NULL ,
    `password` VARCHAR(200)  NOT NULL ,
    `avatar` VARCHAR(200)  NOT NULL ,
    `role` int  NOT NULL ,
    PRIMARY KEY (
        `userId`
    )
);

CREATE TABLE `event` (
    `eventId` int AUTO_INCREMENT NOT NULL ,
    `user_Id` int  NOT NULL ,
    `date` DATE  NOT NULL ,
    `detailEvent` VARCHAR(200)  NULL ,
    PRIMARY KEY (
        `eventId`
    )
);

CREATE TABLE `role` (
    `roleId` int AUTO_INCREMENT NOT NULL ,
    `detailRole` VARCHAR(20)  NULL ,
    PRIMARY KEY (
        `roleId`
    )
);

CREATE TABLE `comment` (
    `commentId` int AUTO_INCREMENT NOT NULL ,
    `user_id` int  NOT NULL ,
    `event_id` int  NOT NULL ,
    `detailComment` VARCHAR(200)  NULL ,
    PRIMARY KEY (
        `commentId`
    )
);

CREATE TABLE `friends` (
    `friendsId` int AUTO_INCREMENT NOT NULL ,
    `owner_Id` int  NOT NULL ,
    `user_id` int  NOT NULL ,
    PRIMARY KEY (
        `friendsId`
    )
);

ALTER TABLE `user` ADD CONSTRAINT `fk_user_role` FOREIGN KEY(`role`)
REFERENCES `role` (`roleId`);

ALTER TABLE `event` ADD CONSTRAINT `fk_event_user_ID` FOREIGN KEY(`user_Id`)
REFERENCES `user` (`userId`);

ALTER TABLE `comment` ADD CONSTRAINT `fk_comment_user_id` FOREIGN KEY(`user_id`)
REFERENCES `user` (`userId`);

ALTER TABLE `comment` ADD CONSTRAINT `fk_comment_event_id` FOREIGN KEY(`event_id`)
REFERENCES `event` (`eventId`);

ALTER TABLE `friends` ADD CONSTRAINT `fk_friends_owner_ID` FOREIGN KEY(`owner_Id`)
REFERENCES `user` (`userId`);

ALTER TABLE `friends` ADD CONSTRAINT `fk_friends_user_id` FOREIGN KEY(`user_id`)
REFERENCES `user` (`userId`);

INSERT INTO jdb.`role` (detailRole) VALUES
	 ('user'),
	 ('admin');

INSERT INTO jdb.`user` (email,firstname,password,avatar,`role`) VALUES
	 ('mickael.birepinte@gmail.com','MichaB','$argon2id$v=19$m=65536,t=3,p=4$yYVpZ3U+F/ee1AZlNTaZYQ$Zua2dOcNVSU5He6hV8h5z9uRwyXRQrq6gc0lSA6IjQU','https://cdn-icons-png.flaticon.com/512/2202/2202112.png',1),
	 ('amandineL@gmail.com','AmandineL','$argon2id$v=19$m=65536,t=3,p=4$wLubu1w/HZ/IoOXLX/Dg+Q$Y6u3DEhcUo/Scr/b33V/5lgqc4VpeYbTr9rXx22EAGM','https://cdn-icons-png.flaticon.com/512/9561/9561529.png',1),
	 ('lucJaubert@gmail.com','lucJ','$argon2id$v=19$m=65536,t=3,p=4$wLubu1w/HZ/IoOXLX/Dg+Q$Y6u3DEhcUo/Scr/b33V/5lgqc4VpeYbTr9rXx22EAGM','https://cdn-icons-png.flaticon.com/512/9561/9561544.png',1),
	 ('paulBattault@gmail.com','PaulB','$argon2id$v=19$m=65536,t=3,p=4$wLubu1w/HZ/IoOXLX/Dg+Q$Y6u3DEhcUo/Scr/b33V/5lgqc4VpeYbTr9rXx22EAGM','https://cdn-icons-png.flaticon.com/512/9561/9561556.png',1),
	 ('olgayasno@gmail.com','OlgaYas','$argon2id$v=19$m=65536,t=3,p=4$wLubu1w/HZ/IoOXLX/Dg+Q$Y6u3DEhcUo/Scr/b33V/5lgqc4VpeYbTr9rXx22EAGM','https://cdn-icons-png.flaticon.com/512/9561/9561523.png',1),
	 ('joseadmin@gmail.com','joseadmin','$argon2id$v=19$m=65536,t=3,p=4$wLubu1w/HZ/IoOXLX/Dg+Q$Y6u3DEhcUo/Scr/b33V/5lgqc4VpeYbTr9rXx22EAGM','https://cdn-icons-png.flaticon.com/512/9561/9561520.png',2);

INSERT INTO jdb.friends (owner_ID,user_id) VALUES
	 (1,2),
	 (1,3),
	 (1,4),
     (1,5);

INSERT INTO jdb.event (user_Id,`date`,detailEvent) VALUES
	 (1,'2022-08-25','AUjourd''hui j''ai mangé chinois. Top moumoute'),
	 (1,'2023-02-01','AUjourd''hui j''ai mangé thai. Top moumoute'),
	 (1,'2023-01-28','Grosse avancée sur le back. Trop des oufs'),
	 (2,'2023-01-28','AUjourd''hui j''ai mangé chinois. Top moumoute'),
	 (2,'2023-02-01','AUjourd''hui j''ai mangé chinois. Top moumoute'),
	 (2,'2022-08-25','Grosse avancée sur le back. Trop des oufs');