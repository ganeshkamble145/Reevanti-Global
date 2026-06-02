# Reevanti Global Website

This is the official website for **Reevanti Global**, a trusted eCommerce and international trading company based in Navi Mumbai, India.

## Tech Stack
The project is built using modern web standards for maximum performance and compatibility:
- **HTML5**
- **Vanilla CSS** (Custom styling with CSS Variables)
- **Vanilla JavaScript** (ES6+ for smooth SPA-like navigation)
- **Vite** (Next-generation frontend tooling for fast development and optimized builds)

## Local Development
To run this project locally on your machine, you need [Node.js](https://nodejs.org/) installed.

1. Clone or download the repository.
2. Open your terminal in the project directory.
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the local development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

## Building for Production
To generate the final, highly-optimized production files:

```bash
npm run build
```
This will create a `dist` folder containing the minified HTML, CSS, JavaScript, and assets.

## Deployment (GoDaddy)
This website is a static site, meaning it does not require a complex backend like Node.js or Python to run in production. It is perfectly suited for GoDaddy cPanel or standard web hosting.

1. Run the build command: `npm run build`.
2. Locate the generated `dist` folder in your project directory.
3. Log in to your GoDaddy account and open the **cPanel File Manager**.
4. Navigate to your `public_html` directory (the root folder for www.reevantiglobal.com).
5. Upload **all the contents** of the `dist` folder directly into `public_html`.
6. Your website is now live!

## Contact Form Integration
The contact form is powered by [FormSubmit](https://formsubmit.co/). 
- Forms are configured to send directly to `contact@reevantiglobal.com`.
- **Important:** The first time the form is submitted on the live site, FormSubmit will send an activation email to `contact@reevantiglobal.com`. You must click the confirmation link in that email to activate the service. All subsequent submissions will route automatically.
