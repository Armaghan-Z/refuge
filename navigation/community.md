---
layout: default
title: Community
description: Connect with Local Support Networks
permalink: /community
---

<style>
.community-header {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070') no-repeat center/cover;
    padding: 6rem 2rem;
    text-align: center;
    color: white;
    margin-bottom: 4rem;
}

.community-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.community-card {
    background: white;
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.community-card:hover {
    transform: translateY(-5px);
}

.event-list {
    max-width: 1000px;
    margin: 4rem auto;
    padding: 0 2rem;
}

.event-card {
    background: white;
    border-radius: 15px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 2rem;
    align-items: center;
}

.event-date {
    text-align: center;
    padding: 1rem;
    background: #f3f4f6;
    border-radius: 10px;
}

.event-month {
    font-size: 0.9rem;
    color: #666;
    text-transform: uppercase;
}

.event-day {
    font-size: 1.8rem;
    font-weight: bold;
    color: #2563eb;
}

.map-container {
    height: 400px;
    margin: 4rem auto;
    max-width: 1200px;
    padding: 0 2rem;
}

.map-container iframe {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    border: none;
}

.support-section {
    background: #f8fafc;
    padding: 4rem 2rem;
    margin-top: 4rem;
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

@media (max-width: 768px) {
    .event-card {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .event-date {
        margin: 0 auto;
    }
}

.organization-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.organization-card {
    background: white;
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.organization-card:hover {
    transform: translateY(-5px);
}

.calendar-section {
    background: #f8fafc;
    padding: 4rem 2rem;
    margin: 4rem 0;
}

.calendar-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
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

<div class="community-header">
    <h1>Our Community</h1>
    <p>Connect with local support networks and fellow refugees</p>
</div>

<section class="organization-section">
    <h2>Local Organizations</h2>
    <div class="organization-grid">
        <div class="organization-card">
            <h3>International Rescue Committee (IRC)</h3>
            <p>Helping refugees rebuild their lives in San Diego</p>
            <p><strong>Services:</strong> Housing, Employment, Education</p>
            <p><strong>Location:</strong> 5348 University Ave, San Diego, CA 92105</p>
            <a href="https://www.rescue.org/united-states/san-diego-ca" class="button" target="_blank">Visit Website</a>
        </div>

        <div class="organization-card">
            <h3>Jewish Family Service</h3>
            <p>Supporting refugees through comprehensive services</p>
            <p><strong>Services:</strong> Legal Aid, Food Assistance, Mental Health</p>
            <p><strong>Location:</strong> 8788 Balboa Avenue, San Diego, CA 92123</p>
            <a href="https://www.jfssd.org/our-services/refugees-immigration/" class="button" target="_blank">Learn More</a>
        </div>

        <div class="organization-card">
            <h3>Alliance for African Assistance</h3>
            <p>Specialized support for African refugees</p>
            <p><strong>Services:</strong> Cultural Programs, Translation, Job Training</p>
            <p><strong>Location:</strong> 5952 El Cajon Blvd, San Diego, CA 92115</p>
            <a href="https://alliance-for-africa.org/" class="button" target="_blank">Contact Us</a>
        </div>
    </div>
</section>

<section class="calendar-section">
    <h2>Upcoming Events</h2>
    <div class="calendar-grid">
        <div class="event-card">
            <div class="event-date">
                <div class="event-month">Dec</div>
                <div class="event-day">15</div>
            </div>
            <div class="event-info">
                <h3>Refugee Job Fair</h3>
                <p>Meet local employers and learn about job opportunities.</p>
                <p><strong>Location:</strong> San Diego Convention Center</p>
                <p><strong>Time:</strong> 10:00 AM - 3:00 PM</p>
                <a href="https://www.eventbrite.com/" class="button" target="_blank">Register Now</a>
            </div>
        </div>

        <div class="event-card">
            <div class="event-date">
                <div class="event-month">Dec</div>
                <div class="event-day">18</div>
            </div>
            <div class="event-info">
                <h3>Cultural Exchange Festival</h3>
                <p>Celebrate diversity through food, music, and art.</p>
                <p><strong>Location:</strong> Balboa Park</p>
                <p><strong>Time:</strong> 12:00 PM - 6:00 PM</p>
                <a href="https://www.eventbrite.com/" class="button" target="_blank">RSVP</a>
            </div>
        </div>
    </div>
</section>

<section class="map-section">
    <h2>Find Support Near You</h2>
    <div class="map-container">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d53573.45185180624!2d-117.13377445136719!3d32.715738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srefugee%20services%20san%20diego!5e0!3m2!1sen!2sus!4v1701907436943!5m2!1sen!2sus"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy">
        </iframe>
    </div>
</section>

<section class="support-section">
    <h2>Ways to Get Involved</h2>
    <div class="organization-grid">
        <div class="organization-card">
            <h3>Volunteer</h3>
            <p>Make a difference in refugees' lives by volunteering your time and skills.</p>
            <a href="{{ site.baseurl }}/contact" class="button">Sign Up</a>
        </div>

        <div class="organization-card">
            <h3>Donate</h3>
            <p>Support our programs through financial contributions or in-kind donations.</p>
            <a href="https://donate.unhcr.org/" class="button" target="_blank">Donate Now</a>
        </div>

        <div class="organization-card">
            <h3>Become a Mentor</h3>
            <p>Share your experience and guide others on their journey.</p>
            <a href="{{ site.baseurl }}/contact" class="button">Learn More</a>
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