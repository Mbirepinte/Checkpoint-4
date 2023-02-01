CREATE TABLE `user` (
    `userID` int AUTO_INCREMENT NOT NULL ,
    `email` VARCHAR(50)  NOT NULL ,
    `password` VARCHAR(50)  NOT NULL ,
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

ALTER TABLE `user` ADD CONSTRAINT `fk_user_role` FOREIGN KEY(`role`)
REFERENCES `role` (`roleID`);

ALTER TABLE `event` ADD CONSTRAINT `fk_event_user_ID` FOREIGN KEY(`user_ID`)
REFERENCES `user` (`userID`);

ALTER TABLE `comment` ADD CONSTRAINT `fk_comment_user_id` FOREIGN KEY(`user_id`)
REFERENCES `user` (`userID`);

ALTER TABLE `comment` ADD CONSTRAINT `fk_comment_event_id` FOREIGN KEY(`event_id`)
REFERENCES `event` (`eventId`);