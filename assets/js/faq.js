// FAQ page JavaScript

let currentFAQFilter = 'all';

document.addEventListener('DOMContentLoaded', function() {
    loadFAQs();
    setupFAQEventListeners();
});

function setupFAQEventListeners() {
    // Category filter buttons
    const filterButtons = document.querySelectorAll('[data-filter]');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            setFAQFilter(this, filter);
        });
    });
    
    // Category cards
    const categoryCards = document.querySelectorAll('.faq-category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            setFAQFilter(null, category);
            scrollToFAQSection();
        });
    });
    
    // Search input
    const searchInput = document.getElementById('faqSearch');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleFAQSearch, 300));
    }
}

function setFAQFilter(buttonElement, filter) {
    currentFAQFilter = filter;
    
    // Update active sidebar button
    if (buttonElement) {
        document.querySelectorAll('[data-filter]').forEach(btn => 
            btn.classList.remove('active'));
        buttonElement.classList.add('active');
    } else {
        // Find and activate the corresponding sidebar button
        const sidebarButton = document.querySelector(`[data-filter="${filter}"]`);
        if (sidebarButton) {
            document.querySelectorAll('[data-filter]').forEach(btn => 
                btn.classList.remove('active'));
            sidebarButton.classList.add('active');
        }
    }
    
    loadFAQs();
}

function loadFAQs() {
    // Filter FAQs
    let filteredFAQs = faqs;
    
    if (currentFAQFilter !== 'all') {
        filteredFAQs = faqs.filter(faq => faq.category === currentFAQFilter);
    }
    
    // Apply search if any
    const searchInput = document.getElementById('faqSearch');
    if (searchInput && searchInput.value.trim()) {
        const searchTerm = searchInput.value.toLowerCase().trim();
        filteredFAQs = filteredFAQs.filter(faq => 
            faq.question.toLowerCase().includes(searchTerm) ||
            faq.answer.toLowerCase().includes(searchTerm)
        );
    }
    
    renderFAQs(filteredFAQs);
}

function renderFAQs(faqs) {
    const faqAccordion = document.getElementById('faqAccordion');
    if (!faqAccordion) return;
    
    if (faqs.length === 0) {
        faqAccordion.innerHTML = `
            <div class="text-center py-5">
                <div class="empty-state">
                    <i class="bi bi-question-circle display-1 text-muted mb-3"></i>
                    <h3 class="text-muted">Không tìm thấy câu hỏi</h3>
                    <p class="text-muted">Hãy thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
                </div>
            </div>
        `;
        return;
    }
    
    faqAccordion.innerHTML = faqs.map((faq, index) => `
        <div class="accordion-item border-0 shadow-sm mb-3">
            <h2 class="accordion-header">
                <button class="accordion-button ${index !== 0 ? 'collapsed' : ''}" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#faq${faq.id}" 
                        aria-expanded="${index === 0 ? 'true' : 'false'}" 
                        aria-controls="faq${faq.id}">
                    <div class="d-flex align-items-center">
                        <span class="category-badge badge bg-${getCategoryColor(faq.category)} me-3">
                            ${getCategoryDisplayName(faq.category)}
                        </span>
                        <span class="fw-bold">${faq.question}</span>
                    </div>
                </button>
            </h2>
            <div id="faq${faq.id}" 
                 class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" 
                 data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                    <p class="mb-0">${faq.answer}</p>
                    <div class="mt-3 pt-3 border-top">
                        <small class="text-muted">
                            <i class="bi bi-tag me-1"></i>Danh mục: ${getCategoryDisplayName(faq.category)}
                        </small>
                        <div class="mt-2">
                            <small class="text-muted me-3">Hữu ích?</small>
                            <button class="btn btn-sm btn-outline-success me-2" onclick="rateFAQ(${faq.id}, 'helpful')">
                                <i class="bi bi-hand-thumbs-up"></i> Có
                            </button>
                            <button class="btn btn-sm btn-outline-danger" onclick="rateFAQ(${faq.id}, 'not-helpful')">
                                <i class="bi bi-hand-thumbs-down"></i> Không
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add animation
    animateFAQItems();
}

function animateFAQItems() {
    const items = document.querySelectorAll('.accordion-item');
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function handleFAQSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    loadFAQs();
}

function scrollToFAQSection() {
    const faqSection = document.getElementById('faqAccordion');
    if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function rateFAQ(faqId, rating) {
    // Simulate rating functionality
    const message = rating === 'helpful' 
        ? 'Cảm ơn bạn đã đánh giá! Phản hồi của bạn giúp chúng tôi cải thiện dịch vụ.'
        : 'Cảm ơn phản hồi! Chúng tôi sẽ cải thiện nội dung này.';
    
    showNotification(message, 'success');
}

function getCategoryDisplayName(category) {
    const categoryNames = {
        'general': 'Câu Hỏi Chung',
        'purchase': 'Mua Hàng',
        'technical': 'Kỹ Thuật',
        'license': 'Bản Quyền',
        'support': 'Hỗ Trợ',
        'services': 'Dịch Vụ'
    };
    return categoryNames[category] || category;
}

function getCategoryColor(category) {
    const categoryColors = {
        'general': 'primary',
        'purchase': 'success',
        'technical': 'warning',
        'license': 'info',
        'support': 'danger',
        'services': 'secondary'
    };
    return categoryColors[category] || 'primary';
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