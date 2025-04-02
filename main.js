function downloadCV() {
    alert('Downloading CV...');
}
function contactMe() {
    alert('Opening contact form...');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background and text color change on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Portfolio filtering
const portfolioItems = [
    {
        id: 1,
        category: 'data-science',
        image: 'project1.jpg',
        title: 'Machine Learning Project',
        description: 'Advanced ML algorithms for predictive analytics',
        link: '#'
    },
    {
        id: 2,
        category: 'electronics',
        image: 'project2.jpg',
        title: 'IoT System',
        description: 'Smart home automation system',
        link: '#'
    },
    {
        id: 3,
        category: 'iot',
        image: 'project3.jpg',
        title: 'Sensor Network',
        description: 'Distributed sensor network for environmental monitoring',
        link: '#'
    }
    // Add more portfolio items as needed
];

// Initialize portfolio grid
function initializePortfolio() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = `portfolio-item ${item.category}`;
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="portfolio-info">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <a href="${item.link}" class="btn primary">View Project</a>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Portfolio filtering functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Update active button
        document.querySelector('.filter-btn.active').classList.remove('active');
        this.classList.add('active');
        
        // Filter items
        document.querySelectorAll('.portfolio-item').forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Reset form
        this.reset();
        alert('Thank you for your message! I will get back to you soon.');
    });
}

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

// Theme Switching
const themeSwitch = document.getElementById('theme-switch');
const themeIcon = themeSwitch.querySelector('i');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or use system preference
const currentTheme = localStorage.getItem('theme') || 
                    (prefersDarkScheme.matches ? 'dark' : 'light');

// Apply saved theme on load
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// Theme switch handler
themeSwitch.addEventListener('click', () => {
    let theme = 'light';
    
    if (!document.documentElement.hasAttribute('data-theme')) {
        theme = 'dark';
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        document.documentElement.removeAttribute('data-theme');
    }
    
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', theme);
    }
    
    localStorage.setItem('theme', theme);
});
