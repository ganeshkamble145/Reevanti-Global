const fs = require('fs');

function replaceInFile(file, replacements) {
  let content = fs.readFileSync(file, 'utf8');
  for (const r of replacements) {
    content = content.replace(r.search, r.replace);
  }
  fs.writeFileSync(file, content, 'utf8');
}

// index.html replacements
replaceInFile('index.html', [
  { search: /"contactType": "customer service"/g, replace: '"contactType": "customer support"' },
  { search: /{"@type": "Service", "name": "Digital Products"}/g, replace: '{"@type": "Thing", "name": "Digital Products"}' },
  { search: /{"@type": "Service", "name": "Handcrafted & Artisan"}/g, replace: '{"@type": "Thing", "name": "Handcrafted & Artisan"}' },
  { search: /ebook-home-service\.jpg/g, replace: 'ebook-home-business.jpg' },
  { search: /AI for Home Service Businesses/g, replace: 'AI for Home Businesses' },
  { search: /and professional services worldwide/g, replace: 'and professional trades worldwide' },
  { search: /and service businesses in mind/g, replace: 'and trade businesses in mind' },
  { search: /with service providers/g, replace: 'with third-party providers' },
  { search: /Our services are not intended/g, replace: 'Our platform is not intended' },
  { search: /Terms of Service/g, replace: 'Terms of Use' },
  { search: /terms-of-service/g, replace: 'terms-of-use' },
  { search: /eCommerce services/g, replace: 'eCommerce platform' },
  { search: /4. Products and Services/g, replace: '4. Products and Offerings' },
  { search: /products or services/g, replace: 'products or platform' },
  { search: /services and products/g, replace: 'offerings and products' },
  { search: /access to our services/g, replace: 'access to our platform' },
  { search: /use of our services/g, replace: 'use of our platform' },
  { search: /Reevanti Global's services/g, replace: "Reevanti Global's platform" }
]);

// server.js replacements
replaceInFile('server.js', [
  { search: /'\/terms-of-service':/g, replace: "'/terms-of-use':" },
  { search: /Terms of Service/g, replace: 'Terms of Use' },
  { search: /eCommerce services/g, replace: 'eCommerce platform' }
]);

// main.js replacements
replaceInFile('main.js', [
  { search: /'\/terms-of-service'/g, replace: "'/terms-of-use'" },
  { search: /Terms of Service/g, replace: 'Terms of Use' },
  { search: /eCommerce services/g, replace: 'eCommerce platform' }
]);

// public/sitemap.xml replacements
replaceInFile('public/sitemap.xml', [
  { search: /terms-of-service/g, replace: 'terms-of-use' }
]);

console.log('Replacements completed.');
