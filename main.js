document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // SPA Navigation Logic
  const links = document.querySelectorAll('a[data-link]');
  const sections = document.querySelectorAll('.page-section');
  const actionButtons = document.querySelectorAll('button[data-target]');

  function navigateTo(targetId) {
    // Hide all sections
    sections.forEach(section => {
      section.classList.remove('active-section');
    });

    // Show target section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('active-section');
    }

    // Update active nav link
    links.forEach(link => {
      if (link.getAttribute('data-link') === targetId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Close mobile menu if open
    navLinks.classList.remove('active');

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Event Listeners for Nav Links
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-link');
      navigateTo(targetId);
    });
  });

  // Event Listeners for Action Buttons (e.g. Hero buttons)
  actionButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-target');
      navigateTo(targetId);
    });
  });

  // Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerText;
      submitBtn.innerText = 'Sending...';
      submitBtn.disabled = true;

      // Gather form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        inquiryType: document.getElementById('inquiryType').value,
        message: document.getElementById('message').value,
        _subject: "New Inquiry from Reevanti Global Website",
        _template: "table" // FormSubmit formatting
      };

      // Send data to FormSubmit via AJAX
      fetch("https://formsubmit.co/ajax/contact@reevantiglobal.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
        // Handle Success
        contactForm.reset();
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        
        formSuccess.classList.remove('hidden');
        
        setTimeout(() => {
          formSuccess.classList.add('hidden');
        }, 5000);
      })
      .catch(error => {
        console.error('Error:', error);
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        alert("There was an error sending your message. Please try again later.");
      });
    });
  }
});
