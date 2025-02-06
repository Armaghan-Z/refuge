---
layout: default
title: Contact Us
description: Get in Touch with Our Team
permalink: /contact
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
.contact-header {
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074') no-repeat center/cover;
    padding: 6rem 2rem;
    text-align: center;
    color: white;
    margin-bottom: 4rem;
}

.live-chat-button {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: #2563eb;
    color: white;
    padding: 1rem 2rem;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
    transition: all 0.3s ease;
    z-index: 1000;
}

.live-chat-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(37, 99, 235, 0.3);
}

.error-message {
    color: #dc2626;
    font-size: 0.9rem;
    margin-top: 0.5rem;
    display: none;
}

.success-message {
    background: #dcfce7;
    color: #166534;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    display: none;
}

.language-support {
    background: #f8fafc;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
}

.language-support span {
    display: inline-block;
    padding: 0.3rem 0.8rem;
    background: #e5e7eb;
    border-radius: 15px;
    margin: 0.2rem;
    font-size: 0.9rem;
}

.contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 4rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.contact-form {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: #374151;
}

.form-group input,
.form-group textarea,
.form-group select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    font-size: 1rem;
}

.form-group textarea {
    height: 150px;
    resize: vertical;
}

.contact-info {
    background: #f8fafc;
    padding: 2rem;
    border-radius: 15px;
}

.contact-method {
    margin-bottom: 2rem;
}

.contact-method h3 {
    color: #1f2937;
    margin-bottom: 0.5rem;
}

.emergency-box {
    background: #fee2e2;
    border: 1px solid #ef4444;
    border-radius: 10px;
    padding: 1.5rem;
    margin-top: 2rem;
}

.emergency-box h3 {
    color: #dc2626;
    margin-bottom: 1rem;
}

.button {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background: #2563eb;
    color: white;
    text-decoration: none;
    border: none;
    border-radius: 25px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.button:hover {
    background: #1d4ed8;
    transform: translateX(5px);
}

.faq-section {
    max-width: 800px;
    margin: 4rem auto;
    padding: 2rem;
}

.faq-item {
    margin-bottom: 1.5rem;
    padding: 1.5rem;
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.faq-item h3 {
    margin-bottom: 0.5rem;
    color: #1f2937;
}

@media (max-width: 768px) {
    .contact-grid {
        grid-template-columns: 1fr;
    }
}
</style>

<div class="contact-header">
    <h1>Get in Touch</h1>
    <p>We're here to help - reach out to us in any way that works for you</p>
</div>

<div class="contact-grid">
    <div class="contact-form">
        <div class="success-message" id="successMessage">
            Thank you for your message! We'll get back to you within 24-48 hours.
        </div>

        <div class="language-support">
            <p><strong>We offer support in:</strong></p>
            <span>English</span>
            <span>Arabic</span>
            <span>Spanish</span>
            <span>French</span>
            <span>Dari</span>
            <span>Pashto</span>
        </div>

        <form id="contactForm" onsubmit="return handleSubmit(event)">
            <div class="form-group">
                <label for="name">Full Name *</label>
                <input type="text" id="name" name="name" required 
                       onblur="validateField(this)">
                <div class="error-message" id="nameError">
                    Please enter your full name
                </div>
            </div>
            
            <div class="form-group">
                <label for="email">Email Address *</label>
                <input type="email" id="email" name="email" required
                       onblur="validateField(this)">
                <div class="error-message" id="emailError">
                    Please enter a valid email address
                </div>
            </div>
            
            <div class="form-group">
                <label for="phone">Phone Number (Optional)</label>
                <input type="tel" id="phone" name="phone"
                       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                       placeholder="123-456-7890">
            </div>
            
            <div class="form-group">
                <label for="subject">How Can We Help? *</label>
                <select id="subject" name="subject" required
                        onchange="validateField(this)">
                    <option value="">Select a topic</option>
                    <option value="general">General Information</option>
                    <option value="resources">Access to Resources</option>
                    <option value="employment">Employment Support</option>
                    <option value="housing">Housing Assistance</option>
                    <option value="legal">Legal Support</option>
                    <option value="urgent">Urgent Assistance</option>
                    <option value="other">Other</option>
                </select>
                <div class="error-message" id="subjectError">
                    Please select a topic
                </div>
            </div>
            
            <div class="form-group">
                <label for="message">Your Message *</label>
                <textarea id="message" name="message" required
                          onblur="validateField(this)"
                          rows="5"></textarea>
                <div class="error-message" id="messageError">
                    Please enter your message
                </div>
            </div>
            
            <div class="form-group">
                <label for="preferred-contact">Preferred Contact Method</label>
                <select id="preferred-contact" name="preferred-contact">
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="either">Either</option>
                </select>
            </div>
            
            <button type="submit" class="button">Send Message</button>
        </form>
    </div>
    
    <div class="contact-info">
        <h2>Other Ways to Reach Us</h2>
        
        <div class="contact-method">
            <h3>📞 24/7 Helpline</h3>
            <p>Toll-free: 1-800-REFUGE-HELP</p>
            <p>For immediate assistance in multiple languages</p>
        </div>
        
        <div class="contact-method">
            <h3>📧 Email Departments</h3>
            <p>General: info@therefuge.org</p>
            <p>Support: support@therefuge.org</p>
            <p>Housing: housing@therefuge.org</p>
            <p>Employment: jobs@therefuge.org</p>
        </div>
        
        <div class="contact-method">
            <h3>📍 Main Office</h3>
            <p>123 Community Drive</p>
            <p>San Diego, CA 92101</p>
            <p>Open Monday-Friday: 9:00 AM - 5:00 PM PST</p>
            <a href="https://maps.google.com" target="_blank" class="button">Get Directions</a>
        </div>
        
        <div class="emergency-box">
            <h3>⚠️ Emergency Support</h3>
            <p>For immediate assistance or crisis situations:</p>
            <p>Emergency Hotline: 1-800-EMERGENCY</p>
            <p>Available 24/7 with translation services</p>
            <a href="tel:1-800-EMERGENCY" class="button">Call Now</a>
        </div>
    </div>
</div>

<button class="live-chat-button" onclick="openLiveChat()">
    💬 Chat with Us
</button>

<section class="faq-section">
    <h2>Frequently Asked Questions</h2>
    
    <div class="faq-item">
        <h3>How quickly will I receive a response?</h3>
        <p>We aim to respond to all inquiries within 24-48 hours during business days.</p>
    </div>
    
    <div class="faq-item">
        <h3>What information should I include in my message?</h3>
        <p>Please include your name, contact information, and as many details about your inquiry as possible to help us assist you better.</p>
    </div>
    
    <div class="faq-item">
        <h3>Do you offer in-person consultations?</h3>
        <p>Yes, we offer in-person consultations at our office. Please schedule an appointment through our contact form or by phone.</p>
    </div>
</section>

<script>
function validateField(field) {
    const errorElement = document.getElementById(`${field.id}Error`);
    let isValid = true;
    
    switch(field.id) {
        case 'email':
            isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
            break;
        case 'name':
            isValid = field.value.length >= 2;
            break;
        case 'message':
            isValid = field.value.length >= 10;
            break;
        case 'subject':
            isValid = field.value !== '';
            break;
    }
    
    errorElement.style.display = isValid ? 'none' : 'block';
    return isValid;
}

function handleSubmit(event) {
    event.preventDefault();
    
    const fields = ['name', 'email', 'subject', 'message'];
    let isValid = true;
    
    fields.forEach(field => {
        const element = document.getElementById(field);
        if (!validateField(element)) {
            isValid = false;
        }
    });
    
    if (isValid) {
        // Here you would typically send the data to your backend
        document.getElementById('successMessage').style.display = 'block';
        event.target.reset();
        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
        }, 5000);
    }
    
    return false;
}

function openLiveChat() {
    // Here you would integrate with your live chat service
    alert('Live chat feature coming soon! Please contact us through other available methods.');
}
</script> 