CREATE DATABASE IF NOT EXISTS greatbay_db;

USE greatbay_db;

CREATE TABLE IF NOT EXISTS auctions(
    id integer not null auto_increment,
    itemName varchar(50) not null,
    category varchar(50) not null,
    startingBid integer default 0,
    highestbid integer default 0,
    primary key (id)
);

