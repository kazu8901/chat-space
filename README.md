# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# chat-space DB設計
## usersテーブル
|Column|type|Options|
|------|----|-------|
|username|string|null: false, index: true|
|email|string|null: false|
|password|string|null: false|
### Association
- has_many :posts
- has_many :users_groups
- has_many :groups, through: :users_groups

## groupsテーブル
|Column|type|Options|
|------|----|-------|
|groupname|string|null: false|
|adduser|string|foreign_key: true|
### Association
- has_many :posts
- has_many :users_groups
- has_many :users, through: :users_groups


## postsテーブル
|Column|type|Options|
|------|----|-------|
|text|text|null: false|
|image|text||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :groups

## users_groupsテーブル
|Column|type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, fereign_key: true|
### Association
- belongs_to :group
- belongs_to :user