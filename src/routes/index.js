const express = require('express');
const router = express();

router.use(require('./usuarios'));

module.exports = router;
