# Hiring Agency API Backend

Developed by <a href="https://github.com/sean-code" target="_blank">Sean Nganga</a> courtesy of Grannex 11/2023

## Technologies used

- Prisma (ORM)
-  MYSQL (Database)
- Node JS (Backend Framework)
- Express
- JavaScript (Language)
- PlanetScale (Database Provider)



## Description

- <a href="" target="_blank">POSTMAN Workspace</a>

This project is a Node.js application that utilizes the Prisma ORM to interact with a MySQL database. This project is part of a backend development assessment exercise for a hiring agency system. It focuses on tracking job opportunities and applicants, providing a robust and efficient backend built with [Node.js/Express/Your Framework]. The system allows for managing job openings, applicant details, and job applications.

### Key Features:

#### Required

* Job Openings Management: API endpoints to add and manage job openings, storing details in a database.
* Applicant Tracking: Capabilities to register applicants, including personal details, job applications, and resume links.
* Applicant and Job Details Retrieval: Endpoints to fetch and display lists of applicants and the jobs they have applied for.


#### Optional

* 

#### General Overview
* Applicants Management: ...

* Jobs Management: ...

* Express.js Web Server: The application is built using Express.js, providing a web server for handling API requests.

* Prisma ORM: Prisma is used as the ORM to interact with the MySQL database, making it easy to work with your data models.

This project provides a solid foundation for building a web application that manages user and perfume data. You can easily extend and customize it to suit your specific requirements.


## Setup Requirements
 Make sure these are installed in your system

- Git
- Web-browser of your choice
- Github
- MYSQL
- Prisma
- Node 16^
- JS

## Setup Installation

- Copy the github repository url
- Clone to your computer
- Open terminal and navigate to the directory of the project you just cloned to your computer
- Run the following command to start the server using virtual environment

```
$ git clone https://github.com/sean-code/jobs-API 
```

- navigate to the project directory

```
$ cd jobs-API
```
- Install project
```
$ npm install
```
- Database Configuration in your .env file
- Set up your database and update the configuration in prisma/schema.prisma.
- Run the Prisma migration:
```
 $ npx prisma migrate dev
```


- Start Server from main.js
```
$ node main.js
```

- Generate  Prisma Client

```
$ npx prisma generate
```

- Migrate DB Schema and Push changes

```
$ npx prisma migrate 
$ npx prisma db push

```

- Run server.js and/or prisma studio
```
$ prisma studio
```
```
$ node server.js
```



- open the browser on port 5555(prisma studio) / port 3000(json view)...


- interact with CRUD actions on this <a href="https://www.postman.com/vlapp-emmerce/workspace/odour-perfumes/collection/26841432-2a54e5f4-4a02-4f5d-a3c8-15945bf80a14?action=share&creator=26841432" target="_blank">POSTMAN workspace</a>


## Endpoints
- GET All  Perfumes
```
/perfumes

```
- GET by ID

```
/perfumes/:ID
```
- GET by color

```
/perfumes/color/:COLOR
```

- GET by Category
```
/perfumes/category/:CATEGORY
```

-  GET by PRICE
```
/perfumes/price/:PRICE
```

- GET by Rating
```
/perfumes/rating/:RATING
```

- POST 
```
/perfume

{
    "name":"",
    "category": "",
    "price":"",
    "rating": "",
    "userId": ""
}
```
- DELETE perfume
```
/perfumes/:ID
```
 - CART items

```
/cart
```
- Cart ITEMS by ID

```
/cart/:userID
```

- DELETE cart items

```
/cart/:cartItemId
```



## Some Screenshots

- MYSQL DB Tables
    <br>
  <img src="./assets/images/DBPAge.png" alt="screenshot" />


- All Perfumes
  <br>
  <img src="./assets/images/Perfumes.png" alt="screenshot" />


- By ID
    <br>
  <img src="./assets/images/PerfumeByID.png" alt="screenshot" />

- By Category
    <br>
  <img src="./assets/images/By Category.png" alt="screenshot" />


- By Color
    <br>
  <img src="./assets/images/ByColor.png" alt="screenshot" />

- PRISMA STUDIO VIEW -perfumes
    <br>
  <img src="./assets/images/Prisma Studio View.png" alt="screenshot" />



* And So much more to explore


## Known Bugs

So far so good there are no bugs related to this project 😎

## Support and contact details 🙂

To make a contribution to the code used or any suggestions you can click on the contact link and message me your suggestions.

- Telegram: https://t.me/sean_code

## MIT License

Copyright (c) 2023 Sean

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files , to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


