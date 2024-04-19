const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.render('home', { pageTitle: 'Home' });
  });
  
  app.get('/animal-list', (req, res) => {
    res.render('animal-list', { pageTitle: 'Animal List' });
  });
  
  app.get('/entry-form', (req, res) => {
    res.render('entry-form', { pageTitle: 'Entry Form' });
  });
  