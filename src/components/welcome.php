<!doctype html>
<html class="no-js preview-html" lang="zxx">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Home Preview || Creative Multipurpose Bootstrap4 Template</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Favicon -->
    <link rel="shortcut icon" href="<?php echo $this->brook?>/img/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="<?php echo $this->brook?>/img/icon.png">

    <!-- Plugins -->
    <link rel="stylesheet" href="<?php echo $this->brook?>/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo $this->brook?>/css/revoulation.css">
    <link rel="stylesheet" href="<?php echo $this->brook?>/css/plugins.css">

    <!-- Style Css -->
    <link rel="stylesheet" href="<?php echo $this->brook?>/style.css">

    <!-- Custom Styles -->
    <link rel="stylesheet" href="<?php echo $this->brook?>/css/custom.css">
</head>

<body class="template-color-1 template-font-1 preview-html">
    <!--[if lte IE 9]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
  <![endif]-->

    <div id="page-preloader" class="page-loading clearfix">
        <div class="page-load-inner">
            <div class="preloader-wrap">
                <div class="wrap-2">
                    <div> <img src="<?php echo $this->brook?>/img/icons/brook-preloader.gif" alt="Brook Preloader"></div>
                </div>
            </div>
        </div>
    </div>

    <!-- Wrapper -->
    <div id="wrapper" class="wrapper">

        <!-- Header -->
        <header class="br_header header-default header-transparent  black-logo--version haeder-fixed-width headroom--sticky header-mega-menu clearfix">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="header__wrapper mr--0">
                            <!-- Header Left -->
                            <div class="header-left">
                                <div class="logo">
                                    <a href="index.html">
                                        <img src="<?php echo $this->brook?>/img/logo/brook-black.png" alt="Brook Images">
                                    </a>
                                </div>
                            </div>
                            <!-- Mainmenu Wrap -->
                            <div class="mainmenu-wrapper d-none d-lg-block">
                                <nav class="page_nav">
                                    <ul class="mainmenu">

                                        <li class="lavel-1"><a href="#"><span>Home</span></a>
                                        </li>

                                        <li class="lavel-1 with--drop slide--megamenu"><a href="#"><span>Login</span></a>
                                            <!-- Start Mega Menu -->
                                            <div class="mega__width--fullscreen">
                                                <div class="container">
                                                    <div class="row">

                                                        <!-- Start Single List -->
                                                        <div class="col-lg-3">
                                                            <ul class="mega__list">
                                                                <li><a href="<?php echo base_url("login/influencer")?>"><span>Login as Influencer</span></a></li>
                                                                <li><a href="<?php echo base_url("login/endorser")?>"><span>Login as Endorser</span></a></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <!-- End Mega Menu -->
                                        </li>

                                        <li class="lavel-1 with--drop slide--megamenu"><a href="#"><span>Register</span></a>
                                            <!-- Start Mega Menu -->
                                            <div class="mega__width--fullscreen">
                                                <div class="container">
                                                    <div class="row">

                                                        <!-- Start Single List -->
                                                        <div class="col-lg-3">
                                                            <ul class="mega__list">
                                                                <li><a href="<?php echo base_url()?>register/influencer"><span>Register as Influencer</span></a></li>
                                                                <li><a href="<?php echo base_url()?>register/endorser"><span>Register as Endorser</span></a></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <!-- End Mega Menu -->
                                        </li>

                                    </ul>
                                </nav>
                            </div>
                            <!-- Header Right -->
                            <div class="header-right">
                                <div class="preview-button d-none d-sm-block">
                                    <a class="brook-btn bk-btn-white btn-sd-size btn-rounded space-between" href="https://themeforest.net/user/bootxperts/portfolio" target="_blank">Purchase</a>
                                </div>
                                <!-- Start Hamberger -->
                                <div class="manu-hamber popup-mobile-click d-block d-lg-none black-version d-block d-xl-none">
                                    <div>
                                        <i></i>
                                    </div>
                                </div>
                                <!-- End Hamberger -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!--// Header -->

        <!-- Start Popup Menu -->
        <div class="popup-mobile-manu popup-mobile-visiable">
            <div class="inner">
                <div class="mobileheader">
                    <div class="logo">
                        <a href="index.html">
                            <img src="<?php echo $this->brook?>/img/logo/brook-black.png" alt="Multipurpose">
                        </a>
                    </div>
                    <a class="mobile-close" href="#"></a>
                </div>
                <div class="menu-content">
                    <ul class="menulist object-custom-menu">
                        <li class="has-mega-menu"><a href="#"><span>Home</span></a>
                        </li>

                        <li class="has-mega-menu"><a href="#"><span>Login</span></a>
                            <ul class="object-submenu">
                                <li><a href="<?php echo base_url("login/influencer")?>"><span>Login as Influencer</span></a></li>
                                <li><a href="<?php echo base_url("login/endorser")?>"><span>Login as Endorser</span></a></li>
                            </ul>
                        </li>

                        <li class="has-mega-menu"><a href="#"><span>Register</span></a>
                            <ul class="object-submenu">
                                <li><a href="<?php echo base_url("register/influencer")?>"><span>Register as Influencer</span></a></li>
                                <li><a href="<?php echo base_url("register/endorser")?>"><span>Register as Endorser</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- End Popup Menu -->

        <!-- Start Hamberger Menu -->
        <div class="open-hamberger-wrapper d-none d-lg-block">
            <div class="page-close light-version"></div>
            <div class="header-default light-logo--version poss_relative">
                <div class="mainmenu-wrapper">
                    <nav class="page_nav">
                        <ul class="mainmenu">

                            <li class="lavel-1 with--drop slide--megamenu"><a href="#"><span>Home</span></a>
                                <!-- Start Mega Menu -->
                                <div class="mega__width--fullscreen">
                                    <div class="container">
                                        <div class="row">

                                            <!-- Start Single List -->
                                            <div class="col-lg-3">
                                                <ul class="mega__list">
                                                    <li class="mega--title">MULTI-AREA HOMEPAGES</li>
                                                    <li><a href="index-business.html"><span>Business</span></a></li>
                                                    <li><a href="index-creative-agency.html"><span>Creative
                                                                Agency</span></a></li>
                                                    <li><a href="index-digital-agency.html"><span>Digital
                                                                Agency</span></a></li>
                                                    <li><a href="index-design-studio.html"><span>Design
                                                                Studio</span></a></li>
                                                    <li><a href="index-architecture.html"><span>Architecture</span></a></li>
                                                    <li><a href="index-start-ups.html"><span>Start ups</span></a></li>
                                                    <li><a href="index-minimal-agency.html"><span>Minimal
                                                                Agency</span></a></li>
                                                    <li><a href="index-freelancer.html"><span>Freelancer</span></a></li>
                                                    <li><a href="index-authentic-studio.html"><span>Authentic
                                                                Studio</span></a></li>
                                                    <li><a href="index-revolutionary.html"><span>Revolutionary</span></a></li>
                                                </ul>
                                            </div>
                                            <!-- End Single List -->

                                            <!-- Start Single List -->
                                            <div class="col-lg-3">
                                                <ul class="mega__list">
                                                    <li class="mega--title">PORTFOLIO HOMEPAGES</li>
                                                    <li><a href="index-creative-portfolio.html"><span>Creative
                                                                Portfolio</span></a></li>
                                                    <li><a href="index-minimal-portfolio.html"><span>Minimal
                                                                Portfolio</span></a></li>
                                                    <li><a href="index-vertical-slider-portfolio.html"><span>Vertical
                                                                Slide Portfolio</span></a></li>
                                                    <li><a href="index-vertical-slide-gradient-portfolio.html"><span>Vertical
                                                                Slide Gradient Portfolio</span></a></li>
                                                    <li><a href="index-portfolio-fullscreen-slider-left-vertical-header.html"><span>Portfolio
                                                                Fullscreen
                                                                Slider</span></a></li>
                                                    <li><a href="index-masonry-gallery.html"><span>Portfolio
                                                                Masonry</span></a></li>
                                                    <li><a href="index-portfolio-fullscreen-type-hover.html"><span>Portfolio
                                                                Fullscreen Type Hover</span></a></li>
                                                    <li><a href="index-portfolio-fullscreen-type-hover-02.html"><span>Portfolio
                                                                Fullscreen Type Hover
                                                                02</span></a></li>
                                                    <li><a href="index-digital-broadsheets.html"><span>Digital
                                                                Broadsheets</span></a></li>
                                                </ul>
                                            </div>
                                            <!-- End Single List -->

                                            <!-- Start Single List -->
                                            <div class="col-lg-3">
                                                <ul class="mega__list">
                                                    <li class="mega--title">CREATIVE HOMEPAGES</li>
                                                    <li><a href="index-onepage.html"><span>Onepage</span></a></li>
                                                    <li><a href="index-landing.html"><span>Landing</span></a></li>
                                                    <li><a href="index-presentation.html"><span>Presentation</span></a></li>
                                                    <li><a href="index-product-landing.html"><span>Product
                                                                Landing</span></a></li>
                                                    <li><a href="index-home-service.html"><span>Service</span></a></li>
                                                    <li><a href="index-shop.html"><span>Shop</span></a></li>
                                                    <li><a href="index-indie-musician.html"><span>Indie
                                                                Musician</span></a></li>
                                                    <li><a href="index-news-bulletin.html"><span>News
                                                                Bulletin</span></a></li>
                                                    <li><a href="index-expert.html"><span>Expert</span></a></li>
                                                </ul>
                                            </div>
                                            <!-- End Single List -->

                                            <!-- Start Single List -->
                                            <div class="col-lg-3">
                                                <ul class="mega__list">
                                                    <li class="mega--title">BLOG & GALLERY</li>
                                                    <li><a href="index-vertical-menu.html"><span>Vertical
                                                                Menu</span></a></li>
                                                    <li><a href="index-photo-slider-gallery.html"><span>Photo
                                                                Slider Gallery</span></a></li>
                                                    <li><a href="index-masonry-gallery.html"><span>Masonry
                                                                Gallery</span></a></li>
                                                    <li><a href="index-minimal-metro-grid.html"><span>Minimal
                                                                Metro Grid</span></a></li>
                                                    <li><a href="index-portfolio-slide.html"><span>Portfolio
                                                                Slide</span></a></li>
                                                    <li><a href="index-blog-metro.html"><span>Metro Blog</span></a></li>
                                                    <li><a href="index-blog-grid.html"><span>Grid Blog</span></a></li>
                                                    <li><a href="index-foodie.html"><span>Foodie</span></a></li>
                                                    <li><a href="index-expert.html"><span>Expert</span></a></li>
                                                </ul>
                                            </div>
                                            <!-- End Single List -->

                                        </div>
                                    </div>
                                </div>
                                <!-- End Mega Menu -->
                            </li>

                            <li class="lavel-1 with--drop slide--megamenu"><a href="#"><span>Pages</span></a>
                                <!-- Start Mega Menu -->
                                <div class="mega__width--fullscreen">
                                    <div class="container">
                                        <div class="row">

                                            <!-- Start Single List -->
                                            <div class="col-lg-3">
                                                <ul class="mega__list">
                                                    <li class="mega--title">Sample Pages</li>
                                                    <li><a href="about-us-01.html"><span>About Us 01</span></a></li>
                                                    <li><a href="about-us-02.html"><span>About Us 02</span></a></li>
                                                    <li><a href="about-us-03.html"><span>About Us 03</span></a></li>
                                                    <li><a href="about-us-04.html"><span>About Us 04</span></a></li>
                                                    <li><a href="about-us-05.html"><span>About Us 05</span></a></li>
                                                    <li><a href="contact-us-classic.html"><span>Contact Us
                                                                Classic</span></a></li>
                                                    <li><a href="contact-us-modern.html"><span>Contact Us
                                                                Modern</span></a></li>
                                                </ul>
                                            </div>
                                            <!-- End Single List -->

                                            <!-- Start Single List -->
                                            <div class="col-lg-3">
                                                <ul class="mega__list">
                                                    <li class="mega--title">Sample Pages</li>
                                                    <li><a href="contact-us-with-map.html"><span>Contact Us
                                                                With Map</span></a></li>
                                                    <li><a href="services-classic.html"><span>Services
                                                                Classic</span></a></li>
                                                    <li><a href="services-modern.html"><span>Services
                                                                Modern</span></a></li>
                                                    <li><a href="services-list.html"><span>Services List</span></a></li>
                                                    <li><a href="pricing-plans.html"><span>Pricing plans</span></a></li>
                                                    <li><a href="pricing-plans-02.html"><span>Pricing plans
                                                                02</span></a></li>
                                                    <li><a href="career.html"><span>Career</span></a></li>
                                                </ul>
                                            </div>
                                            <!-- End Single List -->

                                            <!-- Start Single List -->
                                            <div class="col-lg-3">
                                                <ul class="mega__list">
                                                    <li class="mega--title">Sample Pages</li>
                                                    <li><a href="team-grid.html"><span>Our Team Grid</span></a></li>
                                                    <li><a href="team-carousel-01.html"><span>Our Team
                                                                Carousel 01</span></a></li>
                                                    <li><a href="team-carousel-02.html"><span>Our Team
                                                                Carousel 02</span></a></li>
                                                    <li><a href="maintenance.html"><span>Maintenance</span></a></li>
                                                    <li><a href="coming-soon.html"><span>Coming Soon</span></a></li>
                                                    <li><a href="404.html"><span>404 Page</span></a></li>
                                                </ul>
                                            </div>
                                            <!-- End Single List -->

                                            <!-- Start Single List -->
                                            <div class="col-lg-3">
                                                <div class="mega-thumb">
                                                    <div class="thumb">
                                                        <img src="<?php echo $this->brook?>/img/others/mega-menu-image-01.jpg" alt="banner images">
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- End Single List -->

                                        </div>
                                    </div>
                                </div>
                                <!-- End Mega Menu -->
                            </li>

                            <li class="lavel-1 with--drop slide-dropdown"><a href="#"><span>Shop</span></a>

                                <!-- Start Dropdown Menu -->
                                <ul class="dropdown__menu">
                                    <li><a href="shop-minimal.html"><span>Shop Minimal</span></a></li>
                                    <li><a href="shop-fullwide.html"><span>Shop Fullwide</span></a></li>
                                    <li><a href="cart.html"><span>Cart</span></a></li>
                                    <li><a href="compare.html"><span>Compare</span></a></li>
                                    <li><a href="my-account.html"><span>My Account</span></a></li>
                                    <li><a href="login-register.html"><span>Login / Register</span></a></li>
                                    <li><a href="wishlist.html"><span>Wishlist</span></a></li>
                                    <li><a href="checkout.html"><span>Checkout</span></a></li>
                                    <li class="drop-lavel--2"><a href="#"><span>Single Product</span></a>
                                        <ul class="lavel--2">
                                            <li><a href="single-product.html"><span>Layout 01</span></a></li>
                                            <li><a href="single-product2.html"><span>Layout 02</span></a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <!-- End Dropdown Menu -->
                            </li>

                            <li class="lavel-1 with--drop slide--megamenu"><a href="#"><span>Portfolio</span></a>

                                <!-- Start Mega Menu -->
                                <div class="mega__width--fullscreen">
                                    <div class="container">
                                        <div class="row">
                                            <!-- Start Single List -->
                                            <div class="col-lg-3">
                                                <ul class="mega__list">
                                                    <li class="mega--title">Portfolio Samples 01</li>
                                                    <li><a href="portfolio-grid-boxed.html"><span>Portfolio
                                                                Grid – Boxed</span></a></li>
                                                    <li><a href="portfolio-grid-wide.html"><span>Portfolio
                                                                Grid – Wide</span></a></li>
                                                    <li><a href="portfolio-details-image-with-caption.html"><span>Portfolio
                                                                With Caption</span></a></li>
                                                    <li><a href="portfolio-with-caption-video.html"><span>Portfolio
                                                                With Caption – Video Popup</span></a></li>
                                                    <li><a href="portfolio-grid-metro-01.html"><span>Portfolio
                                                                Grid Metro 01</span></a></li>
                                                    <li><a href="portfolio-grid-metro-02.html"><span>Portfolio
                                                                Grid Metro 02</span></a></li>
                                                </ul>
                                            </div>
                                            <!-- End Single List -->

                                            <!-- Start Single List -->
                                            <div class="col-lg-3">
                                                <ul class="mega__list">
                                                    <li class="mega--title">Portfolio Samples 02</li>
                                                    <li><a href="portfolio-grid-metro-03.html"><span>Portfolio
                                                                Grid Metro 03</span></a></li>
                                                    <li><a href="portfolio-grid-boxed.html"><span>Portfolio
                                                                Grid Masonry – Boxed</span></a></li>
                                                    <li><a href="porfolio-grid-masonry-nogap.html"><span>Portfolio
                                                                Grid Masonry – No Gap</span></a></li>
                                                    <li><a href="portfolio-ajax-filter.html"><span>Portfolio
                                                                Ajax Filter</span></a></li>
                                                    <li><a href="portfolio-static-filter.html"><span>Portfolio
                                                                Static Filter</span></a></li>
                                                    <li><a href="portfolio-overlay.html"><span>Portfolio
                                                                Overlay</span></a></li>
                                                </ul>
                                            </div>
                                            <!-- End Single List -->

                                            <!-- Start Single List -->
                                            <div class="col-lg-3">
                                                <ul class="mega__list">
                                                    <li class="mega--title">Portfolio Single 01</li>
                                                    <li><a href="portfolio-details.html"><span>Left Details</span></a></li>
                                                    <li><a href="portfolio-details-right.html"><span>Right
                                                                Details</span></a></li>
                                                    <li><a href="portfolio-details-left-wide.html"><span>Left
                                                                Details – Wide</span></a></li>
                                                    <li><a href="portfolio-details-right-wide.html"><span>Right
                                                                Details – Wide</span></a></li>
                                                    <li><a href="portfolio-details-image-with-caption.html"><span>Image
                                                                With Caption</span></a></li>
                                                    <li><a href="portfolio-details-custom-layout-01.html"><span>Custom
                                                                Layout 01</span></a></li>
                                                    <li><a href="portfolio-details-custom-layout-02.html"><span>Custom
                                                                Layout 02</span></a></li>
                                                </ul>
                                            </div>
                                            <!-- End Single List -->

                                            <!-- Start Single List -->
                                            <div class="col-lg-3">
                                                <ul class="mega__list">
                                                    <li class="mega--title">Portfolio Single 02</li>
                                                    <li><a href="portfolio-details-custom-layout-03.html"><span>Custom
                                                                Layout 03</span></a></li>
                                                    <li><a href="portfolio-details-custom-layout-04.html"><span>Custom
                                                                Layout 04</span></a></li>
                                                    <li><a href="portfolio-details-custom-layout-05.html"><span>Custom
                                                                Layout 05</span></a></li>
                                                    <li><a href="portfolio-details-custom-layout-06.html"><span>Custom
                                                                Layout 06</span></a></li>
                                                    <li><a href="portfolio-details-custom-layout-07.html"><span>Custom
                                                                Layout 07</span></a></li>
                                                    <li><a href="portfolio-details-custom-layout-08.html"><span>Custom
                                                                Layout 08</span></a></li>
                                                </ul>
                                            </div>
                                            <!-- End Single List -->
                                        </div>
                                    </div>
                                </div>
                                <!-- End Mega Menu -->
                            </li>

                            <li class="lavel-1 with--drop slide--megamenu"><a href="#"><span>Elements</span></a>
                                <!-- Start Mega Menu -->
                                <div class="mega__width--fullscreen">
                                    <div class="container">
                                        <div class="row">
                                            <!-- Start Single List -->
                                            <div class="col-lg-3">
                                                <ul class="mega__list">
                                                    <li class="mega--title">Element Group 01</li>
                                                    <li><a href="brand.html"><span>Client Logos</span></a></li>
                                                    <li><a href="flexible-image-slider.html"><span>Flexible
                                                                image slider</span></a></li>
                                                    <li><a href="carousel-slider.html"><span>Carousel
                                                                Sliders</span></a></li>
                                                    <li><a href="team.html"><span>Team Member</span></a></li>
                                                    <li><a href="pricing-box.html"><span>Pricing Boxes</span></a></li>
                                                    <li><a href="call-to-action-banner.html"><span>Call to
                                                                action banners</span></a></li>
                                                    <li><a href="instagram.html"><span>Instagram</span></a></li>
                                                </ul>
                                            </div>
                                            <!-- End Single List -->

                                            <!-- Start Single List -->
                                            <div class="col-lg-3">
                                                <ul class="mega__list">
                                                    <li class="mega--title">Element Group 02</li>
                                                    <li><a href="countdown-clocks.html"><span>Countdown
                                                                clocks</span></a></li>
                                                    <li><a href="counters.html"><span>Counters</span></a></li>
                                                    <li><a href="progress-charts.html"><span>Progress
                                                                Charts</span></a></li>
                                                    <li><a href="icon-boxes.html"><span>Icon Boxes</span></a></li>
                                                    <li><a href="testimonial.html"><span>Testimonials</span></a></li>
                                                    <li><a href="dividers.html"><span>Dividers</span></a></li>
                                                </ul>
                                            </div>
                                            <!-- End Single List -->

                                            <!-- Start Single List -->
                                            <div class="col-lg-3">
                                                <ul class="mega__list">
                                                    <li class="mega--title">Element Group 03</li>
                                                    <li><a href="contact.html"><span>Contact &amp;
                                                                subscribe forms</span></a></li>
                                                    <li><a href="google-map.html"><span>Google Map</span></a></li>
                                                    <li><a href="social-network.html"><span>Social Networks</span></a></li>
                                                    <li><a href="gallery.html"><span>Gallery</span></a></li>
                                                    <li><a href="popup-video.html"><span>Popup video</span></a></li>
                                                    <li><a href="gradation.html"><span>Gradation</span></a></li>
                                                    <li><a href="rows-and-columns.html"><span>Rows &amp;
                                                                Columns</span></a></li>

                                                </ul>
                                            </div>
                                            <!-- End Single List -->

                                            <!-- Start Single List -->
                                            <div class="col-lg-3">
                                                <ul class="mega__list">
                                                    <li class="mega--title">Element Group 04</li>
                                                    <li><a href="message-box.html"><span>Message box</span></a></li>
                                                    <li><a href="accordion.html"><span>Accordions &amp;
                                                                Toggles</span></a></li>
                                                    <li><a href="buttons.html"><span>Buttons</span></a></li>
                                                    <li><a href="typography.html"><span>Typography</span></a></li>
                                                    <li><a href="typed-text.html"><span>Typed Text</span></a></li>
                                                    <li><a href="lists.html"><span>Lists</span></a></li>
                                                    <li><a href="pricing-table.html"><span>Pricing Table</span></a></li>
                                                </ul>
                                            </div>
                                            <!-- End Single List -->
                                        </div>
                                    </div>
                                </div>
                                <!-- End Mega Menu -->
                            </li>

                            <li class="lavel-1 with--drop slide--megamenu"><a href="#"><span>BLog</span></a>

                                <!-- Start Mega Menu -->
                                <div class="mega__width--fullscreen">
                                    <div class="container">
                                        <div class="row">
                                            <!-- Start Single List -->
                                            <div class="col-lg-3">
                                                <ul class="mega__list">
                                                    <li class="mega--title">Blog Sample 01</li>
                                                    <li><a href="blog-creative.html"><span>Creative List</span></a></li>
                                                    <li><a href="blog-standard-list.html"><span>Standard
                                                                List</span></a></li>
                                                    <li><a href="blog-grid-classic.html"><span>Grid Classic</span></a></li>
                                                    <li><a href="blog-grid-classic-sidebar.html"><span>Grid
                                                                Classic With Sidebar</span></a></li>
                                                    <li><a href="blog-grid-mesonry.html"><span>Grid Masonry</span></a></li>
                                                    <li><a href="blog-grid-metro.html"><span>Grid Metro</span></a></li>
                                                    <li><a href="blog-grid-minimal.html"><span>Grid Minimal</span></a></li>
                                                    <li><a href="blog-grid-minimal-outline.html"><span>Grid
                                                                Minimal Outline</span></a></li>
                                                </ul>
                                            </div>
                                            <!-- End Single List -->

                                            <!-- Start Single List -->
                                            <div class="col-lg-3">
                                                <ul class="mega__list">
                                                    <li class="mega--title">Blog Sample 02</li>
                                                    <li><a href="blog-grid-standard.html"><span>Grid
                                                                Standard</span></a></li>
                                                    <li><a href="blog-grid-simple.html"><span>Grid Simple</span></a></li>
                                                    <li><a href="blog-grid-sticky.html"><span>Grid Sticky</span></a></li>
                                                    <li><a href="blog-grid-modern.html"><span>Grid Modern</span></a></li>
                                                    <li><a href="blog-overlay-image-list.html"><span>Overlay
                                                                Image List</span></a></li>
                                                    <li><a href="blog-lazy-load.html"><span>Lazy Load</span></a></li>
                                                    <li><a href="blog-load-more-button.html"><span>Load
                                                                More Button</span></a></li>
                                                    <li><a href="blog-numeric-pagination.html"><span>Numeric
                                                                Pagination</span></a></li>
                                                </ul>
                                            </div>
                                            <!-- End Single List -->

                                            <!-- Start Single List -->
                                            <div class="col-lg-3">
                                                <ul class="mega__list">
                                                    <li class="mega--title">Single Blog</li>
                                                    <li><a href="blog-details.html"><span>Standard Post</span></a></li>
                                                    <li><a href="blog-details-gallery.html"><span>Gallery
                                                                Post</span></a></li>
                                                    <li><a href="blog-details-video.html"><span>Video Post</span></a></li>
                                                    <li><a href="blog-details-audio.html"><span>Audio Post</span></a></li>
                                                    <li><a href="blog-details-quote.html"><span>Quote Post</span></a></li>
                                                    <li><a href="blog-details-left-sidebar.html"><span>Standard
                                                                Post – Left Sidebar</span></a></li>
                                                </ul>
                                            </div>
                                            <!-- End Single List -->

                                            <!-- Start Single List -->
                                            <div class="col-lg-3">
                                                <ul class="mega__list">
                                                    <li class="mega--title">Single Blog Modern</li>
                                                    <li><a href="blog-details-modern-layout.html"><span>Standard
                                                                Post – Modern Layout</span></a></li>
                                                    <li><a href="blog-details-modern-layout-gallery.html"><span>Gallery
                                                                Post – Modern Layout</span></a></li>
                                                    <li><a href="blog-details-modern-layout-video.html"><span>Video
                                                                Post – Modern Layout</span></a></li>
                                                    <li><a href="blog-details-modern-layout-audio.html"><span>Audio
                                                                Post – Modern Layout</span></a></li>
                                                    <li><a href="blog-details-modern-layout-quote.html"><span>Quote
                                                                Post – Modern Layout</span></a></li>
                                                    <li><a href="blog-details-no-sidebar.html"><span>Standard
                                                                Post – No Sidebar</span></a></li>
                                                </ul>
                                            </div>
                                            <!-- End Single List -->
                                        </div>
                                    </div>
                                </div>
                                <!-- End Mega Menu -->
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <!-- Start Search -->
            <div class="row hamberger-search">
                <form action="#">
                    <div class="input-box">
                        <input type="text" placeholder="Enter search keyword…">
                        <button>
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </form>
            </div>

            <div class="offcanvas-extra-info mt--150">
                <div class="row align-items-end">
                    <div class="col-lg-6">
                        <div class="info">
                            <div class="bk-hover mb--40">
                                <h5 class="heading heading-h5 text-white">Connect</h5>
                                <div class="bkseparator--20"></div>
                                <p class="bk_pra font-16">2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                                <p class="bk_pra font-16"><a href="#">info@yourdomain.com</a></p>
                            </div>
                            <ul class="social-icon text-left tooltip-layout icon-size-large">
                                <li class="facebook"><a href="#" class="link hint--bounce hint--top hint--white"
                                        aria-label="Facebook"><i class="fab fa-facebook"></i></a></li>
                                <li class="twitter"><a href="#" class="link hint--bounce hint--top hint--white"
                                        aria-label="Twitter"><i class="fab fa-twitter"></i></a></li>
                                <li class="instagram"><a href="#" class="link hint--bounce hint--top hint--white"
                                        aria-label="Instagram"><i class="fab fa-instagram"></i></a></li>
                            </ul>

                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="copyright-right text-right">
                            <p class="bk_pra font-16">© 2019 Brook. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- End Hamberger Menu -->

        <!-- Start Brook Search Popup -->
        <div class="brook-search-popup">
            <div class="inner">
                <div class="search-header">
                    <div class="logo">
                        <a href="index.html">
                            <img src="<?php echo $this->brook?>/img/logo/brook-black.png" alt="logo images">
                        </a>
                    </div>
                    <a href="#" class="search-close"></a>
                </div>
                <div class="search-content">
                    <form action="#">
                        <label>
                            <input type="search" placeholder="Enter search keyword…">
                        </label>
                        <button class="search-submit"><i class="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
        <!-- End Brook Search Popup -->


        <!-- Start Slider Area -->
        <div class="slider-revoluation">
            <div id="rev_slider_20_1_wrapper" class="rev_slider_wrapper fullwidthbanner-container" data-alias="landing-page"
                data-source="gallery" style="margin:0px auto;background:transparent;padding:0px;margin-top:0px;margin-bottom:0px;">
                <!-- START REVOLUTION SLIDER 5.4.7 fullwidth mode -->
                <div id="rev_slider_20_1" class="rev_slider fullwidthabanner" style="display:none;" data-version="5.4.7">
                    <ul>
                        <!-- SLIDE  -->
                        <li data-index="rs-33" data-transition="fade" data-slotamount="default" data-hideafterloop="0"
                            data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="300"
                            data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2=""
                            data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8=""
                            data-param9="" data-param10="" data-description="">
                            <!-- MAIN IMAGE -->
                            <img src="<?php echo $this->brook?>/img/revoulation/brook-landing-new-slider-slide-bg.jpg" alt="" data-bgposition="center center"
                                data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" class="rev-slidebg"
                                data-no-retina>
                            <!-- LAYERS -->

                            <!-- LAYER NR. 1 -->
                            <div class="tp-caption   tp-resizeme rs-parallaxlevel-3" id="slide-33-layer-13" data-x="['right','right','right','right']"
                                data-hoffset="['820','263','263','238']" data-y="['bottom','bottom','bottom','bottom']"
                                data-voffset="['202','146','146','109']" data-width="none" data-height="none"
                                data-whitespace="nowrap" data-type="image" data-basealign="slide"
                                data-responsive_offset="on" data-frames='[{"delay":300,"speed":1500,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
                                style="z-index: 5;"><img src="<?php echo $this->brook?>/img/revoulation/brook-landing-new-slider-slide-image-01.png"
                                    alt="" data-ww="['237px','160px','160px','120px']" data-hh="['280px','189px','189px','142px']"
                                    data-no-retina>
                            </div>

                            <!-- LAYER NR. 2 -->
                            <div class="tp-caption   tp-resizeme rs-parallaxlevel-2" id="slide-33-layer-14" data-x="['right','right','right','right']"
                                data-hoffset="['71','1051','1051','1051']" data-y="['bottom','bottom','bottom','bottom']"
                                data-voffset="['110','342','342','342']" data-width="none" data-height="none"
                                data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="image"
                                data-basealign="slide" data-responsive_offset="on" data-frames='[{"delay":400,"speed":1500,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
                                style="z-index: 6;"><img src="<?php echo $this->brook?>/img/revoulation/brook-landing-new-slider-slide-image-02.png"
                                    alt="" data-ww="['797px','610px','610px','610px']" data-hh="['639px','489px','489px','489px']"
                                    data-no-retina>
                            </div>

                            <!-- LAYER NR. 3 -->
                            <div class="tp-caption   tp-resizeme rs-parallaxlevel-3" id="slide-33-layer-15" data-x="['right','right','right','right']"
                                data-hoffset="['-138','-35','-35','24']" data-y="['bottom','bottom','bottom','bottom']"
                                data-voffset="['484','161','161','131']" data-width="none" data-height="none"
                                data-whitespace="nowrap" data-type="image" data-basealign="slide"
                                data-responsive_offset="on" data-frames='[{"delay":500,"speed":1500,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
                                style="z-index: 7;"><img src="<?php echo $this->brook?>/img/revoulation/brook-landing-new-slider-slide-image-03.png"
                                    alt="" data-ww="['493px','321px','321px','234px']" data-hh="['443px','288px','288px','210px']"
                                    data-no-retina>
                            </div>

                            <!-- LAYER NR. 4 -->
                            <div class="tp-caption   tp-resizeme rs-parallaxlevel-2" id="slide-33-layer-16" data-x="['right','right','right','right']"
                                data-hoffset="['664','1190','1190','1190']" data-y="['bottom','bottom','bottom','bottom']"
                                data-voffset="['-212','230','230','230']" data-width="none" data-height="none"
                                data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="image"
                                data-basealign="slide" data-responsive_offset="on" data-frames='[{"delay":600,"speed":1500,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
                                style="z-index: 8;"><img src="<?php echo $this->brook?>/img/revoulation/brook-landing-new-slider-slide-image-04.png"
                                    alt="" data-ww="['493px','401px','401px','401px']" data-hh="['443px','360px','360px','360px']"
                                    data-no-retina>
                            </div>

                            <!-- LAYER NR. 5 -->
                            <div class="tp-caption   tp-resizeme rs-parallaxlevel-3" id="slide-33-layer-17" data-x="['right','right','right','right']"
                                data-hoffset="['189','143','143','141']" data-y="['bottom','bottom','bottom','bottom']"
                                data-voffset="['-94','-165','-165','-223']" data-width="none" data-height="none"
                                data-whitespace="nowrap" data-type="image" data-basealign="slide"
                                data-responsive_offset="on" data-frames='[{"delay":700,"speed":1500,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
                                style="z-index: 9;"><img src="<?php echo $this->brook?>/img/revoulation/brook-landing-new-slider-slide-image-05.png"
                                    alt="" data-ww="['511px','374px','374px','374px']" data-hh="['460px','337px','337px','337px']"
                                    data-no-retina>
                            </div>

                            <!-- LAYER NR. 6 -->
                            <div class="tp-caption   tp-resizeme rs-parallaxlevel-2" id="slide-33-layer-18" data-x="['right','right','right','right']"
                                data-hoffset="['-208','-122','-122','-121']" data-y="['bottom','bottom','bottom','bottom']"
                                data-voffset="['145','-32','-32','-58']" data-width="none" data-height="none"
                                data-whitespace="nowrap" data-type="image" data-basealign="slide"
                                data-responsive_offset="on" data-frames='[{"delay":800,"speed":1500,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
                                style="z-index: 10;"><img src="<?php echo $this->brook?>/img/revoulation/brook-landing-new-slider-slide-image-06.png"
                                    alt="" data-ww="['493px','313px','313px','313px']" data-hh="['444px','282px','282px','282px']"
                                    data-no-retina>
                            </div>

                            

                            <!-- LAYER NR. 8 -->
                            <div class="tp-caption  " id="slide-33-layer-20" data-x="['left','left','left','left']"
                                data-hoffset="['250','250','250','29']" data-y="['bottom','bottom','bottom','bottom']"
                                data-voffset="['60','60','60','145']" data-width="none" data-height="none"
                                data-whitespace="nowrap" data-type="image" data-basealign="slide"
                                data-responsive_offset="off" data-responsive="off" data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textAlign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
                                style="z-index: 12;"><img src="<?php echo $this->brook?>/img/revoulation/brook-landing-new-slider-slide-logo-02.png"
                                    alt="" data-ww="['48px','48px','48px','48px']" data-hh="['55px','55px','55px','55px']"
                                    data-no-retina> </div>

                            <!-- LAYER NR. 9 -->
                            <div class="tp-caption  " id="slide-33-layer-1" data-x="['left','left','center','center']"
                                data-hoffset="['135','134','0','0']" data-y="['middle','middle','top','top']"
                                data-voffset="['-135','-120','120','110']" data-fontsize="['70','60','44','32']"
                                data-lineheight="['88','77','58','40']" data-width="['770','770','470','360']"
                                data-height="['177','177','none','none']" data-whitespace="normal" data-type="text"
                                data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames='[{"delay":400,"speed":1500,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textAlign="['left','left','center','center']" data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
                                style="z-index: 13; min-width: 770px; max-width: 770px; max-width: 177px; max-width: 177px; white-space: normal; font-size: 70px; line-height: 88px; font-weight: 700; color: #111111; letter-spacing: 0px;">Brook<span
                                    class="long-minus-2"> </span>Creative Multipurpose </div>

                            <!-- LAYER NR. 10 -->
                            <div class="tp-caption  " id="slide-33-layer-11" data-x="['left','left','center','center']"
                                data-hoffset="['140','140','0','0']" data-y="['middle','middle','top','top']"
                                data-voffset="['23','23','260','220']" data-width="['540','540','470','360']"
                                data-height="none" data-whitespace="normal" data-type="text" data-basealign="slide"
                                data-responsive_offset="off" data-responsive="off" data-frames='[{"delay":800,"speed":1500,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                data-textAlign="['inherit','inherit','center','center']" data-paddingtop="[0,0,0,0]"
                                data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]"
                                style="z-index: 14; min-width: 540px; max-width: 540px; white-space: normal; font-size: 16px; line-height: 30px; font-weight: 500; color: #888888; letter-spacing: 0px;">A
                                versatile Html Template for different purposes that emphasizes creativity,
                                efficiency, and diversity.
                            </div>

                            <!-- LAYER NR. 11 -->
                            <div class="tp-caption rev-btn " id="slide-33-layer-12" data-x="['left','left','center','center']"
                                data-hoffset="['140','140','0','0']" data-y="['middle','middle','top','top']"
                                data-voffset="['135','135','355','340']" data-width="165" data-height="55"
                                data-whitespace="normal" data-type="button" data-basealign="slide"
                                data-responsive_offset="off" data-responsive="off" data-frames='[{"delay":1000,"speed":1500,"frame":"0","from":"y:50px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"},{"frame":"hover","speed":"0","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgba(255,255,255,1);bs:solid;bw:0 0 0 0;"}]'
                                data-textAlign="['center','center','center','center']" data-paddingtop="[0,0,0,0]"
                                data-paddingright="[30,30,30,30]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[30,30,30,30]"
                                style="z-index: 15; min-width: 165px; max-width: 165px; max-width: 55px; max-width: 55px; white-space: normal; font-size: 14px; line-height: 55px; font-weight: 600; color: rgba(255,255,255,1); letter-spacing: px;background-color:rgb(7,77,248);border-color:rgb(7,77,248);border-radius:6px 6px 6px 6px;outline:none;box-shadow:none;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;cursor:pointer;">Discover
                                now </div>
                        </li>
                    </ul>
                    <div class="tp-bannertimer tp-bottom" style="visibility: hidden !important;"></div>
                </div>
            </div><!-- END REVOLUTION SLIDER -->

        </div>
        <!-- End Slider Area -->

        <!-- Page Conttent -->
        <main class="page-content">
            <!-- Start Service Area -->
            <div id="section3" class="pv-service-wrapper pt--95 pb--60">

                <div class="single-grid">
                    <div class="inner">
                        <div class="title mb--20">
                            <h4>HTML Pages Ready</h4>
                        </div>
                        <p class="bk_pra">We analyze & anticipate your needs. Brook is the readymade template with every aspects that you may need.</p>
                    </div>
                </div>

                <div class="single-grid">
                    <div class="inner">
                        <div class="title mb--20">
                            <h4>Mega Menu</h4>
                        </div>
                        <p class="bk_pra">Mega Menu is the door that has the entrance to every pages of your site. It navigates things for bringing ease.</p>
                    </div>
                </div>

                <div class="single-grid">
                    <div class="inner">
                        <div class="title mb--20">
                            <h4>Parallax Rows & Footers</h4>
                        </div>
                        <p class="bk_pra">Super sleek 3D parallax effects are built for Brook’s rows and footers.</p>
                    </div>
                </div>

                <div class="single-grid">
                    <div class="inner">
                        <div class="title mb--20">
                            <h4>Infinite Loading</h4>
                        </div>
                        <p class="bk_pra">A scrolling style that makes content continuously loaded as users scroll
                            down.</p>
                    </div>
                </div>

            </div>
            <!-- End Service Area -->

            <!-- Start Main Demo Area  -->
            <div id="section1" class="pv-main-demo-pages background-marque2 pb--100">
                <div class="section-bg-text">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="demo-section-title text-center">
                                    <h1>37 <sup>+</sup></h1>
                                    <h2 class="mt--25 mb--15">Stunning Homepages</h2>
                                    <p>Choose a homepage to start navigating Brook. Build strong & impressive websites
                                        using Brook’s premade templates.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Main Demo Area -->

            <!-- Start Call To Action -->
            <div class="brook-call-to-action pv-footer-area">
                <div class="footer-bg-2 pb--100 pt--140">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-12 col-12">
                                <div class="call-content vertical-call-toaction text-center">
                                    <h2 class="heading heading-h2 font-50 text-white">Feeling in love? <span class="playfair-font text-italic">Purchase Brook !</span></h2>
                                    <div class="desk mt--30 mb--55">
                                        <p class="bk_pra text-white font-20">Impressive design, powerful features, and easy customization</p>
                                    </div>
                                    <div class="call-btn text-center">
                                        <a class="brook-btn bk-btn-white btn-sd-size btn-rounded space-between" href="https://themeforest.net/user/bootxperts/portfolio" target="_blank">Purchase Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Call To Action -->

        </main>
        <!--// Page Conttent -->
    </div>
    <!--// Wrapper -->

    <!-- Js Files -->
    <script src="<?php echo $this->brook?>/js/vendor/modernizr-3.6.0.min.js"></script>
    <script src="<?php echo $this->brook?>/js/vendor/jquery.min.js"></script>
    <script src="<?php echo $this->brook?>/js/popper.min.js"></script>
    <script src="<?php echo $this->brook?>/js/bootstrap.min.js"></script>
    <script src="<?php echo $this->brook?>/js/plugins.js"></script>
    <script src="<?php echo $this->brook?>/js/main.js"></script>

    <!-- REVOLUTION JS FILES -->
    <script src="<?php echo $this->brook?>/js/jquery.themepunch.tools.min.js"></script>
    <script src="<?php echo $this->brook?>/js/jquery.themepunch.revolution.min.js"></script>

    <!-- SLIDER REVOLUTION 5.0 EXTENSIONS  (Load Extensions only on Local File Systems !  The following part can be removed on Server for On Demand Loading) -->
    <script src="<?php echo $this->brook?>/js/revolution.extension.actions.min.js"></script>
    <script src="<?php echo $this->brook?>/js/revolution.extension.carousel.min.js"></script>
    <script src="<?php echo $this->brook?>/js/revolution.extension.kenburn.min.js"></script>
    <script src="<?php echo $this->brook?>/js/revolution.extension.layeranimation.min.js"></script>
    <script src="<?php echo $this->brook?>/js/revolution.extension.migration.min.js"></script>
    <script src="<?php echo $this->brook?>/js/revolution.extension.navigation.min.js"></script>
    <script src="<?php echo $this->brook?>/js/revolution.extension.parallax.min.js"></script>
    <script src="<?php echo $this->brook?>/js/revolution.extension.slideanims.min.js"></script>
    <script src="<?php echo $this->brook?>/js/revolution.extension.video.min.js"></script>
    <script src="<?php echo $this->brook?>/js/revoulation.js"></script>


</body>

</html>