// Mock Data for CodeMarket

// Category Tree Structure code-slash
const categoryTree = {
    web: {
        name: 'Website',
        icon: 'bi-globe',
        children: {
            html: { name: 'HTML', icon: 'bi-filetype-html'},
            php: { name: 'PHP', icon: 'bi-filetype-php' },
            java: { name: 'Java', icon: 'bi-filetype-java' },
            python: { name: 'Python', icon: 'bi-filetype-py' },
            csharp: { name: 'C#', icon: 'bi bi-filetype-cs' },
            javascript: { name: 'JavaScript', icon: 'bi bi-filetype-js' },
            typescript: { name: 'TypeScript', icon: 'bi bi-filetype-tsx' }
        }
    },
    mobile: {
        name: 'Mobile App',
        icon: 'bi-phone',
        children: {
            android: { name: 'Android (Java/Kotlin)', icon: 'bi-android2' },
            ios: { name: 'iOS (Swift)', icon: 'bi-apple' },
            reactnative: { name: 'React Native', icon: 'bi-phone-flip' },
            flutter: { name: 'Flutter (Dart)', icon: 'bi-phone-vibrate' },
            //xamarin: { name: 'Xamarin (C#)', icon: 'bi-microsoft' }
            // ionic: { name: 'Ionic', icon: 'bi-lightning' }            
        }
    },
    desktop: {
        name: 'Desktop App',
        icon: 'bi-laptop',
        children: {
            java: { name: 'Java (Swing/JavaFX)', icon: 'bi bi-filetype-java' },
            csharp: { name: 'C# (WPF/WinForms)', icon: 'bi bi-filetype-cs' },
            python: { name: 'Python (PyQt/Tkinker)', icon: 'bi-filetype-py' },
            cpp: { name: 'C++ (Qt)', icon: 'bi bi-code-slash' },
            swift: { name: 'Swift', icon: 'bi-lightning' },
            electron: { name: 'Electron (JavaScript / TypeScript)', icon: 'bi-lightning-fill' },
            dart: {name: 'Dart (Flutter)', icon: 'bi bi-file-code'}
        }
    },
    game: {
        name: 'Game',
        icon: 'bi-joystick',
        children: {
            csharp: { name: 'C# (Unity)', icon: 'bi-unity' },
            cpp: { name: 'C++ (Unreal Engine)', icon: 'bi-controller' },
            javascript: {name:'JavaScript (Web game,...)', icon: 'bi bi-filetype-js'},
            python: { name: 'Python (Pygame)', icon: 'bi bi-filetype-py' },
            java: {name:'Java (LibGDX)', icon: 'bi bi-filetype-java'}    
        }
    }
};

// Products Data
const products = [
    // web từ 1 đến 100
    {
        id: 1,
        title: "Website bán giày - .NET",
        description: "website bán hàng truc tuyến",
        category: "web",
        subCategory: "csharp",
        price: 250000,
        originalPrice: 350000,
        image: "assets/product/website/csharp/webbangiay_asp.net/image1.png",
        images: [
            "assets/product/website/csharp/webbangiay_asp.net/image1.png",
            "assets/product/website/csharp/webbangiay_asp.net/image2.png",
            "assets/product/website/csharp/webbangiay_asp.net/image3.png",
            "assets/product/website/csharp/webbangiay_asp.net/image4.png",
            "assets/product/website/csharp/webbangiay_asp.net/image5.png",
            "assets/product/website/csharp/webbangiay_asp.net/image6.png",
            "assets/product/website/csharp/webbangiay_asp.net/image7.png",
            "assets/product/website/csharp/webbangiay_asp.net/image8.png",
            "assets/product/website/csharp/webbangiay_asp.net/image9.png",
            "assets/product/website/csharp/webbangiay_asp.net/image10.png",
            "assets/product/website/csharp/webbangiay_asp.net/image11.png",
            "assets/product/website/csharp/webbangiay_asp.net/image12.png",
            "assets/product/website/csharp/webbangiay_asp.net/image13.png",
            "assets/product/website/csharp/webbangiay_asp.net/image14.png"
        ],
        rating: 4.8,
        reviews: 156,
        technologies: ["C#", "MySQL", ".NET"],
        features: [
            "Giao diện responsive hiện đại",
            "Hệ thống thanh toán tích hợp",
            "Quản lý sản phẩm",
            "Dashboard admin",
            "Quản lý danh mục",
            "Quản lý sản phẩm",
            "Quản lý đơn hàng",
        ],
        //assets/product/website/csharp/webbangiay_asp.net/webbangiay_asp.net.mp4
        demo: "",
        version: "2.1.0",
        lastUpdate: "2024-01-15",
        fileSize: "25 MB",
        popular: true
    },
    {
        id: 2,
        title: "Website bán sách - PHP Laravel",
        description: "website bán sách đầy đủ tính năng với Php Laravel",
        category: "web",
        subCategory: "php",
        price: 500000,
        originalPrice: 350000,
        image: "/assets/product/website/php/webbansach/image1.png",
        images: [
            "/assets/product/website/php/webbansach/image1.png",
            "/assets/product/website/php/webbansach/image2.png",
            "/assets/product/website/php/webbansach/image3.png",
            // "/assets/product/website/php/webbansach/image4.png",
            // "/assets/product/website/php/webbansach/image5.png",
            // "/assets/product/website/php/webbansach/image6.png",
            // "/assets/product/website/php/webbansach/image7.png",
            // "/assets/product/website/php/webbansach/image8.png",
            // "/assets/product/website/php/webbansach/image9.png",
            // "/assets/product/website/php/webbansach/image10.png"
        ],
        rating: 4.8,
        reviews: 156,
        technologies: ["PHP", "Laravel", "phpMyAdmin"],
        features: [
            "Giao diện responsive hiện đại",
            "Hệ thống thanh toán tích hợp",
            "Quản lý sản phẩm",
            "Quản lý danh mục",
            "Quản lý đơn hàng",
            "Quản lý người dùng"
        ],
        demo: "/assets/product/website/php/webbansach/webbansach_php_laravel.mp4",
        version: "2.1.0",
        lastUpdate: "2025-08-08",
        fileSize: "25 MB",
        popular: true

    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "Template portfolio cá nhân với HTML, CSS, JavaScript",
        category: "web",
        subCategory: "html",
        price: 800000,
        originalPrice: 1200000,
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
        images: [
            "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
            "https://images.pexels.com/photos/326504/pexels-photo-326504.jpeg"
        ],
        rating: 4.5,
        reviews: 78,
        technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        features: [
            "Thiết kế đẹp mắt",
            "Responsive design",
            "Animations mượt mà",
            "Contact form",
            "Blog section"
        ],
        demo: "https://demo.example.com",
        version: "1.0.0",
        lastUpdate: "2024-01-05",
        fileSize: "5 MB",
        popular: true
    },
    {
        id: 4,
        title: "PHP E-commerce CMS",
        description: "Hệ thống quản lý nội dung và bán hàng với PHP Laravel",
        category: "web",
        subCategory: "php",
        price: 1800000,
        originalPrice: 2500000,
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
        images: ["https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg"],
        rating: 4.6,
        reviews: 89,
        technologies: ["PHP", "Laravel", "MySQL", "Bootstrap"],
        features: [
            "Admin panel đầy đủ",
            "Quản lý sản phẩm",
            "Hệ thống thanh toán",
            "SEO friendly",
            "Responsive design"
        ],
        demo: "https://demo.example.com",
        version: "1.2.0",
        lastUpdate: "2024-01-20",
        fileSize: "15 MB",
        popular: false
    },
    {
        id: 5,
        title: "Java Spring Boot API",
        description: "RESTful API với Java Spring Boot và MySQL",
        category: "web",
        subCategory: "java",
        price: 2200000,
        originalPrice: 3000000,
        image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
        images: ["https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"],
        rating: 4.7,
        reviews: 67,
        technologies: ["Java", "Spring Boot", "MySQL", "JWT"],
        features: [
            "JWT Authentication",
            "RESTful API design",
            "Database migration",
            "API documentation",
            "Unit testing"
        ],
        demo: "https://demo.example.com",
        version: "2.1.0",
        lastUpdate: "2024-01-18",
        fileSize: "25 MB",
        popular: false
    },
    // Mobile từ 101 đến 200
    {
        id: 101,
        title: "Mobile Banking App",
        description: "Ứng dụng ngân hàng di động với React Native và Firebase",
        category: "mobile",
        subCategory: "reactnative",
        price: 3200000,
        originalPrice: 4200000,
        image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
        images: [
            "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
            "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
        ],
        rating: 4.9,
        reviews: 89,
        technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
        features: [
            "Đăng nhập bảo mật",
            "Chuyển tiền nhanh",
            "Lịch sử giao dịch",
            "Thông báo real-time",
            "Face ID / Touch ID"
        ],
        demo: "https://demo.example.com",
        version: "1.5.2",
        lastUpdate: "2024-01-10",
        fileSize: "18 MB",
        popular: true
    },
    {
        id: 102,
        title: "Task Manager App",
        description: "Ứng dụng quản lý công việc với Flutter",
        category: "mobile",
        subCategory: "flutter",
        price: 1200000,
        originalPrice: 1800000,
        image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
        images: [
            "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
            "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
        ],
        rating: 4.4,
        reviews: 45,
        technologies: ["Flutter", "Dart", "SQLite", "Provider"],
        features: [
            "Tạo và quản lý task",
            "Reminder notifications",
            "Dark/Light theme",
            "Sync data offline",
            "Team collaboration"
        ],
        demo: "https://demo.example.com",
        version: "2.0.1",
        lastUpdate: "2024-01-20",
        fileSize: "12 MB",
        popular: false
    },
    {
        id: 103,
        title: "iOS Swift Todo App",
        description: "Ứng dụng quản lý công việc cho iOS với Swift",
        category: "mobile",
        subCategory: "ios",
        price: 1500000,
        originalPrice: 2000000,
        image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg",
        images: ["https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg"],
        rating: 4.5,
        reviews: 45,
        technologies: ["Swift", "UIKit", "Core Data", "CloudKit"],
        features: [
            "Core Data integration",
            "iCloud sync",
            "Push notifications",
            "Dark mode support",
            "Widget extension"
        ],
        demo: "https://demo.example.com",
        version: "1.0.0",
        lastUpdate: "2024-01-15",
        fileSize: "8 MB",
        popular: false
    },
    // deskktop từ 201 đến 300
    {
        id: 201,
        title: "Restaurant Management System",
        description: "Hệ thống quản lý nhà hàng desktop với Java Swing",
        category: "desktop",
        subCategory: "java",
        price: 1800000,
        originalPrice: 2500000,
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
        images: [
            "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
            "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
        ],
        rating: 4.6,
        reviews: 67,
        technologies: ["Java", "Swing", "MySQL", "JasperReports"],
        features: [
            "Quản lý menu và đơn hàng",
            "Hệ thống POS",
            "Báo cáo doanh thu",
            "Quản lý nhân viên",
            "In hóa đơn tự động"
        ],
        demo: "https://demo.example.com",
        version: "3.0.1",
        lastUpdate: "2024-01-08",
        fileSize: "35 MB",
        popular: false
    },
    {
        id: 202,
        title: "Inventory Management",
        description: "Phần mềm quản lý kho với WPF C#",
        category: "desktop",
        subCategory: "csharp",
        price: 2200000,
        originalPrice: 3000000,
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
        images: [
            "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
        ],
        rating: 4.3,
        reviews: 32,
        technologies: ["C#", "WPF", "SQL Server", "Entity Framework"],
        features: [
            "Quản lý nhập/xuất kho",
            "Báo cáo tồn kho",
            "Barcode scanning",
            "Multi-warehouse",
            "User permissions"
        ],
        demo: "https://demo.example.com",
        version: "1.8.0",
        lastUpdate: "2024-01-18",
        fileSize: "42 MB",
        popular: false
    },
    // game từ 301 đến 400
    {
        id: 301,
        title: "2D Puzzle Game",
        description: "Game giải đố 2D với Unity và C#",
        category: "game",
        subCategory: "csharp",
        price: 1500000,
        originalPrice: 2000000,
        image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
        images: [
            "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
            "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg"
        ],
        rating: 4.7,
        reviews: 234,
        technologies: ["Unity", "C#", "2D Graphics", "Audio System"],
        features: [
            "50+ levels thách thức",
            "Hệ thống điểm số",
            "Hiệu ứng âm thanh",
            "Lưu game tự động",
            "Giao diện thân thiện"
        ],
        demo: "https://demo.example.com",
        version: "1.2.3",
        lastUpdate: "2024-01-12",
        fileSize: "120 MB",
        popular: false
    },
    {
        id: 302,
        title: "Racing Game 3D",
        description: "Game đua xe 3D với Unity",
        category: "game",
        subCategory: "csharp",
        price: 3500000,
        originalPrice: 4500000,
        image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
        images: [
            "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
        ],
        rating: 4.8,
        reviews: 167,
        technologies: ["Unity", "C#", "3D Graphics", "Physics"],
        features: [
            "Realistic car physics",
            "Multiple tracks",
            "AI opponents",
            "Customizable cars",
            "Leaderboard system"
        ],
        demo: "https://demo.example.com",
        version: "2.5.0",
        lastUpdate: "2024-01-22",
        fileSize: "350 MB",
        popular: true
    },
    {

    }

    
    
];

// Knowledge Articles Data
const articles = [
    {
        id: 1,
        title: "React 18: Những Tính Năng Mới Bạn Cần Biết",
        excerpt: "Khám phá những tính năng mới trong React 18 như Concurrent Features, Automatic Batching và Suspense for Data Fetching...",
        content: "React 18 đã được phát hành với nhiều cải tiến đáng chú ý...",
        category: "frontend",
        author: "Nguyễn Văn A",
        date: "2024-01-15",
        readTime: "8 phút",
        views: 1234,
        image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
        tags: ["React", "JavaScript", "Frontend"]
    },
    {
        id: 2,
        title: "10 JavaScript Tips cho Developer",
        excerpt: "Những mẹo JavaScript hữu ích giúp code clean và hiệu quả hơn...",
        content: "JavaScript là ngôn ngữ rất linh hoạt...",
        category: "tips",
        author: "Trần Thị B",
        date: "2024-01-10",
        readTime: "5 phút",
        views: 987,
        image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
        tags: ["JavaScript", "Tips", "Programming"]
    },
    {
        id: 3,
        title: "Hướng dẫn deploy Node.js lên AWS",
        excerpt: "Chi tiết cách deploy ứng dụng Node.js lên Amazon Web Services...",
        content: "AWS cung cấp nhiều dịch vụ để deploy ứng dụng...",
        category: "devops",
        author: "Lê Văn C",
        date: "2024-01-08",
        readTime: "12 phút",
        views: 756,
        image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
        tags: ["Node.js", "AWS", "DevOps", "Deployment"]
    },
    {
        id: 4,
        title: "CSS Grid vs Flexbox: Khi nào dùng?",
        excerpt: "So sánh và hướng dẫn sử dụng CSS Grid và Flexbox hiệu quả...",
        content: "CSS Grid và Flexbox đều là công cụ layout mạnh mẽ...",
        category: "frontend",
        author: "Phạm Thị D",
        date: "2024-01-05",
        readTime: "6 phút",
        views: 654,
        image: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg",
        tags: ["CSS", "Layout", "Frontend"]
    },
    {
        id: 5,
        title: "Flutter vs React Native: Chọn gì cho dự án Mobile?",
        excerpt: "Phân tích ưu nhược điểm của Flutter và React Native...",
        content: "Khi phát triển ứng dụng mobile cross-platform...",
        category: "mobile",
        author: "Hoàng Văn E",
        date: "2024-01-03",
        readTime: "10 phút",
        views: 543,
        image: "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg",
        tags: ["Flutter", "React Native", "Mobile", "Cross-platform"]
    },
    {
        id: 6,
        title: "API Security Best Practices",
        excerpt: "Bảo mật API - những nguyên tắc cơ bản cần tuân thủ...",
        content: "Bảo mật API là một trong những yếu tố quan trọng nhất...",
        category: "backend",
        author: "Nguyễn Văn F",
        date: "2024-01-01",
        readTime: "9 phút",
        views: 432,
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
        tags: ["API", "Security", "Backend"]
    }
];

// FAQ Data
const faqs = [
    {
        id: 1,
        question: "CodeMarket là gì?",
        answer: "CodeMarket là nền tảng chia sẻ và mua bán source code chất lượng cao, cung cấp các giải pháp phần mềm cho developers và doanh nghiệp.",
        category: "general"
    },
    {
        id: 2,
        question: "Tôi có thể thanh toán bằng cách nào?",
        answer: "Chúng tôi hỗ trợ thanh toán qua thẻ tín dụng, chuyển khoản ngân hàng, ví điện tử MoMo, ZaloPay và các phương thức thanh toán phổ biến khác.",
        category: "purchase"
    },
    {
        id: 3,
        question: "Source code có được cập nhật không?",
        answer: "Có, chúng tôi thường xuyên cập nhật source code để đảm bảo tính bảo mật và tương thích với các công nghệ mới nhất.",
        category: "technical"
    },
    {
        id: 4,
        question: "Tôi có được hỗ trợ kỹ thuật không?",
        answer: "Có, chúng tôi cung cấp hỗ trợ kỹ thuật 24/7 qua email, chat và hotline. Đội ngũ kỹ thuật sẽ hỗ trợ bạn cài đặt và sử dụng source code.",
        category: "support"
    },
    {
        id: 5,
        question: "Bản quyền source code như thế nào?",
        answer: "Sau khi mua, bạn sẽ có quyền sử dụng source code cho dự án thương mại. Tuy nhiên, bạn không được phép bán lại hoặc chia sẻ source code cho bên thứ ba.",
        category: "license"
    },
    {
        id: 6,
        question: "Có demo để xem trước không?",
        answer: "Có, hầu hết sản phẩm đều có demo trực tuyến để bạn có thể xem trước tính năng và giao diện trước khi mua.",
        category: "general"
    },
    {
        id: 7,
        question: "Tôi muốn yêu cầu lập trình theo yêu cầu riêng?",
        answer: "Chúng tôi cung cấp dịch vụ lập trình thuê. Vui lòng liên hệ qua trang Dịch Vụ để được tư vấn và báo giá chi tiết.",
        category: "services"
    },
    {
        id: 8,
        question: "Làm sao để cài đặt source code?",
        answer: "Mỗi source code đều đi kèm với tài liệu hướng dẫn cài đặt chi tiết. Nếu gặp khó khăn, bạn có thể liên hệ support để được hỗ trợ.",
        category: "technical"
    },
    {
        id: 9,
        question: "Có chính sách hoàn tiền không?",
        answer: "Có, chúng tôi có chính sách hoàn tiền trong vòng 7 ngày nếu sản phẩm không đúng như mô tả hoặc có lỗi kỹ thuật không thể khắc phục.",
        category: "purchase"
    },
    {
        id: 10,
        question: "Tôi có thể custom source code không?",
        answer: "Có, chúng tôi cung cấp dịch vụ custom source code theo yêu cầu. Chi phí sẽ được tính dựa trên độ phức tạp của yêu cầu.",
        category: "services"
    }
];

// Reviews Data: review sản phẩm theo id
const reviews = [
    {
        id: 1,
        productId: 1,
        author: "Nguyễn Văn A",
        rating: 5,
        comment: "Source code rất chất lượng, tài liệu đầy đủ. Hỗ trợ nhiệt tình!",
        date: "2024-01-10",
        verified: true
    },
    {
        id: 2,
        productId: 1,
        author: "Trần Thị B",
        rating: 4,
        comment: "Code clean, dễ hiểu. Một số tính năng cần cải thiện thêm.",
        date: "2024-01-08",
        verified: true
    },
    {
        id: 3,
        productId: 2,
        author: "Lê Văn C",
        rating: 5, // đánh sao
        comment: "Web chạy mượt, giao diện đẹp. Đáng đồng tiền bát gạo!",
        date: "2024-01-12",
        verified: true
    }
];

// Utility Functions
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

function getCategoryName(category) {
    return categoryTree[category]?.name || category;
}

function getSubCategoryName(category, subCategory) {
    return categoryTree[category]?.children[subCategory]?.name || subCategory;
}

function getAllSubCategories(category) {
    return categoryTree[category]?.children || {};
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="bi bi-star-fill star text-warning"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="bi bi-star-half star text-warning"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="bi bi-star star text-muted"></i>';
    }
    
    return starsHTML;
}

// Export data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { products, articles, faqs, reviews };
}