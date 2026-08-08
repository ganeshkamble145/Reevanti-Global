const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;
const BASE_URL = 'https://www.reevantiglobal.com';

// ── Per-route SEO metadata ─────────────────────────────────────────────────────
const routeMeta = {
  '/': {
    title: 'Reevanti Global | AI eBooks, Digital Products & Indian Handcrafted Artisan Goods',
    description: 'Reevanti Global is an MSME-registered eCommerce brand from India specialising in AI-powered eBooks, Digital Products, and authentic Handcrafted Artisan goods by skilled Indian artisans. Shop online, export globally.',
    keywords: 'Reevanti Global, reevantiglobal, reevanti, digital products India, eBooks India, AI ebooks, artificial intelligence ebooks, AI prompt guides, ChatGPT prompts, Claude AI prompts, Gemini prompts, AI tools India, handcrafted products India, Indian artisan products, handicraft India, Indian handicrafts online, artisan crafts India, handmade products India, eco-friendly products India, sustainable products India, MSME India, MSME certified, MSME registered, small business India, Indian exporter, handicraft exporter India, international trade India, global trade India, craft export India, artisan export, Indian craft marketplace, buy handmade online India, eCommerce India, online shopping India, D2C brand India, digital download India, ebook download India, prompt engineering, AI automation, artificial intelligence tools, business productivity tools, content creation tools, marketing ebooks, entrepreneur resources, freelancer tools, developer resources, souvenir shop India, gift shop India, Navi Mumbai MSME, Maharashtra exporter, buy AI ebook India, online craft store India'
  },
  '/about-us': {
    title: 'About Reevanti Global | Global eCommerce Brand – AI eBooks & Artisan Crafts',
    description: 'Reevanti Global is a trusted global eCommerce company delivering AI-powered Digital Products and authentic Indian Handcrafted Artisan goods to buyers worldwide.',
    keywords: 'about Reevanti Global, global eCommerce company, international trader, artisan product export, AI ebook publisher, digital product company, trusted online store, Reevanti Global about'
  },
  '/products': {
    title: 'Products | AI eBooks, Digital Tools & Indian Handcrafted Artisan Goods – Reevanti Global',
    description: 'Shop Reevanti Global\'s two categories: AI-powered eBooks & Digital Products for professionals, creators & entrepreneurs; and authentic Indian Handcrafted Artisan goods exported worldwide.',
    keywords: 'buy AI ebooks, AI prompt guides online, artificial intelligence ebooks, digital products buy online, buy handcrafted products, buy Indian artisan goods, Indian handicrafts export, buy handmade products, eco-friendly crafts, sustainable Indian crafts, ebooks for marketers, ebooks for entrepreneurs, ChatGPT prompt book, buy digital download, Reevanti Global products'
  },
  '/blogs': {
    title: 'Insights & Resources | AI, eBooks, Indian Handicrafts & Global eCommerce – Reevanti Global',
    description: 'Expert articles on AI, Artificial Intelligence, eBooks, Digital Products, Indian Handicrafts, Artisan Crafts, export trade, and global eCommerce trends from Reevanti Global.',
    keywords: 'AI blog, artificial intelligence blog, ebook tips, digital products blog, Indian handicraft blog, artisan craft articles, export trade blog, global eCommerce blog, online shopping tips, handmade products guide, AI tools guide, prompt engineering tips, Indian craft heritage, eCommerce trends 2026, Reevanti Global blog'
  },
  '/contact-us': {
    title: 'Contact Reevanti Global | AI Digital Products & Indian Artisan Goods Enquiries',
    description: 'Contact Reevanti Global for AI eBook enquiries, Indian Handcrafted Artisan product orders, export trade partnerships, or MSME collaboration. Reach us by email or WhatsApp.',
    keywords: 'contact Reevanti Global, Reevanti Global WhatsApp, buy AI ebook enquiry, Indian artisan product enquiry, handicraft export enquiry, MSME collaboration India, international trade enquiry India, buy handcrafted products contact, digital product support India, Reevanti Global email, Navi Mumbai eCommerce company contact'
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Reevanti Global',
    description: 'Read the Reevanti Global Privacy Policy to understand how we collect, use, and protect your personal information globally.',
    keywords: 'privacy policy, data protection, Reevanti Global privacy, global data policy'
  },
  '/terms-of-use': {
    title: 'Terms of Use | Reevanti Global',
    description: 'Review the Terms of Use governing your use of Reevanti Global\'s website, products, and eCommerce platform.',
    keywords: 'terms of service, terms and conditions, Reevanti Global terms, global eCommerce terms'
  },
  '/products/AIeBooks': {
    title: 'AI eBooks Collection | Learn AI, Work Smarter, Grow Faster - Reevanti Global',
    description: 'Practical AI eBooks with step-by-step guides, ready-to-use prompts, and proven workflows. No coding required. Instant download. Start your AI journey with Reevanti Global.',
    keywords: 'PromptFlow Pro, AI prompt ebook, ChatGPT prompt guide, Claude AI prompts, Gemini prompts, AI tools ebook, artificial intelligence ebook, content marketing prompts, coding prompts AI, business automation prompts, prompt engineering ebook, buy AI ebook, digital products, AI productivity ebook, entrepreneur AI tools, marketing AI ebook, Reevanti Global digital products'
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
