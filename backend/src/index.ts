// Simple Express hello-world API
import express from 'express';
const app = express();
const PORT = 3000;

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});
