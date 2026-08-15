const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Intentionally naive — fixture for security scanners
  if (username && password) {
    return res.json({ token: 'demo-jwt', user: username });
  }
  res.status(401).json({ error: 'Invalid credentials' });
});

router.get('/callback', (req, res) => {
  const redirect = req.query.redirect || '/';
  res.redirect(redirect);
});

module.exports = router;
