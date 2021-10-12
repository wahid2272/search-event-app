# Getting Started with Search Web Application

This is a search web application created with React, Node(express), and Material UI (version 4). User can search any keyword in the browser and result from 2 public API will be displayed in the browser.

## Used APIs
  - http://api.hel.fi/linkedevents/v1/search/
  - https://api.finna.fi/swagger-ui/?url=%2Fapi%2Fv1%3Fswagger#/Search/get_search

## Installation 
Use npm package manager to setup local development. Go to server folder to install backend packages and go to client folder to install frontend packages. 

```
npm install
```
Type this command once you go to server and client directory to install all the necessary packages.

## Starting server and browser
Use the following command seperately in seperate terminal in client directory and server directory to start server and browser.
```
npm start
```

- From the client directory, you will be redirect to web browser. Before searching anything on the input area, please make sure that the server is running as well. 

- Once confirmed, you can search anything in the input area and you will see all the Finnish name from one API response and all the records title of other API response togather in the result section. 
