const express = require('express');
const router = express.Router();
const fs = require('fs');
const showdown = require('showdown');
const db = require('../models/db_config');

// route home
// hanya menampilkan 5 blog dengan like terbanyak
router.route('/')
  .get((req, res) => {
    res.render('index', {
      title: 'Blogging with Markdown'
    });
  })

// route blog - menampikan seluruh blog
const converter = new showdown.Converter();
router.route('/blogs')
  .get((req, res) => {
    const file = fs.readFile('./blogs/artikel-1.md', 'utf-8', (err, result) => { 
      const dataBlogs = converter.makeHtml(result);
      res.render('blogs', {
          title: 'Read Blogs',
          blogs: dataBlogs
      });
    });
  })

// route tambah blog
router.use(require('./blogsAdd'));

// route 404
router.use((req, res) => {
  res.send(`
    <head><title>Page not Found</title></head>
    <style>
    * { padding: 0; margin: 0;}
    body { position: absolute; width: 100%; height: 100%; display: flex; 
      flex-direction: column; justify-content: center; align-items: center; 
    }
    </style>
    <h2>Oops. 404<h2>
    <p>Page not Found</p>
  `);
});

module.exports = router;