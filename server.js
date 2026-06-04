const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve all static files from the pre-built dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// Explicit routes for SEO files — must come BEFORE the SPA catch-all
app.get('/sitemap.xml', (req, res) => {
  res.setHeader('Content-Type', 'application/xml');
  res.sendFile(path.join(__dirname, 'dist', 'sitemap.xml'));
});

app.get('/robots.txt', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.sendFile(path.join(__dirname, 'dist', 'robots.txt'));
});

// Catch-all: serve index.html for client-side SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Reevanti Global server running on port ${port}`);
});
