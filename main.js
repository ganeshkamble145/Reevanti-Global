// ─── URL → Section Map ────────────────────────────────────────────────────────
const urlToPage = {
  '/':               'home',
  '/about-us':       'about',
  '/products':       'products',
  '/blogs':          'blogs',
  '/contact-us':     'contact',
  '/privacy-policy': 'privacy',
  '/terms-of-use': 'terms',
  '/products/AIeBooks': 'digitalproductslanding'
};

// Blog slug → blog ID mapping for direct blog article URLs
const blogSlugToId = {
  'why-digital-products-are-the-future-of-online-shopping': 1,
  'india-handcrafted-heritage-artisans-thriving-online': 2,
  'eco-friendly-shopping-handcrafted-products-better-for-planet': 3,
  'top-digital-products-every-professional-needs-2026': 4,
  'story-behind-every-stitch-supporting-indian-artisans': 5,
  'digital-vs-physical-products-which-to-buy-online': 6
};

const pageToUrl = {
  home:     '/',
  about:    '/about-us',
  products: '/products',
  blogs:    '/blogs',
  contact:  '/contact-us',
  privacy:  '/privacy-policy',
  terms:    '/terms-of-use',
  digitalproductslanding: '/digitalproducts/landing'
};

// ─── Blog Data ────────────────────────────────────────────────────────────────
const blogs = [
  {
    id: 1,
    slug: 'why-digital-products-are-the-future-of-online-shopping',
    title: 'Why Digital Products Are the Future of Online Shopping',
    category: 'Digital Products',
    date: 'July 1, 2026',
    excerpt: 'Exploring the rise of digital products and why they represent the next wave of eCommerce growth in India.',
    content: `
      <p>The eCommerce landscape is evolving rapidly, and digital products are leading the charge. Unlike physical goods, digital products — software, templates, e-books, online courses, digital art, and productivity tools — offer instant delivery, zero inventory costs, and unlimited scalability. For both buyers and sellers, this is a game-changer.</p>

      <h4>What Are Digital Products?</h4>
      <p>Digital products are goods that exist in digital form and are delivered electronically. They include:</p>
      <ul>
        <li><strong>Productivity Tools & Templates</strong> — Spreadsheet templates, project planners, presentation decks</li>
        <li><strong>Educational Content</strong> — Online courses, e-books, study guides, and tutorials</li>
        <li><strong>Creative Assets</strong> — Digital art, stock photography, fonts, and design resources</li>
        <li><strong>Software & Apps</strong> — Productivity apps, plugins, and SaaS tools</li>
        <li><strong>Digital Media</strong> — Music, podcasts, videos, and digital publications</li>
      </ul>

      <h4>Why Digital Products Are Booming in India</h4>
      <p>India's rapidly expanding internet user base — over 900 million people — combined with affordable smartphones and data plans, has created a massive market for digital content. Professionals, students, freelancers, and entrepreneurs are increasingly comfortable purchasing digital solutions that improve their productivity and skills.</p>

      <h4>The Advantages of Buying Digital Products</h4>
      <p><strong>Instant Access:</strong> No waiting for delivery. Once you purchase, you have immediate access to your product. <strong>Cost-Effective:</strong> Digital products typically cost less than their physical counterparts while delivering equivalent or greater value. <strong>Eco-Friendly:</strong> No packaging, no shipping, no carbon footprint — digital products are the most sustainable way to shop.</p>

      <h4>Quality Matters</h4>
      <p>Not all digital products are created equal. At Reevanti Global, every digital product in our catalogue is carefully evaluated for quality, relevance, and value. We only offer products that genuinely help our customers — professionals, creators, and students — achieve their goals.</p>

      <p>Whether you're a freelancer looking for the perfect invoice template, a student seeking study resources, or a creator searching for design assets, Reevanti Global's digital products collection has something meaningful for you.</p>
    `
  },
  {
    id: 2,
    slug: 'india-handcrafted-heritage-artisans-thriving-online',
    title: "India's Handcrafted Heritage: How Artisans Are Thriving Online",
    category: 'Handcrafted & Artisan',
    date: 'June 15, 2026',
    excerpt: 'How Indian artisans are reaching customers across India through eCommerce, preserving traditional crafts while building sustainable livelihoods.',
    content: `
      <p>India has one of the richest artisan traditions in the world. From the intricate block prints of Rajasthan to the delicate bamboo weaving of Assam, the handcrafted products of Indian artisans represent centuries of skill, culture, and heritage. Today, eCommerce is giving these artisans a wider platform — and changing their lives in the process.</p>

      <h4>The Scale of India's Artisan Economy</h4>
      <p>India's handicraft sector employs over 7 million artisans — the second largest employer after agriculture. Yet for decades, these skilled craftspeople struggled with limited market access, dependence on middlemen, and low margins. The digital revolution has changed this story dramatically.</p>

      <h4>How eCommerce Empowers Artisans</h4>
      <p><strong>Direct Market Access:</strong> Artisans can now reach buyers in Mumbai, Delhi, Bangalore — and beyond — without leaving their workshops. <strong>Fair Pricing:</strong> By eliminating layers of middlemen, artisans receive a much larger share of the final sale price, improving their livelihoods significantly. <strong>Cultural Preservation:</strong> When artisans earn sustainable incomes from their craft, they have both the motivation and resources to pass their skills to the next generation.</p>

      <h4>The Crafts That Define India</h4>
      <p>India's handcrafted traditions span an extraordinary range — Madhubani paintings from Bihar, Warli art from Maharashtra, Phulkari embroidery from Punjab, Dhokra metalwork from Chhattisgarh, Pashmina from Kashmir, and Kalamkari from Andhra Pradesh. Each product carries a story, a geography, and a community behind it.</p>

      <h4>Reevanti Global's Commitment</h4>
      <p>At Reevanti Global, our Handcrafted & Artisan category is built on a simple belief: every purchase should create a positive impact. When you buy a handcrafted product from us, you're not just acquiring something beautiful — you're supporting a skilled artisan, preserving a cultural tradition, and making a sustainable choice for the planet.</p>

      <p>We work to bring you authentic, high-quality handcrafted products that tell real stories of India's artisan communities.</p>
    `
  },
  {
    id: 3,
    slug: 'eco-friendly-shopping-handcrafted-products-better-for-planet',
    title: 'Eco-Friendly Shopping: Why Handcrafted Products Are Better for the Planet',
    category: 'Handcrafted & Artisan',
    date: 'June 1, 2026',
    excerpt: 'The environmental case for choosing handcrafted, sustainably made products over mass-produced alternatives.',
    content: `
      <p>Every product you buy has an environmental footprint. Mass-produced goods, made in factories using industrial processes, generate enormous amounts of waste, consume vast quantities of energy, and often involve harmful chemicals. Handcrafted products offer a fundamentally different — and far more sustainable — alternative.</p>

      <h4>The Problem with Mass Production</h4>
      <p>The global fast-consumer goods industry is one of the largest contributors to pollution and waste. Fast fashion alone generates 92 million tonnes of textile waste annually. Plastic packaging from consumer goods pollutes our oceans and landfills. The carbon footprint of shipping mass-produced goods from factories across the world is staggering.</p>

      <h4>Why Handcrafted Products Are Eco-Friendly</h4>
      <p><strong>Natural Materials:</strong> Most handcrafted products use natural, biodegradable materials — cotton, jute, bamboo, wood, clay, and natural dyes — that return harmlessly to the earth at the end of their life. <strong>Low Carbon Production:</strong> Artisan workshops have a tiny energy footprint compared to industrial factories. Many artisans use traditional techniques that require no electricity at all. <strong>Zero Waste Ethos:</strong> Skilled artisans waste very little. Offcuts become other products; imperfect pieces are repurposed rather than discarded.</p>

      <h4>Sustainable Materials Used by Indian Artisans</h4>
      <ul>
        <li><strong>Bamboo</strong> — One of the fastest-growing plants on earth, used for furniture, baskets, and homeware</li>
        <li><strong>Organic Cotton</strong> — Grown without pesticides, used in handwoven textiles and garments</li>
        <li><strong>Natural Dyes</strong> — Derived from plants, flowers, and minerals, used in block printing and weaving</li>
        <li><strong>Recycled Materials</strong> — Upcycled fabrics and materials given new life through artisan creativity</li>
        <li><strong>Clay & Terracotta</strong> — Completely natural, biodegradable pottery and decorative items</li>
      </ul>

      <h4>Making Sustainable Choices</h4>
      <p>When you choose a handcrafted product over a mass-produced alternative, you vote with your wallet for a better, more sustainable world. You support local artisan communities, reduce industrial waste, and own something truly unique — made with care, by human hands.</p>

      <p>At Reevanti Global, sustainability is at the heart of our Handcrafted & Artisan collection. Every product is vetted for its environmental credentials and authentic artisan origin.</p>
    `
  },
  {
    id: 4,
    slug: 'top-digital-products-every-professional-needs-2026',
    title: 'Top Digital Products Every Professional Needs in 2026',
    category: 'Digital Products',
    date: 'May 20, 2026',
    excerpt: 'A curated guide to the most useful digital products for professionals, creators, and students in 2026.',
    content: `
      <p>The modern professional's toolkit has gone almost entirely digital. Whether you're a freelancer, entrepreneur, designer, writer, or corporate professional, the right digital products can dramatically improve your productivity, creativity, and business outcomes. Here are the categories of digital products that every professional should consider in 2026.</p>

      <h4>1. Productivity & Project Management Templates</h4>
      <p>Ready-made templates for project planning, budgeting, goal tracking, and weekly planning save hours of setup time and ensure you start every project with a professional, structured framework. Spreadsheet templates, Notion dashboards, and project board templates are among the most popular digital purchases for working professionals.</p>

      <h4>2. Design & Creative Assets</h4>
      <p>For designers, marketers, and content creators, high-quality design assets are essential. This includes icon packs, font collections, UI kits, Canva templates, logo design kits, and social media graphics templates. Instead of designing from scratch, professionals can leverage premium assets that look polished and save significant time.</p>

      <h4>3. Educational E-Books & Guides</h4>
      <p>Knowledge is the most valuable digital product. E-books covering industry-specific skills, business strategy, personal development, finance, and technology provide concentrated expertise at a fraction of the cost of formal education or consulting. Professionally curated e-books remain among the most purchased digital products globally.</p>

      <h4>4. Business Document Templates</h4>
      <p>Professionally designed business documents — contracts, proposals, invoices, business plans, and pitch deck templates — help professionals present themselves credibly from day one. For freelancers and small business owners in particular, these templates are invaluable time-savers.</p>

      <h4>5. Content & Marketing Kits</h4>
      <p>Social media content calendars, email marketing templates, blog post frameworks, and brand identity kits give marketing professionals and business owners a structured, consistent approach to content creation without starting from a blank page.</p>

      <p>At Reevanti Global, our Digital Products category features carefully curated tools and resources across all these categories — selected to provide real, measurable value to professionals, creators, and students across India.</p>
    `
  },
  {
    id: 5,
    slug: 'story-behind-every-stitch-supporting-indian-artisans',
    title: 'The Story Behind Every Stitch: Supporting Indian Artisans',
    category: 'Handcrafted & Artisan',
    date: 'May 5, 2026',
    excerpt: "How buying handcrafted products directly supports the livelihoods of skilled artisans and preserves India's rich cultural heritage.",
    content: `
      <p>Behind every handcrafted product is a person. A weaver who learned her craft from her grandmother. A potter who has worked the same clay for forty years. A block printer whose family has practised the same technique for six generations. When you choose a handcrafted product, you are choosing to see — and support — that person.</p>

      <h4>The Artisans of India</h4>
      <p>India's artisan communities are among the most skilled in the world. They live in villages and small towns across the country — in the weaving clusters of Varanasi, the pottery centres of Khurja, the woodwork villages of Saharanpur, the embroidery communities of Lucknow, and hundreds of other locations that have specialised in specific crafts for centuries.</p>

      <h4>The Challenges They Face</h4>
      <p>Despite their extraordinary skills, many Indian artisans live in economic precarity. The rise of cheap, machine-made imitations has undercut their market. Middlemen have historically captured most of the value in the supply chain, leaving artisans with minimal margins. And younger generations, seeing limited economic opportunity, have moved away from traditional crafts — putting these irreplaceable skills at risk of being lost forever.</p>

      <h4>How Every Purchase Makes a Difference</h4>
      <p><strong>Fair Income:</strong> Direct purchases at fair prices give artisans the economic foundation they need to continue their craft. <strong>Intergenerational Transfer:</strong> When artisans earn well, they invest in teaching the next generation — keeping ancient skills alive. <strong>Community Strength:</strong> Prosperous artisan communities are better able to maintain their cultural institutions, festivals, and traditions.</p>

      <h4>What to Look For in Authentic Handcrafted Products</h4>
      <p>Authenticity matters. Look for products that disclose their origin — which region, which community, which technique. Look for natural materials and hand-finishing. Slight variations in pattern, colour, or dimension are hallmarks of genuine handcrafted work — and what makes each piece truly unique.</p>

      <p>At Reevanti Global, we are proud to curate handcrafted products from artisan communities across India. Every Handcrafted & Artisan product in our collection comes with a commitment: it is made by real artisans, using traditional techniques, with care for the environment and the communities that make them.</p>
    `
  },
  {
    id: 6,
    slug: 'digital-vs-physical-products-which-to-buy-online',
    title: 'Digital vs Physical Products: Which Should You Buy Online?',
    category: 'Digital Products',
    date: 'April 18, 2026',
    excerpt: 'A practical comparison of digital and physical products to help you make smarter purchasing decisions online.',
    content: `
      <p>When you're shopping online, you're often choosing between two fundamentally different types of products: digital and physical. Both offer distinct advantages, and the best choice depends on your needs, values, and the specific product category. Here's a clear, practical guide to help you decide.</p>

      <h4>Digital Products: The Case For</h4>
      <p><strong>Instant Delivery:</strong> Digital products are available the moment you complete your purchase. No waiting for shipping, no tracking parcels, no missed deliveries. <strong>Always Available:</strong> A digital product doesn't go out of stock. You can purchase and access it 24/7, from anywhere. <strong>Zero Shipping Cost:</strong> No delivery charges, no fuel cost, no packaging waste. <strong>Eco-Friendly:</strong> The carbon footprint of a digital product is a fraction of its physical equivalent.</p>

      <h4>Physical Products: The Case For</h4>
      <p><strong>Tangible Value:</strong> Some products simply need to be physical — clothing, home décor, kitchen tools, and handcrafted goods all deliver value through their physical presence and use. <strong>Sensory Experience:</strong> The texture of a handwoven fabric, the warmth of a ceramic mug, the scent of a natural soap — these experiences cannot be replicated digitally. <strong>Gift Value:</strong> A beautifully crafted physical product makes a meaningful, memorable gift in a way that a digital file rarely can.</p>

      <h4>When to Choose Digital Products</h4>
      <ul>
        <li>You need a tool, resource, or piece of content immediately</li>
        <li>You're purchasing educational material or professional templates</li>
        <li>You want to minimise your environmental impact</li>
        <li>You're buying something you'll use on a screen — design assets, software, media</li>
      </ul>

      <h4>When to Choose Handcrafted Physical Products</h4>
      <ul>
        <li>You want something unique, made by hand with care and skill</li>
        <li>You're looking for sustainable, eco-friendly products made in India</li>
        <li>You want to support Indian artisan communities and preserve cultural heritage</li>
        <li>You're looking for a meaningful gift that tells a story</li>
      </ul>

      <h4>Reevanti Global's Approach</h4>
      <p>At Reevanti Global, we've built our catalogue around these two complementary categories — Digital Products for those seeking instant, professional digital tools; and Handcrafted & Artisan products for those who value authenticity, sustainability, and the beauty of things made by hand. Together, they represent the best of what thoughtful eCommerce can offer.</p>
    `
  }
];

// ─── Blog Rendering ────────────────────────────────────────────────────────────
function renderBlogGrid() {
  const container = document.getElementById('blogs-content');
  if (!container) return;

  container.innerHTML = `
    <div class="container blog-grid">
      ${blogs.map(blog => `
        <article class="blog-card clickable-card" data-blog-id="${blog.id}" data-blog-slug="${blog.slug}">
          <div class="blog-img placeholder-img">${blog.category}</div>
          <div class="blog-content">
            <span class="blog-date">${blog.date}</span>
            <h3>${blog.title}</h3>
            <p>${blog.excerpt}</p>
            <span class="read-more">Read More &rarr;</span>
          </div>
        </article>
      `).join('')}
    </div>
  `;

  container.querySelectorAll('.clickable-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.getAttribute('data-blog-id'));
      const slug = card.getAttribute('data-blog-slug');
      navigateToBlog(id, slug);
    });
  });
}

function navigateToBlog(id, slug) {
  history.pushState({ page: 'blogs', blogId: id }, '', `/blogs/${slug}`);
  renderBlogArticle(id);
}

function renderBlogArticle(id) {
  const blog = blogs.find(b => b.id === id);
  if (!blog) return;

  const container = document.getElementById('blogs-content');
  container.innerHTML = `
    <div class="container blog-article">
      <button class="btn-back" id="backToBlogs">&larr; Back to Insights</button>
      <div class="article-meta">
        <span class="blog-date">${blog.date}</span>
        <span class="article-category">${blog.category}</span>
      </div>
      <h2 class="article-title">${blog.title}</h2>
      <div class="article-body">${blog.content}</div>
      <div class="article-footer">
        <p>Written by <strong>Reevanti Global</strong> &mdash; Insights on Digital Products, Handcrafted Artisan goods, and thoughtful eCommerce.</p>
        <button class="btn btn-primary" id="backToBlogsBottom">&larr; Back to All Insights</button>
      </div>
    </div>
  `;

  document.getElementById('backToBlogs').addEventListener('click', () => {
    history.pushState({ page: 'blogs' }, '', '/blogs');
    renderBlogGrid();
  });
  document.getElementById('backToBlogsBottom').addEventListener('click', () => {
    history.pushState({ page: 'blogs' }, '', '/blogs');
    renderBlogGrid();
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── SEO: per-page title & description ───────────────────────────────────────
const pageMeta = {
  home:     { title: 'Reevanti Global | AI eBooks, Digital Products & Indian Handcrafted Artisan Goods', desc: 'Reevanti Global is an MSME-registered eCommerce brand specialising in AI-powered eBooks, Digital Products, and authentic Indian Handcrafted Artisan goods. Shop online, export globally.' },
  about:    { title: 'About Reevanti Global | MSME-Registered Indian Exporter – AI eBooks & Artisan Crafts', desc: 'Reevanti Global is an MSME-registered eCommerce company from Navi Mumbai, India — bridging AI-powered Digital Products with authentic Indian Handcrafted Artisan goods for domestic and international markets.' },
  products: { title: 'Products | AI eBooks, Digital Tools & Indian Handcrafted Artisan Goods – Reevanti Global', desc: 'Shop Reevanti Global\'s two categories: AI-powered eBooks & Digital Products for professionals, creators & entrepreneurs; and authentic Indian Handcrafted Artisan goods for domestic buyers and global traders.' },
  blogs:    { title: 'Insights & Resources | AI, eBooks, Indian Handicrafts & eCommerce – Reevanti Global', desc: 'Expert articles on AI, Artificial Intelligence, eBooks, Digital Products, Indian Handicrafts, Artisan Crafts, MSME, export trade, and eCommerce trends from Reevanti Global.' },
  contact:  { title: 'Contact Reevanti Global | AI Digital Products & Indian Artisan Goods Enquiries', desc: 'Contact Reevanti Global for AI eBook enquiries, Indian Handcrafted Artisan product orders, export trade partnerships, or MSME collaboration. Reach us by email or WhatsApp.' },
  privacy:  { title: 'Privacy Policy | Reevanti Global', desc: 'Read the Reevanti Global Privacy Policy to understand how we collect, use, and protect your personal information.' },
  terms:    { title: 'Terms of Use | Reevanti Global', desc: "Review the Terms of Use governing your use of Reevanti Global's website, products, and eCommerce platform." },
  digitalproductslanding: { title: 'AI eBooks & Digital Products | PromptFlow Pro - Reevanti Global', desc: 'Shop 100+ professional AI prompt eBooks for Content, Marketing, Coding & Business. Works with ChatGPT, Claude & Gemini. Instant download from Reevanti Global.' }
};

function updateMeta(pageId, customTitle, customDesc) {
  const meta   = pageMeta[pageId] || pageMeta.home;
  const title  = customTitle || meta.title;
  const desc   = customDesc  || meta.desc;
  const url    = 'https://www.reevantiglobal.com' + (pageToUrl[pageId] || '/');

  // Title
  document.title = title;

  // Meta description
  const descTag = document.querySelector('meta[name="description"]');
  if (descTag) descTag.setAttribute('content', desc);

  // Canonical URL — critical for indexing unique pages
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', url);

  // Open Graph tags
  const setMeta = (prop, val, attr = 'property') => {
    let el = document.querySelector(`meta[${attr}="${prop}"]`);
    if (!el) { el = document.createElement('meta'); el.setAttribute(attr, prop); document.head.appendChild(el); }
    el.setAttribute('content', val);
  };
  setMeta('og:url',              url);
  setMeta('og:title',            title);
  setMeta('og:description',      desc);
  setMeta('twitter:title',       title, 'name');
  setMeta('twitter:description', desc,  'name');

  // Fire Meta Pixel PageView on SPA navigation
  if (typeof fbq === 'function') fbq('track', 'PageView');
}

// ─── SPA Navigation ───────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinksContainer = document.querySelector('.nav-links');
  const sections = document.querySelectorAll('.page-section');

  mobileMenuToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
  });

  // ── Show a page by section ID ──────────────────────────────────────────────
  function showPage(pageId) {
    sections.forEach(s => s.classList.remove('active-section'));
    const target = document.getElementById(pageId);
    if (target) target.classList.add('active-section');

    // Update active nav link
    document.querySelectorAll('a[data-page]').forEach(link => {
      link.classList.toggle('active', link.getAttribute('data-page') === pageId);
    });

    navLinksContainer.classList.remove('active');
    updateMeta(pageId);

    if (pageId === 'blogs') renderBlogGrid();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ── Navigate: push URL + show page ────────────────────────────────────────
  function navigateTo(pageId) {
    const url = pageToUrl[pageId] || '/';
    history.pushState({ page: pageId }, '', url);
    showPage(pageId);
  }

  // ── Intercept all internal nav links (a[data-page]) ───────────────────────
  document.querySelectorAll('a[data-page]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const pageId = link.getAttribute('data-page');
      navigateTo(pageId);
    });
  });

  // ── Action buttons (data-target) ──────────────────────────────────────────
  document.querySelectorAll('button[data-target]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      navigateTo(btn.getAttribute('data-target'));
    });
  });

  // ── Browser back / forward ────────────────────────────────────────────────
  window.addEventListener('popstate', e => {
    const pageId = e.state?.page || urlToPage[window.location.pathname] || 'home';
    if (e.state?.blogId) {
      showPage('blogs');
      renderBlogArticle(e.state.blogId);
    } else {
      showPage(pageId);
    }
  });

  // ── Initial load: resolve URL → page ──────────────────────────────────────
  const pathParts = window.location.pathname.split('/');
  const isBlogArticle = pathParts[1] === 'blogs' && pathParts[2];
  if (isBlogArticle) {
    const blogId = blogSlugToId[pathParts[2]];
    showPage('blogs');
    if (blogId) renderBlogArticle(blogId);
  } else {
    const initialPage = urlToPage[window.location.pathname] || 'home';
    showPage(initialPage);
    history.replaceState({ page: initialPage }, '', window.location.pathname);
  }

  // ── Contact Form ──────────────────────────────────────────────────────────
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerText;
      submitBtn.innerText = 'Sending...';
      submitBtn.disabled = true;

      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        inquiryType: document.getElementById('inquiryType').value,
        message: document.getElementById('message').value,
        _subject: 'New Inquiry from Reevanti Global Website',
        _template: 'table'
      };

      fetch('https://formsubmit.co/ajax/contact@reevantiglobal.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(() => {
        contactForm.reset();
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        formSuccess.classList.remove('hidden');
        setTimeout(() => formSuccess.classList.add('hidden'), 5000);
      })
      .catch(() => {
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        alert('There was an error sending your message. Please try again later.');
      });
    });
  }

  // ── FAQ Accordion for Landing Pages ─────────────────────────────────────────
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      const answer = button.nextElementSibling;
      if (button.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = null;
      }
    });
  });

  // ── Animated Stat Counters (IntersectionObserver) ────────────────────────────
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = current;
    }, 16);
  }

  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.lp-stat-num').forEach(animateCounter);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.lp-stats-bar').forEach(el => statObserver.observe(el));

  // ── Smooth scroll for "View AI Collection" anchor ────────────────────────────
  document.querySelectorAll('.lp-scroll-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById('lp-collection');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

});
