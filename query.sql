-- create table account and post--

-- create table account(
--  account_id SERIAL primary key,
-- 	username varchar(20) not null,
-- 	password varchar(100) not null,
-- 	email varchar(50) not null,
--  avatar BYTEA,
-- 	following_id INT[],
-- 	date TIMESTAMP WITH TIME ZONE
-- );

-- create table post(
--  post_id SERIAL primary key,
--  account_id INT not null,
-- 	title varchar(255) not null,
-- 	description varchar(255) not null,
--  category varchar[],
-- 	photo_data BYTEA [],
-- 	rate float,
-- 	comment_num int,
-- 	date TIMESTAMP WITH TIME ZONE,
-- 	CONSTRAINT fk_account_id FOREIGN KEY (account_id) REFERENCES account(account_id)
-- );


-- create table comment(
-- comment_id SERIAL primary key,
-- account_id INT not null,
-- post_id INT not null,
-- comment varchar(255) not null,
-- date TIMESTAMP WITH TIME ZONE,
-- CONSTRAINT fk_account_id FOREIGN KEY (account_id) REFERENCES account(account_id),
-- CONSTRAINT fk_post_id FOREIGN KEY (post_id) REFERENCES post(post_id)
-- );

-- create table star(
--    rate_id SERIAL primary key,
--    post_id INT not null,
--    rate numeric(2,1),
--    CONSTRAINT fk_post_id FOREIGN KEY (post_id) REFERENCES post(post_id)
-- );

-- INSERT INTO star (rate_id, post_id, rate ) 
-- VALUES 
--  (1, 1, 4.5 ),
--     (2, 1, 4.6 ),
--     (3, 1, 5 ),
--     (4, 1, 4.1 ),
--     (5, 2, 3.8 ),
--     (6, 2, 4 ),
--     (7, 2, 4.1 ),
--     (8, 3, 4.5 ),
--     (9, 4, 4.2 ),
--     (10, 4, 4.0 ),
--     (11, 5, 5 ),
--     (12, 5, 4.8 ),
--     (13, 5, 4.8 ),
--     (14, 6, 3 ),
--     (15, 6, 3.5 )

-- update avg rate to DB

-- CREATE OR REPLACE FUNCTION update_post_rate()
-- RETURNS TRIGGER AS $$
-- BEGIN

--     UPDATE post
--     SET rate = (
--         SELECT AVG(rate)
--         FROM star
--         WHERE post_id = NEW.post_id
--     )
--     WHERE post_id = NEW.post_id;

--     RETURN NEW;
-- END;
-- $$ LANGUAGE plpgsql;

-- CREATE TRIGGER star_update_trigger
-- AFTER INSERT OR UPDATE OR DELETE ON star
-- FOR EACH ROW
-- EXECUTE FUNCTION update_post_rate(); 


-- comment number update
-- CREATE OR REPLACE FUNCTION update_comment_num()
-- RETURNS TRIGGER AS $$
-- BEGIN
--     --count comments
--     UPDATE post AS p
--     SET comment_num = (
--         SELECT COUNT(comment)
--         FROM comment AS c
--         WHERE c.post_id = p.post_id
--     )
--     WHERE p.post_id = NEW.post_id;

--     RETURN NEW;
-- END;
-- $$ LANGUAGE plpgsql;


-- CREATE TRIGGER comment_trigger
-- AFTER INSERT OR DELETE ON comment
-- FOR EACH ROW
-- EXECUTE FUNCTION update_comment_num();



-- update data
-- UPDATE post SET description = 'update desc',account_id = 3 WHERE post_id = 2


-- drop tables
-- drop table account;
-- drop table post,account;
-- drop table comment

-- select * from account;
-- select * from post;
-- select * from comment;

-- Reset SERIAL Sequence
-- SELECT setval('account_account_id_seq', (SELECT MAX(account_id) FROM account));
-- SELECT setval('post_post_id_seq', (SELECT MAX(post_id) FROM post));
-- SELECT setval('comment_comment_id_seq', (SELECT MAX(comment_id) FROM comment));

-- timezone
-- SELECT * FROM pg_timezone_names
-- ALTER DATABASE postgres SET timezone TO 'Europe/Helsinki';
-- SHOW TIMEZONE;

-- Top 3 trending posts
-- SELECT post.*,account.username FROM post
-- join account on post.account_id = account.account_id
-- where post.comment_num > 5 and photo_data IS NOT Null ORDER BY post.rate DESC LIMIT 3

-- Top 3 following posts
-- SELECT post.*,account.username FROM post
-- join account on post.account_id = account.account_id
-- WHERE post.account_id = ANY(SELECT unnest(following_id) FROM account WHERE account_id = 10)
-- LIMIT 3;


-- The latest one data
-- SELECT * FROM post WHERE photo_data IS NOT NULL ORDER BY post_id DESC LIMIT 1;

-- get user info after login successfully
-- select account_id, username, email from account;


-- get all posts with username by account_id
-- SELECT post.*, account.username FROM post 
-- join account on post.account_id = account.account_id
-- WHERE post.account_id = 1

-- search function
-- select account.account_id, account.username, account.avantar,
-- post.post_id, post.title, post.description, post.category, 
-- post.photo_data, post.rate, post.comment_num, post.date from account
-- join post
-- on account.account_id = post.account_id
-- WHERE description ILIKE '%new%'
-- ORDER BY post.date DESC;

-- search comment
-- SELECT comment.*, account.username, account.avatar FROM comment 
-- join account on comment.account_id = account.account_id
-- WHERE post_id = 11


-- select * from account;
-- select * from post order by post_id;
-- select * from comment; 
-- select count(*) from comment where post_id =28;

-- Reset SERIAL Sequence
-- SELECT setval('account_account_id_seq', (SELECT MAX(account_id) FROM account));
-- SELECT setval('post_post_id_seq', (SELECT MAX(post_id) FROM post));
-- SELECT setval('comment_comment_id_seq', (SELECT MAX(comment_id) FROM comment));
-- SELECT setval('star_rate_id_seq', (SELECT MAX(rate_id) FROM star));


-- SELECT post.*, account.username FROM post 
--       join account on post.account_id = account.account_id
--       WHERE post.account_id = 11 order by date


-- select * from account
-- select * from post





