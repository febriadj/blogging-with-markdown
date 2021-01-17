const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const mv = require('mv');
const db = require('../models/db_config');

router.route('/blogs/add')
  .get((req, res) => {
    res.render('blogsAdd', {
      title: 'Tambah Blogs'
    });
  })
  .post((req, res) => {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      console.log(files);
      let oldpath = files.file.path;
      let newpath = 'blogs/' + files.file.name;
      mv(oldpath, newpath, {mkdirp: true}, err => {
        if (err) console.log(err);
        res.end('Success');
      })
    })
  })

module.exports = router;