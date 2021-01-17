const express = require('express');
const router = express.Router();
const db = require('../models/db_config');

router.route('/blogs/add')
  .get((req, res) => {
    res.render('blogsAdd', {
      title: 'Tambah Blogs'
    });
  })

module.exports = router;