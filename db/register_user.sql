  INSERT INTO users
(username, password, profile_pic)
VALUES
($1, $2, $3);

select * from users
where username = $1;
