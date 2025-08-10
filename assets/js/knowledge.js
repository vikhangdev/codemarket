// Knowledge page JavaScript

let currentArticles = [];
let currentArticleFilter = 'all';
let articlesLoaded = 6;
const articlesPerLoad = 6;

document.addEventListener('DOMContentLoaded', function() {
    loadArticles();
    setupKnowledgeEventListeners();
});

function setupKnowledgeEventListeners() {
    // Category filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            setArticleFilter(this, category);
        });
    });
    
    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleArticleSearch, 300));
    }
    
    // Load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreArticles);
    }
}

function setArticleFilter(buttonElement, category) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');
    
    currentArticleFilter = category;
    articlesLoaded = articlesPerLoad;
    loadArticles();
}

function loadArticles() {
    // Filter articles
    let filteredArticles = articles;
    
    if (currentArticleFilter !== 'all') {
        filteredArticles = articles.filter(article => article.category === currentArticleFilter);
    }
    
    // Apply search if any
    const searchInput = document.getElementById('searchInput');
    if (searchInput && searchInput.value.trim()) {
        const searchTerm = searchInput.value.toLowerCase().trim();
        filteredArticles = filteredArticles.filter(article => 
            article.title.toLowerCase().includes(searchTerm) ||
            article.excerpt.toLowerCase().includes(searchTerm) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }
    
    // Sort by date (newest first)
    filteredArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    currentArticles = filteredArticles;
    renderArticles(filteredArticles.slice(0, articlesLoaded));
    
    // Show/hide load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        if (articlesLoaded >= filteredArticles.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }
}

function renderArticles(articles) {
    const articlesGrid = document.getElementById('articlesGrid');
    if (!articlesGrid) return;
    
    if (articles.length === 0) {
        articlesGrid.innerHTML = `
            <div class="col-12 text-center py-5">
                <div class="empty-state">
                    <i class="bi bi-journal-x display-1 text-muted mb-3"></i>
                    <h3 class="text-muted">Không tìm thấy bài viết</h3>
                    <p class="text-muted">Hãy thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
                </div>
            </div>
        `;
        return;
    }
    
    articlesGrid.innerHTML = articles.map(article => `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card article-card h-100 border-0 shadow-sm">
                <div class="article-image">
                    <img src="${article.image}" class="card-img-top" alt="${article.title}">
                </div>
                <div class="card-body p-4 d-flex flex-column">
                    <div class="mb-2">
                        <span class="badge bg-primary">${getCategoryDisplayName(article.category)}</span>
                        <small class="text-muted ms-2">
                            <i class="bi bi-clock me-1"></i>${article.readTime}
                        </small>
                    </div>
                    
                    <h5 class="card-title fw-bold">${article.title}</h5>
                    <p class="card-text text-muted flex-grow-1">${article.excerpt}</p>
                    
                    <div class="article-meta mb-3">
                        <div class="d-flex align-items-center mb-2">
                            <small class="text-muted">
                                <i class="bi bi-person me-1"></i>${article.author}
                                <i class="bi bi-calendar ms-2 me-1"></i>${formatDate(article.date)}
                            </small>
                        </div>
                        <div class="d-flex align-items-center">
                            <small class="text-muted">
                                <i class="bi bi-eye me-1"></i>${article.views} lượt xem
                            </small>
                        </div>
                    </div>
                    
                    <div class="article-tags mb-3">
                        ${article.tags.slice(0, 3).map(tag => `<span class="tech-tag small">${tag}</span>`).join('')}
                    </div>
                    
                    <div class="mt-auto">
                        <a href="#" class="btn btn-outline-primary w-100" onclick="readArticle(${article.id})">
                            <i class="bi bi-book"></i> Đọc Bài Viết
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add animation
    animateArticleCards();
}

function animateArticleCards() {
    const cards = document.querySelectorAll('.article-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

function loadMoreArticles() {
    articlesLoaded += articlesPerLoad;
    loadArticles();
}

function handleArticleSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    articlesLoaded = articlesPerLoad;
    loadArticles();
}

function readArticle(articleId) {
    const article = articles.find(a => a.id === articleId);
    if (article) {
        // Simulate opening article detail page
        showNotification(`Đang mở bài viết: ${article.title}`, 'info');
        // In a real application, this would navigate to the article detail page
        // window.location.href = `article-detail.html?id=${articleId}`;
    }
}

function getCategoryDisplayName(category) {
    const categoryNames = {
        'frontend': 'Frontend',
        'backend': 'Backend',
        'mobile': 'Mobile',
        'devops': 'DevOps',
        'tips': 'Tips & Tricks'
    };
    return categoryNames[category] || category;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN');
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