//import express library
const express = require('express');
const fetch = require('node-fetch');

//app variable is used to access express methods
const app = express();

//set ejs as the templating engine
app.set("view engine", "ejs");

//set public as the view engine (static files: css/images/etc)
app.use(express.static("public"));

//create root route - each route maps to a corresponding URL
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/sun', (req,res)=> {
  randomImage(req,res);
})

app.get('/mercury', (req,res)=> {
  randomImage(req,res);
})

app.get('/venus', (req,res)=> {
  randomImage(req,res);
})

app.get('/earth', async (req, res) => {
  randomImage(req,res);
});

app.get('/mars', (req,res)=> {
  randomImage(req,res);
})

//server listens for requests on port 3000
app.listen(3000, () => {
  console.log('server started');
});

async function randomImage(req,res){
  let pathName = req.route.path.substring(1);

  let url = `https://api.unsplash.com/photos/random/?client_id=7756a1e81f817c186cf57294e1c19b37b49c54b8f34e7c499ee0ce5cd86cd16e&featured=true&query=planet-${pathName}`;
  let response = await fetch(url);
  let data = await response.json();
  let image = data.urls.small;
  let obj = {
    [`${pathName}Url`]:image
  }; //array coerced to string, needed for template literal
  res.render(`${pathName}`,obj);

}
