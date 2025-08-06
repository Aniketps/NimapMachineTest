# Database
## Database Name
mysql> create database nimapassignment;
mysql> use nimapassignment;

## Category Table
mysql> create table categories(categoryID int primary key auto_increment, categoryName varchar(200) not null unique);
mysql> desc categories;
+--------------+--------------+------+-----+---------+----------------+
| Field        | Type         | Null | Key | Default | Extra          |
+--------------+--------------+------+-----+---------+----------------+
| categoryID   | int          | NO   | PRI | NULL    | auto_increment |
| categoryName | varchar(200) | NO   | UNI | NULL    |                |
+--------------+--------------+------+-----+---------+----------------+

## Product Table
mysql> create table products(productID int primary key auto_increment, productName varchar(200) not null unique, categoryID int not null, foreign key(categoryID) references categories(categoryID) on delete cascade on update cascade);
mysql> desc products;
+-------------+--------------+------+-----+---------+----------------+
| Field       | Type         | Null | Key | Default | Extra          |
+-------------+--------------+------+-----+---------+----------------+
| productID   | int          | NO   | PRI | NULL    | auto_increment |
| productName | varchar(200) | NO   | UNI | NULL    |                |
| categoryID  | int          | NO   | MUL | NULL    |                |
+-------------+--------------+------+-----+---------+----------------+


