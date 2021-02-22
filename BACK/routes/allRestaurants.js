const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>WELCOME TO MY APP</h1>');
});

module.exports = router;
