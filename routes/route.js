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
// const converter = new showdown.Converter();
router.route('/blogs')
  .get((req, res) => {
    let sql = `SELECT * FROM blogs`;
    db.query(sql, (err, result) => {
      res.render('blogs', {
        title: 'Read Blogs',
        path: result
      });
    });
  })

router.route('/blogs/details/:path')
  .get((req, res) => {
    const path = req.params.path;
    res.send(path);
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