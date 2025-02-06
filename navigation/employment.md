---
layout: default
title: Employment
description: Find Job Opportunities and Career Resources
permalink: /employment
---

<style>
.jobs-header {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070') no-repeat center/cover;
    padding: 6rem 2rem;
    text-align: center;
    color: white;
}

.jobs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.job-card {
    background: white;
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.job-card:hover {
    transform: translateY(-5px);
}

.job-type {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: #e5e7eb;
    border-radius: 20px;
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.search-section {
    background: #f3f4f6;
    padding: 2rem;
    margin-bottom: 2rem;
}

.search-container {
    max-width: 800px;
    margin: 0 auto;
}

.search-box {
    width: 100%;
    padding: 1rem;
    border: 2px solid #e5e7eb;
    border-radius: 10px;
    font-size: 1rem;
    margin-bottom: 1rem;
}

.filter-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: 2rem;
}

.filter-button {
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: 25px;
    background: white;
    cursor: pointer;
    transition: all 0.3s ease;
}

.filter-button.active {
    background: #2563eb;
    color: white;
}

.resources-section {
    padding: 4rem 2rem;
    background: #f8fafc;
}

.resources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.job-platform-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 2rem 0;
}

.platform-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 50px;
    background: white;
    color: #2563eb;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.platform-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.platform-button img {
    width: 24px;
    height: 24px;
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

<div class="jobs-header">
    <h1>Employment Opportunities</h1>
    <p>Find job opportunities and career development resources</p>
    <div class="job-platform-links">
        <a href="https://www.indeed.com/jobs?q=refugee+friendly" class="platform-button" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Indeed_logo.svg/2560px-Indeed_logo.svg.png" alt="Indeed">
            Search on Indeed
        </a>
        <a href="https://www.linkedin.com/jobs/refugee-friendly-jobs" class="platform-button" target="_blank">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="LinkedIn">
            Find on LinkedIn
        </a>
        <a href="https://careers.unhcr.org/" class="platform-button" target="_blank">
            <img src="https://www.unhcr.org/favicon.ico" alt="UNHCR">
            UNHCR Careers
        </a>
    </div>
</div>

<section class="search-section">
    <div class="search-container">
        <input type="text" class="search-box" id="jobSearch" placeholder="Search for jobs...">
        <div class="filter-buttons">
            <button class="filter-button active" data-type="all">All Jobs</button>
            <button class="filter-button" data-type="full-time">Full Time</button>
            <button class="filter-button" data-type="part-time">Part Time</button>
            <button class="filter-button" data-type="remote">Remote</button>
            <button class="filter-button" data-type="training">Training</button>
        </div>
    </div>
</section>

<div class="jobs-grid">
    <div class="job-card" data-type="full-time">
        <span class="job-type">Full Time</span>
        <h3>Warehouse Associate - Amazon</h3>
        <p>Join Amazon's diverse workforce. No experience required. Training provided.</p>
        <p><strong>Location:</strong> San Diego, CA</p>
        <p><strong>Salary:</strong> $18-22/hour + Benefits</p>
        <a href="https://www.amazon.jobs/en/search" class="button" target="_blank">Apply on Amazon Jobs</a>
    </div>
    <div class="job-card" data-type="part-time">
        <span class="job-type">Part Time</span>
        <h3>Restaurant Server</h3>
        <p>Flexible hours, friendly environment. Training available.</p>
        <p><strong>Location:</strong> San Diego, CA</p>
        <p><strong>Salary:</strong> $15-20/hour + tips</p>
        <a href="#" class="button">Apply Now</a>
    </div>
    <div class="job-card" data-type="remote">
        <span class="job-type">Remote</span>
        <h3>Customer Service Representative</h3>
        <p>Work from home opportunity. Multiple languages welcome.</p>
        <p><strong>Location:</strong> Remote</p>
        <p><strong>Salary:</strong> $17-21/hour</p>
        <a href="#" class="button">Apply Now</a>
    </div>
</div>

<section class="resources-section">
    <h2>Career Resources</h2>
    <div class="resources-grid">
        <div class="resource-card">
            <h3>Resume Writing Workshop</h3>
            <p>Learn how to create an effective resume that highlights your skills.</p>
            <a href="#" class="button">Learn More</a>
        </div>  
        <div class="resource-card">
            <h3>Interview Preparation</h3>
            <p>Practice common interview questions and learn valuable tips.</p>
            <a href="#" class="button">Start Practice</a>
        </div>        
        <div class="resource-card">
            <h3>Skills Training Programs</h3>
            <p>Free vocational training programs in various fields.</p>
            <a href="#" class="button">Browse Programs</a>
        </div>
    </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('jobSearch');
    const jobCards = document.querySelectorAll('.job-card');
    const filterButtons = document.querySelectorAll('.filter-button');
    
    // Search functionality
    searchBox.addEventListener('input', filterJobs);
    
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterJobs();
        });
    });
    
    function filterJobs() {
        const searchTerm = searchBox.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-button.active').dataset.type;
        
        jobCards.forEach(card => {
            const jobTitle = card.querySelector('h3').textContent.toLowerCase();
            const jobType = card.dataset.type;
            const matchesSearch = jobTitle.includes(searchTerm);
            const matchesFilter = activeFilter === 'all' || jobType === activeFilter;
            
            card.style.display = matchesSearch && matchesFilter ? 'block' : 'none';
        });
    }
});
</script>

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