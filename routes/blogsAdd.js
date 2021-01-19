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
      if (err) console.log(err);
      const { author, title, subject } = fields;

      const configPath = [...title];
      for ( let i = 0; i < configPath.length; i++ ) {
        if ( configPath[i] == " " ) {
          configPath[i] = "-";
        }
      }
      const path = configPath.join("").toLowerCase();
      
      const namaFile = new Date();
      const newfile = `${namaFile.getMilliseconds()}MD${files.file.size}BL${Date.now()}`;
      mv(files.file.path, `blogs/${newfile}.md`, {mkdirp: true, multiples: true}, err => {
        if (err) console.log(err);
        
        const date = new Date();

        const hari = ["Minggu","Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
        const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        const time = `${hari[date.getDay()]}, ${date.getDate()} ${bulan[date.getMonth()]} ${date.getFullYear()}`;

        let sql = `INSERT INTO blogs VALUE (0, '${author}', '${title}', '${subject}', '${time}', '${newfile}', '${path}')`
        db.query(sql, (err, result) => {
          if (err) console.log(err);

          res.redirect('/blogs');
        });
      });
    });
  })

module.exports = router;