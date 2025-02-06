---
layout: default
title: Resources
description: Essential Resources and Support Services
permalink: /resources/
---

<style>
  .resources-header {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                url('https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=2070') no-repeat center/cover;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    margin-bottom: 0;
  }

  .search-section {
    max-width: 800px;
    margin: 0 auto 3rem;
    padding: 1rem;
    position: relative;
  }

  .search-bar {
    width: 100%;
    padding: 1.2rem 2rem;
    border: 2px solid #e5e7eb;
    border-radius: 50px;
    font-size: 1.1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }

  .search-bar:focus {
    border-color: #2563eb;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.15);
    outline: none;
  }

  .category-filters {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2rem 0;
  }

  .filter-button {
    padding: 0.8rem 1.8rem;
    border: none;
    border-radius: 25px;
    background: #f3f4f6;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
  }

  .filter-button.active {
    background: #2563eb;
    color: white;
  }

  .filter-button:hover {
    background: #2563eb;
    color: white;
    transform: translateY(-2px);
  }

  .resources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .resource-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .resource-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  .resource-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .resource-content {
    padding: 2rem;
  }

  .resource-category {
    display: inline-block;
    padding: 0.5rem 1.2rem;
    background: #e5e7eb;
    border-radius: 20px;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .resource-card h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: #1f2937;
  }

  .resource-card p {
    color: #6b7280;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .button {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background: #2563eb;
    color: white;
    text-decoration: none;
    border-radius: 25px;
    transition: all 0.3s ease;
  }

  .button:hover {
    background: #1d4ed8;
    transform: translateX(5px);
  }

  .resource-stats {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    color: #6b7280;
    font-size: 0.9rem;
  }

  .stat {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .quick-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 2rem 0;
  }

  .quick-link {
    background: #2563eb;
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .quick-link:hover {
    background: #1d4ed8;
    transform: translateY(-3px);
  }

  .emergency-banner {
    background: #fee2e2;
    color: #dc2626;
    padding: 1rem;
    text-align: center;
    margin-bottom: 2rem;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    .resources-grid {
      grid-template-columns: 1fr;
    }
    
    .resources-header {
      padding: 4rem 1rem;
    }
  }

  .category-header {
    background: #f8fafc;
    padding: 4rem 2rem;
    margin: 2rem 0;
    text-align: center;
  }

  .emergency-resources {
    background: linear-gradient(45deg, #dc2626, #ef4444);
    color: white;
    padding: 2rem;
    border-radius: 15px;
    margin: 2rem auto;
    max-width: 1200px;
  }

  .quick-access {
    background: #1e40af;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .quick-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .quick-link {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }

  .quick-link:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  .quick-link.active {
    background: white;
    color: #1e40af;
  }

  .emergency-banner {
    background: linear-gradient(45deg, #dc2626, #ef4444);
    color: white;
    padding: 2rem;
    text-align: center;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.01); }
    100% { transform: scale(1); }
  }

  .resource-section {
    padding: 4rem 2rem;
    scroll-margin-top: 60px;
  }

  .resource-section:nth-child(even) {
    background: #f8fafc;
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .section-header h2 {
    font-size: 2.5rem;
    color: #1e40af;
    margin-bottom: 1rem;
  }

  .resource-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .resource-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .resource-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  .resource-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .resource-content {
    padding: 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .resource-content h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #1e40af;
  }

  .resource-content ul {
    list-style-type: none;
    padding: 0;
    margin: 1rem 0;
  }

  .resource-content li {
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
  }

  .resource-content li:before {
    content: "✓";
    color: #2563eb;
    position: absolute;
    left: 0;
  }

  .button {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background: #2563eb;
    color: white;
    text-decoration: none;
    border-radius: 25px;
    transition: all 0.3s ease;
    text-align: center;
    margin-top: auto;
    border: none;
    cursor: pointer;
  }

  .button:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
  }

  .contact-support {
    background: linear-gradient(45deg, #1e40af, #3b82f6);
    color: white;
    padding: 4rem 2rem;
    text-align: center;
    margin-top: 4rem;
  }

  .support-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 2rem auto;
  }

  .support-card {
    background: rgba(255, 255, 255, 0.1);
    padding: 2rem;
    border-radius: 15px;
    backdrop-filter: blur(10px);
  }
</style>

<header class="page-header" role="banner">
  <h1 class="project-name">{{ page.title }}</h1>
  <h2 class="project-tagline">{{ page.description }}</h2>
  <a href="{{ site.baseurl }}/" class="btn">Home</a>
  <a href="{{ site.baseurl }}/resources" class="btn">Resources</a>
  <a href="{{ site.baseurl }}/employment" class="btn">Employment</a>
  <a href="{{ site.baseurl }}/community" class="btn">Community</a>
  <a href="{{ site.baseurl }}/about" class="btn">About</a>
  <a href="{{ site.baseurl }}/contact" class="btn">Contact</a>
  <a href="{{ site.baseurl }}/sources" class="btn">Sources</a>
</header>

<div class="emergency-banner">
    <strong>Emergency? Call Now:</strong> 911 for immediate assistance | UNHCR Helpline: 1-800-XXX-XXXX
</div>

<div class="resources-header">
  <div class="header-content">
    <h1>Resource Center</h1>
    <p>Access essential services and support for your journey</p>
  </div>
</div>

<div class="quick-access">
  <div class="quick-links">
    <a href="#emergency" class="quick-link">Emergency</a>
    <a href="#housing" class="quick-link">Housing</a>
    <a href="#legal" class="quick-link">Legal</a>
    <a href="#healthcare" class="quick-link">Healthcare</a>
    <a href="#education" class="quick-link">Education</a>
  </div>
</div>

<div class="emergency-banner" id="emergency">
  <h2>🚨 Emergency Support Available 24/7</h2>
  <p>Call 1-800-375-5283 for immediate assistance</p>
  <a href="tel:1-800-375-5283" class="button">Call Now</a>
</div>

<section class="resource-section" id="housing">
  <div class="section-header">
    <h2>Housing Resources</h2>
    <p>Find safe and affordable housing options</p>
  </div>
  <div class="resource-grid">
    <div class="resource-card">
      <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2070" alt="Emergency Housing" class="resource-image">
      <div class="resource-content">
        <h3>Emergency Shelter</h3>
        <p>Immediate temporary housing for those in urgent need</p>
        <ul>
          <li>24/7 availability</li>
          <li>Safe environments</li>
          <li>Basic necessities provided</li>
        </ul>
        <a href="https://www.shelterlistings.org/" class="button" target="_blank">Find Shelter</a>
      </div>
    </div>
    
    <div class="resource-card">
      <img src="https://images.unsplash.com/photo-1582883693742-5d25fbef2c85?q=80&w=2070" alt="Long-term Housing" class="resource-image">
      <div class="resource-content">
        <h3>Long-term Housing</h3>
        <p>Assistance finding permanent housing solutions</p>
        <ul>
          <li>Rental assistance programs</li>
          <li>Housing counseling</li>
          <li>Utility support</li>
        </ul>
        <a href="https://www.hud.gov/topics/rental_assistance" class="button" target="_blank">Learn More</a>
      </div>
    </div>
  </div>
</section>

<section class="resource-section" id="legal">
  <div class="section-header">
    <h2>Legal Resources</h2>
    <p>Access legal support and documentation assistance</p>
  </div>
  <div class="resource-grid">
    <div class="resource-card">
      <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070" alt="Legal Aid" class="resource-image">
      <div class="resource-content">
        <h3>Legal Assistance</h3>
        <ul>
          <li>Free legal consultation</li>
          <li>Document preparation</li>
          <li>Court representation</li>
        </ul>
        <a href="https://www.immigrationadvocates.org/nonprofit/legaldirectory/" class="button" target="_blank">Find Lawyer</a>
      </div>
    </div>
    
    <div class="resource-card">
      <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070" alt="Documentation" class="resource-image">
      <div class="resource-content">
        <h3>Documentation Support</h3>
        <ul>
          <li>ID and passport assistance</li>
          <li>Work permit applications</li>
          <li>Translation services</li>
        </ul>
        <a href="{{ site.baseurl }}/contact" class="button">Get Help</a>
      </div>
    </div>
  </div>
</section>

<section class="resource-section" id="healthcare">
  <div class="section-header">
    <h2>Healthcare Services</h2>
    <p>Access medical care and mental health support</p>
  </div>
  <div class="resource-grid">
    <div class="resource-card">
      <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080" alt="Medical Care" class="resource-image">
      <div class="resource-content">
        <h3>Medical Care</h3>
        <ul>
          <li>Primary care services</li>
          <li>Vaccination programs</li>
          <li>Specialist referrals</li>
        </ul>
        <a href="https://findahealthcenter.hrsa.gov/" class="button" target="_blank">Find Clinic</a>
      </div>
    </div>
    
    <div class="resource-card">
      <img src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2070" alt="Mental Health" class="resource-image">
      <div class="resource-content">
        <h3>Mental Health Support</h3>
        <ul>
          <li>Counseling services</li>
          <li>Support groups</li>
          <li>Crisis intervention</li>
        </ul>
        <a href="https://www.samhsa.gov/find-treatment" class="button" target="_blank">Get Support</a>
      </div>
    </div>
  </div>
</section>

<section class="resource-section" id="education">
  <div class="section-header">
    <h2>Education Resources</h2>
    <p>Access educational opportunities and training programs</p>
  </div>
  <div class="resource-grid">
    <div class="resource-card">
      <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071" alt="Education" class="resource-image">
      <div class="resource-content">
        <h3>Language Classes</h3>
        <ul>
          <li>ESL programs</li>
          <li>Conversation practice</li>
          <li>Cultural orientation</li>
        </ul>
        <a href="{{ site.baseurl }}/contact" class="button">Enroll Now</a>
      </div>
    </div>
    
    <div class="resource-card">
      <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070" alt="Training" class="resource-image">
      <div class="resource-content">
        <h3>Job Training</h3>
        <ul>
          <li>Vocational programs</li>
          <li>Skills certification</li>
          <li>Career counseling</li>
        </ul>
        <a href="{{ site.baseurl }}/employment" class="button">Learn More</a>
      </div>
    </div>
  </div>
</section>

<section class="contact-support">
  <h2>Need Additional Help?</h2>
  <p>Our support team is here to assist you</p>
  <div class="support-grid">
    <div class="support-card">
      <h3>📞 Phone Support</h3>
      <p>Call us at 1-800-REFUGE-HELP</p>
    </div>
    <div class="support-card">
      <h3>💬 Live Chat</h3>
      <p>Chat with a support agent</p>
    </div>
    <div class="support-card">
      <h3>📧 Email Support</h3>
      <p>support@therefuge.org</p>
    </div>
  </div>
  <a href="{{ site.baseurl }}/contact" class="button">Contact Us</a>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const searchBar = document.getElementById('resourceSearch');
    const resourceCards = document.querySelectorAll('.resource-card');
    const filterButtons = document.querySelectorAll('.filter-button');
    let currentCategory = 'all';

    // Search functionality
    searchBar.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        filterResources(searchTerm, currentCategory);
    });

    // Category filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.dataset.category;
            currentCategory = category;
            
            // Update active button state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter resources
            filterResources(searchBar.value.toLowerCase(), category);
        });
    });

    function filterResources(searchTerm, category) {
        resourceCards.forEach(card => {
            const content = card.textContent.toLowerCase();
            const cardCategory = card.dataset.category;
            const matchesSearch = content.includes(searchTerm);
            const matchesCategory = category === 'all' || cardCategory === category;

            if (matchesSearch && matchesCategory) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Sticky navigation highlight
const sections = document.querySelectorAll('.resource-section');
const quickLinks = document.querySelectorAll('.quick-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    quickLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
</script>

<style>
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>

<!-- Google Translate -->
<div id="google_translate_element" style="text-align: center; padding: 1rem;"></div>
<script>
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,ar,fr,ps,es,zh-CN,hi,ur',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}
</script>
<script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>