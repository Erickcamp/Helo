create table users(
id serial primary key,
username varchar(100),
password varchar(100),
profile_pic text
);

create table posts(
id serial primary key,
title varchar(20),
img text,
content text,
author_id integer references users(id)
);