# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## bars
column name | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
address         | string    | not null
lat             | float     | not null
lng             | float     | not null
image           | string    | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
bar_id      | integer   | not null, foreign key (references bars), indexed
tag_id      | integer   | not null, foreign key (references tags), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
comment     | string    | not null

## bar_comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
bar_id      | integer   | not null, foreign key (references bars), indexed
comment_id  | integer   | not null, foreign key (references comments), indexed

## ratings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
bar_id      | integer   | not null
user_id     | integer   | not null
rating      | integer   | not null
