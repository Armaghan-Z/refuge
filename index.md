---
layout: default
title: The Refuge
description: Empowering Lives, Bridging Communities
---

<!-- Language Selector -->
<div class="language-selector">
  <div id="google_translate_element"></div>
  <style>
    /* Hide Google Translate's default look */
    .goog-te-banner-frame.skiptranslate,
    .goog-te-gadget-icon {
      display: none !important;
    }
    .goog-te-gadget-simple {
      background-color: white !important;
      border: none !important;
      padding: 8px 16px !important;
      border-radius: 25px !important;
      font-size: 1rem !important;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1) !important;
    }    
    .goog-te-gadget-simple span {
      color: #333 !important;
    }    
    .goog-te-menu-value span {
      border: none !important;
    }
  </style>
</div>

<style>
  /* Base Styles */
  :root {
    --primary-color: #2563eb;
    --secondary-color: #34d399;
    --text-color: #1f2937;
    --light-bg: #f3f4f6;
  }

  /* Override Cayman's main content padding */
  .main-content {
    padding: 0 !important;
    max-width: none !important;
  }

  body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.8;
    color: var(--text-color);
  }

  /* Hero Section */
  .hero-section {
    min-height: 80vh;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 6rem 3rem;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069') no-repeat center center/cover;
    color: white;
    margin-top: -2rem; /* Compensate for Cayman's padding */
  }

  .hero-content {
    max-width: 900px;
    margin: 0 auto;
    animation: fadeIn 1s ease-out;
  }

  .hero-content h1 {
    font-size: 4.5rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  }

  .hero-content .lead {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
  }

  /* Core Features Section */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    padding: 6rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
    background: white;
  }

  .feature-card {
    background: white;
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
  }

  .feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0,0,0,0.15);
  }

  .feature-card img {
    width: 200px;
    height: 200px;
    margin-bottom: 1.5rem;
    border-radius: 15px;
    object-fit: cover;
  }

  .feature-card h3 {
    color: #1f2937;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  /* Resources Section */
  .resources-section {
    background: var(--light-bg);
    padding: 4rem 2rem;
  }

  /* Call to Action */
  .cta-section {
    background: linear-gradient(135deg, #2563eb, #3b82f6);
    color: white;
    text-align: center;
    padding: 8rem 2rem;
  }

  .cta-section h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }

  .button {
    display: inline-block;
    padding: 1rem 2.5rem;
    border-radius: 50px;
    background: white;
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    margin: 1rem;
    font-size: 1.1rem;
  }

  .button:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }

  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 2.5rem;
    }
    
    .features-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<!-- Hero Section -->
<div class="hero-section">
  <div class="hero-content">
    <h1>The Refuge</h1>
    <p class="lead">Supporting and empowering refugees on their journey to a new life</p>
    <div class="hero-buttons">
      <a href="{{ site.baseurl }}/resources" class="button">Find Resources</a>
      <a href="{{ site.baseurl }}/community" class="button">Join Community</a>
    </div>
  </div>
</div>

<!-- Core Features -->
<section class="features-grid">
  <div class="feature-card">
    <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070" alt="Information">
    <h3>Information Hub</h3>
    <p>Access vital information about legal rights, services, and local resources in your area.</p>
  </div>
  
  <div class="feature-card">
    <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069" alt="Employment">
    <h3>Employment Portal</h3>
    <p>Find job opportunities, training programs, and skill-building resources.</p>
  </div>
  
  <div class="feature-card">
    <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069" alt="Community">
    <h3>Community Support</h3>
    <p>Connect with local organizations, mentors, and fellow refugees.</p>
  </div>
</section>

<!-- Resources Section -->
<section class="resources-section" id="resources">
  <div class="container">
    <h2>Essential Resources</h2>
    <div class="resources-grid">
      <!-- Resource cards will be dynamically populated -->
    </div>
  </div>
</section>

<!-- Call to Action -->
<section class="cta-section">
  <h2>Start Your Journey Today</h2>
  <p>Join our community and access the support you need to build a better future.</p>
  <a href="{{ site.baseurl }}/resources" class="button">Get Started</a>
</section>

<script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'en',
      includedLanguages: 'en,ar,fr,ps,es,zh-CN,hi,ur',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      autoDisplay: false
    },
    'google_translate_element'
  );
}
</script>
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>