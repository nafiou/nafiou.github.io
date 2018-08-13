(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/css/style.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/css/style.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Theme Name: Borial | Responsive Bootstrap Template\n   Author: Themesdesign\n   Version: 1.0.0\n   Created: May 2018\n   File Description: Main CSS file of the template\n*/\n\n\n/****************************\n*   1  :  Helper            *\n*   2  :  Navbar-custom     *\n*   3  :  Title             *\n*   4  :  Home              *\n*   5  :  Features          *\n*   6  :  SERVICES          *\n*   7  :  Clients           *\n*   8  :  Portfolio         *\n*   9  :  Blog              *\n*   10 :  Team              *\n*   11 :  Pricing           *\n*   12 :  Contact           *\n*   13 :  Footer            *\n*   14 :  Responsive        *\n*****************************/\n\n\nbody {\n    font-family: 'Nunito Sans', sans-serif;\n}\n\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-family: 'Nunito Sans', sans-serif;\n    font-weight: 600;\n}\n\n\na {\n    text-decoration: none !important;\n    outline: none !important;\n}\n\n\np {\n    font-size: 17px;\n    line-height: 1.8;\n}\n\n\n/*===============================\n         1. Helper\n================================*/\n\n\n.bg-overlay {\n    background-color: rgba(35, 37, 47, 0.7);\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n}\n\n\n.section {\n    padding-top: 80px;\n    padding-bottom: 80px;\n    position: relative;\n}\n\n\n.vertical-content {\n    display: -moz-flex;\n    display: flex;\n    align-items: center;\n    -webkit-align-items: center;\n    justify-content: center;\n    -webkit-justify-content: center;\n    flex-direction: row;\n}\n\n\n.btn-rounded {\n    border-radius: 5px;\n}\n\n\n.btn-custom-white {\n    font-size: 15px;\n    transition: all 0.4s;\n    background: #fff;\n    color: #1a88fa !important;\n}\n\n\n.btn-custom-white:hover,\n.btn-custom-white:focus,\n.btn-custom-white:active,\n.btn-custom-white.active,\n.btn-custom-white.focus,\n.btn-custom-white:active,\n.btn-custom-white:focus,\n.btn-custom-white:hover,\n.open>.dropdown-toggle.btn-custom-white {\n    background: #f1f0f0;\n    box-shadow: none !important;\n}\n\n\n.btn-custom {\n    font-size: 15px;\n    transition: all 0.4s;\n    background: #1a88fa;\n    color: #fff !important;\n}\n\n\n.btn-custom:hover,\n.btn-custom:focus,\n.btn-custom:active,\n.btn-custom.active,\n.btn-custom.focus,\n.btn-custom:active,\n.btn-custom:focus,\n.btn-custom:hover,\n.open>.dropdown-toggle.btn-custom {\n    box-shadow: none !important;\n    background: #46a0fe;\n}\n\n\n.btn {\n    padding: 11px 28px;\n    font-size: 13px;\n    letter-spacing: 0.9px;\n    font-weight: 600;\n    text-transform: uppercase;\n}\n\n\n.btn-sm {\n    padding: 10px 22px;\n}\n\n\n.text-custom {\n    color: #1a88fa;\n}\n\n\n.bg-custom {\n    background-color: #ee3158;\n}\n\n\n/*===============================\n       2. Navbar Custom\n=================================*/\n\n\n.navbar-custom {\n    padding: 15px 0px;\n    border-radius: 0px;\n    z-index: 999;\n    margin-bottom: 0px;\n    transition: all 0.5s ease-in-out;\n}\n\n\n.navbar-custom .navbar-nav li a {\n    color: #fff;\n    font-size: 14px;\n    transition: all 0.5s;\n    background-color: transparent !important;\n    padding: 6px 0;\n    margin: 0 13px;\n    font-weight: 600;\n}\n\n\n.navbar-custom .navbar-nav .nav-link {\n    padding-right: 0px;\n    padding-left: 0px;\n}\n\n\n.logo {\n    color: #fff !important;\n    font-weight: 700;\n    font-size: 20px;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n}\n\n\n.navbar-custom .navbar-nav li.active a,\n.navbar-custom .navbar-nav li a:hover,\n.navbar-custom .navbar-nav li a:active {\n    color: #1a88fa !important;\n}\n\n\n.navbar-toggle {\n    font-size: 24px;\n    margin-top: 5px;\n    margin-bottom: 0px;\n    color: #ffffff;\n}\n\n\n.nav .open>a,\n.nav .open>a:focus,\n.nav .open>a:hover {\n    background-color: transparent;\n    border-color: #337ab7;\n}\n\n\n.navbar-custom .navbar-toggles {\n    padding: .25rem .75rem;\n    font-size: 18px;\n    background: 0 0;\n    border: 1px solid transparent;\n    color: #fff;\n    outline: 0;\n}\n\n\n.navbar-custom .navbar-toggles-icon {\n    display: inline-block;\n    width: 1.5em;\n    height: 1.5em;\n    vertical-align: middle;\n}\n\n\n.menu-toggle {\n    padding: 4.5px 10px !important;\n}\n\n\n.menu-toggle span {\n    line-height: 27px;\n}\n\n\n/*---NAVBAR STICKY---*/\n\n\n.nav-sticky.navbar-custom {\n    margin-top: 0px;\n    padding: 15px 0px;\n    background-color: #FFF;\n    box-shadow: 0 10px 33px rgba(0, 0, 0, .1);\n    color: #000 !important;\n}\n\n\n.nav-sticky.navbar-custom.sticky-light {\n    background-color: #fff;\n}\n\n\n.nav-sticky.navbar-custom .navbar-nav li a {\n    color: #2f3545;\n}\n\n\n.nav-sticky.navbar-custom .navbar-nav li.active a,\n.nav-sticky.navbar-custom .navbar-nav li a:hover,\n.nav-sticky.navbar-custom .navbar-nav li a:active {\n    color: #1a88fa !important;\n}\n\n\n.nav-sticky.navbar-custom .navbar-toggles {\n    padding: .25rem .75rem;\n    border: 1px solid transparent;\n    outline: 0;\n}\n\n\n.nav-sticky .navbar-nav {\n    margin-top: 0px;\n}\n\n\n.nav-sticky .logo {\n    color: #000 !important;\n}\n\n\n/*==============================\n       3. Title\n================================*/\n\n\n.title-heading {\n    font-weight: 700;\n}\n\n\n.title h1 {\n    position: absolute;\n    color: rgba(0, 0, 0, 0.1);\n    left: 0px;\n    right: 0px;\n    top: -45px;\n}\n\n\n/*==============================\n        4. Home\n================================*/\n\n\n.bg-home {\n    background-image: url('comptable.jpg');\n    background-size: cover;\n    background-position: center center;\n    height: 100vh;\n    position: relative;\n}\n\n\n.home-center {\n    display: table;\n    width: 100%;\n    height: 100%;\n}\n\n\n.home-desc-center {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n\n.home-small-title {\n    font-size: 17px;\n    letter-spacing: 4px;\n}\n\n\n.home-slider {\n    position: relative;\n}\n\n\n.home-slider .carousel-control-next,\n.carousel-control-prev {\n    width: 6%;\n}\n\n\n.home-slider .carousel-item,\n.home-slider .carousel {\n    height: 100vh;\n    width: 100%;\n}\n\n\n.home-slider .carousel-item {\n    background-position: center center;\n    background-size: cover;\n}\n\n\n.clients-img {\n    position: absolute;\n    top: 108px;\n}\n\n\n.clients-img img {\n    max-height: 100px;\n    width: auto !important;\n    transition: all 0.5s;\n}\n\n\n.clients-img img:hover {\n    opacity: 0.6;\n}\n\n\n/********* DEMO 2 ********/\n\n\n.home-registration-form {\n    border-radius: 3px;\n}\n\n\n.home-registration-form .registration-form label {\n    font-size: 13px;\n}\n\n\n.registration-input-box {\n    border-bottom: 1px solid #c5c5c5;\n    box-shadow: none !important;\n}\n\n\n.registration-input-box:focus {\n    border-color: #ee3158;\n}\n\n\n/*******DEMO 3*******/\n\n\n.subcribe-form input {\n    padding: 14px 20px;\n    width: 100%;\n    font-size: 17px;\n    color: #4c5667 !important;\n    border: none;\n    outline: none !important;\n    padding-right: 160px;\n    padding-left: 30px;\n    background-color: rgba(255, 255, 255, 0.85);\n    border-radius: 5px;\n}\n\n\n.subcribe-form button {\n    position: absolute;\n    top: 3px;\n    right: 3px;\n    outline: none !important;\n    border-radius: 5px;\n    font-size: 14px;\n    padding: 12px 30px;\n}\n\n\n.subcribe-form form {\n    position: relative;\n    max-width: 600px;\n    margin: 0px auto;\n}\n\n\n/********DEMO 4**********/\n\n\n.home-dashboard {\n    position: relative;\n    top: 80px;\n    z-index: 1;\n}\n\n\n.home-prestion {\n    padding-top: 165px;\n    background: linear-gradient(rgb(72, 85, 99), rgb(41, 50, 60));\n    position: relative;\n}\n\n\n/********DEMO 5**********/\n\n\n.home-slider {\n    position: relative;\n}\n\n\n.home-slider .carousel-control-next,\n.carousel-control-prev {\n    width: 6%;\n}\n\n\n.home-slider .carousel-item,\n.home-slider .carousel {\n    height: 100vh;\n    width: 100%;\n}\n\n\n.home-slider .carousel-item {\n    background-position: center center;\n    background-size: cover;\n}\n\n\n.home-title {\n    font-size: 42px;\n}\n\n\n.home-desc {\n    max-width: 700px;\n}\n\n\n/********DEMO 6**********/\n\n\n.bg-home-half {\n    background-image: url('home-bg-2.jpg');\n    background-size: cover;\n    background-position: center center;\n    padding: 250px 0px 200px;\n    position: relative;\n}\n\n\n/************************\n    5. Welcome box\n*************************/\n\n\n.features h5 {\n    font-size: 22px;\n    height: 56px;\n    width: 56px;\n    line-height: 56px;\n    border-radius: 50%;\n    border: 1px solid #1a88fa;\n    text-align: center;\n    display: inline-block;\n    font-weight: 600;\n    border-right: 4px solid #1a88fa;\n}\n\n\n.features h4 {\n    font-size: 18px;\n    font-weight: 600;\n}\n\n\n/************************\n   6. SERVICES\n*************************/\n\n\n.service h3 {\n    font-size: 14px;\n    letter-spacing: 3px;\n    font-weight: 600;\n}\n\n\n.service p {\n    font-size: 30px;\n    font-weight: 600;\n}\n\n\n.services-blog img {\n    max-width: 45px;\n    float: left;\n    margin-right: 20px;\n}\n\n\n.service-head {\n    overflow: hidden;\n}\n\n\n.services-blog {\n    padding: 40px;\n    background-color: #ffffff;\n    box-shadow: 1px 2px 23px -15px rgba(0, 0, 0, 0.7);\n}\n\n\n.services-blog h4 {\n    font-size: 18px;\n    font-weight: 600;\n}\n\n\n/************************\n        7. CLIENTS\n**************************/\n\n\n.testi-user {\n    max-width: 84px;\n}\n\n\n.user-review {\n    color: #667482;\n    font-style: italic;\n    font-size: 16px;\n}\n\n\n.testi-client-name {\n    font-size: 16px;\n    color: #000;\n    font-weight: 600;\n}\n\n\n.testi-patients {\n    font-size: 14px;\n    color: #000;\n}\n\n\n.owl-theme .owl-controls .owl-page span {\n    display: block;\n    width: 10px;\n    height: 5px;\n    margin: 5px 7px;\n    border: 1px solid #ee3158;\n    background-color: #ee3158;\n    opacity: 0.2;\n}\n\n\n/*************************\n        8. PORTFOLIO\n***************************/\n\n\n.img-max-width {\n    width: 25%;\n}\n\n\n.portfolio-title {\n    font-size: 21px;\n    word-spacing: 2px;\n    font-weight: 700;\n    letter-spacing: 1px;\n}\n\n\n.port-folio-sub-title {\n    color: #585858;\n    font-size: 17px;\n    word-spacing: 1px;\n    padding-top: 10px;\n}\n\n\n.container-filter {\n    margin-top: 0;\n    margin-right: 0;\n    margin-left: 0;\n    margin-bottom: 30px;\n    padding: 0;\n    text-align: center;\n}\n\n\n.container-filter li {\n    list-style: none;\n    display: inline-block;\n}\n\n\n.container-filter li a {\n    display: block;\n    font-size: 11px;\n    border: 1px solid #e0e0e0;\n    padding: 0px 15px;\n    margin: 5px 3px;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    cursor: pointer;\n    line-height: 35px;\n    -webkit-transition: all 0.6s;\n}\n\n\n.container-filter li a.active {\n    color: #fff;\n    background-color: #ee3158;\n    border: 1px solid #ee3158;\n}\n\n\n.container-filter li a:hover {\n    color: #fff !important;\n    background-color: #ee3158;\n    border: 1px solid #ee3158;\n}\n\n\n.item-box {\n    position: relative;\n    overflow: hidden;\n    display: block;\n}\n\n\n.item-box a {\n    display: inline-block;\n}\n\n\n.item-box:hover .item-mask {\n    opacity: 1;\n    visibility: visible;\n}\n\n\n.item-box:hover .item-mask .item-caption {\n    bottom: 30px;\n    opacity: 1;\n}\n\n\n.item-box:hover .item-container {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n    transition: all 2s cubic-bezier(0.23, 1, 0.32, 1) 0s;\n    width: 100%;\n}\n\n\n.item-container {\n    transform: scale(1);\n    -ms-transform: scale(1);\n    -webkit-transform: scale(1);\n    width: 100%;\n    transition: all 2s cubic-bezier(0.23, 1, 0.32, 1) 0s;\n    -moz-transition: all 2s cubic-bezier(0.23, 1, 0.32, 1) 0s;\n    -webkit-transition: all 2s cubic-bezier(0.23, 1, 0.32, 1) 0s;\n    -o-transition: all 2s cubic-bezier(0.23, 1, 0.32, 1) 0s;\n}\n\n\n.item-mask {\n    background: none repeat scroll 0 0 rgba(0, 0, 0, 0.7);\n    position: absolute;\n    transition: all 0.5s ease-in-out 0s;\n    -moz-transition: all 0.5s ease-in-out 0s;\n    -webkit-transition: all 0.5s ease-in-out 0s;\n    -o-transition: all 0.5s ease-in-out 0s;\n    top: 10px;\n    left: 10px;\n    bottom: 10px;\n    right: 10px;\n    opacity: 0;\n    visibility: hidden;\n    overflow: hidden;\n}\n\n\n.item-mask p {\n    text-transform: uppercase;\n    font-size: 11px;\n    letter-spacing: 1.5px;\n    font-weight: 500;\n    margin: 0;\n    text-align: left;\n}\n\n\n.item-mask .item-caption {\n    position: absolute;\n    bottom: -60px;\n    left: 0px;\n    padding-left: 30px;\n    padding-right: 30px;\n    text-align: left;\n    transition: all 0.5s ease-in-out 0s;\n    -moz-transition: all 0.5s ease-in-out 0s;\n    -webkit-transition: all 0.5s ease-in-out 0s;\n    -o-transition: all 0.5s ease-in-out 0s;\n    opacity: 0;\n}\n\n\n.portfolio-head h3 {\n    font-size: 14px;\n    letter-spacing: 3px;\n    font-weight: 600;\n}\n\n\n.portfolio-head p {\n    font-size: 30px;\n    font-weight: 600;\n}\n\n\n/*************************\n      9.  BLOG\n***************************/\n\n\n.blog-menu img {\n    border-radius: 5px;\n}\n\n\n.blog-menu h5 {\n    font-size: 15px;\n}\n\n\n.blog-title {\n    font-size: 18px;\n    font-weight: 600;\n    color: #000;\n}\n\n\n.blog-title:hover {\n    color: #ee3158;\n    transition: all 0.5s\n}\n\n\n.blog-menu p {\n    font-size: 14px;\n    line-height: 1.8;\n}\n\n\n.read-btn {\n    font-size: 15px;\n    color: #ee3158;\n    text-decoration: underline !important;\n}\n\n\n.read-btn:hover {\n    color: #f70033;\n}\n\n\n/***********************\n       10. TEAM\n*************************/\n\n\n.team-member img {\n    border-radius: 5px;\n}\n\n\n.team-member h4 {\n    font-size: 18px;\n    font-weight: 600;\n}\n\n\n.team-member p {\n    font-size: 14px;\n}\n\n\n/************************\n       11. PRICE\n**************************/\n\n\n.price {\n    box-shadow: 0px 40px 40px rgba(0, 0, 0, 0.05);\n    border-radius: 12px;\n}\n\n\n.price .type h4 {\n    font-size: 18px;\n    font-weight: 600;\n    text-transform: uppercase;\n}\n\n\n.price .value {\n    position: relative;\n}\n\n\n.price .value h3 {\n    display: inline-block;\n    padding-right: 10px;\n    font-size: 46px;\n    font-weight: 600;\n    position: relative;\n}\n\n\n.price .value h3 span {\n    font-size: 14px;\n    position: absolute;\n    top: 5px;\n}\n\n\n.price .value .per {\n    font-size: 13px;\n}\n\n\n.price .feature {\n    padding: 15px 0;\n}\n\n\n.price .feature li {\n    margin: 15px;\n    font-size: 15px;\n}\n\n\n/************************\n       12. CONTACT\n**************************/\n\n\n.form-control {\n    height: 46px;\n    border: 1px solid #e9e6e6;\n    font-size: 14px;\n}\n\n\ntextarea.form-control {\n    height: auto;\n}\n\n\n.form-control:focus {\n    border-color: #ee3158;\n    outline: 0;\n    box-shadow: none;\n}\n\n\n.address-info {\n    overflow: hidden;\n}\n\n\n.contact-info {\n    font-size: 14px;\n}\n\n\n.error {\n    margin: 8px 0px;\n    display: none;\n    color: red;\n}\n\n\n#ajaxsuccess {\n    font-size: 16px;\n    width: 100%;\n    display: none;\n    clear: both;\n    margin: 8px 0px;\n}\n\n\n.error_message {\n    padding: 10px;\n    margin-bottom: 20px;\n    text-align: center;\n    border: 2px solid #ff4774;\n    color: #ff4774;\n    border-radius: 5px;\n    font-size: 14px;\n    font-weight: 600;\n}\n\n\n.contact-loader {\n    display: none;\n}\n\n\n#success_page {\n    text-align: center;\n    margin-bottom: 50px;\n}\n\n\n#success_page h3 {\n    color: #10b81a;\n    font-size: 22px;\n}\n\n\n/************************\n       13. FOOTER\n*************************/\n\n\n.footer {\n    padding-top: 80px;\n    padding-bottom: 40px;\n    color: #818d9c;\n}\n\n\n.footer-menu h5 {\n    font-size: 16px;\n    font-weight: 600;\n    color: #ffffff;\n}\n\n\n.footer-menu p,\n.footer span {\n    font-size: 14px;\n}\n\n\n.footer-support {\n    font-weight: 600;\n}\n\n\n.footer_mdi {\n    font-size: 16px;\n    height: 36px;\n    width: 36px;\n    line-height: 36px;\n    border-radius: 50%;\n    text-align: center;\n    display: inline-block;\n    margin: 20px 2px;\n}\n\n\n.facebook {\n    background-color: #4e71a8;\n    color: #ffffff;\n}\n\n\n.twitter {\n    background-color: #55acee;\n    color: #ffffff;\n}\n\n\n.google {\n    background-color: #d6492f;\n    color: #ffffff;\n}\n\n\n.apple {\n    background-color: #231f20;\n    color: #ffffff;\n}\n\n\n.dribbble {\n    background-color: #fff;\n    color: #000;\n}\n\n\n.footer-menu li a {\n    font-size: 14px;\n    display: inline-block;\n    transition: all 0.5s;\n    line-height: 32px;\n    color: #818d9c!important;\n}\n\n\n/************************\n    14. RESPONSIVE\n**************************/\n\n\n@media (max-width: 768px) {\n    .vertical-content {\n        display: inherit;\n    }\n    .navbar-custom {\n        margin-top: 0px;\n        padding: 10px 0px !important;\n        background-color: #000 !important;\n        box-shadow: 0 10px 33px rgba(0, 0, 0, .1);\n        color: #fff !important;\n    }\n    .navbar-toggler i {\n        font-size: 24px;\n        margin-top: 0px;\n        margin-bottom: 0px;\n        color: #ffffff;\n    }\n    .bg-home {\n        height: auto;\n    }\n    .nav-sticky.navbar-custom .navbar-nav li a {\n        color: #fff !important;\n    }\n    .nav-sticky .logo {\n        color: #fff !important;\n    }\n    .navbar-custom>.container {\n        width: 90%;\n    }\n    .clients-img {\n        display: none;\n    }\n}\n\n\n@media (min-width:768px) and (max-width: 1024px) {\n    .clients-img {\n        top: 76px;\n    }\n}\n\n\n@media (max-height: 767px) {\n    .clients-img {\n        top: 7px;\n    }\n}\n\n\n.col-md-12.rubrique_title {\n    background-color: #647ef4;\n    padding: 1.5em;\n    color: white;\n    font-size: 1.5em;\n    font-weight: bold;\n    text-decoration: underline;\n    text-shadow: 1px 1px grey;\n    margin-top: 1em;\n}\n\n\n.forum_content {\n    margin-top: 1.5em;\n}\n\n\n.forum_subtitle {\n    background: #c1ac10;\n    padding: 1em;\n    color: white;\n    font-weight: bold;\n}\n\n\n.forum_liste {\n    padding-top: 0.5em;\n    border-bottom: solid 1px #ececec;\n    padding: 2em;\n    margin-top: 1em;\n    background-color: #fcfcfa;\n}\n\n\n.forum_icon {\n    color: #878889;\n    position: relative;\n    top: 0.2em;\n}"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/styles.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.my_nav{\n    padding-right: 0px;\n    padding-left: 0px;\n}\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/raw-loader!../../node_modules/postcss-loader/lib??embedded!./style.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/css/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!./styles.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!**************************************************!*\
  !*** multi ./src/styles.css ./src/css/style.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /var/www/html/Dignite/src/styles.css */"./src/styles.css");
module.exports = __webpack_require__(/*! /var/www/html/Dignite/src/css/style.css */"./src/css/style.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map