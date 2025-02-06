---
layout: default
title: Resources - The Refuge
permalink: /resources/
---

<style>
  .resources-header {
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
                url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070') no-repeat center/cover;
    padding: 6rem 2rem;s
    color: white;
    text-align: center;
    margin-bottom: 3rem;
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
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto;
  }

  .resource-card {
    background: white;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative;
  }

  .resource-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
  }

  .resource-card img {
    width: 100%;
    height: 220px;
    object-fit: cover;
  }

  .resource-content {
    padding: 1.8rem;
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

  @media (max-width: 768px) {
    .resources-grid {
      grid-template-columns: 1fr;
    }
    
    .resources-header {
      padding: 4rem 1rem;
    }
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
</header>

<div class="resources-header">
  <h1>Essential Resources</h1>
  <p>Find the support and information you need to thrive in your new community</p>
</div>

<div class="search-section">
  <input type="text" id="resourceSearch" class="search-bar" placeholder="Search resources by keyword...">
  <div class="category-filters">
    <button class="filter-button active" data-category="all">All</button>
    <button class="filter-button" data-category="legal">Legal Aid</button>
    <button class="filter-button" data-category="housing">Housing</button>
    <button class="filter-button" data-category="healthcare">Healthcare</button>
    <button class="filter-button" data-category="education">Education</button>
    <button class="filter-button" data-category="employment">Employment</button>
    <button class="filter-button" data-category="language">Language</button>
  </div>
</div>

<div class="resources-grid" id="resourcesGrid">
  <!-- Legal Resources -->
  <div class="resource-card" data-category="legal">
    <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070" alt="Legal Aid">
    <div class="resource-content">
      <span class="resource-category">Legal Aid</span>
      <h3>Asylum Application Guide</h3>
      <p>Step-by-step guidance through the asylum application process, including required documentation and legal rights.</p>
      <div class="resource-stats">
        <span class="stat">📅 Updated: Jan 2024</span>
        <span class="stat">⭐ 4.8/5</span>
      </div>
      <a href="https://www.uscis.gov/humanitarian/refugees-and-asylum" class="button" target="_blank">Access Guide</a>
    </div>
  </div>

  <!-- Housing Resources -->
  <div class="resource-card" data-category="housing">
    <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073" alt="Housing">
    <div class="resource-content">
      <span class="resource-category">Housing</span>
      <h3>Emergency Shelter Directory</h3>
      <p>Comprehensive list of emergency shelters, temporary housing options, and long-term housing assistance programs.</p>
      <div class="resource-stats">
        <span class="stat">📍 Multiple Locations</span>
        <span class="stat">🏠 100+ Options</span>
      </div>
      <a href="https://www.hud.gov/topics/rental_assistance" class="button" target="_blank">Find Housing</a>
    </div>
  </div>

  <!-- Healthcare Resources -->
  <div class="resource-card" data-category="healthcare">
    <img src="https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?q=80&w=2071" alt="Healthcare">
    <div class="resource-content">
      <span class="resource-category">Healthcare</span>
      <h3>Free Medical Clinics</h3>
      <p>Directory of free and low-cost medical clinics, mental health services, and vaccination centers.</p>
      <div class="resource-stats">
        <span class="stat">🏥 50+ Clinics</span>
        <span class="stat">💉 Free Vaccines</span>
      </div>
      <a href="https://findahealthcenter.hrsa.gov/" class="button" target="_blank">Find Care</a>
    </div>
  </div>

  <!-- Education Resources -->
  <div class="resource-card" data-category="education">
    <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022" alt="Education">
    <div class="resource-content">
      <span class="resource-category">Education</span>
      <h3>Education Programs</h3>
      <p>Access information about local schools, adult education programs, and professional certifications.</p>
      <div class="resource-stats">
        <span class="stat">📚 All Ages</span>
        <span class="stat">🎓 Free Programs</span>
      </div>
      <a href="https://www2.ed.gov/about/offices/list/ocr/docs/refugee-rights.html" class="button" target="_blank">Learn More</a>
    </div>
  </div>

  <!-- Language Resources -->
  <div class="resource-card" data-category="language">
    <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2073" alt="Language Classes">
    <div class="resource-content">
      <span class="resource-category">Language</span>
      <h3>Free Language Classes</h3>
      <p>Online and in-person language courses, conversation practice groups, and cultural exchange programs.</p>
      <div class="resource-stats">
        <span class="stat">🗣️ Multiple Languages</span>
        <span class="stat">👥 Group Classes</span>
      </div>
      <a href="https://www.duolingo.com/" class="button" target="_blank">Start Learning</a>
    </div>
  </div>

  <!-- Employment Resources -->
  <div class="resource-card" data-category="employment">
    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070" alt="Employment">
    <div class="resource-content">
      <span class="resource-category">Employment</span>
      <h3>Job Training Programs</h3>
      <p>Career development resources, skill-building workshops, and job placement assistance.</p>
      <div class="resource-stats">
        <span class="stat">💼 Job Placement</span>
        <span class="stat">📈 Success Rate: 85%</span>
      </div>
      <a href="https://www.acf.hhs.gov/orr/programs/refugees/employment" class="button" target="_blank">Find Programs</a>
    </div>
  </div>
</div>

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
});
</script>

<style>
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>