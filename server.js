const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;
const BASE_URL = 'https://www.reevantiglobal.com';

// ── Per-route SEO metadata ─────────────────────────────────────────────────────
const routeMeta = {
  '/': {
    title: 'Reevanti Global | Buy Quality Products Online in India',
    description: 'Shop quality products online with Reevanti Global. Genuine items across Home, Electronics, and Health on Amazon & Flipkart with fast delivery in India.',
    keywords: 'Reevanti Global, eCommerce India, buy products online India, Amazon seller India, Flipkart seller India, online shopping India, quality products India, home kitchen products, electronics online India, health wellness products India'
  },
  '/about-us': {
    title: 'About Us | Reevanti Global – India\'s Trusted Online Store',
    description: 'Learn about Reevanti Global — our mission, values, and why customers across India trust us for genuine products on Amazon and Flipkart.',
    keywords: 'about Reevanti Global, eCommerce company India, trusted online store, online shopping company, Amazon Flipkart seller India'
  },
  '/products': {
    title: 'Products | Reevanti Global – Home, Electronics & More',
    description: 'Explore Home & Kitchen, Electronics, Health, Sports, and Office products. Shop Reevanti Global on Amazon & Flipkart for fast delivery across India.',
    keywords: 'buy products online, home kitchen products India, electronics accessories, health wellness products, sports fitness equipment, lifestyle personal care, office stationery India'
  },
  '/our-services': {
    title: 'eCommerce Services | Reevanti Global on Amazon & Flipkart',
    description: 'Reevanti Global offers Amazon & Flipkart marketplace selling, listing optimization, account management, and order fulfilment services in India.',
    keywords: 'eCommerce services India, Amazon marketplace seller, Flipkart seller services, product listing optimization, eCommerce account management, order fulfilment India'
  },
  '/blogs': {
    title: 'Reevanti Global Blog | eCommerce Insights & Tips',
    description: 'Read expert articles on eCommerce tips, online shopping trends, marketplace selling strategies, and product quality insights from Reevanti Global.',
    keywords: 'eCommerce blog India, online shopping tips, marketplace selling, eCommerce trends 2026, product quality guide, Amazon Flipkart selling tips'
  },
  '/contact-us': {
    title: 'Contact Us | Reevanti Global – Get in Touch',
    description: 'Contact Reevanti Global for product inquiries, orders, returns, or feedback via email at contact@reevantiglobal.com or WhatsApp.',
    keywords: 'contact Reevanti Global, customer support, product enquiry, order help, eCommerce support India'
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Reevanti Global',
    description: 'Read the Reevanti Global Privacy Policy to understand how we collect, use, and protect your personal information.',
    keywords: 'privacy policy, data protection, Reevanti Global privacy'
  },
  '/terms-of-service': {
    title: 'Terms of Service | Reevanti Global',
    description: 'Review the Terms of Service governing your use of Reevanti Global website, products, and eCommerce services.',
    keywords: 'terms of service, terms and conditions, Reevanti Global terms'
  }
};

// ── Read dist/index.html once at startup ────────────────────────────────────────
const indexHtmlPath = path.join(__dirname, 'dist', 'index.html');
let indexHtmlTemplate;

try {
  indexHtmlTemplate = fs.readFileSync(indexHtmlPath, 'utf-8');
  console.log('✔ index.html template loaded into memory');
} catch (err) {
  console.error('✖ Failed to read dist/index.html:', err.message);
  process.exit(1);
}

// ── Helper: inject SEO metadata into the HTML template ──────────────────────────
function renderWithMeta(routePath) {
  const meta = routeMeta[routePath] || routeMeta['/'];
  const canonicalUrl = routePath === '/'
    ? `${BASE_URL}/`
    : `${BASE_URL}${routePath}`;

  let html = indexHtmlTemplate;

  // Replace <title>…</title>
  html = html.replace(
    /<title>[^<]*<\/title>/i,
    `<title>${meta.title}</title>`
  );

  // Replace <meta name="description" content="…" />
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${meta.description}" />`
  );

  // Replace <meta name="keywords" content="…" />
  html = html.replace(
    /<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="keywords" content="${meta.keywords}" />`
  );

  // Replace <link rel="canonical" href="…" />
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // Replace og:url
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );

  // Replace og:title
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${meta.title}" />`
  );

  // Replace og:description
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${meta.description}" />`
  );

  return html;
}

// ── Security headers middleware ─────────────────────────────────────────────────
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// ── Static assets with long-term caching ────────────────────────────────────────
app.use('/Images', express.static(path.join(__dirname, 'dist', 'Images'), {
  maxAge: '1y',
  immutable: true,
  setHeaders: (res) => {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  }
}));

app.use('/assets', express.static(path.join(__dirname, 'dist', 'assets'), {
  maxAge: '1y',
  immutable: true,
  setHeaders: (res) => {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  }
}));

// ── Serve remaining static files (short cache) ─────────────────────────────────
app.use(express.static(path.join(__dirname, 'dist'), {
  maxAge: '1h',
  index: false  // Prevent auto-serving index.html — we handle that with SEO injection
}));

// ── Explicit manifest.json route ────────────────────────────────────────────────
app.get('/manifest.json', (req, res) => {
  res.setHeader('Content-Type', 'application/manifest+json');
  res.sendFile(path.join(__dirname, 'dist', 'manifest.json'));
});

// ── SEO crawler files ───────────────────────────────────────────────────────────
app.get('/sitemap.xml', (req, res) => {
  res.setHeader('Content-Type', 'application/xml');
  res.sendFile(path.join(__dirname, 'dist', 'sitemap.xml'));
});

app.get('/robots.txt', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.sendFile(path.join(__dirname, 'dist', 'robots.txt'));
});

// ── SPA routes with per-route SEO injection ─────────────────────────────────────
Object.keys(routeMeta).forEach(route => {
  app.get(route, (req, res) => {
    const html = renderWithMeta(route);
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 'no-cache');
    res.send(html);
  });
});

// ── Blog article routes — use /blogs metadata ──────────────────────────────────
app.get('/blogs/:slug', (req, res) => {
  const html = renderWithMeta('/blogs');
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 'no-cache');
  res.send(html);
});

// ── Catch-all fallback — returns index.html with homepage meta ──────────────────
app.get('*', (req, res) => {
  const html = renderWithMeta('/');
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 'no-cache');
  res.send(html);
});

// ── Start server ────────────────────────────────────────────────────────────────
app.listen(port, () => {
  console.log(`🚀 Reevanti Global server running on port ${port}`);
  console.log(`   SEO injection active for ${Object.keys(routeMeta).length} routes`);
});
