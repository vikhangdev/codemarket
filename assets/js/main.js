// Main JavaScript for CodeMarket

document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initializeComponents();
    loadPopularProducts();
    initializeCounters();
});

function initializeComponents() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize navbar scroll effect
    initializeNavbarScrollEffect();
}

function initializeSmoothScrolling() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

function initializeNavbarScrollEffect() {
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(33, 37, 41, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = '';
            navbar.style.backdropFilter = '';
        }
    });
}

function loadPopularProducts() {
    const popularProductsContainer = document.getElementById('popularProducts');
    if (!popularProductsContainer) return;

    // Get popular products
    const popularProducts = products.filter(product => product.popular).slice(0, 3);
    
    popularProductsContainer.innerHTML = popularProducts.map(product => `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card product-card h-100 border-0 shadow-sm">
                <div class="product-image">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="product-badge">
                        <span class="badge bg-primary">${getCategoryName(product.category)}</span>
                    </div>
                </div>
                <div class="card-body p-4">
                    <h5 class="card-title fw-bold">${product.title}</h5>
                    <p class="card-text text-muted">${product.description}</p>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <div class="price">
                            <span class="price-current">${formatPrice(product.price)}</span>
                            ${product.originalPrice ? `<span class="price-original ms-2">${formatPrice(product.originalPrice)}</span>` : ''}
                        </div>
                        <div class="rating">
                            ${generateStars(product.rating)}
                            <small class="text-muted ms-1">(${product.reviews})</small>
                        </div>
                    </div>
                    <div class="tech-tags mb-3">
                        ${product.technologies.slice(0, 3).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="d-flex gap-2">
                        <a href="product-detail.html?id=${product.id}" class="btn btn-primary flex-fill">
                            <i class="bi bi-eye"></i> Xem Chi Tiết
                        </a>
                        <button class="btn btn-outline-primary">
                            <i class="bi bi-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function initializeCounters() {
    const counters = document.querySelectorAll('.counter');
    const options = {
        threshold: 0.7
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, options);

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}

function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Form handling
function handleContactForm(event) {
    event.preventDefault();
    
    // Simulate form submission
    const form = event.target;
    const formData = new FormData(form);
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Đang gửi...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        showNotification('Tin nhắn đã được gửi thành công! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.', 'success');
        form.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
    }
}

function handleSearch(event) {
    const query = event.target.value.toLowerCase().trim();
    // Implement search logic based on current page
    console.log('Searching for:', query);
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Newsletter subscription
function handleNewsletterSubscription(event) {
    event.preventDefault();
    
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    const button = form.querySelector('button[type="submit"]');
    
    // Validation
    if (!email || !isValidEmail(email)) {
        showNotification('Vui lòng nhập email hợp lệ!', 'danger');
        return;
    }
    
    // Show loading
    const originalText = button.innerHTML;
    button.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Đang đăng ký...';
    button.disabled = true;
    
    // Simulate subscription
    setTimeout(() => {
        showNotification('Đăng ký newsletter thành công! Cảm ơn bạn đã quan tâm.', 'success');
        form.reset();
        
        button.innerHTML = originalText;
        button.disabled = false;
    }, 1500);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add event listeners when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Newsletter forms
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', handleNewsletterSubscription);
    });
    
    // Initialize search
    initializeSearch();
});