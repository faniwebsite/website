const express = require("express");
const path = require('path');


const app = express()


 app.engine('html', require('ejs').renderFile); 
 app.set('view engine', 'html'); 
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, './images')));
app.use(express.static(path.join(__dirname, './websiteimg')));

app.use(express.static(path.join(__dirname, './public'), {
    setHeaders: (res, path) => {
      if (path.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');
      }
    }
  }));


  
 
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/home', (req, res) => {
    res.render('index')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/services', (req, res) => {
    res.render('services')
})

app.get('/gallery', (req, res) => {
    res.render('gallery')
})





app.listen(3000, () => {
  console.log("listening")
})

