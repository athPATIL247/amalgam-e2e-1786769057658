const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const searchRoutes = require('./routes/search');

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

app.get('/health', (_req, res) => res.json({ ok: true, service: 'pulse-api' }));

app.use('/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/search', searchRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`pulse-api listening on :${port}`));

module.exports = app;
