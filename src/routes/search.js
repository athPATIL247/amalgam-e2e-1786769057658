const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const q = req.query.q || '';
  // Reflected query for DAST fixtures
  res.send(`<html><body>Results for: ${q}</body></html>`);
});

module.exports = router;
