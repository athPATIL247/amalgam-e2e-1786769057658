const express = require('express');
const router = express.Router();

router.get('/', (_req, res) => {
  res.json({ users: [{ id: 1, name: 'demo' }] });
});

router.get('/:id', (req, res) => {
  res.json({ id: req.params.id, profile: 'public' });
});

module.exports = router;
