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
    const { title, deskripsi, author } = req.body;
    const form = new formidable.IncomingForm();
    
    form.parse(req, (err, fields, files) => {
      if (err) console.log(err);

      const namaFile = new Date();
      const newpath = `${namaFile.getMilliseconds()}MD${files.file.size}BL${Date.now()}.md`;
      const path = `${namaFile.getMilliseconds()}MD${files.file.size}BL${Date.now()}`;
      mv(files.file.path, `blogs/${newpath}`, {mkdirp: true, multiples: true}, err => {
        if (err) console.log(err);
        
        let sql = `INSERT INTO blogs VALUE (0, '${title}', '${deskripsi}', '${author}', '${newpath}', '${path}')`
        db.query(sql, (err, result) => {
          if (err) console.log(err);

          res.redirect('/blogs');
        });
      });
    });
  })

module.exports = router;