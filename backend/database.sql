CREATE TABLE `user` (
    `userID` int AUTO_INCREMENT NOT NULL ,
    `email` VARCHAR(50)  NOT NULL ,
    `firstname` VARCHAR(50)  NOT NULL ,
    `password` VARCHAR(50)  NOT NULL ,
    `avatar` VARCHAR(200)  NOT NULL ,
    `role` int  NOT NULL ,
    PRIMARY KEY (
        `userID`
    )
);

CREATE TABLE `event` (
    `eventId` int AUTO_INCREMENT NOT NULL ,
    `user_ID` int  NOT NULL ,
    `date` DATE  NOT NULL ,
    `detailEvent` VARCHAR(200)  NULL ,
    PRIMARY KEY (
        `eventId`
    )
);

CREATE TABLE `role` (
    `roleID` int AUTO_INCREMENT NOT NULL ,
    `detailRole` VARCHAR(20)  NULL ,
    PRIMARY KEY (
        `roleID`
    )
);

CREATE TABLE `comment` (
    `commentID` int AUTO_INCREMENT NOT NULL ,
    `user_id` int  NOT NULL ,
    `event_id` int  NOT NULL ,
    `detailComment` VARCHAR(200)  NULL ,
    PRIMARY KEY (
        `commentID`
    )
);

CREATE TABLE `friends` (
    `friendsID` int AUTO_INCREMENT NOT NULL ,
    `owner_ID` int  NOT NULL ,
    `user_id` int  NOT NULL ,
    PRIMARY KEY (
        `friendsID`
    )
);

ALTER TABLE `user` ADD CONSTRAINT `fk_user_role` FOREIGN KEY(`role`)
REFERENCES `role` (`roleID`);

ALTER TABLE `event` ADD CONSTRAINT `fk_event_user_ID` FOREIGN KEY(`user_ID`)
REFERENCES `user` (`userID`);

ALTER TABLE `comment` ADD CONSTRAINT `fk_comment_user_id` FOREIGN KEY(`user_id`)
REFERENCES `user` (`userID`);

ALTER TABLE `comment` ADD CONSTRAINT `fk_comment_event_id` FOREIGN KEY(`event_id`)
REFERENCES `event` (`eventId`);

ALTER TABLE `friends` ADD CONSTRAINT `fk_friends_owner_ID` FOREIGN KEY(`owner_ID`)
REFERENCES `user` (`userID`);

ALTER TABLE `friends` ADD CONSTRAINT `fk_friends_user_id` FOREIGN KEY(`user_id`)
REFERENCES `user` (`userID`);

INSERT INTO jdb.`role` (detailRole) VALUES
	 ('user'),
	 ('admin');

INSERT INTO jdb.`user` (email,firstname,password,avatar,`role`) VALUES
	 ('mickael.birepinte@gmail.com','MichaB','test','https://cdn-icons-png.flaticon.com/512/2202/2202112.png',1),
	 ('amandineL@gmail.com','AmandineL','test','https://cdn-icons-png.flaticon.com/512/9561/9561529.png',1),
	 ('lucJaubert@gmail.com','lucJ','test','https://cdn-icons-png.flaticon.com/512/9561/9561544.png',1),
	 ('paulBattault@gmail.com','PaulB','test','https://cdn-icons-png.flaticon.com/512/9561/9561556.png',1),
	 ('olgayasno@gmail.com','OlgaYas','test','https://cdn-icons-png.flaticon.com/512/9561/9561523.png',1),
	 ('joseadmin@gmail.com','joseadmin','test','https://cdn-icons-png.flaticon.com/512/9561/9561520.png',2);

INSERT INTO jdb.friends (owner_ID,user_id) VALUES
	 (1,1),
	 (1,2),
	 (1,3),
	 (1,4);

INSERT INTO jdb.event (user_ID,`date`,detailEvent) VALUES
	 (1,'2022-08-25','AUjourd''hui j''ai mangé chinois. Top moumoute'),
	 (1,'2023-02-01','AUjourd''hui j''ai mangé chinois. Top moumoute'),
	 (1,'2023-01-28','Grosse avancée sur le back. Trop des oufs');