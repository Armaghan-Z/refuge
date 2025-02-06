---
layout: default
title: The Refuge
description: Empowering Lives, Bridging Communities
---

<style>
.hero-section {
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070') no-repeat center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    position: relative;
}

.hero-content {
    max-width: 800px;
    padding: 2rem;
}

.hero-content h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    animation: fadeInUp 1s ease;
}

.hero-content p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    animation: fadeInUp 1.2s ease;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    animation: fadeInUp 1.4s ease;
}

.button {
    padding: 1rem 2rem;
    border-radius: 50px;
    background: #2563eb;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    font-weight: 500;
    border: 2px solid transparent;
}

.button:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
}

.button.outline {
    background: transparent;
    border: 2px solid white;
}

.emergency-banner {
    background: linear-gradient(45deg, #dc2626, #ef4444);
    color: white;
    padding: 1rem;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 4rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
}

.service-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.service-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.service-content {
    padding: 2rem;
}

.stats-section {
    background: linear-gradient(45deg, #1e40af, #3b82f6);
    color: white;
    padding: 6rem 2rem;
    text-align: center;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
}

.stat-item h3 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.success-stories {
    padding: 6rem 2rem;
    background: #f8fafc;
}

.story-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 3rem auto;
}

.story-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.story-content {
    padding: 2rem;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>

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

<!-- Emergency Banner -->
<div class="emergency-banner">
    <strong>24/7 Emergency Support Available:</strong> Call 1-800-375-5283 for immediate assistance
</div>

<!-- Hero Section -->
<div class="hero-section">
    <div class="hero-content">
        <h1>Welcome to The Refuge</h1>
        <p>Empowering refugees with resources, community, and hope for a better tomorrow</p>
        <div class="hero-buttons">
            <a href="{{ site.baseurl }}/resources" class="button">Find Resources</a>
            <a href="{{ site.baseurl }}/community" class="button outline">Join Community</a>
        </div>
    </div>
</div>

<!-- Services Section -->
<section class="services-grid">
    <div class="service-card">
        <img src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070" alt="Legal Support">
        <div class="service-content">
            <h3>Legal Support</h3>
            <p>Access free legal assistance and documentation help from qualified professionals.</p>
            <a href="{{ site.baseurl }}/resources#legal" class="button">Learn More →</a>
        </div>
    </div>
    <div class="service-card">
        <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069" alt="Employment">
        <div class="service-content">
            <h3>Career Development</h3>
            <p>Find job opportunities, training programs, and professional mentorship.</p>
            <a href="{{ site.baseurl }}/employment" class="button">Explore Jobs →</a>
        </div>
    </div>
    <div class="service-card">
        <img src="https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=2069" alt="Housing">
        <div class="service-content">
            <h3>Housing Assistance</h3>
            <p>Secure safe and affordable housing with our support programs.</p>
            <a href="{{ site.baseurl }}/resources#housing" class="button">Find Housing →</a>
        </div>
    </div>
</section>

<!-- Stats Section -->
<section class="stats-section">
    <h2>Our Projected Impact</h2>
    <div class="stats-grid">
        <div class="stat-item">
            <h3 id="refugeeCount">7,500+</h3>
            <p>Refugees Supported</p>
        </div>
        <div class="stat-item">
            <h3 id="jobCount">2,500+</h3>
            <p>Job Placements</p>
        </div>
        <div class="stat-item">
            <h3 id="communityCount">350+</h3>
            <p>Community Events</p>
        </div>
    </div>
</section>

<!-- Success Stories -->
<section class="success-stories">
    <h2>Success Stories</h2>
    <div class="story-grid">
        <div class="story-card">
            <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070" alt="Sarah's Story">
            <div class="story-content">
                <h3>Sarah's Journey</h3>
                <p>"The Refuge helped me secure a job in healthcare and find a welcoming community. Now I'm helping other refugees achieve their dreams."</p>
                <a href="{{ site.baseurl }}/community#stories" class="button">Read More →</a>
            </div>
        </div>
        
        <div class="story-card">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2069" alt="Ahmed's Story">
            <div class="story-content">
                <h3>Ahmed's Success</h3>
                <p>"Through the education programs, I earned my engineering certification and now work at a leading tech company."</p>
                <a href="{{ site.baseurl }}/community#stories" class="button">Read More →</a>
            </div>
        </div>
        
        <div class="story-card">
            <img src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=2070" alt="Maria's Story">
            <div class="story-content">
                <h3>Maria's Achievement</h3>
                <p>"The housing assistance program helped my family find a stable home, allowing my children to thrive in school."</p>
                <a href="{{ site.baseurl }}/community#stories" class="button">Read More →</a>
            </div>
        </div>
    </div>
</section>

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

<script>
// Animate stats when in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
});

document.querySelectorAll('.stat-item h3').forEach(stat => {
    observer.observe(stat);
});
</script>