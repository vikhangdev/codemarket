// Products page JavaScript

let currentProducts = [];
let currentPage = 1;
const productsPerPage = 9;
let currentFilter = 'all';
let currentSubFilter = 'all';
let currentSort = 'name';

document.addEventListener('DOMContentLoaded', function() {
    initializeProductsPage();
    loadProducts();
    setupEventListeners();
});

function initializeProductsPage() {
    // Check URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const subCategory = urlParams.get('sub');
    
    if (category) {
        currentFilter = category;
        if (subCategory) {
            currentSubFilter = subCategory;
        }
        updatePageTitle(category);
        updateActiveFilter(category);
        showSubCategoryFilters(category);
        updateBreadcrumb(category, subCategory);
            
    }else{
        console.log("đã chạy vào đây");
        updatePageTitle('all');
        updateActiveFilter('all');
        hideSubCategoryFilters();
        updateBreadcrumb('all', null);
    }
}

function updatePageTitle(category) {
    const pageTitle = document.getElementById('pageTitle');
    const pageDescription = document.getElementById('pageDescription');
    
    if (pageTitle && pageDescription) {
        const categoryData = categoryTree[category];
        
        if (category && category !== 'all' && categoryData) {
            pageTitle.textContent = categoryData.name;
            pageDescription.textContent = `Khám phá các ${categoryData.name.toLowerCase()} chất lượng cao`;
        }
    }
}

function updateActiveFilter(category) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        }
    });
}

function setupEventListeners() {
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            setActiveFilter(this, filter);
        });
    });
    
    // Sort dropdown
    const sortOptions = document.querySelectorAll('.sort-option');
    sortOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const sortType = this.getAttribute('data-sort');
            sortProducts(sortType);
        });
    });
    
    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleProductSearch, 300));
    }
}

function setActiveFilter(buttonElement, filter) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');
    
    currentFilter = filter;
    currentSubFilter = 'all'; // Reset sub filter when main category changes
    currentPage = 1;
    
    // Show/hide sub-category filters
    if (filter !== 'all') {
        showSubCategoryFilters(filter);
    } else {
        hideSubCategoryFilters();
    }
    
    updateBreadcrumb(filter, null);
    loadProducts();
}

function showSubCategoryFilters(category) {
    const subCategoryFilters = document.getElementById('subCategoryFilters');
    const subCategoryButtons = document.getElementById('subCategoryButtons');
    
    if (!subCategoryFilters || !subCategoryButtons) return;
    
    const categoryData = categoryTree[category];
    if (!categoryData || !categoryData.children) {
        hideSubCategoryFilters();
        return;
    }
    
    // Generate sub-category buttons
    let buttonsHTML = `
        <button class="btn btn-sm btn-outline-secondary sub-filter-btn ${currentSubFilter === 'all' ? 'active' : ''}" 
                data-sub-filter="all">
            Tất Cả
        </button>
    `;
    

    Object.entries(categoryData.children).forEach(([key, subCat]) => {
        buttonsHTML += `
             <button class="btn btn-sm btn-outline-secondary sub-filter-btn ${currentSubFilter === key ? 'active' : ''}" 
                    data-sub-filter="${key}">
              <i class="${subCat.icon} me-1"></i>${subCat.name}
             </button>
        `;

    });
    
    subCategoryButtons.innerHTML = buttonsHTML;
    subCategoryFilters.style.display = 'block';
    
    // Add event listeners to sub-category buttons
    document.querySelectorAll('.sub-filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const subFilter = this.getAttribute('data-sub-filter');
            setSubCategoryFilter(this, subFilter);
        });
    });
}

function hideSubCategoryFilters() {
    const subCategoryFilters = document.getElementById('subCategoryFilters');
    if (subCategoryFilters) {
        subCategoryFilters.style.display = 'none';
    }
}

function setSubCategoryFilter(buttonElement, subFilter) {
    // Update active button
    document.querySelectorAll('.sub-filter-btn').forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');
    
    currentSubFilter = subFilter;
    currentPage = 1;
    
    updateBreadcrumb(currentFilter, subFilter === 'all' ? null : subFilter);
    loadProducts();
}

function updateBreadcrumb(category, subCategory) {
    const breadcrumbSection = document.getElementById('breadcrumbSection');
    const categoryBreadcrumb = document.getElementById('categoryBreadcrumb');
    
    if (!breadcrumbSection || !categoryBreadcrumb) return;
    
    if (category && category !== 'all') {
        let breadcrumbHTML = `
            <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><a href="index.html">Trang Chủ</a></li>
                <li class="breadcrumb-item"><a href="products.html">Sản Phẩm</a></li>
                <li class="breadcrumb-item"><a href="products.html?category=${category}">${getCategoryName(category)}</a></li>
        `;
        
        if (subCategory) {
            breadcrumbHTML += `<li class="breadcrumb-item active" aria-current="page">${getSubCategoryName(category, subCategory)}</li>`;
        } else {
            breadcrumbHTML = breadcrumbHTML.replace('><a href="products.html?category=' + category + '">' + getCategoryName(category) + '</a><', ' active" aria-current="page">' + getCategoryName(category) + '<');
        }
        
        breadcrumbHTML += '</ol>';
        categoryBreadcrumb.innerHTML = breadcrumbHTML;
        breadcrumbSection.style.display = 'block';
    } else {
        breadcrumbSection.style.display = 'none';
    }
}

function loadProducts() {
    // Filter products
    let filteredProducts = products;
    
    if (currentFilter !== 'all') {
        filteredProducts = products.filter(product => product.category === currentFilter);
        
        // Apply sub-category filter
        if (currentSubFilter !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.subCategory === currentSubFilter);
        }
    }
    
    // Apply search if any
    const searchInput = document.getElementById('searchInput');
    if (searchInput && searchInput.value.trim()) {
        const searchTerm = searchInput.value.toLowerCase().trim();
        filteredProducts = filteredProducts.filter(product => 
            product.title.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.technologies.some(tech => tech.toLowerCase().includes(searchTerm))
        );
    }
    
    // Sort products
    filteredProducts = sortProductArray(filteredProducts, currentSort);
    
    currentProducts = filteredProducts;
    
    // Update result count
    updateResultCount(filteredProducts.length);
    
    // Render products
    renderProducts(filteredProducts);
    
    // Render pagination
    renderPagination(filteredProducts.length);
}

function sortProducts(sortType) {
    currentSort = sortType;
    loadProducts();
}

function sortProductArray(products, sortType) {
    switch (sortType) {
        case 'name':
             return products
                .filter(p => p && p.title)
                .sort((a, b) => {
 
                    return (a.title || '').localeCompare(b.title || '');
                });
        case 'price-low':
            return products.sort((a, b) => a.price - b.price);
        case 'price-high':
            return products.sort((a, b) => b.price - a.price);
        case 'popular':
            return products.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        default:
            return products;
    }
}

function renderProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    // Calculate pagination
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const pageProducts = products.slice(startIndex, endIndex);
    
    if (pageProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="col-12 text-center py-5">
                <div class="empty-state">
                    <i class="bi bi-search display-1 text-muted mb-3"></i>
                    <h3 class="text-muted">Không tìm thấy sản phẩm</h3>
                    <p class="text-muted">Hãy thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
                </div>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = pageProducts.map(product => `
        <div class="col-md-6 col-lg-4 mb-4">
            <div class="card product-card h-100 border-0 shadow-sm">
                <div class="product-image position-relative">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="product-badge">
                        <span class="badge bg-primary">${getCategoryName(product.category)}</span>
                        ${product.popular ? '<span class="badge bg-warning text-dark ms-1">Hot</span>' : ''}
                    </div>
                    ${product.originalPrice ? `
                        <div class="discount-badge position-absolute top-0 start-0 m-2">
                            <span class="badge bg-danger">-${Math.round((1 - product.price / product.originalPrice) * 100)}%</span>
                        </div>
                    ` : ''}
                </div>
                <div class="card-body p-4 d-flex flex-column">
                    <h5 class="card-title fw-bold">${product.title}</h5>
                    <p class="card-text text-muted flex-grow-1">${product.description}</p>
                    
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
                        ${product.technologies.length > 3 ? `<span class="tech-tag">+${product.technologies.length - 3}</span>` : ''}
                        <div class="mt-1">
                            <small class="text-muted">
                                <i class="${categoryTree[product.category]?.children[product.subCategory]?.icon || 'bi-code'} me-1"></i>
                                ${getSubCategoryName(product.category, product.subCategory)}
                            </small>
                        </div>
                    </div>
                    
                    <div class="d-flex gap-2 mt-auto">
                        <a href="product-detail.html?id=${product.id}" class="btn btn-primary flex-fill">
                            <i class="bi bi-eye"></i> Chi Tiết
                        </a>
                        <button class="btn btn-outline-primary" onclick="toggleWishlist(${product.id})" title="Thêm vào yêu thích">
                            <i class="bi bi-heart"></i>
                        </button>
                        <button class="btn btn-outline-secondary" onclick="shareProduct(${product.id})" title="Chia sẻ">
                            <i class="bi bi-share"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add animation
    animateProductCards();
}

function animateProductCards() {
    const cards = document.querySelectorAll('.product-card');
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

function renderPagination(totalProducts) {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    
    if (totalPages <= 1) {
        pagination.innerHTML = '';
        return;
    }
    
    let paginationHTML = '';
    
    // Previous button
    if (currentPage > 1) {
        paginationHTML += `
            <li class="page-item">
                <a class="page-link" href="#" onclick="changePage(${currentPage - 1})">
                    <i class="bi bi-chevron-left"></i>
                </a>
            </li>
        `;
    }
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        if (i === currentPage) {
            paginationHTML += `<li class="page-item active"><span class="page-link">${i}</span></li>`;
        } else if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
            paginationHTML += `<li class="page-item"><a class="page-link" href="#" onclick="changePage(${i})">${i}</a></li>`;
        } else if (i === currentPage - 3 || i === currentPage + 3) {
            paginationHTML += `<li class="page-item disabled"><span class="page-link">...</span></li>`;
        }
    }
    
    // Next button
    if (currentPage < totalPages) {
        paginationHTML += `
            <li class="page-item">
                <a class="page-link" href="#" onclick="changePage(${currentPage + 1})">
                    <i class="bi bi-chevron-right"></i>
                </a>
            </li>
        `;
    }
    
    pagination.innerHTML = paginationHTML;
}

function changePage(page) {
    currentPage = page;
    renderProducts(currentProducts);
    renderPagination(currentProducts.length);
    
    // Scroll to top of products grid
    document.getElementById('productsGrid').scrollIntoView({ behavior: 'smooth' });
}

function updateResultCount(count) {
    const resultCount = document.getElementById('resultCount');
    if (resultCount) {
        resultCount.textContent = count;
    }
}

function handleProductSearch(event) {
    const searchTerm = event.target.value.toLowerCase().trim();
    currentPage = 1;
    loadProducts();
}

function toggleWishlist(productId) {
    // Implement wishlist functionality
    showNotification('Đã thêm vào danh sách yêu thích!', 'success');
}

function shareProduct(productId) {
    // Implement share functionality
    const product = products.find(p => p.id === productId);
    if (product && navigator.share) {
        navigator.share({
            title: product.title,
            text: product.description,
            url: `${window.location.origin}/product-detail.html?id=${productId}`
        });
    } else {
        // Fallback - copy to clipboard
        const url = `${window.location.origin}/product-detail.html?id=${productId}`;
        navigator.clipboard.writeText(url).then(() => {
            showNotification('Link đã được sao chép!', 'info');
        });
    }
}

// Utility function for debouncing
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