# Ecommerce API

## Hosted Link https://ecommerce-api-s663.onrender.com/

## Tech stack
+ Express.js
+ Ejs
+ MongoDB

# Features
+ User can see all entries in Databes
+ User can add Any Numbers of entries
+ User can Updated Quantity of any Product
+ user can delete any Product

# How to use API
+ clone the project
+ run "npm init" command on terminal in this projects directory
+ start the server using node index.js
+ Use Postman
+ Make a GET request on localhost:8000
+ products will display

## how to create product
+ use postman
+ use url localhost:3000/products/create
+ Select Body tab below the url textarea and then select x-www-form-urlencoded
+ Add name & quantity as the keys and set the  values .
+ make post request
+ will get Successfully created And message will display.

## steps to delete
+ selete the object id to delete
+ put the id after http://localhost:8000/products/   As  http://localhost:8000/products/659c572fcac46573c4bebece
+ make delte request
+ getting Successfully deleted means product has been deleted

## steps to update quantity
+ selete the object id to update
+ put the id after  http://localhost:8000/products/  As http://localhost:8000/products/659c572fcac46573c4bebece
+ and then add update_quantity after url and the quantiy such as  http://localhost:8000/products/ 659c5753cac46573c4bebed0/update_quantity/45
+ make a post request
+ getting Successfully Updated means it has been updated

