# Database
## Database Name
### mysql> create database nimapassignment;
### mysql> use nimapassignment;

## Category Table
### mysql> create table categories(categoryID int primary key auto_increment, categoryName varchar(200) not null unique);
### mysql> desc categories;
![Category Scheme](https://github.com/Aniketps/Project-Images/blob/main/categories.png)

## Product Table
### mysql> create table products(productID int primary key auto_increment, productName varchar(200) not null unique, categoryID int not null, foreign key(categoryID) references categories(categoryID) on delete cascade on update cascade);
### mysql> desc products;
![Product Scheme](https://github.com/Aniketps/Project-Images/blob/main/products.png)

## ER Diagram
![Product Scheme](https://github.com/Aniketps/Project-Images/blob/main/ERDiagram.png)

# Start Application
### npm install
### npm index.js
## On Browser
### Check out http://localhost:3000/api
