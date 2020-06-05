  
INSERT INTO users
(username, hash, img)
VALUES
($1, $2, $3)
returning id, username, img;