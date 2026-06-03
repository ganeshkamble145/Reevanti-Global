const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve all static files from the pre-built dist folder
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all: serve index.html for client-side SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Reevanti Global server running on port ${port}`);
});
