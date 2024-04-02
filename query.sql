-- create table account and post--

-- create table account(
--  account_id SERIAL primary key,
-- 	username varchar(20) not null,
-- 	password varchar(50) not null,
-- 	email varchar(50) not null,
-- 	date TIMESTAMP WITH TIME ZONE,
-- );

-- create table post(
--  post_id SERIAL primary key,
--  account_id INT not null,
-- 	description varchar(255) not null,
-- 	photo_data BYTEA,
-- 	date TIMESTAMP WITH TIME ZONE,
-- 	CONSTRAINT fk_account_id FOREIGN KEY (account_id) REFERENCES account(account_id)
-- );

-- insert dummy data to table account and post--

-- INSERT INTO account (email, password, username) 
-- VALUES 
--     ('user1', 'password1', 'foodhub1@example.com','2024-03-25 10:00:00'::timestamp with time zone),
--     ('user2', 'password2', 'foodhub2@example.com','2024-03-26 11:00:00'::timestamp with time zone),
--     ('user3', 'password3', 'foodhub3@example.com','2024-03-27 12:00:00'::timestamp with time zone),
--     ('user4', 'password4', 'foodhub4@example.com','2024-03-28 13:00:00'::timestamp with time zone);


-- INSERT INTO post (account_id, description, date) 
-- VALUES 
--     (1, 'Description 1', '2024-03-25 10:00:00'::timestamp with time zone),
--     (2, 'Description 2', '2024-03-25 11:00:00'::timestamp with time zone),
--     (1, 'Description 3', '2024-03-25 12:00:00'::timestamp with time zone),
--     (3, 'Description 4', '2024-03-25 13:00:00'::timestamp with time zone),
--     (4, 'Description 5', '2024-03-28 14:00:00'::timestamp with time zone);

-- update data
-- UPDATE post SET description = 'update desc',account_id = 3 WHERE post_id = 2


-- output query command --

drop table post,account;
-- select * from account;
-- select * from post;

-- SELECT account.account_id, post.post_id, post.description, post.date, photo_data
-- FROM account
-- JOIN post ON account.account_id = post.account_id;

-- SELECT * FROM post ORDER BY post_id DESC LIMIT 1;
-- SELECT * FROM post WHERE photo_data IS NOT NULL ORDER BY post_id DESC LIMIT 1;
