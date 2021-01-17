const express = require('express');
const router = express.Router();

// halaman home
// hanya menampilkan 5 blog dengan like terbanyak
router.route('/')
  .get((req, res) => {
    res.render('index', {
      title: 'Blogging with Markdown'
    });
  })

// halaman blog - menampikan seluruh blog
router.route('/blog')
  .get((req, res) => {
    res.render('blogs', {
      title: 'Read Blogs'
    });
  })

// halaman 404
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