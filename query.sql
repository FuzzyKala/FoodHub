-- create table account and post--

-- create table account(
--     account_id SERIAL primary key,
-- 	email varchar(50) not null,
-- 	password varchar(50) not null,
-- 	username varchar(20) not null
-- );

-- create table post(
--     post_id SERIAL primary key,
--     account_id INT not null,
-- 	description varchar(255) not null,
-- 	photo_data BYTEA,
-- 	date TIMESTAMP WITH TIME ZONE,
-- 	CONSTRAINT fk_account_id FOREIGN KEY (account_id) REFERENCES account(account_id)
-- );

-- insert dummy data to table account and post--

-- INSERT INTO account (email, password, username) 
-- VALUES 
--     ('Aiven1@example.com', 'password1', 'user1'),
--     ('Aiven2@example.com', 'password2', 'user2'),
--     ('Aiven3@example.com', 'password3', 'user3');

-- INSERT INTO post (account_id, description, date) 
-- VALUES 
--     (1, 'Description 1', '2024-03-25 10:00:00'::timestamp with time zone),
--     (2, 'Description 2', '2024-03-25 11:00:00'::timestamp with time zone),
--     (1, 'Description 3', '2024-03-25 12:00:00'::timestamp with time zone),
--     (3, 'Description 4', '2024-03-25 13:00:00'::timestamp with time zone),
--     (3, 'Description 4', '2024-03-28 13:00:00'::timestamp with time zone);

-- update data
-- UPDATE post SET column1 = $1, column2 = $2 WHERE id = $3


-- output query command --

-- drop table account,post;

-- select * from account;
select * from post;

-- SELECT account.account_id, post.post_id, post.description, post.date, photo_data
-- FROM account
-- JOIN post ON account.account_id = post.account_id;


