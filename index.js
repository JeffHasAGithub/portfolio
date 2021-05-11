require('dotenv').config();

const express = require('express');
const session = require('express-session');
const http = require('http');
const nunjucks = require('nunjucks');

const app = express();
const server = http.createServer(app);

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'maggie',
  resave: true,
  saveUninitialized: true,
}));

nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

app.get('/', (req, res) => {
  res.render('home.html');
});

const project = require('./controllers/project');
app.get('/projects', (req, res) => {
  const projects = project.findAll();
  projects.then(result => {
    res.render('projects.html', { projects: result });
  });
});

app.get('/login', (req, res) => {
  res.render('login.html');
});

app.post('/login', (req, res) => {
  res.redirect('/');
});

server.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000');
});
