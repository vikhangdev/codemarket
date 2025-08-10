// Contact page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    setupContactEventListeners();
    initializeContactForm();
});

function setupContactEventListeners() {
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmission);
    }
    
    // Quick contact buttons
    const quickContactButtons = document.querySelectorAll('.btn[href^="tel:"], .btn[href^="mailto:"]');
    quickContactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('tel:')) {
                trackContactAction('phone_call');
            } else if (href.startsWith('mailto:')) {
                trackContactAction('email');
            }
        });
    });
    
    // Chat button
    const chatButtons = document.querySelectorAll('.btn:contains("Chat")');
    chatButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            openChatWidget();
        });
    });
}

function initializeContactForm() {
    // Add real-time validation
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

function handleContactFormSubmission(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Validate form
    if (!validateContactForm(form)) {
        return;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Đang gửi...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Success
        showContactSuccess();
        form.reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Track submission
        trackContactAction('form_submission');
        
    }, 2000);
}

function validateContactForm(form) {
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!validateField({ target: field })) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(event) {
    const field = event.target;
    const value = field.value.trim();
    const fieldName = field.name || field.id;
    
    // Clear previous errors
    clearFieldError(event);
    
    // Required field validation
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, 'Trường này là bắt buộc');
        return false;
    }
    
    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Email không hợp lệ');
            return false;
        }
    }
    
    // Phone validation
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value) || value.length < 10) {
            showFieldError(field, 'Số điện thoại không hợp lệ');
            return false;
        }
    }
    
    // Message length validation
    if (field.tagName === 'TEXTAREA' && value && value.length < 10) {
        showFieldError(field, 'Nội dung quá ngắn (tối thiểu 10 ký tự)');
        return false;
    }
    
    return true;
}

function showFieldError(field, message) {
    field.classList.add('is-invalid');
    
    // Remove existing error message
    const existingError = field.parentNode.querySelector('.invalid-feedback');
    if (existingError) {
        existingError.remove();
    }
    
    // Add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'invalid-feedback';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(event) {
    const field = event.target;
    field.classList.remove('is-invalid');
    
    const errorMessage = field.parentNode.querySelector('.invalid-feedback');
    if (errorMessage) {
        errorMessage.remove();
    }
}

function showContactSuccess() {
    // Create success modal or notification
    const successHTML = `
        <div class="modal fade" id="successModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body text-center p-5">
                        <div class="success-icon mb-4">
                            <i class="bi bi-check-circle-fill text-success" style="font-size: 4rem;"></i>
                        </div>
                        <h4 class="fw-bold mb-3">Gửi Tin Nhắn Thành Công!</h4>
                        <p class="text-muted mb-4">
                            Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ phản hồi trong vòng 2 giờ làm việc.
                        </p>
                        <div class="contact-info">
                            <p class="mb-2">
                                <i class="bi bi-envelope text-primary me-2"></i>
                                <strong>Email:</strong> info@codemarket.com
                            </p>
                            <p class="mb-0">
                                <i class="bi bi-phone text-primary me-2"></i>
                                <strong>Hotline:</strong> +84 123 456 789
                            </p>
                        </div>
                    </div>
                    <div class="modal-footer border-0 justify-content-center">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
                            Đóng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', successHTML);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('successModal'));
    modal.show();
    
    // Remove modal after hiding
    document.getElementById('successModal').addEventListener('hidden.bs.modal', function() {
        this.remove();
    });
}

function openChatWidget() {
    // Simulate opening chat widget
    showNotification('Tính năng chat sẽ sớm được ra mắt! Vui lòng liên hệ qua email hoặc hotline.', 'info');
    
    // In a real application, this would open a chat widget
    // Example: window.Intercom && window.Intercom('show');
}

function trackContactAction(action) {
    // Track contact actions for analytics
    console.log('Contact action tracked:', action);
    
    // In a real application, this would send data to analytics service
    // Example: gtag('event', 'contact', { method: action });
}

// Auto-fill form from URL parameters (for marketing campaigns)
function autoFillFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    // Auto-fill subject based on URL parameter
    const subject = urlParams.get('subject');
    if (subject) {
        const subjectSelect = form.querySelector('select[name="subject"]');
        if (subjectSelect) {
            const option = Array.from(subjectSelect.options).find(opt => 
                opt.value === subject || opt.textContent.toLowerCase().includes(subject.toLowerCase())
            );
            if (option) {
                subjectSelect.value = option.value;
            }
        }
    }
    
    // Auto-fill message
    const message = urlParams.get('message');
    if (message) {
        const messageTextarea = form.querySelector('textarea');
        if (messageTextarea) {
            messageTextarea.value = decodeURIComponent(message);
        }
    }
}

// Initialize auto-fill on page load
document.addEventListener('DOMContentLoaded', autoFillFromURL);