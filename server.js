const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve all static files from the pre-built dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// Explicit routes for SEO crawler files
app.get('/sitemap.xml', (req, res) => {
  res.setHeader('Content-Type', 'application/xml');
  res.sendFile(path.join(__dirname, 'dist', 'sitemap.xml'));
});

app.get('/robots.txt', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.sendFile(path.join(__dirname, 'dist', 'robots.txt'));
});

// SPA page routes — all return index.html so the client-side router takes over
const spaRoutes = [
  '/',
  '/about-us',
  '/products',
  '/our-services',
  '/blogs',
  '/contact-us',
  '/privacy-policy',
  '/terms-of-service'
];

spaRoutes.forEach(route => {
  app.get(route, (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
});

// Catch-all fallback — also returns index.html for any unmatched route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Reevanti Global server running on port ${port}`);
});
