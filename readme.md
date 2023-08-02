# CSV_Upload
A simple E-commerce API made using Node.Js & MongoDB.

## Installation
To install EcommerceAPI, please follow these steps:

Clone this repository using the following command:
```
$ git clone https://github.com/Pankaj3112/EcommerceAPI
```
Install the required dependencies using the following command:
```
$ npm install 
```
Start the application using the following command:
```
$ npm start 
```
Open the application in your web browser by visiting the following URL:
```
$ http://localhost:8000 
```

## API Reference
EcommerceAPI provides a simple API for handling product data. The API supports the following endpoints:

* GET /products: Returns all the products as  JSON.
* POST /products/create: To create a new products, it takes name and quantity as form data.
* DELETE /products/:id: To delete a particular product.
* POST /products/:id/update_quantity/: To update quantity of a product.

## Folder Structure
```
CSV_Upload/
├── config/
|   ├── mongoose.js
|   |
├── routes/
│   ├── index.js
|   |
│   ├── products.js
|   |
├── controllers/
│   ├── products_controller.js
|   |
├── models/
│   ├── products.js
|   |
├── index.js
├── .gitignore
├── package.json
├── readme.md
