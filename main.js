// ─── URL → Section Map ────────────────────────────────────────────────────────
const urlToPage = {
  '/':               'home',
  '/about-us':       'about',
  '/products':       'products',
  '/our-services':   'services',
  '/blogs':          'blogs',
  '/contact-us':     'contact',
  '/privacy-policy': 'privacy',
  '/terms-of-service': 'terms'
};

// Blog slug → blog ID mapping for direct blog article URLs
const blogSlugToId = {
  'how-ecommerce-is-changing-online-shopping-in-india': 1,
  '5-things-to-check-before-buying-products-online': 2,
  'building-trust-in-online-ecommerce': 3,
  'top-ecommerce-trends-in-india-for-2026': 4,
  'how-online-shopping-platforms-benefit-both-sellers-and-buyers': 5,
  'how-to-identify-genuine-products-when-shopping-online': 6
};

const pageToUrl = {
  home:     '/',
  about:    '/about-us',
  products: '/products',
  services: '/our-services',
  blogs:    '/blogs',
  contact:  '/contact-us',
  privacy:  '/privacy-policy',
  terms:    '/terms-of-service'
};

// ─── Blog Data ────────────────────────────────────────────────────────────────
const blogs = [
  {
    id: 1,
    slug: 'how-ecommerce-is-changing-online-shopping-in-india',
    title: 'How eCommerce is Changing Online Shopping in India',
    category: 'eCommerce Trends',
    date: 'June 2, 2026',
    excerpt: 'Exploring how digital platforms are making quality products accessible to every corner of India.',
    content: `
      <p>The rise of eCommerce has fundamentally reshaped how Indians shop. What once required a trip to a physical store can now happen in minutes — connecting buyers in small towns with quality products from trusted sellers anywhere in the country.</p>

      <h4>The Online Shopping Revolution</h4>
      <p>Modern eCommerce platforms have democratised retail by removing traditional barriers. Customers in tier-2 and tier-3 cities now have access to the same quality products as those in metros — delivered to their doorstep within days. For a company like Reevanti Global, this means the ability to reach every customer across India with genuine, quality products.</p>

      <h4>Mobile-First Shopping</h4>
      <p>India's smartphone penetration has been the biggest driver of eCommerce growth. Today, over 70% of online purchases happen via mobile apps. This has pushed sellers to optimise listings, imagery, and descriptions for mobile screens — ensuring a smooth, fast shopping experience for every customer.</p>

      <h4>Technology as the Enabler</h4>
      <p>Technologies such as AI-powered product recommendations, real-time inventory management, digital payment gateways (UPI, credit/debit cards, EMI options), and same-day delivery infrastructure have made online shopping more convenient than ever before.</p>

      <h4>Quality and Trust — The New Currency</h4>
      <p>As eCommerce matures, customers are increasingly choosing sellers based on reviews, ratings, and product authenticity. Sellers who consistently deliver genuine products with excellent after-sales support build lasting customer loyalty — the true currency of online retail.</p>

      <h4>Reevanti Global's Approach</h4>
      <p>At Reevanti Global, we embrace eCommerce as the future of retail. Our active presence on our direct store, combined with our commitment to genuine products and customer satisfaction, allows us to deliver real value to online shoppers across India.</p>
    `
  },
  {
    id: 2,
    slug: '5-things-to-check-before-buying-products-online',
    title: '5 Things to Check Before Buying Products Online',
    category: 'Shopping Tips',
    date: 'May 15, 2026',
    excerpt: 'A practical guide to help you shop smarter and avoid common online shopping pitfalls.',
    content: `
      <p>Online shopping offers unmatched convenience, but it also requires a little more care than walking into a store. Here are five things every smart online shopper should check before hitting the "Buy Now" button.</p>

      <h4>1. Seller Ratings and Reviews</h4>
      <p>Always check the seller's rating and read customer reviews — not just the star rating, but the written feedback. Look for reviews mentioning product quality, packaging, and delivery experience. A seller consistently maintaining 4+ stars with hundreds of reviews is a strong trust signal.</p>

      <h4>2. Product Description and Specifications</h4>
      <p>Read the product description carefully. Check dimensions, materials, compatibility (for electronics), and any included accessories. A clear, detailed description indicates a seller who takes quality seriously. Vague or incomplete descriptions are a red flag.</p>

      <h4>3. Return and Refund Policy</h4>
      <p>Before buying, understand the return window and conditions. Most online products offer a 7–10 day return window. Check whether the return is free or if you bear return shipping costs. Knowing this upfront avoids unpleasant surprises.</p>

      <h4>4. Product Images</h4>
      <p>Look for products with multiple, high-quality photographs — ideally showing the product from different angles and in use. Be cautious of listings with only one generic image, as these may not accurately represent what you receive.</p>

      <h4>5. Price Comparison</h4>
      <p>If a deal looks too good to be true, it usually is. Compare prices across platforms and check whether the low price corresponds to a smaller size, lower quality variant, or a different product altogether. Trustworthy sellers price fairly and consistently.</p>

      <p><strong>At Reevanti Global</strong>, we apply all five standards to every product we list — giving our customers the confidence to shop without hesitation.</p>
    `
  },
  {
    id: 3,
    slug: 'building-trust-in-online-ecommerce',
    title: 'Building Trust in Online eCommerce',
    category: 'Trust & Transparency',
    date: 'April 28, 2026',
    excerpt: 'Why transparency and customer experience are essential in modern eCommerce.',
    content: `
      <p>In the digital age, trust is currency. A customer who trusts your brand will return, recommend, and defend you. One who does not will leave a negative review and never come back. For eCommerce businesses, building and sustaining trust is not optional — it is a core competitive advantage.</p>

      <h4>Why Trust Matters More Than Ever</h4>
      <p>With thousands of options available at a click, customers choose brands they feel confident in. Research consistently shows that trust-related factors — product authenticity, transparent pricing, clear return policies, and responsive support — rank higher than price alone in purchase decisions, especially for first-time buyers.</p>

      <h4>Product Authenticity and Honest Descriptions</h4>
      <p>Nothing destroys trust faster than receiving a product that doesn't match its listing. Accurate product descriptions, genuine photographs, and honest disclosure of specifications are the minimum bar. Reevanti Global maintains strict quality checks and only lists products that have been verified for authenticity.</p>

      <h4>Transparency in Pricing and Policies</h4>
      <p>Hidden charges are a significant source of customer frustration. Present your pricing clearly — including any applicable taxes and shipping costs. Your return and refund policies should be easy to find, easy to read, and easy to act on.</p>

      <h4>Responsive Customer Support</h4>
      <p>A brand that responds quickly to queries and resolves issues fairly earns lasting loyalty. Whether a package is delayed, a product arrives damaged, or a customer has a question, the quality of your support response defines your reputation more than the issue itself.</p>

      <h4>Leveraging Ratings and Reviews</h4>
      <p>Social proof is powerful. Genuine reviews from verified buyers build confidence for new customers. Actively encourage satisfied buyers to leave honest feedback. Respond professionally to negative reviews — acknowledging concerns and offering solutions.</p>

      <p>At Reevanti Global, trust is not just a value — it is our operating model. Every decision we make, from product selection to fulfilment, is guided by our commitment to building long-term confidence with our customers.</p>
    `
  },
  {
    id: 4,
    slug: 'top-ecommerce-trends-in-india-for-2026',
    title: 'Top eCommerce Trends in India for 2026',
    category: 'Industry Trends',
    date: 'April 10, 2026',
    excerpt: 'Understanding the trends shaping online retail in India in 2026 and beyond.',
    content: `
      <p>India's eCommerce market is one of the fastest-growing in the world. Driven by rising smartphone penetration, affordable internet, and growing consumer confidence in online shopping, the sector is evolving rapidly. Here are the key trends shaping online retail in 2026.</p>

      <h4>1. Quick Commerce (Q-Commerce)</h4>
      <p>10-minute and same-day delivery is no longer a luxury — it is becoming an expectation, especially in metro cities. Platforms are investing heavily in dark stores and hyperlocal fulfilment networks to meet this demand. Sellers who optimise for speed will win customer loyalty.</p>

      <h4>2. Video Shopping and Live Commerce</h4>
      <p>Short-form video content and live shopping streams are transforming how customers discover products. Platforms like Instagram Reels, YouTube Shorts, and dedicated live shopping features on eCommerce platforms allow sellers to demonstrate products in real-time, building trust and driving impulse purchases.</p>

      <h4>3. Vernacular Commerce</h4>
      <p>With internet penetration reaching tier-3 cities and rural India, eCommerce platforms are increasingly offering regional language support. Sellers who optimise product listings in Hindi and regional languages can tap into a vast, underserved customer base.</p>

      <h4>4. Sustainable and Eco-Friendly Products</h4>
      <p>Indian consumers are increasingly making purchasing decisions based on environmental values. Products with eco-friendly packaging, sustainable materials, and clear origin labelling are gaining significant traction, especially among younger shoppers.</p>

      <h4>5. AI-Powered Personalisation</h4>
      <p>AI-driven product recommendations, dynamic pricing, and personalised marketing are enabling eCommerce platforms to deliver highly relevant shopping experiences. Sellers who leverage data and analytics to understand customer preferences will outperform those who don't.</p>

      <p>Reevanti Global monitors these trends actively, continuously expanding and refining our product portfolio to align with what Indian online shoppers want most.</p>
    `
  },
  {
    id: 5,
    slug: 'how-online-shopping-platforms-benefit-both-sellers-and-buyers',
    title: 'How Online Shopping Platforms Benefit Both Sellers and Buyers',
    category: 'eCommerce Strategy',
    date: 'March 22, 2026',
    excerpt: 'The advantages of selling and shopping through India\'s leading shopping platforms.',
    content: `
      <p>Online shopping platforms have transformed retail in India. For sellers, they offer unparalleled reach. For consumers, they deliver convenience, trust, and competitive pricing. Understanding how these platforms work is essential for anyone involved in online retail.</p>

      <h4>For Sellers: Immediate Market Access</h4>
      <p>Setting up an online store provides instant access to hundreds of millions of active shoppers without the need to build a standalone eCommerce website. The platform handles payment processing, customer trust signals, and infrastructure — allowing sellers to focus on product quality and inventory management.</p>

      <h4>Fulfilment Infrastructure</h4>
      <p>Advanced fulfilment programmes allow sellers to store inventory in warehouses. The platform then handles picking, packing, and shipping — enabling faster delivery, Prime/our store Plus eligibility, and higher conversion rates.</p>

      <h4>Built-In Trust and Brand Credibility</h4>
      <p>Consumers inherently trust established platforms. When a product is listed on a trusted platform, it carries an implicit trust signal. Seller ratings, verified reviews, and buyer protection policies create a safe environment that encourages purchase confidence.</p>

      <h4>Data and Analytics</h4>
      <p>Platforms provide sellers with rich data on customer behaviour, search trends, and product performance. These insights enable data-driven decisions around pricing, inventory planning, and product development.</p>

      <h4>For Consumers: Value and Convenience</h4>
      <p>Consumers benefit from price competition, a wide product catalogue, fast delivery options, easy returns, and reliable customer support. The ability to compare products, read genuine reviews, and buy with confidence makes these platforms the preferred shopping destination for millions of Indian consumers.</p>

      <p>Reevanti Global's active presence is a deliberate strategy to place quality products where consumers already shop — delivering value to buyers while building a trusted brand presence.</p>
    `
  },
  {
    id: 6,
    slug: 'how-to-identify-genuine-products-when-shopping-online',
    title: 'How to Identify Genuine Products When Shopping Online',
    category: 'Quality & Trust',
    date: 'March 5, 2026',
    excerpt: 'Practical tips to ensure you always receive authentic, quality products when shopping online.',
    content: `
      <p>With millions of products listed across eCommerce platforms, ensuring product authenticity is one of the biggest concerns for online shoppers. Here is a practical guide to help you consistently identify and purchase genuine products.</p>

      <h4>Check the Seller's Profile</h4>
      <p>Always review the seller's profile before purchasing. Look for high ratings (4+ stars), a significant number of completed orders, and recent positive reviews. Established sellers with a long track record are significantly less likely to sell counterfeit or substandard products.</p>

      <h4>Look for Brand Authentication</h4>
      <p>Many online brands are registered under the platform's brand protection programmes. Look for "Sold by [Brand Name]" or "Verified Seller" indicators. Brand-authorised listings come with a higher guarantee of authenticity.</p>

      <h4>Read Product Reviews Carefully</h4>
      <p>Don't just look at the overall star rating — read the written reviews. Pay attention to reviews that mention build quality, packaging, and whether the product matches its description. A pattern of complaints about product quality or mismatch is a strong warning sign.</p>

      <h4>Examine Product Images and Descriptions</h4>
      <p>Genuine sellers invest in high-quality product photography and detailed, accurate descriptions. Multiple images from different angles, lifestyle shots, and specification tables are indicators of a professional, trustworthy listing.</p>

      <h4>Use Platform Buyer Protection</h4>
      <p>Top platforms offer buyer protection programmes. Familiarise yourself with the return window and how to raise a complaint if the product received is not as described. Buying from sellers with good return policies gives you a safety net.</p>

      <p>At Reevanti Global, product authenticity is non-negotiable. We source every product from verified manufacturers and conduct quality checks before dispatch — because our customers deserve nothing less.</p>
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

  // SEO Update
  document.title = `${blog.title} | Reevanti Global Blog`;
  const descTag = document.querySelector('meta[name="description"]');
  if (descTag) descTag.setAttribute('content', blog.excerpt);

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
        <p>Written by <strong>Reevanti Global</strong> &mdash; Insights on eCommerce, online shopping, and quality retail.</p>
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
  home:     { title: 'Reevanti Global | eCommerce Company – Buy Quality Products Online in India', desc: 'Reevanti Global is a trusted eCommerce company in India. Shop quality products directly through our store — genuine products, fast delivery, great prices.' },
  about:    { title: 'About Us | Reevanti Global – India\'s Trusted Online Store', desc: 'Learn about Reevanti Global — our mission to deliver quality products online, our values, and why customers across India trust us.' },
  products: { title: 'Products | Reevanti Global – Home, Electronics, Health & More', desc: 'Explore our product categories: Home & Kitchen, Electronics, Health & Wellness, Digital Products, and Lifestyle products directly through our store.' },
  services: { title: 'Our eCommerce Services | Reevanti Global – Direct to Consumer Store', desc: 'Reevanti Global offers our direct store online selling, Global Sourcing Consulting, IT Consulting, and Import Export services.' },
  blogs:    { title: 'Insights & Resources | Reevanti Global Blog – eCommerce Tips & Trends', desc: 'Read expert articles on eCommerce tips, online shopping trends, online selling, and product quality from Reevanti Global.' },
  contact:  { title: 'Contact Us | Reevanti Global – Get in Touch', desc: 'Contact Reevanti Global for product enquiries, order issues, returns, or feedback. We\'re here to help — reach us by email or WhatsApp.' },
  privacy:  { title: 'Privacy Policy | Reevanti Global', desc: 'Read the Reevanti Global Privacy Policy to understand how we collect, use, and protect your personal information.' },
  terms:    { title: 'Terms of Service | Reevanti Global', desc: 'Review the Terms of Service governing your use of Reevanti Global\'s website, products, and eCommerce services.' }
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
  setMeta('og:url',                  url);
  setMeta('og:title',                title);
  setMeta('og:description',          desc);
  setMeta('twitter:title',           title, 'name');
  setMeta('twitter:description',     desc,  'name');

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
      showPage(pageId);
      renderBlogArticle(e.state.blogId);
    } else {
      showPage(pageId);
    }
  });

  // ── Initial load: resolve URL → page ────────────────────────────────────────
  const path = window.location.pathname;
  let initialPage = urlToPage[path] || 'home';
  let initialBlogId = null;

  // Check if it's a blog article URL: /blogs/some-slug
  if (path.startsWith('/blogs/')) {
    const slug = path.replace('/blogs/', '');
    if (blogSlugToId[slug]) {
      initialPage = 'blogs';
      initialBlogId = blogSlugToId[slug];
    }
  }

  showPage(initialPage);

  // If we landed on a specific blog article, render it
  if (initialBlogId) {
    renderBlogArticle(initialBlogId);
  }

  // Replace state so popstate has correct data on first back-navigation
  history.replaceState({ page: initialPage, blogId: initialBlogId }, '', path);

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
});
