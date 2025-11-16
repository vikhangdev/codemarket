// Product Detail page JavaScript

let currentProduct = null;

document.addEventListener('DOMContentLoaded', function() {
    const productId = getProductIdFromURL();
    if (productId) {
        loadProductDetail(productId);
    } else {
        showError('Không tìm thấy sản phẩm');
    }
});

function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'));
}

function loadProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        showError('Sản phẩm không tồn tại');
        return;
    }
    
    currentProduct = product;
    renderProductDetail(product);
    loadRelatedProducts(product);
}

function renderProductDetail(product) {
    // Update page title
    document.title = `${product.title} - CodeMarket`;
    
    // Update breadcrumb
    const breadcrumb = document.getElementById('breadcrumbProduct');
    if (breadcrumb) {
        breadcrumb.textContent = product.title;
    }
    
    // Render product images
    renderProductImages(product);
    
    // Render product info
    renderProductInfo(product);
    
    // Render product details in tabs
    renderProductTabs(product);
    
    // Setup image gallery
    setupImageGallery(product);
}

function renderProductImages(product) {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.getElementById('thumbnails');
    
    if (mainImage) {
        mainImage.src = product.image;
        mainImage.alt = product.title;
    }
    
    if (thumbnails && product.images) {
        thumbnails.innerHTML = product.images.map((image, index) => `
            <div class="col-3">
                <img src="${image}" 
                     class="img-fluid rounded thumbnail-img ${index === 0 ? 'active' : ''}" 
                     alt="Product ${index + 1}"
                     onclick="changeMainImage('${image}', this)">
            </div>
        `).join('');
    }
}

function renderProductInfo(product) {
    // Category
    const categoryElement = document.getElementById('productCategory');
    if (categoryElement) {
        categoryElement.textContent = getCategoryName(product.category);
    }
    
    // Title
    const titleElement = document.getElementById('productTitle');
    if (titleElement) {
        titleElement.textContent = product.title;
    }
    
    // Rating
    const ratingElement = document.getElementById('productRating');
    const reviewCountElement = document.getElementById('reviewCount');
    if (ratingElement) {
        ratingElement.innerHTML = generateStars(product.rating);
    }
    if (reviewCountElement) {
        reviewCountElement.textContent = product.reviews;
    }
    
    // Price
    const currentPriceElement = document.getElementById('currentPrice');
    const originalPriceElement = document.getElementById('originalPrice');
    const discountElement = document.getElementById('discount');
    
    if (currentPriceElement) {
        currentPriceElement.textContent = formatPrice(product.price);
    }
    
    if (originalPriceElement && product.originalPrice) {
        originalPriceElement.textContent = formatPrice(product.originalPrice);
        originalPriceElement.style.display = 'inline';
    }
    
    if (discountElement && product.originalPrice) {
        const discountPercent = Math.round((1 - product.price / product.originalPrice) * 100);
        discountElement.textContent = `Tiết kiệm ${discountPercent}%`;
        discountElement.style.display = 'block';
    }
    
    // Features
    const featuresElement = document.getElementById('productFeatures');
    if (featuresElement && product.features) {
        featuresElement.innerHTML = product.features.map(feature => 
            `<li><i class="bi bi-check text-success me-2"></i>${feature}</li>`
        ).join('');
    }
    
    // Technologies
    const technologiesElement = document.getElementById('productTechnologies');
    if (technologiesElement && product.technologies) {
        technologiesElement.innerHTML = product.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
    }
    
    // Product info sidebar
    const versionElement = document.getElementById('productVersion');
    const lastUpdateElement = document.getElementById('lastUpdate');
    const fileSizeElement = document.getElementById('fileSize');
    
    if (versionElement) versionElement.textContent = product.version || '1.0.0';
    if (lastUpdateElement) lastUpdateElement.textContent = product.lastUpdate || '2024-01-01';
    if (fileSizeElement) fileSizeElement.textContent = product.fileSize || '10 MB';
}

function renderProductTabs(product) {
    // Description tab
    const descriptionElement = document.getElementById('productDescription');
    if (descriptionElement) {
        descriptionElement.innerHTML = `
            <h5>Mô Tả Sản Phẩm</h5>
            <p>${product.description}</p>
            <p>Source code này được phát triển với công nghệ hiện đại và tuân thủ các best practices trong ngành. 
            Sản phẩm bao gồm đầy đủ tài liệu hướng dẫn cài đặt và sử dụng.</p>
            
            <h5>Tính Năng Nổi Bật:</h5>
            <ul>
                ${product.features ? product.features.map(feature => `<li>${feature}</li>`).join('') : ''}
            </ul>
            
            <h5>Công Nghệ Sử Dụng:</h5>
            <p>Dự án được xây dựng bằng ${product.technologies ? product.technologies.join(', ') : 'các công nghệ hiện đại'}.</p>
        `;
    }
    
    // System requirements : YÊU CẦU HỆ THỐNG
    const systemRequirementsElement = document.getElementById('systemRequirements');
    if (systemRequirementsElement) {
        systemRequirementsElement.innerHTML = `
            <div class="spec-item">
                <strong>Hệ điều hành:</strong> Windows 10/11, macOS 10.14+, Ubuntu 18.04+
            </div>
            <div class="spec-item">
                <strong>RAM:</strong> Tối thiểu 4GB, khuyến nghị 8GB
            </div>
            <div class="spec-item">
                <strong>Dung lượng:</strong> ${product.fileSize || '10 MB'} + 500MB cho dependencies
            </div>
            <div class="spec-item">
                <strong>Phần mềm:</strong> Lựa chọn phần mềm phù hợp với nhu cầu.<br>
                <strong>- Website:</strong> Visual Code, Visual Studio, Pycharm, Apache, hệ quản trị CSDL,... <br>
                <strong>- Mobile:</strong> Android Studio, Java JDK 11+, Android SDK & Emulator, Xcode, Apple Developer Account<br>
                <strong>- Desktop App:</strong>Visual Studio, .NET JDK, Node.js + npm/yarn, Java JDK, JavaFX hoặc Swing libraries, Qt Creator + C++ compiler<br>
                <strong>- Game:</strong> Visual code, Xcode, Unity Hub, .NET SDK <br>
            </div>
        `;
    }
    
    // Includes : BAO GỒM
    const includesElement = document.getElementById('productIncludes');
    if (includesElement) {
        includesElement.innerHTML = `
            <div class="include-item">
                <i class="bi bi-check text-success me-2"></i>Source code đầy đủ
            </div>
            <div class="include-item">
                <i class="bi bi-check text-success me-2"></i>Tài liệu hướng dẫn
            </div>
            <div class="include-item">
                <i class="bi bi-check text-success me-2"></i>Database schema
            </div>
            <div class="include-item">
                <i class="bi bi-check text-success me-2"></i>Video tutorial
            </div>
            <div class="include-item">
                <i class="bi bi-check text-success me-2"></i>6 tháng support
            </div>
        `;
    }
    
    // Demo links
    //<div class="col-md-6">
    //   <a href="${product.demo || '#'}" target="_blank" class="btn btn-primary w-100">
    //     <i class="bi bi-play-circle me-2"></i>Demo Trực Tuyến
    //  </a>
    //</div>
    const demoLinksElement = document.getElementById('demoLinks');
    if (demoLinksElement) {
        demoLinksElement.innerHTML = `
            <div class="row g-3">
                <div class="col-md-6">
                    <a href="#" 
                    // nếu có video thì mở demo
                        onclick="if('${product.demo}') 
                                { 
                                window.open('${product.demo}', '_blank'); 
                                } 
                                // không có video thì đến trang liên hệ để liên hệ
                                else 
                                { 
                                    if(confirm('Vui lòng liên hệ qua zalo / facebook để xem demo nhé !!!'))
                                    {
                                        window.location.href='contact.html'; 
                                    }
                                    // không làm gì  
                                } 
                            return false;" 
                        class="btn btn-primary w-100">
                        <i class="bi bi-play-circle me-2"></i>Demo Trực Tuyến
                    </a>
                </div>

                <div class="col-md-6">
                    <a href="contact.html" class="btn btn-outline-primary w-100">
                        <i class="bi bi-download me-2"></i>Tải Demo
                    </a>
                </div>
            </div>
        `;
    }
    
    // Demo images
    const demoImagesElement = document.getElementById('demoImages');
    if (demoImagesElement && product.images) {
        demoImagesElement.innerHTML = `
            <div class="row g-3">
                ${product.images.slice(0).map(image => `
                    <div class="col-md-4">
                        <img src="${image}" class="img-fluid rounded shadow-sm" alt="Demo">
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    // Reviews
    renderReviews(product);
}

function renderReviews(product) {
    const averageRatingElement = document.getElementById('averageRating');
    const summaryStarsElement = document.getElementById('summaryStars');
    const totalReviewsElement = document.getElementById('totalReviews');
    const reviewsListElement = document.getElementById('reviewsList');
    
    if (averageRatingElement) {
        averageRatingElement.textContent = product.rating.toFixed(1);
    }
    
    if (summaryStarsElement) {
        summaryStarsElement.innerHTML = generateStars(product.rating);
    }
    
    if (totalReviewsElement) {
        totalReviewsElement.textContent = product.reviews;
    }
    
    if (reviewsListElement) {
        const productReviews = reviews.filter(review => review.productId === product.id);
        
        if (productReviews.length > 0) {
            reviewsListElement.innerHTML = productReviews.map(review => `
                <div class="review-item p-3 border rounded mb-3">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <div>
                            <h6 class="mb-1">${review.author}</h6>
                            <div class="stars mb-1">${generateStars(review.rating)}</div>
                        </div>
                        <small class="text-muted">${formatDate(review.date)}</small>
                    </div>
                    <p class="mb-0">${review.comment}</p>
                    ${review.verified ? '<small class="text-success"><i class="bi bi-patch-check me-1"></i>Đã mua sản phẩm</small>' : ''}
                </div>
            `).join('');
        } else {
            reviewsListElement.innerHTML = `
                <div class="text-center py-4">
                    <i class="bi bi-chat-dots display-4 text-muted mb-3"></i>
                    <h5 class="text-muted">Chưa có đánh giá</h5>
                    <p class="text-muted">Hãy là người đầu tiên đánh giá sản phẩm này!</p>
                </div>
            `;
        }
    }
}

function setupImageGallery(product) {
    // Setup thumbnail click handlers
    const thumbnails = document.querySelectorAll('.thumbnail-img');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            changeMainImage(this.src, this);
        });
    });
}

function changeMainImage(imageSrc, thumbnailElement) {
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = imageSrc;
    }
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail-img').forEach(img => img.classList.remove('active'));
    thumbnailElement.classList.add('active');
}

function loadRelatedProducts(currentProduct) {
    const relatedProductsElement = document.getElementById('relatedProducts');
    if (!relatedProductsElement) return;
    
    // Find related products (same category, excluding current product)
    const relatedProducts = products
        .filter(product => 
            product.category === currentProduct.category && 
            product.id !== currentProduct.id
        )
        .slice(0, 3);
    
    if (relatedProducts.length > 0) {
        relatedProductsElement.innerHTML = relatedProducts.map(product => `
            <div class="col-md-6 col-lg-4">
                <div class="card product-card h-100 border-0 shadow-sm">
                    <div class="product-image">
                        <img src="${product.image}" class="card-img-top" alt="${product.title}">
                        <div class="product-badge">
                            <span class="badge bg-primary">${getCategoryName(product.category)}</span>
                        </div>
                    </div>
                    <div class="card-body p-4">
                        <h6 class="card-title fw-bold">${product.title}</h6>
                        <p class="card-text text-muted small">${product.description.substring(0, 80)}...</p>
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <div class="price">
                                <span class="h6 text-primary">${formatPrice(product.price)}</span>
                            </div>
                            <div class="rating">
                                ${generateStars(product.rating)}
                                <small class="text-muted">(${product.reviews})</small>
                            </div>
                        </div>
                        <a href="product-detail.html?id=${product.id}" class="btn btn-outline-primary btn-sm w-100">
                            Xem Chi Tiết
                        </a>
                    </div>
                </div>
            </div>
        `).join('');
    } else {
        relatedProductsElement.innerHTML = `
            <div class="col-12 text-center">
                <p class="text-muted">Không có sản phẩm liên quan</p>
            </div>
        `;
    }
}
// báo lỗi khi chạy trang chi tiết đầu tiên
function showError(message) {
    document.body.innerHTML = `
        <div class="container mt-5 pt-5">
            <div class="row justify-content-center">
                <div class="col-md-6 text-center">
                    <h2 class="text-danger">Lỗi</h2>
                    <p class="text-muted">${message}</p>
                    <a href="products.html" class="btn btn-primary">Quay lại danh sách sản phẩm</a>
                </div>
            </div>
        </div>
    `;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN');
}