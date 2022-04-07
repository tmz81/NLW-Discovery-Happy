const express = require('express');
const path = require('path');
const pages = require('./pages.js');

const server = express();

server
  // body request
  .use(express.urlencoded({ extended: true }))
  // static files
  .use(express.static('public'))
  //config template engine
  .set('views', path.join(__dirname, "views"))
  .set('view engine', 'hbs')

  //routes do app
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage)
  .post("/save-orphanage", pages.saveOrphanage);

// server on  
server.listen(8080, console.log('🚀 Runner in http://localhost:8080/'));
