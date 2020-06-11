SELECT p.title, p.content, p.img, u.username, p.id, u.profile_pic
FROM posts p
JOIN users u on p.author_id = u.id
where p.id = $1;