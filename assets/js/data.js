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
        title: "Hệ thống website bán giày - .NET",
        description: "Website bán hàng truc tuyến",
        category: "web",
        subCategory: "csharp",
        price: 2000000,
        originalPrice: 2500000,
        image: "https://i.ibb.co/5x68XDhH/image1.png",
        images: [
            "https://i.ibb.co/5x68XDhH/image1.png",
            "https://i.ibb.co/pBpr0SQY/image2.png",
            "https://i.ibb.co/4RSzN25j/image3.png",
            "https://i.ibb.co/B55QnDKv/image4.png",
            "https://i.ibb.co/rGcHmtWm/image5.png",
            "https://i.ibb.co/4RD1DN3f/image6.png",
            "https://i.ibb.co/Q3Ztx6Sy/image7.png",
            "https://i.ibb.co/bjBr8cXX/image8.png",
            "https://i.ibb.co/NdZhS04G/image9.png",
            "https://i.ibb.co/whZvFKn2/image10.png",
            "https://i.ibb.co/wZG0Kj34/image11.png",
            "https://i.ibb.co/4RBC8YGG/image12.png",
            "https://i.ibb.co/8L0GMNQJ/image13.png",
            "https://i.ibb.co/cKTJVtpt/image14.png"
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
        demo: "https://youtu.be/l-zmiHSqXUk",
        version: "2.1.0",
        lastUpdate: "2024-01-15",
        fileSize: "25 MB",
        popular: false
    },
    {
        id: 2,
        title: "Hệ thống website bán sách - PHP Laravel",
        description: "Website bán sách với Php Laravel",
        category: "web",
        subCategory: "php",
        price: 1500000,
        originalPrice: 2000000,
        image: "https://i.ibb.co/QjDzYZzr/image1.png",
        images: [
            "https://i.ibb.co/QjDzYZzr/image1.png",
            "https://i.ibb.co/qLk5yntL/image2.png",
            "https://i.ibb.co/LDf42CBq/image3.png",
            "https://i.ibb.co/pBNSr3HM/image4.png",
            "https://i.ibb.co/8LZhXwT8/image5.png",
            "https://i.ibb.co/BV6xSKy9/image6.png",
            "https://i.ibb.co/qFDGfdxY/image7.png",
            "https://i.ibb.co/G4G0YVMd/image8.png",
            "https://i.ibb.co/MDj78TNZ/image9.png",
            "https://i.ibb.co/Kxj1XVG4/image10.png",
            "https://i.ibb.co/x8cSL81j/image11.png",
            "https://i.ibb.co/Tq1y8P33/image12.png",
            "https://i.ibb.co/Xk8nGxyd/image13.png",
            "https://i.ibb.co/7JnDsCkQ/image14.png",
            "https://i.ibb.co/ynvYMRwB/image15.png"
        ],
        rating: 4.8,
        reviews: 156,
        technologies: ["PHP", "Laravel", "MySQL"],
        features: [
            "Giao diện responsive hiện đại",
            "Hệ thống thanh toán tích hợp",
            "Quản lý sản phẩm",
            "Quản lý danh mục",
            "Quản lý đơn hàng",
            "Quản lý người dùng"
        ],
        demo: "https://youtu.be/xwY9oGEggoM",
        version: "2.1.0",
        lastUpdate: "2025-08-08",
        fileSize: "25 MB",
        popular: true
    },
    {
        id: 3,
        title: "Hệ thống website bán sách - PHP Laravel",
        description: "Website bán sách với Php Laravel",
        category: "web",
        subCategory: "php",
        price: 1500000,
        originalPrice: 2000000,
        image: "https://i.ibb.co/Psv42SVT/image1.png",
        images: [
            "https://i.ibb.co/Psv42SVT/image1.png",
            "https://i.ibb.co/fGxZ1SN4/image2.png",
            "https://i.ibb.co/0ykK8ngM/image3.png",
            "https://i.ibb.co/Pvn5Zdfh/image4.png",
            "https://i.ibb.co/7JSnPXsL/image5.png",
            "https://i.ibb.co/BV1CHbN1/image6.png",
            "https://i.ibb.co/XrS6W7mB/image7.png",
            "https://i.ibb.co/tM5f9yXH/image8.png",
            "https://i.ibb.co/6JtBPSs4/image9.png",
            "https://i.ibb.co/d05J044M/image10.png",
            "https://i.ibb.co/CK4j7RhB/image11.png",
            "https://i.ibb.co/b5VcJh0h/image12.png",
            "https://i.ibb.co/Tx86H9Jq/image13.png",
            "https://i.ibb.co/5ghr8R4t/image14.png",
            "https://i.ibb.co/bjGGd3vy/image15.png"
            ],
        rating: 4.5,
        reviews: 78,
        technologies: ["PHP", "Laravel", "MySQL"],
        features: [
            "Quản lý sản phẩm: Danh mục, sách, thể loại, tác giả, tin tức",
            "Quản lý bán hàng: Nhập hàng, đơn đặt hàng, đơn bán hàng, đơn hàng trả lại sách, nhà cung cấp",
            "Quản lý người dùng: Khách hàng, nhân viêb, vai trò, quyền, thông tin cá nhân", 
            "Tính năng khác: Thống kê, đăng xuất",
        ],
        demo: "https://youtu.be/2hRhl4Ffc4I",
        version: "1.0.0",
        lastUpdate: "2025-08-18",
        fileSize: "5 MB",
        popular: true
    },
    {
        id: 4,
        title: "Hệ thống website bán laptop, phụ kiện - PHP Laravel ",
        description: "Website bán hàng với PHP Laravel",
        category: "web",
        subCategory: "php",
        price: 1800000,
        originalPrice: 2500000,
        image: "https://i.ibb.co/GQLjXTmd/image1.png",
        images: [
            "https://i.ibb.co/GQLjXTmd/image1.png",
            "https://i.ibb.co/20Bz0kyf/image2.png",
            "https://i.ibb.co/232X8jD4/image3.png",
            "https://i.ibb.co/ks1RmzCH/image4.png",
            "https://i.ibb.co/qMJfCmjZ/image5.png",
            "https://i.ibb.co/1JLn6TQg/image6.png",
            "https://i.ibb.co/gbRYBKCX/image7.png",
            "https://i.ibb.co/ZzSXM7HG/image8.png",
            "https://i.ibb.co/DP7DvFKr/image9.png",
            "https://i.ibb.co/20RmWvHB/image10.png",
            "https://i.ibb.co/B5t6b9Ct/image11.png",
            "https://i.ibb.co/yFrgZkm8/image12.png"
        ],
        rating: 4.6,
        reviews: 89,
        technologies: ["PHP", "Laravel", "MySQL"],
        features: [
            "Tổng quan",
            "Quản lý sản phẩm",
            "Quản lý đơn hàng",
            "Mã giảm giá",
            "Quản lý vận chuyển",
            "Thông tin website",
            "Thương hiệu",
            "Quản lý danh mục",
            "Slider",
            "Users"
        ],
        demo: "https://youtu.be/K-jGAMLw0a4",
        version: "1.2.0",
        lastUpdate: "2025-08-21",
        fileSize: "15 MB",
        popular: false
    },
    {
        id: 5,
        title: "Hệ thống website bán điện thoại - PHP Laravel",
        description: "Website bán hàng với PHP Laravel",
        category: "web",
        subCategory: "php",
        price: 2200000,
        originalPrice: 3000000,
        image: "https://i.ibb.co/B5dF2Dwb/image1.png",
        images: [
            "https://i.ibb.co/B5dF2Dwb/image1.png",
            "https://i.ibb.co/hRs6gJyL/image2.png",
            "https://i.ibb.co/XZYkRzTh/image3.png",
            "https://i.ibb.co/QFKfvMpx/image4.png",
            "https://i.ibb.co/p649RPrh/image5.png",
            "https://i.ibb.co/rRQQnjDB/image6.png",
            "https://i.ibb.co/SXyZrmG1/image7.png",
            "https://i.ibb.co/Z6tR1w3Q/image8.png",
            "https://i.ibb.co/nW2dBnN/image9.png",
            "https://i.ibb.co/3wVzNNd/image10.png",
            "https://i.ibb.co/6k8TJSg/image11.png",
            "https://i.ibb.co/mV9RwZdX/image12.png",
            "https://i.ibb.co/b5ww7TJ2/image13.png",
            "https://i.ibb.co/fYWG7K92/image14.png",
            "https://i.ibb.co/S7cS7m37/image15.png",
            "https://i.ibb.co/TBsFGwXh/image16.png",
            "https://i.ibb.co/7d0Gf1C1/image17.png"
        ],
        rating: 4.7,
        reviews: 67,
        technologies: ["PHP", "Laravel", "MySQL"],
        features: [
            "Dashboard",
            "Danh mục sản phẩm",
            "Sản phẩm",
            "Phụ kiện",
            "Tin tức",
            "Đơn hàng",
            "Hãng sản xuất",
            "Khách hàng",
            "Phản hồi"
        ],
        demo: "https://youtu.be/Nj0W2sH4KnM",
        version: "2.1.0",
        lastUpdate: "2025-08-21",
        fileSize: "25 MB",
        popular: false
    },
    {
        id: 6,
        title: "Hệ thống website mượn trả phòng trọ - PHP Laravel",
        description: "Website quản lý với PHP Laravel",
        category: "web",
        subCategory: "php",
        price: 2200000,
        originalPrice: 3000000,
        image: "https://i.ibb.co/JRJN8kyD/image1.png",
        images: [
            "https://i.ibb.co/JRJN8kyD/image1.png",
            "https://i.ibb.co/7JzMK196/image2.png",
            "https://i.ibb.co/21vXgZ3V/image3.png",
            "https://i.ibb.co/yDGM5Tb/image4.png",
            "https://i.ibb.co/WvhxnTyd/image5.png",
            "https://i.ibb.co/WNgkDcGJ/image6.png",
            "https://i.ibb.co/0ynz0n2F/image7.png",
            "https://i.ibb.co/b50mVYz0/image8.png",
            "https://i.ibb.co/vv3cbQJF/image9.png",
            "https://i.ibb.co/Rk63cpMV/image10.png",
            "https://i.ibb.co/SXn0HgXv/image11.png",
            "https://i.ibb.co/gQ5R1Sd/image12.png",
            "https://i.ibb.co/845mffVT/image13.png"
        ],
        rating: 4.7,
        reviews: 67,
        technologies: ["PHP", "Laravel", "MySQL"],
        features: [
            "Dashboard",
            "Phòng học",
            "Thời khoá biểu",
            "Mượn phòng",
            "Trả phòng",
            "Lớp học",
            "Sinh viên",
            "Tài khoản",
            "Cài đặt"
        ],
        demo: "",
        version: "2.1.0",
        lastUpdate: "2025-08-22",
        fileSize: "25 MB",
        popular: false
    },
    {
        id: 7,
        title: "Hệ thống website tin tức quảng bá du lịch ẩm thực - PHP Laravel",
        description: "Website tin tức với PHP Laravel",
        category: "web",
        subCategory: "php",
        price: 2200000,
        originalPrice: 3000000,
        image: "https://i.ibb.co/fdCwc4np/image1.png",
        images: [
            "https://i.ibb.co/fdCwc4np/image1.png",
            "https://i.ibb.co/zWMtzxD9/image2.png",
            "https://i.ibb.co/9HjBz5FT/image3.png",
            "https://i.ibb.co/ycNVt86q/image4.png",
            "https://i.ibb.co/3mHKzHS2/image5.png",
            "https://i.ibb.co/V0tqhv7B/image6.png",
            "https://i.ibb.co/xS9mpcDf/image7.png",
            "https://i.ibb.co/prfgM4p8/image8.png"
        ],
        rating: 4.7,
        reviews: 67,
        technologies: ["PHP", "Laravel", "MySQL"],
        features: [
            "Dashboard",
            "Danh mục",
            "Tin tức",
            "Cài đặt"
        ],
        demo: "https://youtu.be/IQ8BKFNZZJw",
        version: "2.1.0",
        lastUpdate: "2025-08-22",
        fileSize: "25 MB",
        popular: false
    },
    {
        id: 8,
        title: "Hệ thống website tìm việc - PHP Laravel",
        description: "Hệ thống website quản lý với PHP Laravel",
        category: "web",
        subCategory: "php",
        price: 2200000,
        originalPrice: 3000000,
        image: "https://i.ibb.co/0y9jgVWK/image1.png",
        images: [
            "https://i.ibb.co/0y9jgVWK/image1.png",
            "https://i.ibb.co/7xcCbnSh/image2.png",
            "https://i.ibb.co/Vpx7DgDd/image3.png",
            "https://i.ibb.co/4n0mfsxy/image4.png",
            "https://i.ibb.co/pBWdkRRh/image5.png",
            "https://i.ibb.co/357TkQxV/image6.png",
            "https://i.ibb.co/LDDhsT4H/image7.png",
            "https://i.ibb.co/k22pJsRJ/image8.png",
            "https://i.ibb.co/qYz936f8/image9.png",
            "https://i.ibb.co/jv6spJSf/image10.png",
            "https://i.ibb.co/rGptspWV/image11.png",
            "https://i.ibb.co/wr2x5LNx/image12.png",
            "https://i.ibb.co/3YL4Qdym/image13.png"
        ],
        rating: 4.7,
        reviews: 67,
        technologies: ["PHP", "Laravel", "MySQL"],
        features: [
            "Dashboard",
            "Người dùng",
            "Lĩnh vực",
            "Công việc",
            "Công ty"
        ],
        demo: "https://youtu.be/Ei0-NK_dQLo",
        version: "2.1.0",
        lastUpdate: "2025-08-22",
        fileSize: "25 MB",
        popular: false
    },
    {
        id: 9,
        title: "Hệ thống website quản lý khách sạn - PHP Thuần",
        description: "Website quản lý - PHP Thuần",
        category: "web",
        subCategory: "php",
        price: 1500000,
        originalPrice: 2000000,
        image: "https://i.ibb.co/fGvP1GZY/image1.png",
        images: [
            "https://i.ibb.co/fGvP1GZY/image1.png",
            "https://i.ibb.co/5hjrZkYB/image2.png",
            "https://i.ibb.co/23mCGCyg/image3.png",
            "https://i.ibb.co/RkbVnhgV/image4.png",
            "https://i.ibb.co/Z6bdjhFs/image5.png",
            "https://i.ibb.co/8gCHGVh6/image6.png",
            "https://i.ibb.co/HTn4L42g/image7.png",
            "https://i.ibb.co/N6PJRk4w/image8.png",
            "https://i.ibb.co/hFn43MNM/image9.png",
            "https://i.ibb.co/YTkqR3BN/image10.png",
            "https://i.ibb.co/KcJDMkXZ/image11.png",
            "https://i.ibb.co/xKbgJTXd/image12.png",
            "https://i.ibb.co/0RFN0H56/image13.png",
            "https://i.ibb.co/nyyVKjT/image14.png",
            "https://i.ibb.co/TMRjd23S/image15.png",
            "https://i.ibb.co/XxhsrD8j/image16.png"
        ],
        rating: 4.7,
        reviews: 67,
        technologies: ["PHP Thuần", "MySQL"],
        features: [
            "Trang chủ",
            "Quản lý phòng",
            "Quản lý nhân viên",
            "Quản lý khách sạn",
            "Quản lý tin tức",
            "Quản lý đặt phòng",
            "Thống kê"
        ],
        demo: "https://youtu.be/Wyze2ym26q0",
        version: "2.1.0",
        lastUpdate: "2025-09-20",
        fileSize: "25 MB",
        popular: true
    },
    {
        id: 10,
        title: "Hệ thống website bán mỹ phẩm - PHP Thuần",
        description: "Website bán hàng - PHP Thuần",
        category: "web",
        subCategory: "php",
        price: 1000000,
        originalPrice: 1500000,
        image: "https://i.ibb.co/MkVBnVLf/image1.png",
        images: [
            "https://i.ibb.co/MkVBnVLf/image1.png",
            "https://i.ibb.co/BHw7ztpb/image2.png",
            "https://i.ibb.co/Hf1F7d3X/image3.png",
            "https://i.ibb.co/ks6962hV/image4.png",
            "https://i.ibb.co/rGKyt5tH/image5.png",
            "https://i.ibb.co/YBjGCB5v/image6.png",
            "https://i.ibb.co/Y4T2M0S5/image7.png",
            "https://i.ibb.co/RT183bhC/image8.png",
            "https://i.ibb.co/yn1bhfTp/image9.png",
            "https://i.ibb.co/m5Q6xn8K/image10.png",
            "https://i.ibb.co/6RDC7SCM/image11.png",
            "https://i.ibb.co/Y7FnQPxH/image12.png",
            "https://i.ibb.co/cXMSZ9vD/image13.png",
            "https://i.ibb.co/HLSN1v4s/image14.png"
        ],
        rating: 4.7,
        reviews: 67,
        technologies: ["PHP Thuần", "MySQL"],
        features: [
            "Trang chủ",
            "Quản lý tài khoản",
            "Quản lý sản phẩm",
            "Quản lý loại sản phẩm",
            "Xeys duyệt hóa đơn",
            "Quản lý danh mục sản phẩm",
            "Quản lý banner",
            "Quản lý khuyến mãi"
        ],
        demo: "https://youtu.be/cR2oZyh9StE",
        version: "2.1.0",
        lastUpdate: "2025-09-22",
        fileSize: "25 MB",
        popular: true
    },
    {
        id: 11,
        title: "Hệ thống website bán quần áo - Java Spring boot",
        description: "Website bán quần áo - Java Spring boot",
        category: "web",
        subCategory: "java",
        price: 1500000,
        originalPrice: 2000000,
        image: "https://i.ibb.co/Kc4596c7/image4.png",
        images: [
            "https://i.ibb.co/Kc4596c7/image4.png",
            "https://i.ibb.co/wNqFqDNL/image5.png",  
            "https://i.ibb.co/zWVYRWNL/image6.png",
            "https://i.ibb.co/KjkQVPZ0/image7.png",
            "https://i.ibb.co/VYgZRyqz/image8.png",
            "https://i.ibb.co/xxYRh7q/image9.png",
            "https://i.ibb.co/hxJZys3L/image10.png",
            "https://i.ibb.co/GQ7ZT2PG/image11.png",
            "https://i.ibb.co/7DdFjtb/image12.png",
            "https://i.ibb.co/7NxTQCXg/image13.png",
            "https://i.ibb.co/ymH1f3pW/image14.png",
            "https://i.ibb.co/KpVQtmG3/image15.png",
            "https://i.ibb.co/5xY1mJFb/image16.png",
            "https://i.ibb.co/zT3HnjnB/image17.png",
            "https://i.ibb.co/8vQgJqm/image18.png",
            "https://i.ibb.co/57LGdmG/image1.png",
            "https://i.ibb.co/zHBkL0tJ/image2.png",
            "https://i.ibb.co/Vbbq0mW/image3.png"
        ],
        rating: 4.7,
        reviews: 67,
        technologies: ["Java Spring boot","React", "MySQL"],
        features: [
            "Overview",
            "Quản lý sản phẩm",
            "Quản lý loại sản phẩm",
            "Quản lý màu sản phẩm",
            "Quản lý size sản phẩm",
            "Quản lý đơn hàng",
            "Mã giảm giá",
            "Phiếu giảm giá"
        ],
        demo: "https://youtu.be/nTl_DNwi7w4",
        version: "2.1.0",
        lastUpdate: "2025-09-12",
        fileSize: "25 MB",
        popular: true
    },
    // Mobile từ 101 đến 200
    {
        id: 101,
        title: "BMI Calculator App",
        description: "Ứng dụng tính BMI",
        category: "mobile",
        subCategory: "java",
        price: 500000,
        originalPrice: 600000,
        image: "https://i.ibb.co/nqxsctM7/image1.png",
        images: [
            "https://i.ibb.co/nqxsctM7/image1.png",
            "https://i.ibb.co/nNS6dCMG/image2.png"
        ],
        rating: 4.9,
        reviews: 89,
        technologies: ["Java"],
        features: [
            "Tính BMI",
        ],
        demo: "",
        version: "1.5.2",
        lastUpdate: "2025-10-29",
        fileSize: "37.5 MB",
        popular: false
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
    {
        id: 203,
        title: "Phần mềm xử lý ảnh - Winform C#",
        description: "Phần mềm xử lý ảnh với Winform C#",
        category: "desktop",
        subCategory: "csharp",
        price: 500000,
        originalPrice: 600000,
        image: "https://i.ibb.co/nMNYfdyG/image1.png",
        images: [
            "https://i.ibb.co/nMNYfdyG/image1.png",
            "https://i.ibb.co/8gKS1fkP/image2.png",
            "https://i.ibb.co/8DfMG6cJ/image3.png",
            "https://i.ibb.co/mCSfFwsv/image4.png"
        ],
        rating: 4.3,
        reviews: 32,
        technologies: ["C#", "Winform"],
        features: [
            "Thay đổi kích thước",
            "Cắt ảnh",
            "Xoay 90",
            "Lật dọc",
            "Lật ngang",
            "Làm mờ",
            "Sắc nét",
            "Trắng đen",
            "Sepia",
            "Lưu ảnh",
            "Hoàn tác",
            "Làm lại"
        ],
        demo: "https://demo.example.com",
        version: "1.8.0",
        lastUpdate: "2025-09-14",
        fileSize: "42 MB",
        popular: true
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
    //WORDPRESS 
    {
        id: 1,
        title: "Thủ thuật WordPress",
        excerpt: "Tổng hợp các mẹo và hướng dẫn thực hành WordPress: tối ưu tốc độ tải trang, chỉnh sửa theme, quản lý plugin, và xử lý lỗi thường gặp.",
        content: "https://freetuts.net/thu-thuat-wordpress",
        category: "wordpress",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-10",
        readTime: "8 phút",
        views: 1234,
        image: "assets/image/logo/wordpress.png",
        tags: ["Thủ thuật", "Wordpress", "Theme", "Plugin"]
    },
    {
        id: 2,
        title: "Share Theme WordPress",
        excerpt: "Tổng hợp và chia sẻ các theme WordPress chất lượng, được chọn lọc kỹ lưỡng.",
        content: "https://freetuts.net/theme-wordpress",
        category: "wordpress",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-10",
        readTime: "5 phút",
        views: 987,
        image: "assets/image/logo/wordpress.png",
        tags: ["Theme", "Wordpress", "Plugin"]
    },
    {
        id: 3,
        title: "Share Plugins WordPress",
        excerpt: "Tổng hợp và chia sẻ plugin WordPress chất lượng, an toàn và dễ sử dụng. Cập nhật thường xuyên những plugin mới nhất giúp website hoạt động hiệu quả và chuyên nghiệp hơn.",
        content: "https://freetuts.net/plugin-wordpress",
        category: "wordpress",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-10",
        readTime: "12 phút",
        views: 756,
        image: "assets/image/logo/wordpress.png",
        tags: ["Plugin", "Wordpress"]
    },
    {
        id: 4,
        title: "Lập trình WordPress",
        excerpt: "Hướng dẫn chi tiết các kỹ thuật lập trình WordPress: tạo theme chuẩn code, viết plugin mở rộng, tối ưu hiệu suất và bảo mật.",
        content: "https://freetuts.net/lap-trinh-wordpress",
        category: "wordpress",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-10",
        readTime: "20 phút",
        views: 654,
        image: "assets/image/logo/wordpress.png",
        tags: ["Wordpress", "API", "Custom"]
    },
    {
        id: 5,
        title: "HTML Templates",
        excerpt: "Tổng hợp và chia sẻ HTML Templates chất lượng, thiết kế chuyên nghiệp, mã nguồn rõ ràng.",
        content: "https://freetuts.net/html-templates",
        category: "wordpress",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-10",
        readTime: "10 phút",
        views: 543,
        image: "assets/image/logo/wordpress.png",
        tags: ["HTML", "Wordpress"]
    },
    // FE
    {
        id: 101,
        title: "Học HTML & CSS",
        excerpt: "Nền tảng cơ bản trong phát triển web. Hướng dẫn cách tạo cấu trúc trang, bố cục, màu sắc, phông chữ và hiệu ứng để thiết kế website đẹp mắt và dễ sử dụng.",
        content: "https://freetuts.net/hoc-html-css",
        category: "frontend",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-12",
        readTime: "12 phút",
        views: 621,
        image: "assets/image/logo/HTML-CSS.png",
        tags: ["HTML", "CSS", "Frontend"]
    },
    {
        id: 102,
        title: "Học Bootstrap",
        excerpt: "Tìm hiểu Bootstrap – bộ công cụ thiết kế giao diện web phổ biến nhất hiện nay. Học cách sử dụng grid system, button, navbar và các thành phần UI sẵn có để tiết kiệm thời gian lập trình.",
        content: "https://freetuts.net/hoc-bootstrap",
        category: "frontend",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-12",
        readTime: "12 phút",
        views: 711,
        image: "assets/image/logo/bootstrap.png",
        tags: ["Bootstrap", "grid system","button", "navbar", "Frontend"]
    },
     {
        id: 103,
        title: "Học Tailwind CSS",
        excerpt: "Tìm hiểu Tailwind CSS – công cụ thiết kế web hiện đại theo hướng “utility-first”. Hướng dẫn cách sử dụng class tiện ích để tạo bố cục, màu sắc, khoảng cách và hiệu ứng chuyên nghiệp.",
        content: "https://freetuts.net/tailwind-css",
        category: "frontend",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-10",
        readTime: "2 giờ",
        views: 891,
        image: "assets/image/logo/tailwind-css.png",
        tags: ["Tailwind","Bố cục","Màu sắc", "Khoảng cách", "Frontend"]
    },
    {
        id: 104,
        title: "Học SASS CSS",
        excerpt: "Tìm hiểu Sass – công cụ tiền xử lý CSS mạnh mẽ. Học cách sử dụng biến, mixin, nested rules và import để tổ chức mã CSS chuyên nghiệp, dễ mở rộng và tái sử dụng.",
        content: "https://freetuts.net/hoc-sass-css",
        category: "frontend",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-12",
        readTime: "34 phút",
        views: 111,
        image: "assets/image/logo/sass-css.png",
        tags: ["SASS CSS","Mixin","Nested rules", "Frontend"]
    },
    {
        id: 105,
        title: "Học Javascript",
        excerpt: "Cùng khám phá JavaScript qua các bài học dễ hiểu, bài tập thực hành và thủ thuật lập trình hữu ích.",
        content: "https://freetuts.net/hoc-javascript",
        category: "frontend",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-10",
        readTime: "9 phút",
        views: 432,
        image: "assets/image/logo/Java-script.jpg",
        tags: ["Javascript","Frontend"]
    },
    {
        id: 106,
        title: "Học TypeScript",
        excerpt: "Ngôn ngữ được phát triển bởi Microsoft, bổ sung kiểu dữ liệu tĩnh và tính năng hướng đối tượng cho JavaScript. Học cách sử dụng class, interface, module và generics hiệu quả.",
        content: "https://freetuts.net/hoc-typescript",
        category: "frontend",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-12",
        readTime: "1 giờ 30 phút",
        views: 621,
        image: "assets/image/logo/TypeScript.png",
        tags: ["TypeScript", "Class", "Interface", "Module", "Generics", "Frontend"]
    },
    {
        id: 107,
        title: "Học jQuery | Tự học jQuery",
        excerpt: "Tự học jQuery từng bước, nắm vững cách sử dụng selector, event, animation và AJAX.",
        content: "https://freetuts.net/hoc-jquery",
        category: "frontend",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-10",
        readTime: "12 phút",
        views: 600,
        image: "assets/image/logo/jquery.png",
        tags: ["jQuery", "Frontend"]
    },
    {
        id: 108,
        title: "Học jQuery Mobile",
        excerpt: "Tìm hiểu jQuery Mobile – framework phát triển giao diện web di động dựa trên jQuery. Học cách tạo layout, form, danh sách và hiệu ứng cảm ứng dễ sử dụng cho người dùng smartphone.",
        content: "https://freetuts.net/hoc-jquery-mobile",
        category: "frontend",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-12",
        readTime: "24 phút",
        views: 621,
        image: "assets/image/logo/jquery.png",
        tags: ["jQuery", "Layout", "Form", "Danh sách", "Hiệu ứng", "Frontend"]
    },
    {
        id: 109,
        title: "Học AngularJS",
        excerpt: "Từng bước tìm hiểu AngularJS: từ cấu trúc MVC, directive, service đến routing và API.",
        content: "https://freetuts.net/hoc-angularjs",
        category: "frontend",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-10",
        readTime: "12 phút",
        views: 621,
        image: "assets/image/logo/angular.png",
        tags: ["Angular", "Frontend"]
    },
    {
        id: 110,
        title: "Học VueJS",
        excerpt: "Tìm hiểu VueJS – framework JavaScript mạnh mẽ và nhẹ, giúp phát triển giao diện tương tác nhanh chóng. Học cách sử dụng component, directive, event và reactive data hiệu quả.",
        content: "https://freetuts.net/hoc-vuejs",
        category: "frontend",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-10",
        readTime: "80 phút",
        views: 259,
        image: "assets/image/logo/vuejs.png",
        tags: ["VueJS", "Component", "Directive", "Event", "Reactive data", "Frontend"]
    },
    {
        id: 111,
        title: "Học NestJS",
        excerpt: "Tìm hiểu NestJS – framework backend hiện đại, kết hợp sức mạnh của TypeScript và kiến trúc hướng module. Học cách xây dựng RESTful API, quản lý middleware, guard và dependency injection.",
        content: "https://freetuts.net/hoc-nestjs",
        category: "frontend",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-12",
        readTime: "2 phút",
        views: 827,
        image: "assets/image/logo/nestjs.jpg",
        tags: ["NestJS", "RESTful API", "Middleware", "Guard", "Dependency injection", "Frontend"]
    },
    {
        id: 112,
        title: "Học ReactJS",
        excerpt: "Tìm hiểu ReactJS – thư viện front-end do Facebook phát triển, giúp tạo ứng dụng web động thông qua component và Virtual DOM. Học cách quản lý state, props và sự kiện trong React.",
        content: "https://freetuts.net/reactjs",
        category: "frontend",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-10",
        readTime: "1 giờ 28 phút",
        views: 321,
        image: "assets/image/logo/reactjs.png",
        tags: ["ReactJS","Component", "Virtual DOM", "Frontend"]
    },
    //BE
    {
        id: 201,
        title: "Tự Học PHP",
        excerpt: "Hướng dẫn tự học PHP chi tiết, từng bước làm quen với cú pháp, biến, hàm, form, và cơ sở dữ liệu MySQL. Giúp bạn phát triển kỹ năng lập trình web bền vững và hiệu quả.",
        content: "https://freetuts.net/hoc-php",
        category: "backend",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-10",
        readTime: "12 phút",
        views: 621,
        image: "assets/image/logo/php.png",
        tags: ["PHP", "Backend"]
    },
    {
        id: 202,
        title: "Học Codeigniter Framework",
        excerpt: "Từng bước tìm hiểu CodeIgniter – framework PHP nhẹ, mạnh mẽ và dễ học. Hướng dẫn cài đặt, cấu hình, xử lý dữ liệu và phát triển ứng dụng web hiệu quả theo chuẩn MVC.",
        content: "https://freetuts.net/hoc-codeigniter",
        category: "backend",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-10",
        readTime: "12 phút",
        views: 621,
        image: "assets/image/logo/codeigniter.png",
        tags: ["PHP", "Backend"]
    },
    {
        id: 203,
        title: "Học Laravel Framework",
        excerpt: "Từng bước học Laravel qua các ví dụ thực tế: routing, controller, migration, blade template và Eloquent ORM. Cung cấp nền tảng vững chắc để bạn xây dựng ứng dụng web chất lượng cao.",
        content: "https://freetuts.net/hoc-laravel",
        category: "backend",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-10",
        readTime: "12 phút",
        views: 621,
        image: "assets/image/logo/laravel.png",
        tags: ["PHP", "Backend"]
    },
    {
        id: 204,
        title: "Học OpenCart",
        excerpt: "Hệ thống quản lý cửa hàng trực tuyến mạnh mẽ, hỗ trợ đa ngôn ngữ, đa tiền tệ. Hướng dẫn cài đặt, quản lý sản phẩm, đơn hàng và tùy chỉnh giao diện.",
        content: "https://freetuts.net/hoc-opencart",
        category: "backend",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-12",
        readTime: "4 phút",
        views: 621,
        image: "assets/image/logo/opencart.png",
        tags: ["Opencart", "Backend"]
    },
    {
        id: 205,
        title: "Học NodeJS",
        excerpt: "Nền tảng mạnh mẽ giúp lập trình JavaScript phía backend. Học cách sử dụng module, ExpressJS, xử lý file, và làm việc với cơ sở dữ liệu một cách linh hoạt.",
        content: "https://freetuts.net/hoc-nodejs",
        category: "backend",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-12",
        readTime: "2 giờ",
        views: 621,
        image: "assets/image/logo/Node.png",
        tags: ["NodeJS","Module","ExpressJS", "Backend"]
    },
    // Programming
    {
        id: 301,
        title: "Tự Học ASP.NET",
        excerpt: "Từng bước học ASP.NET qua các ví dụ thực tế: từ cấu trúc project, routing, controller đến kết nối cơ sở dữ liệu.",
        content: "https://freetuts.net/hoc-asp-net",
        category: "programming",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-10",
        readTime: "12 phút",
        views: 651,
        image: "assets/image/logo/asp-.net.png",
        tags: ["ASP.NET", "Programming"]
    },
    {
        id: 302,
        title: "Học Python",
        excerpt: "Tự học Python từng bước, từ cú pháp cơ bản đến lập trình hướng đối tượng và xử lý dữ liệu.",
        content: "https://freetuts.net/hoc-python",
        category: "programming",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-10",
        readTime: "12 phút",
        views: 621,
        image: "assets/image/logo/python.png",
        tags: ["Python", "Programming"]
    },
    {
        id: 303,
        title: "AI (Machine Learning)",
        excerpt: "Học AI và Machine Learning từ cơ bản đến nâng cao. Khám phá các khái niệm, thuật toán,...",
        content: "https://freetuts.net/ai-machine-learning",
        category: "programming",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-10",
        readTime: "2 phút",
        views: 750,
        image: "assets/image/logo/ai.png",
        tags: ["AI","Machine Learning", "Programming"]
    },
    {
        id: 304,
        title: "Học Java, toàn bộ kiến thức Java cơ bản và Java nâng cao",
        excerpt: "Nắm vững cú pháp, cấu trúc, lập trình hướng đối tượng và cách áp dụng Java trong dự án thực tế.",
        content: "https://freetuts.net/hoc-java",
        category: "programming",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-10",
        readTime: "12 phút",
        views: 700,
        image: "assets/image/logo/java.png",
        tags: ["Java", "Programming"]
    },
     {
        id: 305,
        title: "Học C#",
        excerpt: "Tự học C# qua các ví dụ thực tế, nắm vững cú pháp, hướng đối tượng (OOP), xử lý dữ liệu và giao diện người dùng.",
        content: "https://freetuts.net/hoc-csharp",
        category:"programming",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-10",
        readTime: "12 phút",
        views: 800,
        image: "assets/image/logo/c-sharp.png",
        tags: ["C#", "Programming"]
    },
     {
        id: 306,
        title: "Học Ruby",
        excerpt: "Nắm vững cú pháp, cấu trúc dữ liệu, hướng đối tượng và xử lý logic. Bước đầu làm quen với Ruby on Rails để phát triển ứng dụng web hiện đại.",
        content: "https://freetuts.net/hoc-ruby",
        category: "programming",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-10",
        readTime: "12 phút",
        views: 150,
        image: "assets/image/logo/Ruby.jpg",
        tags: ["Ruby", "Programming"]
    },
     {
        id: 307,
        title: "Học Swift",
        excerpt: "Tự học Swift qua các ví dụ thực tế. Tìm hiểu cú pháp, biến, hàm, lớp và giao diện người dùng trong Xcode.",
        content: "https://freetuts.net/hoc-swift",
        category: "programming",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-10",
        readTime: "12 phút",
        views: 221,
        image: "assets/image/logo/Swift.jpg",
        tags: ["Swift", "Programming"]
    },
     {
        id: 308,
        title: "Học C / C++",
        excerpt: "Tự học C / C++ qua các ví dụ thực tế. Tìm hiểu cú pháp, hàm, con trỏ, mảng, lớp và hướng đối tượng.",
        content: "https://freetuts.net/hoc-c",
        category: "programming",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-10",
        readTime: "12 phút",
        views: 421,
        image: "assets/image/logo/c-c++.jpg",
        tags: ["C/C++", "Programming"]
    },
     {
        id: 309,
        title: "Học Kotlin",
        excerpt: "Tự học Kotlin qua các ví dụ thực tế. Tìm hiểu cú pháp, biến, hàm, lớp, coroutine và cách áp dụng trong Android Studio. Phù hợp cho cả người mới bắt đầu và lập trình viên chuyển từ Java sang.",
        content: "https://freetuts.net/kotlin",
        category: "programming",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-10",
        readTime: "12 phút",
        views: 521,
        image: "assets/image/logo/kotlin.png",
        tags: ["Kotlin", "Programming"]
    },
     {
        id: 310,
        title: "Cấu trúc dữ liệu & Giải thuật",
        excerpt: "Tìm hiểu các cấu trúc dữ liệu như mảng, danh sách liên kết, ngăn xếp, hàng đợi, cây, đồ thị cùng các giải thuật tìm kiếm và sắp xếp. Rèn luyện kỹ năng phân tích và thiết kế thuật toán qua ví dụ thực tế.",
        content: "https://freetuts.net/giai-thuat",
        category: "programming",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-10",
        readTime: "12 phút",
        views: 891,
        image: "assets/image/logo/cau-truc-du-lieu-va-giai-thuat.png",
        tags: ["Thuật toán", "Programming"]
    },
    {
        id: 311,
        title: "Học Visual Basic",
        excerpt: "Tự học Visual Basic qua ví dụ thực tế: từ cú pháp, biến, vòng lặp, điều kiện cho đến lập trình hướng đối tượng và kết nối cơ sở dữ liệu.",
        content: "https://freetuts.net/visual-basic",
        category: "programming",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-10",
        readTime: "12 phút",
        views: 631,
        image: "assets/image/logo/visualbasic-dotnet.png",
        tags: ["AI","Machine Learning", "Programming"]
    },
    //Mobile
    {
        id: 401,
        title: "Lập trình Android",
        excerpt: "Tự học lập trình Android qua các ví dụ thực tế: tạo layout, xử lý sự kiện, tương tác với cơ sở dữ liệu SQLite và API.",
        content: "https://freetuts.net/android",
        category: "mobile",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-11",
        readTime: "12 phút",
        views: 456,
        image: "assets/image/logo/android.jpg",
        tags: ["Android","Mobile"]
    },
    {
        id: 402,
        title: "Flutter là gì? Lộ trình tự học Flutter từ căn bản đến nâng cao",
        excerpt: "Tự học Flutter qua ví dụ thực tế: tìm hiểu widget, layout, state management, kết nối API và cơ sở dữ liệu.",
        content: "https://freetuts.net/flutter",
        category: "mobile",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-11",
        readTime: "12 phút",
        views: 358,
        image: "assets/image/logo/flutter.png",
        tags: ["Flutter","Mobile"]
    },
    {
        id: 403,
        title: "Học React Native",
        excerpt: "Thiết kế giao diện bằng component, quản lý state, điều hướng, đến kết nối API và cơ sở dữ liệu.",
        content: "https://freetuts.net/react-native",
        category: "mobile",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-11",
        readTime: "12 phút",
        views: 571,
        image: "assets/image/logo/react-native.png",
        tags: ["React Native","Mobile"]
    },
    {
        id: 404,
        title: "Học iOS",
        excerpt: "Tự học iOS qua các ví dụ thực tế: từ thiết kế giao diện bằng Interface Builder, quản lý dữ liệu với Core Data, đến kết nối API và App Store.",
        content: "https://freetuts.net/ios",
        category: "mobile",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-11",
        readTime: "12 phút",
        views: 643,
        image: "assets/image/logo/IOS.png",
        tags: ["IOS","Mobile"]
    },
    // Database
    {
        id: 501,
        title: "CSDL căn bản",
        excerpt: "Tự học CSDL qua các ví dụ thực tế: thiết kế bảng, ràng buộc dữ liệu, khóa chính – khóa ngoại, và thao tác dữ liệu bằng ngôn ngữ SQL.",
        content: "https://freetuts.net/csdl-can-ban",
        category: "database",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-11",
        readTime: "100 phút",
        views: 431,
        image: "assets/image/logo/database.jpg",
        tags: ["CSDL","JSON","T-SQL","Database"]
    },
    {
        id: 502,
        title: "Học SQL Server",
        excerpt: "Tự học SQL Server qua các ví dụ thực tế: từ tạo bảng, khóa, quan hệ, đến truy vấn, hàm và thủ tục lưu trữ.",
        content: "https://freetuts.net/hoc-sql-server",
        category: "database",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-11",
        readTime: "120 phút",
        views: 451,
        image: "assets/image/logo/sql-server.png",
        tags: ["SQL Server","SQL","Database"]
    },
    {
        id: 503,
        title: "Học MySQL",
        excerpt: "Tự học MySQL qua các ví dụ thực tế: tạo bảng, truy vấn, khóa, ràng buộc và tối ưu dữ liệu. Là nền tảng quan trọng cho lập trình web PHP, Python, Java và nhiều ngôn ngữ khác.",
        content: "https://freetuts.net/hoc-mysql",
        category: "database",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-11",
        readTime: "120 phút",
        views: 478,
        image: "assets/image/logo/mysql.jpg",
        tags: ["CSDL","Stored Procedure","Trigger","Database"]
    },
    {
        id: 504,
        title: "Học SQLite",
        excerpt: "Tự học SQLite qua ví dụ thực tế: tạo bảng, thêm – sửa – xóa dữ liệu, truy vấn SQL và kết nối với ứng dụng Android hoặc Python.",
        content: "https://freetuts.net/hoc-sqlite",
        category: "database",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-11",
        readTime: "90 phút",
        views: 501,
        image: "assets/image/logo/sqlite.png",
        tags: ["CSDL","SQLite","Database"]
    },
    {
        id: 505,
        title: "Học Oracle",
        excerpt: "Tự học Oracle qua các ví dụ thực tế: từ tạo bảng, truy vấn SQL, thủ tục PL/SQL, đến quản trị và tối ưu hiệu năng hệ thống.",
        content: "https://freetuts.net/hoc-oracle",
        category: "database",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-11",
        readTime: "110 phút",
        views: 601,
        image: "assets/image/logo/oracle.png",
        tags: ["CSDL","Oracle","Database"]
    },
    {
        id: 506,
        title: "Học MongoDB",
        excerpt: "Tự học MongoDB qua các ví dụ thực tế: từ tạo collection, thao tác CRUD, truy vấn dữ liệu đến tối ưu hiệu năng và tích hợp với Node.js hoặc Python.",
        content: "https://freetuts.net/hoc-mongodb",
        category: "database",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-11",
        readTime: "12 phút",
        views: 511,
        image: "assets/image/logo/mongodb.jpg",
        tags: ["CSDL","MongoDB","Database"]
    },
    //Hosting
    {
        id: 601,
        title: "Kiến thức Domain",
        excerpt: "Học về Domain từ cơ bản: cấu trúc tên miền, phần mở rộng (TLD), DNS và quy trình đăng ký – trỏ tên miền về hosting. Kiến thức cần thiết cho người mới bắt đầu thiết kế và quản trị website.",
        content: "https://freetuts.net/kien-thuc-domain",
        category: "hosting",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-11",
        readTime: "12 phút",
        views: 611,
        image: "assets/image/logo/domain.jpg",
        tags: ["DNS","Domain","Hosting","Cloudflare"]
    },
    {
        id: 602,
        title: "Thủ thuật Hosting",
        excerpt: "Học về Hosting từ cơ bản: các loại hosting phổ biến như Shared, VPS, Cloud, và Dedicated. Hướng dẫn cấu hình, bảo mật, sao lưu dữ liệu và tối ưu hiệu suất cho website.",
        content: "https://freetuts.net/thu-thuat-hosting",
        category: "hosting",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-11",
        readTime: "45 phút",
        views: 631,
        image: "assets/image/logo/hosting.jpg",
        tags: ["VPS","Cloud","Dedicated","Hosting"]
    },
    // Tools
    {
        id: 701,
        title: "Học Visual Studio Code",
        excerpt: "Từng bước làm quen với Visual Studio Code – trình soạn thảo mã nguồn mạnh mẽ, dễ dùng và miễn phí. Học cách cài đặt, tùy chỉnh giao diện, cài extension hỗ trợ lập trình, sử dụng terminal tích hợp và quản lý dự án hiệu quả.",
        content: "https://code.visualstudio.com/docs/getstarted/getting-started",
        category: "tools",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-24",
        readTime: "12 phút",
        views: 821,
        image: "assets/image/logo/VS-Code.png",
        tags: ["Tools","Visual Studio Code"]
    },
    {
        id: 702,
        title: "Học Git | Git toàn tập",
        excerpt: "Khóa học Git & GitHub giúp bạn nắm vững quy trình làm việc hiện đại của lập trình viên: quản lý phiên bản, cộng tác nhóm, xử lý xung đột và triển khai dự án lên GitHub.",
        content: "https://freetuts.net/hoc-git",
        category: "tools",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-11",
        readTime: "12 phút",
        views: 611,
        image: "assets/image/logo/git.jpg",
        tags: ["Tools","Git","Github"]
    },
    {
        id: 703,
        title: "Học Testing",
        excerpt: "Học Testing từ cơ bản đến nâng cao: hiểu về Unit Test, Integration Test, System Test và Automation Test. Cải thiện quy trình phát triển phần mềm bằng các phương pháp kiểm thử hiện đại.",
        content: "https://freetuts.net/testing",
        category: "tools",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-11",
        readTime: "120 phút",
        views: 123,
        image: "assets/image/logo/testing.jpg",
        tags: ["Tools","Unit Test", "Integration Test", "System Test", "Automation Test"]
    },
    {
        id: 704,
        title: "Học Docker",
        excerpt: "Học Docker từ cơ bản đến nâng cao: hiểu container, image, volume, và network.",
        category: "tools",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-11",
        readTime: "4 phút",
        views: 651,
        image: "assets/image/logo/docker.png",
        tags: ["Tools","Docker","Container","Image","Volume","Netwwork"]
    },
    {
        id: 705,
        title: "Học Control Panel",
        excerpt: "Học cPanel từ cơ bản đến nâng cao: tạo website, cấu hình domain, quản lý file, database và bảo mật hosting.",
        content: "https://freetuts.net/control-panel",
        category: "tools",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-11",
        readTime: "30 phút",
        views: 650,
        image: "assets/image/logo/cpanel.png",
        tags: ["Tools","Cpanel","Direct Admin"]
    },
    // Tin học văn phòng
    {
        id: 801,
        title: "Học Word",
        excerpt: "Tìm hiểu Word – công cụ soạn thảo văn bản mạnh mẽ của Microsoft. Hướng dẫn chi tiết cách trình bày, căn lề, tạo mục lục, đánh số trang và thiết kế mẫu văn bản chuẩn.",
        content: "https://freetuts.net/hoc-word",
        category: "tinhoc",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-11",
        readTime: "60 phút",
        views: 751,
        image: "assets/image/logo/word.jpg",
        tags: ["Tin học văn phòng","Text", "Layout", "Printing", "Objects"]
    },
    {
        id: 802,
        title: "Học Excel",
        excerpt: "Tìm hiểu Excel – phần mềm bảng tính mạnh mẽ của Microsoft. Hướng dẫn cách sử dụng hàm, định dạng dữ liệu, vẽ biểu đồ và quản lý báo cáo thông minh trong công việc hàng ngày.",
        content: "https://freetuts.net/hoc-excel",
        category: "tinhoc",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-11",
        readTime: "2 ngày",
        views: 751,
        image: "assets/image/logo/excel.png",
        tags: ["Tin học văn phòng","Hàm","Biểu đồ","Báo cáo"]
    },
    {
        id: 803,
        title: "Học PowerPoint",
        excerpt: "Tìm hiểu PowerPoint – phần mềm trình chiếu mạnh mẽ của Microsoft. Hướng dẫn tạo slide, bố cục nội dung, sử dụng hiệu ứng chuyển cảnh và trình bày bài thuyết trình chuyên nghiệp.",
        content: "https://freetuts.net/hoc-powerPoint",
        category: "tinhoc",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-11",
        readTime: "5 phút",
        views: 451,
        image: "assets/image/logo/PowerPoint.png",
        tags: ["Tin học văn phòng","Slide","Bố cục"]
    },
    {
        id: 804,
        title: "Học Access",
        excerpt: "Tìm hiểu Access – công cụ quản lý cơ sở dữ liệu của Microsoft. Học cách tạo bảng, biểu mẫu, truy vấn và báo cáo để xây dựng hệ thống dữ liệu hoàn chỉnh cho doanh nghiệp.",
        content: "https://freetuts.net/hoc-access",
        category: "tinhoc",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-11",
        readTime: "4 phút",
        views: 351,
        image: "assets/image/logo/access.png",
        tags: ["Tin học văn phòng","Bảng","Biểu mẫu","Truy vấn","Báo cáo"]
    },
    {
        id: 805,
        title: "Học Photoshop",
        excerpt: "Tìm hiểu Photoshop – phần mềm chỉnh sửa ảnh mạnh mẽ của Adobe. Hướng dẫn thao tác với layer, màu sắc, hiệu ứng và kỹ thuật retouch hình ảnh cho người mới bắt đầu.",
        content: "https://freetuts.net/hoc-photoshop",
        category: "tinhoc",
        author: "Nguyễn Vĩ Khang",
        date: "2025-10-11",
        readTime: "2 ngày",
        views: 351,
        image: "assets/image/logo/Photoshop.png",
        tags: ["Tin học văn phòng","Layer","Màu sắc","Hiệu ứng","Retouch"]
    },
    

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
        answer: "Chúng tôi hỗ trợ thanh toán qua chuyển khoản ngân hàng, ví điện tử MoMo và các phương thức thanh toán phổ biến khác.",
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