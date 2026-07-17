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
    description: 'Shop quality products online with Reevanti Global. Premium eBooks, AI prompt guides, and authentic Handcrafted & Artisan goods with fast delivery in India.',
    keywords: 'Reevanti Global, eCommerce India, buy products online India, online shopping India, quality products India, handicrafts, traders, artisans, export, digital product, ebooks, AI prompts, content marketers, AI, prompt engineering, entrepreneur, marketing consultant, freelancer, digital marketing, business owner, developer, content creator, souvenir shop, gift shop, chatgpt, claude, automation, business operation, ebook, facebook ads, instagram ads, linkedin ads'
  },
  '/about-us': {
    title: 'About Us | Reevanti Global – India\'s Trusted Online Store',
    description: 'Learn about Reevanti Global — our mission, values, and why customers across India trust us for genuine, high-quality products.',
    keywords: 'about Reevanti Global, eCommerce company India, trusted online store, online shopping company, D2C brand India'
  },
  '/products': {
    title: 'Products | Reevanti Global – eBooks & Handcrafted Artisan Goods',
    description: 'Explore Reevanti Global\'s two product categories: premium Digital Products including eBooks and AI prompt guides for professionals and creators, and authentic Handcrafted & Artisan goods made by skilled Indian artisans.',
    keywords: 'buy products online, ebooks India, AI prompts, digital products India, handcrafted artisan goods, sustainable products, eco-friendly goods, handicrafts, traders, artisans, digital product, content marketers, AI, prompt engineering, entrepreneur, marketing consultant, freelancer, digital marketing, business owner, developer, content creator, souvenir shop, gift shop, chatgpt, claude, automation, business operation, ebook, facebook ads, instagram ads, linkedin ads'
  },
  '/blogs': {
    title: 'Reevanti Global Blog | eCommerce Insights & Tips',
    description: 'Read expert articles on eCommerce tips, online shopping trends, digital retail strategies, and product quality insights from Reevanti Global.',
    keywords: 'eCommerce blog India, online shopping tips, direct to consumer selling, eCommerce trends 2026, product quality guide, online retail tips'
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
  },
  '/products/digital/promptflowpro': {
    title: 'PromptFlow Pro | The Complete AI Prompt System - Reevanti Global',
    description: 'Get PromptFlow Pro: 100+ professional AI prompts for Content, Marketing, Coding, and Business Operations. Work smarter with ChatGPT, Claude & Copilot.',
    keywords: 'AI prompts, PromptFlow Pro, ChatGPT prompts, Claude prompts, marketing prompts, coding prompts, digital products India, digital product, content marketers, AI, prompt engineering, entrepreneur, marketing consultant, freelancer, digital marketing, business owner, developer, content creator, chatgpt, claude, automation, business operation, ebook, facebook ads, instagram ads, linkedin ads'
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
