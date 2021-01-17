const express = require('express');
const router = express.Router();
const multer = require('multer');
const db = require('../models/db_config');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, '/blogs'),
  filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now() + '.md')
})

const upload = multer({ storage: storage }).single('file');

router.route('/blogs/add')
  .get((req, res) => {
    res.render('blogsAdd', {
      title: 'Tambah Blogs'
    });
  })
  .post((req, res) => {
    upload(req, res, err => {
      const { author, title, deskripsi, file } = req.body;
      res.send(`author: ${file}`);
    })
  })

module.exports = router;