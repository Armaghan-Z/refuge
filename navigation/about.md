---
layout: default
title: About Us
description: Our Mission and Impact
permalink: /about
---

<!-- Navigation Bar -->
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

<style>
.about-header {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070') no-repeat center/cover;
    padding: 8rem 2rem;
    text-align: center;
    color: white;
    margin-bottom: 4rem;
}

.about-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
}

.mission-section {
    background: #f8fafc;
    padding: 4rem 2rem;
    margin: 4rem 0;
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 4rem auto;
    padding: 0 2rem;
}

.team-member {
    text-align: center;
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.team-member img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 1rem;
    object-fit: cover;
}

.stats-section {
    background: linear-gradient(135deg, #2563eb, #1d4ed8);
    color: white;
    padding: 4rem 2rem;
    text-align: center;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
}

.stat-item {
    padding: 2rem;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.partners-section {
    padding: 4rem 2rem;
    text-align: center;
}

.partners-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    max-width: 1000px;
    margin: 2rem auto;
    align-items: center;
}

.partner-logo {
    max-width: 150px;
    margin: 0 auto;
}

.impact-counter {
    font-size: 3.5rem;
    font-weight: bold;
    color: #2563eb;
    margin-bottom: 0.5rem;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease;
}

.impact-counter.visible {
    opacity: 1;
    transform: translateY(0);
}

.timeline {
    max-width: 800px;
    margin: 4rem auto;
    position: relative;
    padding: 2rem 0;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: #e5e7eb;
}

.timeline-item {
    margin: 2rem 0;
    position: relative;
    width: 50%;
    padding: 0 2rem;
}

.timeline-item:nth-child(odd) {
    left: 0;
}

.timeline-item:nth-child(even) {
    left: 50%;
}

.awards-section {
    background: #f8fafc;
    padding: 4rem 2rem;
    text-align: center;
}

.award-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 2rem auto;
}

.award-card {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.award-card:hover {
    transform: translateY(-5px);
}
</style>

<div class="about-header">
    <h1>About The Refuge</h1>
    <p>Building bridges, empowering lives</p>
</div>

<div class="about-content">
    <h2>Our Story</h2>
    <p>The Refuge was founded with a simple yet powerful mission: to provide comprehensive support to refugees as they build new lives in their adopted communities. We understand the challenges of starting anew in a foreign land, and we're here to help make that transition smoother.</p>
    
    <p>What began as a small community initiative has grown into a platform that connects refugees with vital resources, employment opportunities, and supportive communities across the country.</p>
</div>

<section class="mission-section">
    <div class="about-content">
        <h2>Our Mission</h2>
        <p>To empower refugees with the resources, support, and opportunities they need to build successful, fulfilling lives in their new communities.</p>
        
        <h2>Our Vision</h2>
        <p>A world where refugees are welcomed, supported, and empowered to achieve their full potential in their new homes.</p>
        
        <h2>Our Values</h2>
        <ul>
            <li><strong>Empowerment:</strong> We believe in enabling individuals to build self-sufficient, dignified lives.</li>
            <li><strong>Community:</strong> We foster connections and mutual support networks.</li>
            <li><strong>Accessibility:</strong> We ensure resources and information are available to all who need them.</li>
            <li><strong>Dignity:</strong> We respect and honor the experiences, cultures, and aspirations of all individuals.</li>
        </ul>
    </div>
</section>

<section class="stats-section">
    <h2>Our Growing Impact</h2>
    <div class="stats-grid">
        <div class="stat-item">
            <div class="impact-counter" data-target="7500">0</div>
            <div class="stat-label">Refugees Supported</div>
        </div>
        
        <div class="stat-item">
            <div class="impact-counter" data-target="350">0</div>
            <div class="stat-label">Community Partners</div>
        </div>
        
        <div class="stat-item">
            <div class="impact-counter" data-target="2500">0</div>
            <div class="stat-label">Job Placements</div>
        </div>
        
        <div class="stat-item">
            <div class="impact-counter" data-target="75">0</div>
            <div class="stat-label">Cities Served</div>
        </div>
    </div>
</section>

<section class="timeline">
    <h2>Our Journey</h2>
    <div class="timeline-item">
        <h3>2020</h3>
        <p>Founded as a community initiative in San Diego</p>
    </div>
    <div class="timeline-item">
        <h3>2021</h3>
        <p>Expanded to 25 cities across California</p>
    </div>
    <div class="timeline-item">
        <h3>2022</h3>
        <p>Launched digital resource platform</p>
    </div>
    <div class="timeline-item">
        <h3>2023</h3>
        <p>Reached 7,500+ refugees nationwide</p>
    </div>
</section>

<section class="awards-section">
    <h2>Recognition & Impact</h2>
    <div class="award-grid">
        <div class="award-card">
            <h3>🏆 2023 Community Impact Award</h3>
            <p>Recognized by the California Department of Social Services</p>
        </div>
        <div class="award-card">
            <h3>🌟 UNHCR Partnership Excellence</h3>
            <p>Outstanding contribution to refugee support services</p>
        </div>
        <div class="award-card">
            <h3>🎯 Innovation in Social Services</h3>
            <p>San Diego Chamber of Commerce</p>
        </div>
    </div>
</section>

<section class="team-section">
    <h2>Our Team</h2>
    <div class="team-grid">
        <div class="team-member">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974" alt="Team Member">
            <h3>Sarah Johnson</h3>
            <p>Executive Director</p>
        </div>
        
        <div class="team-member">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974" alt="Team Member">
            <h3>David Chen</h3>
            <p>Community Outreach</p>
        </div>
        
        <div class="team-member">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976" alt="Team Member">
            <h3>Maria Rodriguez</h3>
            <p>Employment Programs</p>
        </div>
    </div>
</section>

<section class="partners-section">
    <h2>Our Partners</h2>
    <div class="partners-grid">
        <img src="https://www.unhcr.org/images/unhcr-logo-horizontal-black.svg" alt="UNHCR" class="partner-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="Google" class="partner-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" alt="NASA" class="partner-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png" alt="IBM" class="partner-logo">
    </div>
</section>

<script>
// Animate impact counters
function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for counters
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.impact-counter').forEach(counter => {
    observer.observe(counter);
});
</script> 