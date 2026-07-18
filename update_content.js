const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Update routing in index.html
html = html.replace('href="/digitalproducts/landing"', 'href="/products/AIeBooks"');

// 2. Remove 'India' from landing page
html = html.replace('Trusted by professionals across India', 'Trusted by professionals globally');
html = html.replace('<h4>Built For Indian Businesses</h4><p>Real examples tailored to MSMEs, startups, retail, and professional services.</p>', '<h4>Built For Any Business</h4><p>Real examples tailored to MSMEs, startups, retail, and professional services worldwide.</p>');
html = html.replace('<button class="faq-question">Is this relevant for Indian businesses?</button><div class="faq-answer"><p>Yes. Examples and use cases are designed with Indian MSMEs, startups, retail, and service businesses in mind.</p></div>', '<button class="faq-question">Is this relevant for businesses globally?</button><div class="faq-answer"><p>Yes. Examples and use cases are designed with global MSMEs, startups, retail, and service businesses in mind.</p></div>');
html = html.replace('resources for entrepreneurs, professionals and businesses across India.', 'resources for entrepreneurs, professionals and businesses globally.');
html = html.replace('<div class="lp-about-badge">🇮🇳 Made in India</div>', '<div class="lp-about-badge">🌍 Global Reach</div>');

// 3. Update the Collection section
const newCollection = `            <div class="lp-books-grid">
              <div class="lp-book-card">
                <img src="/assets/ebook-small-businesses.jpg" alt="AI for Small Businesses" style="width: 100%; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.3);" />
                <h3>AI for Small Businesses</h3>
                <p class="lp-book-tagline">Automate Your Business in Just 7 Days</p>
                <p>Learn how AI can help you:</p>
                <ul class="lp-book-list">
                  <li>✔ Save 10+ hours every week</li>
                  <li>✔ Reduce operational costs</li>
                  <li>✔ Generate marketing content instantly</li>
                  <li>✔ Marketing on autopilot mode</li>
                  <li>✔ 20 Ready-to-Use AI Prompts</li>
                </ul>
                <a href="https://payhip.com/b/AuY31" target="_blank" class="btn btn-primary lp-book-btn">Download Now</a>
              </div>
              
              <div class="lp-book-card">
                <img src="/assets/ebook-home-service.jpg" alt="AI for Home Service Businesses" style="width: 100%; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.3);" />
                <h3>AI for Home Service Businesses</h3>
                <p class="lp-book-tagline">5 AI Tools to Save Time, Get More Customers</p>
                <p>Inside you'll discover:</p>
                <ul class="lp-book-list">
                  <li>✔ Never miss another call</li>
                  <li>✔ Quotes in minutes</li>
                  <li>✔ Scheduling that runs itself</li>
                  <li>✔ More reviews, better reputation</li>
                  <li>✔ Marketing that works 24/7</li>
                </ul>
                <a href="https://payhip.com/b/e12Mf" target="_blank" class="btn btn-primary lp-book-btn">Download Now</a>
              </div>

              <div class="lp-book-card lp-book-featured">
                <div class="lp-book-badge">⭐ BESTSELLER</div>
                <img src="/assets/ebook-promptflow-pro.jpg" alt="PromptFlow Pro" style="width: 100%; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 4px 10px rgba(0,0,0,0.3);" />
                <h3>PromptFlow Pro</h3>
                <p class="lp-book-tagline">For Marketing & Automation</p>
                <p>100+ professionally designed prompts covering:</p>
                <ul class="lp-book-list">
                  <li>✔ Content Writing Prompts</li>
                  <li>✔ Marketing & Copywriting Prompts</li>
                  <li>✔ Coding & Automation Prompts</li>
                  <li>✔ Business Operations Prompts</li>
                  <li>✔ 40 Chapters & 4 Modules</li>
                </ul>
                <a href="https://payhip.com/b/2RAjZ" target="_blank" class="btn btn-primary lp-book-btn">Download Now</a>
              </div>
            </div>`;

html = html.replace(/<div class="lp-books-grid">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<!-- WHY DIFFERENT -->/, newCollection + '\n          </div>\n        </div>\n\n        <!-- WHY DIFFERENT -->');

fs.writeFileSync('index.html', html, 'utf8');

// Update main.js routing
let mainjs = fs.readFileSync('main.js', 'utf8');
mainjs = mainjs.replace("'/digitalproducts/landing': 'digitalproductslanding'", "'/products/AIeBooks': 'digitalproductslanding'");
mainjs = mainjs.replace("'digitalproductslanding': '/digitalproducts/landing'", "'digitalproductslanding': '/products/AIeBooks'");
fs.writeFileSync('main.js', mainjs, 'utf8');

console.log('Update completed successfully');
