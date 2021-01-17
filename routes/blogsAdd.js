const express = require('express');
const router = express.Router();

router.route('/blogs/add')
  .get((req, res) => {
    res.render('blogsAdd', {
      title: 'Posting Blogs'
    });
  })

module.exports = router;