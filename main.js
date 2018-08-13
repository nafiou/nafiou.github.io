(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forum/forum.component */ "./src/app/forum/forum.component.ts");
/* harmony import */ var _detail_forum_detail_forum_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail-forum/detail-forum.component */ "./src/app/detail-forum/detail-forum.component.ts");
/* harmony import */ var _bibliotheque_bibliotheque_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bibliotheque/bibliotheque.component */ "./src/app/bibliotheque/bibliotheque.component.ts");
/* harmony import */ var _article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article-detail/article-detail.component */ "./src/app/article-detail/article-detail.component.ts");
/* harmony import */ var _phototeque_phototeque_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./phototeque/phototeque.component */ "./src/app/phototeque/phototeque.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/accueil', pathMatch: 'full' },
    { path: 'accueil', component: _index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"] },
    { path: 'bibliotheque', component: _bibliotheque_bibliotheque_component__WEBPACK_IMPORTED_MODULE_5__["BibliothequeComponent"] },
    { path: 'bibliotheque/:id', component: _article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_6__["ArticleDetailComponent"] },
    { path: 'forum', component: _forum_forum_component__WEBPACK_IMPORTED_MODULE_3__["ForumComponent"] },
    { path: 'photo', component: _phototeque_phototeque_component__WEBPACK_IMPORTED_MODULE_7__["PhototequeComponent"] },
    { path: 'forum/:id', component: _detail_forum_detail_forum_component__WEBPACK_IMPORTED_MODULE_4__["DetailForumComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Dignite';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _forum_forum_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forum/forum.component */ "./src/app/forum/forum.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _forum_form_forum_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forum-form/forum-form.component */ "./src/app/forum-form/forum-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _detail_forum_detail_forum_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./detail-forum/detail-forum.component */ "./src/app/detail-forum/detail-forum.component.ts");
/* harmony import */ var _bibliotheque_bibliotheque_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bibliotheque/bibliotheque.component */ "./src/app/bibliotheque/bibliotheque.component.ts");
/* harmony import */ var _article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./article-detail/article-detail.component */ "./src/app/article-detail/article-detail.component.ts");
/* harmony import */ var _phototeque_phototeque_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./phototeque/phototeque.component */ "./src/app/phototeque/phototeque.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _forum_forum_component__WEBPACK_IMPORTED_MODULE_3__["ForumComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
                _forum_form_forum_form_component__WEBPACK_IMPORTED_MODULE_7__["ForumFormComponent"],
                _detail_forum_detail_forum_component__WEBPACK_IMPORTED_MODULE_14__["DetailForumComponent"],
                _bibliotheque_bibliotheque_component__WEBPACK_IMPORTED_MODULE_15__["BibliothequeComponent"],
                _article_detail_article_detail_component__WEBPACK_IMPORTED_MODULE_16__["ArticleDetailComponent"],
                _phototeque_phototeque_component__WEBPACK_IMPORTED_MODULE_17__["PhototequeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angular_webstorage_service__WEBPACK_IMPORTED_MODULE_11__["StorageServiceModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article-detail/article-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/article-detail/article-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forum_subtitle{\n    background-image: url('books-1012088_1280.jpg');\n    background-size: cover;\n    padding: 1em;\n    color: white;\n    font-weight: bold;\n    padding-top: 4em;\n    padding-bottom: 4em;\n}\n.book_block{\n    margin-top: 2em;\n    background-color: #fafaf9 !important;\n}\n.book_description{\n    min-height: 12em;\n}\n.btn-light{\n    background-color: #c1ac10;\n    color: white;\n    font-weight: bold;\n}\n.book_title{\n    border-bottom: solid 2px #c1ac2a;\n    color: #888886;\n    background: #c1ac2a;\n    color: white;\n    padding-top: 0.5em;\n}\n.book_description{\n    padding: 0.8em;\n}\n.article_block{\n    margin-top: 2em;\n    padding-left: 2em;\n    padding-right: 2em;\n    border-left: solid 1em #c1ac10;\n    margin-bottom: 2em;\n    font-size: 1.2em;\n}\n.titre_article{\n    color: #787878;\n    font-weight: bold;\n    /* text-align: center; */\n    margin-bottom: 1em;\n}\n"

/***/ }),

/***/ "./src/app/article-detail/article-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/article-detail/article-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section\" id=\"home\">\n  <div class=\"bg-overlay\" st></div>\n  <div class=\"home-center\" style=\"background: #fffffe;\nposition: relative;\nz-index: 10;\">\n      <div class=\"home-desc-center\">\n          <div class=\"container\">\n              <!-- <div class=\"row\">\n                  <div class=\"col-md-12 rubrique_title\">\n                      Bienvenue sur notre forum\n                  </div>\n\n              </div> -->\n              <div class=\"row forum_content\">\n                  <div class=\"col-md-12 forum_subtitle\">\n                      <div class=\"row\">\n                            <div class=\"col-md-8\" style=\"font-size: 1.5em;\">\n                              NOTRE BIBLIOTHEQUE\n                            </div>\n                            <div class=\"col-md-4\">\n                              \n                            </div>  \n                      </div>\n                           \n                </div>\n                <div class=\"col-md-12 article_block\">\n                  <div class=\"row\">\n                    <div class=\"col-md-12 titre_article\">\n                       <h3>\n                           {{ article.titre }}\n                       </h3> \n                    </div>\n                    <div class=\"col-md-12 corp_aticle\">\n                        {{ article.description }}\n                    </div>\n                  </div>\n                </div>\n              </div>\n          </div>\n      </div>\n      </div>\n</section>\n<!-- HOME END-->\n\n\n"

/***/ }),

/***/ "./src/app/article-detail/article-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/article-detail/article-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ArticleDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleDetailComponent", function() { return ArticleDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _biblio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../biblio.service */ "./src/app/biblio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleDetailComponent = /** @class */ (function () {
    function ArticleDetailComponent(route, biblioService) {
        this.route = route;
        this.biblioService = biblioService;
        this.articleId = +this.route.snapshot.paramMap.get('id');
    }
    ArticleDetailComponent.prototype.ngOnInit = function () {
        this.GetCurent();
    };
    ArticleDetailComponent.prototype.GetCurent = function () {
        var _this = this;
        this.biblioService.GetCurentArticle(this.articleId).subscribe(function (data) {
            console.log(data);
            _this.article = data;
        });
    };
    ArticleDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-article-detail',
            template: __webpack_require__(/*! ./article-detail.component.html */ "./src/app/article-detail/article-detail.component.html"),
            styles: [__webpack_require__(/*! ./article-detail.component.css */ "./src/app/article-detail/article-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _biblio_service__WEBPACK_IMPORTED_MODULE_2__["BiblioService"]])
    ], ArticleDetailComponent);
    return ArticleDetailComponent;
}());



/***/ }),

/***/ "./src/app/biblio.service.ts":
/*!***********************************!*\
  !*** ./src/app/biblio.service.ts ***!
  \***********************************/
/*! exports provided: BiblioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiblioService", function() { return BiblioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/local-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BiblioService = /** @class */ (function () {
    function BiblioService(http, localservice) {
        this.http = http;
        this.localservice = localservice;
        this.url = this.localservice.url + 'article.php';
    }
    // Afficher liste des articles
    BiblioService.prototype.GetArticle = function () {
        var data = {
            'action': 'GET'
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'Application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.url, data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    BiblioService.prototype.GetCurentArticle = function (id) {
        var data = {
            'action': 'GETONE',
            'id': id
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'Application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.url, data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    BiblioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], BiblioService);
    return BiblioService;
}());



/***/ }),

/***/ "./src/app/bibliotheque/bibliotheque.component.css":
/*!*********************************************************!*\
  !*** ./src/app/bibliotheque/bibliotheque.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forum_subtitle{\n    background-image: url('books-1012088_1280.jpg');\n    background-size: cover;\n    padding: 1em;\n    color: white;\n    font-weight: bold;\n    padding-top: 4em;\n    padding-bottom: 4em;\n}\n.book_block{\n    margin-top: 2em;\n    background-color: #fafaf9 !important;\n}\n.book_description{\n    min-height: 12em;\n}\n.btn-light{\n    background-color: #c1ac10;\n    color: white;\n    font-weight: bold;\n}\n.book_title{\n    border-bottom: solid 2px #c1ac2a;\n    color: #888886;\n    background: #c1ac2a;\n    color: white;\n    padding-top: 0.5em;\n}\n.book_description{\n    padding: 0.8em;\n}\n"

/***/ }),

/***/ "./src/app/bibliotheque/bibliotheque.component.html":
/*!**********************************************************!*\
  !*** ./src/app/bibliotheque/bibliotheque.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section\" id=\"home\">\n    <div class=\"bg-overlay\" st></div>\n    <div class=\"home-center\" style=\"background: #fffffe;\n  position: relative;\n  z-index: 10;\">\n        <div class=\"home-desc-center\">\n            <div class=\"container\">\n                <!-- <div class=\"row\">\n                    <div class=\"col-md-12 rubrique_title\">\n                        Bienvenue sur notre forum\n                    </div>\n  \n                </div> -->\n                <div class=\"row forum_content\">\n                    <div class=\"col-md-12 forum_subtitle\">\n                        <div class=\"row\">\n                              <div class=\"col-md-8\" style=\"font-size: 1.5em;\">\n                                NOTRE BIBLIOTHEQUE\n                              </div>\n                              <div class=\"col-md-4\">\n                                \n                              </div>  \n                        </div>\n                             \n                  </div>\n                  <div class=\"col-md-12\">\n                  <div class=\"row\">\n                      <div class=\"col-md-4\" *ngFor=\"let article of articles\">\n                          <div class=\"book_block shadow-sm p-3 mb-5 bg-white rounded\">\n                              <div class=\"row\">\n                                  <div class=\"col-md-12 book_title\">\n                                     <h3>\n                                       {{article.titre}}\n                                     </h3>\n                                  </div>\n                                 </div>\n                                 <div class=\"row\">\n                                   <div class=\"col-md-12 book_description\">\n                                    {{article.description | slice:0:400 }}...\n                                   </div>\n                                 </div>\n                                 <div class=\"row\">\n                                  <div class=\"col-md-8\">\n             \n                                  </div>\n                                  <div class=\"col-md-4\">\n                                     <a routerLink=\"/bibliotheque/{{article.id}}\">\n                                     <button type=\"button\" class=\"btn btn-light\">Lire</button>\n                                     </a>\n                                  </div>\n                                 </div>\n                          </div>\n                        </div>\n                  </div>\n                  </div>\n                </div>\n            </div>\n        </div>\n        </div>\n  </section>\n  <!-- HOME END-->\n  \n"

/***/ }),

/***/ "./src/app/bibliotheque/bibliotheque.component.ts":
/*!********************************************************!*\
  !*** ./src/app/bibliotheque/bibliotheque.component.ts ***!
  \********************************************************/
/*! exports provided: BibliothequeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BibliothequeComponent", function() { return BibliothequeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _biblio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../biblio.service */ "./src/app/biblio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BibliothequeComponent = /** @class */ (function () {
    function BibliothequeComponent(biblioService) {
        this.biblioService = biblioService;
        this.articles = [];
    }
    BibliothequeComponent.prototype.ngOnInit = function () {
        this.GetArticle();
    };
    BibliothequeComponent.prototype.GetArticle = function () {
        var _this = this;
        this.biblioService.GetArticle().subscribe(function (data) {
            console.log(data);
            _this.articles = data;
        });
    };
    BibliothequeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bibliotheque',
            template: __webpack_require__(/*! ./bibliotheque.component.html */ "./src/app/bibliotheque/bibliotheque.component.html"),
            styles: [__webpack_require__(/*! ./bibliotheque.component.css */ "./src/app/bibliotheque/bibliotheque.component.css")]
        }),
        __metadata("design:paramtypes", [_biblio_service__WEBPACK_IMPORTED_MODULE_1__["BiblioService"]])
    ], BibliothequeComponent);
    return BibliothequeComponent;
}());



/***/ }),

/***/ "./src/app/comment.service.ts":
/*!************************************!*\
  !*** ./src/app/comment.service.ts ***!
  \************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/local-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentService = /** @class */ (function () {
    function CommentService(http, localservice) {
        this.http = http;
        this.localservice = localservice;
        this.url = this.localservice.url + 'comment.php';
    }
    // Nouveau Commentaire
    CommentService.prototype.AddComment = function (comment) {
        console.log(comment);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'Application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.url, comment, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CommentService.prototype.GetComment = function (id) {
        var data = {
            'action': 'GET',
            'id': id
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'Application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.url, data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CommentService.prototype.DeleteCmment = function (id, id_frm) {
        var data = {
            'action': 'DELETECOMMENT',
            'id': id,
            'id_frm': id_frm
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'Application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.url, data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CommentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/detail-forum/detail-forum.component.css":
/*!*********************************************************!*\
  !*** ./src/app/detail-forum/detail-forum.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forum_comment{\n    padding: 0.5em;\n    width: 100%;\n    background: #dddddd;\n    border-radius: 1em;\n    margin-top: 1em;\n}\n.user_name{\n    font-weight: bold;\n    color: #787878;\n}\n.user_icon{\n    background: #bbb600;\n    height: 3em;\n    width: 3em;\n    display: inline-block;\n    border-radius: 1.5em;\n    text-align: center;\n    padding-top: 0.7em;\n}\n.btn-primary{\n    float: right;\n    margin-top: 1em;\n    margin-bottom: 1em;\n    background-color: #5591ff;\n    border-color: #2f90f4;\n    box-shadow: 2px 2px 5px rgba(0,0,0,0.5), 2px 2px 5px rgba(0,0,0,0.5), -1px -1px 2px rgba(0,0,0,0.2);\n}\n.titr_discuss{\n    font-size: 1.5em;\n    font-weight: bold;\n    color: #5f5e5e; \n}\n.owner_icon{\n    color: #938f03; \n}\n.user_owner{\n    color: #767575;\n    margin-top: -1em;\n    display: inline-block;\n    font-size: 1.2em;\n    font-weight: bold;\n}\n.forum_subtitle{\n    background-image: url('coaching.jpg');\n    background-size: cover;\n    padding: 1em;\n    color: white;\n    font-weight: bold;\n    padding-top: 4em;\n    padding-bottom: 4em;\n}\n"

/***/ }),

/***/ "./src/app/detail-forum/detail-forum.component.html":
/*!**********************************************************!*\
  !*** ./src/app/detail-forum/detail-forum.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section\" id=\"home\">\n    <div class=\"bg-overlay\" st></div>\n    <div class=\"home-center\" style=\"background: #fffffe;\n  position: relative;\n  z-index: 10;\">\n        <div class=\"home-desc-center\">\n            <div class=\"container\">\n                <!-- <div class=\"row\">\n                    <div class=\"col-md-12 rubrique_title\">\n                        Bienvenue sur notre forum\n                    </div>\n  \n                </div> -->\n                <div class=\"row forum_content\">\n                    <div class=\"col-md-12 forum_subtitle\">\n                        <div class=\"row\">\n                              <div class=\"col-md-6\">\n                                      FORUM DE DISCUSSIONS\n                              </div>\n                              <div class=\"col-md-6\">\n                                 <button style=\"border: none;\n                                 float: right;\n                                 padding: 0.3em;\n                                 background-color: white;\n                                 color: #c1ac2a;\n                                 border-radius: 0.5em;\" data-toggle=\"modal\" (click)=\"NewDiscussion()\">Créer une discussion</button>\n                              </div>  \n                        </div>\n                             \n                  </div>\n                   <div class=\"col-md-12\">\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                          <p>\n                              <span class=\"titr_discuss\">{{ Myforum.titre_frm}}</span>\n                            </p>\n                            <p class=\"infos_discuss\">\n                              <span class=\"owner_icon\">\n                                  <i class=\"material-icons\" style=\"font-size: 2em;\">\n                                      person\n                                      </i>\n                              </span>\n                                \n\n                                    Par <span class=\"user_owner\">{{ Myforum.nom_use}}</span>\n                                    \n                                    >> {{ Myforum.date_frm }}\n                            </p>\n                      </div>\n                     <div class=\"col-md-12\">\n                      <p>\n                          {{ Myforum.description_frm}}\n                      </p>\n                     </div>\n                    </div>\n                    <div class=\"row\" *ngIf=\"comments\">\n                      <div class=\"col-md-12\" *ngFor=\"let comment of comments; let i=index\" >\n                       <div class=\"row\">\n\n                        <div class=\"forum_comment\">\n                          <div class=\"row\">\n                              <div class=\"col-md-10\">\n                                  <span class=\"user_icon\">\n                                      <i class=\"material-icons\">\n                                          person\n                                          </i> \n                                  </span>\n                                  <span class=\"user_name\">\n                                      {{comment.nom_use}}\n                                  </span>\n                                <span class=\"user_coment\">\n                                    {{comment.desc_cmt}}\n                                </span>\n                              </div>\n                              <div class=\"col-md-1\" *ngIf=\"CurentuserId === comment.id_use\" style=\"cursor: pointer;\">\n                                  <span>\n                                      <i class=\"material-icons\" style=\"color: #868788;\" (click)=\"Delete(comment.id_cmt)\">\n                                          delete_forever\n                                          </i>\n                                  </span>\n                                </div>\n                                <div class=\"col-md-1\" *ngIf=\"CurentuserId === comment.id_use\" style=\"cursor: pointer;\">\n                                  <span>\n                                      <i class=\"material-icons\" style=\"color: #868788;\" (click)=\"Edit(i)\">\n                                             create\n                                          </i>\n                                  </span>\n    \n                                </div>\n                          </div>\n                          \n                       </div>\n\n                      </div>\n                      </div>\n                      </div>\n                      <div class=\"col-md-offset-8\">\n                          <button type=\"button\" class=\"btn btn-primary\" (click)=\"NewCommenter()\">Commenter</button>\n                      </div>\n                    </div>\n                   </div>\n                </div>\n            </div>\n        </div>\n  </section>\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"ForumModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Nouvelle discussion</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                  <form>\n                      <div class=\"form-group\">\n                        <label for=\"exampleInputEmail1\">Titre</label>\n                        <input [(ngModel)]=\"forum.titre\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Titre de la discussion\" name=\"titre\">\n                      </div>\n                      <div class=\"form-group\">\n                          <label for=\"exampleFormControlTextarea1\">Description</label>\n                          <textarea [(ngModel)]=\"forum.description\" class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" name=\"description\"></textarea>\n                      </div>\n                    </form>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Annuler</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\">Créer</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal fade\" id=\"userModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Nouvelle discussion</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                  <form>\n                      <div class=\"form-group\">\n                        <label for=\"exampleInputEmail1\">Nom & Prénom(s)</label>\n                        <input [(ngModel)]=\"user.nom\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Nom & prénom(s)\" name=\"titre\">\n                      </div>\n                      <div class=\"form-group\">\n                          <label for=\"exampleInputEmail1\">Email</label>\n                        <input [(ngModel)]=\"user.email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Email\" name=\"email\">\n                      </div>\n                    </form>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Annuler</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"Inscript()\">Continuer</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal fade\" id=\"commentModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"exampleModalLabel\">Commentaire</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form>\n                        <div class=\"form-group\">\n                            <label for=\"exampleFormControlTextarea1\">Commentaire</label>\n                            <textarea [(ngModel)]=\"comment.description\" class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" name=\"Votre Commentaire\"></textarea>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Annuler</button>\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"Commenter()\">Ok</button>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"modal fade\" id=\"AlertModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n              <div class=\"modal-dialog\" role=\"document\">\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Confirmation</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                      <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                  </div>\n                  <div class=\"modal-body\">\n                     Veuillez confirmer votre choix \n                  </div>\n                  <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Non</button>\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"DeleteConfirm()\">Oui</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"modal fade\" id=\"EditcommentModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                <div class=\"modal-dialog\" role=\"document\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <h5 class=\"modal-title\" id=\"exampleModalLabel\">Commentaire</h5>\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                      </button>\n                    </div>\n                    <div class=\"modal-body\">\n                        <form>\n                            <div class=\"form-group\">\n                                <label for=\"exampleFormControlTextarea1\">Commentaire</label>\n                                <textarea [(ngModel)]=\"comment.description\" class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" name=\"Votre Commentaire\"></textarea>\n                            </div>\n                        </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Annuler</button>\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"EditCommenter()\">Ok</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n  <!-- HOME END-->\n  "

/***/ }),

/***/ "./src/app/detail-forum/detail-forum.component.ts":
/*!********************************************************!*\
  !*** ./src/app/detail-forum/detail-forum.component.ts ***!
  \********************************************************/
/*! exports provided: DetailForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailForumComponent", function() { return DetailForumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _forum_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forum.service */ "./src/app/forum.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _comment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comment.service */ "./src/app/comment.service.ts");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../local-storage.service */ "./src/app/local-storage.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DetailForumComponent = /** @class */ (function () {
    function DetailForumComponent(route, forumService, location, userService, localStorage, commentService) {
        this.route = route;
        this.forumService = forumService;
        this.location = location;
        this.userService = userService;
        this.localStorage = localStorage;
        this.commentService = commentService;
        this.commenting = true;
        this.forum = {
            id: 0,
            titre: '',
            description: '',
            nbcmmentaire: '',
            action: '',
            id_use: '',
        };
        this.user = {
            id: 0,
            nom: '',
            email: ''
        };
        this.comment = {
            id: 0,
            description: '',
            idfrm_cmt: this.route.snapshot.paramMap.get('id'),
            id_use: '',
            action: ''
        };
        this.comments = [];
        this.Myforum = {};
    }
    DetailForumComponent.prototype.ngOnInit = function () {
        this.getForum();
        this.getComments();
        this.GetCurentUse();
    };
    //Delete commentaire
    DetailForumComponent.prototype.Delete = function (id) {
        this.onDeleteId = id;
        this.Showmodal("#AlertModal");
    };
    //Delete Connfirmation
    DetailForumComponent.prototype.DeleteConfirm = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.commentService.DeleteCmment(this.onDeleteId, id).subscribe(function (data) {
            console.log(data);
            _this.comments = data;
            _this.HidemoDal("#AlertModal");
        });
    };
    //Editer Commentaire
    DetailForumComponent.prototype.Edit = function (index) {
        this.comment.description = this.comments[index].desc_cmt;
        this.comment.id = this.comments[index].id_cmt;
        this.Showmodal('#EditcommentModal');
    };
    // Edition Confirmé
    DetailForumComponent.prototype.EditCommenter = function () {
        var _this = this;
        this.comment.action = 'EDIT';
        this.comment.id_use = this.localStorage.data['id_user'];
        this.commentService.AddComment(this.comment).subscribe(function (data) {
            console.log(data);
            _this.comments = data;
            _this.HidemoDal('#EditcommentModal');
        });
    };
    DetailForumComponent.prototype.GetCurentUse = function () {
        this.localStorage.getFromLocal('id_user');
        this.CurentuserId = this.localStorage.data['id_user'];
    };
    // Récupérer commentaire
    DetailForumComponent.prototype.getComments = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.commentService.GetComment(id).subscribe(function (comment) {
            _this.comments = comment;
            console.log(_this.comments);
        });
    };
    // Recupérer forum
    DetailForumComponent.prototype.getForum = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.forumService.GetSingleForum(id).subscribe(function (forum) {
            _this.Myforum = forum;
            console.log(forum);
        });
    };
    // Créer Commentaire 
    DetailForumComponent.prototype.NewCommenter = function () {
        this.comment.description = '';
        this.localStorage.getFromLocal('id_user');
        this.commenting = true;
        if (this.localStorage.data['id_user']) {
            this.Showmodal('#commentModal');
        }
        else {
            this.Showmodal('#userModal');
        }
    };
    //ENregister le commentaire
    DetailForumComponent.prototype.Commenter = function () {
        var _this = this;
        this.comment.action = 'POST';
        this.comment.id_use = this.localStorage.data['id_user'];
        this.commentService.AddComment(this.comment).subscribe(function (data) {
            console.log(data);
            _this.comments = data;
            _this.HidemoDal('#commentModal');
        });
    };
    //Enregistrer DIscussion
    DetailForumComponent.prototype.save = function () {
        var _this = this;
        this.forum.action = 'POST';
        this.forum.id_use = this.localStorage.data['id_user'];
        this.forumService.AddForum(this.forum).subscribe(function (data) {
            console.log(data);
            _this.HidemoDal('#ForumModal');
        });
    };
    // Nouvelle Discussion
    DetailForumComponent.prototype.NewDiscussion = function () {
        this.localStorage.getFromLocal('id_user');
        if (this.localStorage.data['id_user']) {
            this.Showmodal('#ForumModal');
        }
        else {
            this.commenting = false;
            this.Showmodal('#userModal');
        }
    };
    //Inscription utilisateur
    DetailForumComponent.prototype.Inscript = function () {
        var _this = this;
        this.userService.Adduser(this.user).subscribe(function (data) {
            console.log(data);
            _this.localStorage.saveInLocal('id_user', data.id_use);
            _this.HidemoDal('#userModal');
            if (_this.commenting) {
                _this.Showmodal('#commentModal');
            }
            else {
                _this.Showmodal('#ForumModal');
            }
        });
    };
    DetailForumComponent.prototype.HidemoDal = function (modal) {
        $(modal).modal("toggle");
    };
    DetailForumComponent.prototype.Showmodal = function (modal) {
        $(modal).modal("show");
    };
    DetailForumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-forum',
            template: __webpack_require__(/*! ./detail-forum.component.html */ "./src/app/detail-forum/detail-forum.component.html"),
            styles: [__webpack_require__(/*! ./detail-forum.component.css */ "./src/app/detail-forum/detail-forum.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _forum_service__WEBPACK_IMPORTED_MODULE_3__["ForumService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"],
            _comment_service__WEBPACK_IMPORTED_MODULE_5__["CommentService"]])
    ], DetailForumComponent);
    return DetailForumComponent;
}());



/***/ }),

/***/ "./src/app/forum-form/forum-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/forum-form/forum-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forum-form/forum-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/forum-form/forum-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  forum-form works!\n</p>\n"

/***/ }),

/***/ "./src/app/forum-form/forum-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/forum-form/forum-form.component.ts ***!
  \****************************************************/
/*! exports provided: ForumFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumFormComponent", function() { return ForumFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForumFormComponent = /** @class */ (function () {
    function ForumFormComponent() {
        this.submitted = false;
    }
    ForumFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(ForumFormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    ForumFormComponent.prototype.ngOnInit = function () {
    };
    ForumFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forum-form',
            template: __webpack_require__(/*! ./forum-form.component.html */ "./src/app/forum-form/forum-form.component.html"),
            styles: [__webpack_require__(/*! ./forum-form.component.css */ "./src/app/forum-form/forum-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForumFormComponent);
    return ForumFormComponent;
}());



/***/ }),

/***/ "./src/app/forum.service.ts":
/*!**********************************!*\
  !*** ./src/app/forum.service.ts ***!
  \**********************************/
/*! exports provided: ForumService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumService", function() { return ForumService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/local-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForumService = /** @class */ (function () {
    function ForumService(http, localservice) {
        this.http = http;
        this.localservice = localservice;
        this.url = this.localservice.url + 'forum.php';
    }
    //Nouveau forum
    ForumService.prototype.AddForum = function (forum) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'Application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.url, forum, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    // Afficher tout les forum
    ForumService.prototype.GetForum = function (forum) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'Application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.url, forum, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    // Détail Forum
    ForumService.prototype.GetSingleForum = function (id) {
        var data = {
            'id': id,
            'action': 'GETSINGLE'
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'Application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.url, data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    // Delete Forum
    ForumService.prototype.DeleteForum = function (id) {
        var data = {
            'id': id,
            'action': 'FDELETE'
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'Application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post(this.url, data, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    ForumService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"]])
    ], ForumService);
    return ForumService;
}());



/***/ }),

/***/ "./src/app/forum/forum.component.css":
/*!*******************************************!*\
  !*** ./src/app/forum/forum.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forum_liste{\n    cursor: pointer;\n    \n}\n.forum_liste:hover{\n    background-color: #e7e7e6;\n    box-shadow: 2px 2px 5px rgba(0,0,0,0.5), 2px 2px 5px rgba(0,0,0,0.5), -1px -1px 2px rgba(0,0,0,0.2);\n}\n.home-desc-center{\n    \n\n}\n.forum_subtitle{\n    background-image: url('coaching.jpg');\n    background-size: cover;\n    padding: 1em;\n    color: white;\n    font-weight: bold;\n    padding-top: 4em;\n    padding-bottom: 4em;\n}"

/***/ }),

/***/ "./src/app/forum/forum.component.html":
/*!********************************************!*\
  !*** ./src/app/forum/forum.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section\" id=\"home\">\n  <div class=\"bg-overlay\" st></div>\n  <div class=\"home-center\" style=\"background: #fffffe;\nposition: relative;\nz-index: 10;\">\n      <div class=\"home-desc-center\">\n          <div class=\"container\">\n              <!-- <div class=\"row\">\n                  <div class=\"col-md-12 rubrique_title\">\n                      Bienvenue sur notre forum\n                  </div>\n\n              </div> -->\n              <div class=\"row forum_content\">\n                  <div class=\"col-md-12 forum_subtitle\">\n                      <div class=\"row\">\n                            <div class=\"col-md-8\" style=\"font-size: 1.5em;\">\n                              BIENVENUE SUR NOTRE FORUM DE DISCUSSIONS\n                            </div>\n                            <div class=\"col-md-4\">\n                               <button style=\"border: none;\n                               float: right;\n                               padding: 0.3em;\n                               background-color: white;\n                               color: #c1ac2a;\n                               border-radius: 0.5em;\" data-toggle=\"modal\" (click)=\"NewDiscussion()\">Créer une discussion</button>\n                            </div>  \n                      </div>\n                           \n                </div>\n                 <div *ngFor=\"let forum of forums; let i=index\" class=\"col-md-12\">\n                    \n                    <div class=\"col-md-12 forum_liste\" >\n                      <div class=\"row\">\n                            <div class=\"col-md-1\" (click)=\"Detail(forum.id_frm)\">\n                                  <i class=\"material-icons forum_icon\">\n                                          textsms\n                                          </i>\n                            </div>\n                            <div class=\"col-md-3\" (click)=\"Detail(forum.id_frm)\">\n                                {{ forum.description_frm | slice:0:40 }}...\n                            </div>\n                            <div class=\"col-md-3\" (click)=\"Detail(forum.id_frm)\">\n                                <i class=\"material-icons forum_icon\">\n                                            remove_red_eye\n                                            </i> {{forum.nom_use}}\n                            </div>\n                            <div class=\"col-md-1\">\n                                <i class=\"material-icons forum_icon\">\n                                            person\n                                            </i> 125\n                            </div>\n                            <div class=\"col-md-2\">\n                            </div>\n                            <div class=\"col-md-1\" *ngIf=\"CurentuserId === forum.iduse_frm\">\n                              <span>\n                                  <i class=\"material-icons\" style=\"color: #868788;\" (click)=\"Delete(forum.id_frm)\">\n                                      delete_forever\n                                      </i>\n                              </span>\n                            </div>\n                            <div class=\"col-md-1\" *ngIf=\"CurentuserId == forum.iduse_frm\">\n                              <span>\n                                  <i class=\"material-icons\" style=\"color: #868788;\" (click)=\"Edit(i)\">\n                                         create\n                                      </i>\n                              </span>\n\n                            </div>\n                        </div>\n                      </div>\n                  \n                 </div>\n                  \n\n              </div>\n          </div>\n      </div>\n      </div>\n</section>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"ForumModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Nouvelle discussion</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n                <form>\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Titre</label>\n                      <input [(ngModel)]=\"forum.titre\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Titre de la discussion\" name=\"titre\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"exampleFormControlTextarea1\">Description</label>\n                        <textarea [(ngModel)]=\"forum.description\" class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" name=\"description\"></textarea>\n                    </div>\n                  </form>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Annuler</button>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\">Créer</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal fade\" id=\"userModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">Nouvelle discussion</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <div class=\"modal-body\">\n                <form>\n                    <div class=\"form-group\">\n                      <label for=\"exampleInputEmail1\">Nom & Prénom(s)</label>\n                      <input [(ngModel)]=\"user.nom\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Nom & prénom(s)\" name=\"titre\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"exampleInputEmail1\">Email</label>\n                      <input [(ngModel)]=\"user.email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Email\" name=\"email\">\n                    </div>\n                  </form>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Annuler</button>\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"Inscript()\">Continuer</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal fade\" id=\"AlertModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Confirmation</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                  <span aria-hidden=\"true\">&times;</span>\n                </button>\n              </div>\n              <div class=\"modal-body\">\n                 Veuillez confirmer votre choix \n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Non</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"DeleteConfirm()\">Oui</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal fade\" id=\"EditForumModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h5 class=\"modal-title\" id=\"exampleModalLabel\">Nouvelle discussion</h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form>\n                        <div class=\"form-group\">\n                          <label for=\"exampleInputEmail1\">Titre</label>\n                          <input [(ngModel)]=\"forum.titre\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Titre de la discussion\" name=\"titre\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"exampleFormControlTextarea1\">Description</label>\n                            <textarea [(ngModel)]=\"forum.description\" class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"3\" name=\"description\"></textarea>\n                        </div>\n                      </form>\n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Annuler</button>\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"editForum()\">Modifier</button>\n                </div>\n              </div>\n            </div>\n          </div>\n<!-- HOME END-->\n"

/***/ }),

/***/ "./src/app/forum/forum.component.ts":
/*!******************************************!*\
  !*** ./src/app/forum/forum.component.ts ***!
  \******************************************/
/*! exports provided: ForumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumComponent", function() { return ForumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../local-storage.service */ "./src/app/local-storage.service.ts");
/* harmony import */ var _forum_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../forum.service */ "./src/app/forum.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var poper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! poper */ "./node_modules/poper/dist/poper.js");
/* harmony import */ var poper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(poper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ForumComponent = /** @class */ (function () {
    function ForumComponent(userService, localStorage, forumService, route, location, router) {
        this.userService = userService;
        this.localStorage = localStorage;
        this.forumService = forumService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.forums = [];
        this.forum = {
            id: 0,
            titre: '',
            description: '',
            nbcmmentaire: '',
            action: '',
            id_use: ''
        };
        this.user = {
            id: 0,
            nom: '',
            email: ''
        };
    }
    ForumComponent.prototype.ngOnInit = function () {
        this.GetDiscussion();
        this.GetCurentUse();
    };
    ForumComponent.prototype.save = function () {
        var _this = this;
        this.forum.action = 'POST';
        this.forum.id_use = this.localStorage.data['id_user'];
        this.forumService.AddForum(this.forum).subscribe(function (data) {
            console.log(data);
            _this.forums = data;
            _this.HidemoDal('#ForumModal');
        });
    };
    //Création Discussion
    ForumComponent.prototype.GetDiscussion = function () {
        var _this = this;
        this.forum.action = 'GET';
        this.forumService.GetForum(this.forum).subscribe(function (data) {
            console.log(data);
            _this.forums = data;
        });
    };
    // Editer Discussion
    ForumComponent.prototype.editForum = function () {
        var _this = this;
        this.forum.action = 'EDIT';
        this.forumService.AddForum(this.forum).subscribe(function (data) {
            console.log(data);
            _this.forums = data;
            _this.HidemoDal('#EditForumModal');
        });
    };
    // Nouvelle Discussion
    ForumComponent.prototype.NewDiscussion = function () {
        this.forum.titre = '';
        this.forum.description = '';
        this.localStorage.getFromLocal('id_user');
        if (this.localStorage.data['id_user']) {
            this.Showmodal('#ForumModal');
        }
        else {
            this.Showmodal('#userModal');
        }
    };
    //GEt current user use
    ForumComponent.prototype.GetCurentUse = function () {
        this.localStorage.getFromLocal('id_user');
        this.CurentuserId = this.localStorage.data['id_user'];
    };
    //Inscription utilisateur
    ForumComponent.prototype.Inscript = function () {
        var _this = this;
        this.userService.Adduser(this.user).subscribe(function (data) {
            console.log(data);
            _this.localStorage.saveInLocal('id_user', data.id_use);
            _this.HidemoDal('#userModal');
            _this.Showmodal('#ForumModal');
        });
    };
    //GE=o to detail
    ForumComponent.prototype.Detail = function (id) {
        this.router.navigate(['/forum/' + id]);
    };
    //Delete forum
    ForumComponent.prototype.Delete = function (id) {
        this.onDeleteId = id;
        this.Showmodal("#AlertModal");
    };
    ForumComponent.prototype.DeleteConfirm = function () {
        var _this = this;
        this.forumService.DeleteForum(this.onDeleteId).subscribe(function (data) {
            console.log(data);
            _this.forums = data;
            _this.HidemoDal('#AlertModal');
        });
    };
    //Detail forum
    ForumComponent.prototype.Edit = function (index) {
        this.forum.description = this.forums[index].description_frm;
        this.forum.titre = this.forums[index].titre_frm;
        this.forum.id = this.forums[index].id_frm;
        console.log(this.forum);
        this.Showmodal('#EditForumModal');
    };
    //Modal Controller
    ForumComponent.prototype.HidemoDal = function (modal) {
        $(modal).modal("toggle");
    };
    ForumComponent.prototype.Showmodal = function (modal) {
        $(modal).modal("show");
    };
    ForumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"]
            ],
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forum',
            template: __webpack_require__(/*! ./forum.component.html */ "./src/app/forum/forum.component.html"),
            styles: [__webpack_require__(/*! ./forum.component.css */ "./src/app/forum/forum.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"],
            _forum_service__WEBPACK_IMPORTED_MODULE_4__["ForumService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ForumComponent);
    return ForumComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-lg {\n    max-width: 90%;\n}\n.modal-pros { \n    min-width: 60%;\n}\n#ressource{\n\n}\n.forum_subtitle{\n    background-image: url('books-1012088_1280.jpg');\n    background-size: cover;\n    padding: 1em;\n    color: white;\n    font-weight: bold;\n    padding-top: 4em;\n    padding-bottom: 4em;\n}\n.book_block{\n    margin-top: 2em;\n    background-color: #fafaf9 !important;\n}\n.book_description{\n    min-height: 12em;\n}\n.btn-light{\n    background-color: #c1ac10;\n    color: white;\n    font-weight: bold;\n}\n.book_title{\n    border-bottom: solid 2px #c1ac2a;\n    color: #888886;\n    background: #c1ac2a;\n    color: white;\n    padding-top: 0.5em;\n}\n.book_description{\n    padding: 0.8em;\n}\n.modal-content {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    pointer-events: auto;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid rgba(0,0,0,.2);\n    border-radius: .3rem;\n    outline: 0;\n    padding-left: 2em;\n    padding-right: 2em;\n}\n.book_description{\n    padding: 0.8em;\n}\n.article_block{\n    margin-top: 2em;\n    padding-left: 2em;\n    padding-right: 2em;\n    border-left: solid 1em #c1ac10;\n    margin-bottom: 2em;\n    font-size: 1.2em;\n}"

/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section bg-home\" id=\"home\">\n  <div class=\"bg-overlay\"></div>\n  <div class=\"home-center\">\n      <div class=\"home-desc-center\">\n          <div class=\"container\">\n              <div class=\"row vertical-content\">\n                  <div class=\"col-lg-8 mt-3\">\n                      <h5 class=\"home-small-title text-uppercase text-white-50 mb-4\">Cabinet de Conseil & Formation</h5>\n                      <h2 class=\"home-title text-white mb-4\">Avec Dignité Consulting , c’est vous d’abord !</h2>\n                      <p class=\"home-desc text-white-50\">7 ans d'ancienneté au service de la croissance économique et du progrès social surtout de l'entrepreneuriat. Une équipe de jeune diplôme pluridisciplinaire de haut niveau et professionnel ,qui accumule expérience, la maîtrise\n                          et le savoir faire efficace, dont les connaissances sont actualisées et formées à la législation du jour.</p>\n                      <div class=\"pt-4\">\n                          <a href=\"#client\" class=\"btn btn-custom-white\">Voire Plus<i class=\"mdi mdi-arrow-right ml-2\"></i></a>\n                      </div>\n                  </div>\n\n                  <div class=\"col-lg-4 mt-3\">\n                      <div class=\"home-registration-form bg-white p-4\">\n                          <h5 class=\"form-title mb-4 text-center font-weight-bold\">Laissez nous un message</h5>\n                          <form class=\"registration-form\">\n                              <label class=\"text-muted\">Nom</label>\n                              <input type=\"text\" id=\"exampleInputName1\" class=\"form-control mb-4 registration-input-box\">\n                              <label class=\"text-muted\">Prénom(s)</label>\n                              <input type=\"text\" id=\"exampleInputName2\" class=\"form-control mb-4 registration-input-box\">\n                              <label class=\"text-muted\">Email</label>\n                              <input type=\"email\" id=\"exampleInputEmail1\" class=\"form-control mb-4 registration-input-box\">\n                              <button class=\"btn btn-custom w-100\">Envoyer</button>\n                          </form>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>\n<!-- HOME END-->\n\n<!-- WELCOME START -->\n<section class=\"section\" id=\"feature\">\n  <div class=\"container\">\n      <div class=\"row justify-content-center\">\n          <div class=\"col-lg-6\">\n              <div class=\"text-center\">\n                  <h4 class=\"title-heading text-uppercase\">A PROPOS DE NOUS</h4>\n                  <p class=\"title-desc text-muted\">Cabinet conseil et formation agréé par le FDFP sous l'agrégation N°008-2017/HAB/TBL/KK/Kt et l'AGEFOP sous le n°407/13/DG/BT/MAG/of</p>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"row mt-4\">\n          <div class=\"col-lg-6\">\n              <div class=\"features mt-4\">\n                  <div class=\"text-center\">\n                      <div class=\"mb-4\">\n                          <h5 class=\"text-custom\">\n                              <i class=\"mdi mdi-book-open-page-variant\"></i>\n                          </h5>\n                      </div>\n\n                      <h4>Présentation</h4>\n                      <p class=\"features-desc text-muted mt-3 pl-2 pr-2\">\n                          La fulgurante évolution technologique que connait le monde depuis ces dernières décennies a entrainé la reconfiguration de bien de domaines de la vie de l’homme, notamment le domaine professionnel. En effet, l’explosion de l’activité scientifique a, de\n                          faite, entrainé des bouleversements énormes dans le ...<br />\n                          <a href=\"#client\" class=\"btn btn-custom-white\">Lire la suite<i class=\"mdi mdi-arrow-right ml-2\"></i></a>\n                      </p>\n                  </div>\n              </div>\n          </div>\n\n          <div class=\"col-lg-6\">\n              <div class=\"features mt-4\">\n                  <div class=\"text-center\">\n                      <div class=\"mb-4\">\n                          <h5 class=\"text-custom\">\n                              <i class=\"mdi mdi-bullseye-arrow\"></i>\n                          </h5>\n                      </div>\n                      <h4>Point Fort</h4>\n                      <p class=\"features-desc text-muted mt-3 pl-2 pr-2\">\n                          Un Directeur Général Ingénieur de conception en GRH, Titulaire de Master II en Droit et Diplômé de Finance Comptabilité. Ex agent du service publics à l'agefop le cabinet d'ingénierie de l'État ivoirien. Dans cette dynamique de compétences le personnel\n                          à été recruté sur le principe profit adéquation. Nous disposons des consultants et du personnel qualifié très mobile et efficace\n                      </p>\n                  </div>\n              </div>\n          </div>\n      </div>\n\n  </div>\n</section>\n<!-- WELCOME END -->\n<!-- SERVICES START -->\n<section class=\"section bg-light\" id=\"portfolio\">\n  <div class=\"container\">\n      <div class=\"row justify-content-center\">\n          <div class=\"col-lg-6\">\n              <div class=\"text-center\">\n                  <h4 class=\"title-heading text-uppercase\">Nos Services</h4>\n                  <p class=\"title-desc text-muted\">\n                      Nous disposons des consultant et du personnel qualifié très mobile et efficace, qui travail par principe d'action axé sur le résultat. Surtout le respect des délais des travaux fixés aux clients\n                  </p>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"row mt-4\">\n          <div class=\"col-lg-4\" data-toggle=\"modal\" data-target=\"#assistance-juridique\">\n              <div class=\"services-blog mt-4\">\n                  <div>\n                      <img src=\"src/images/services/Briefcase.png\" class=\"img-fluid\" alt=\"\">\n                  </div>\n                  <div class=\"service-head\">\n                      <h4>Assistance Juridique</h4>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-4\" data-toggle=\"modal\" data-target=\"#formation\">\n              <div class=\"services-blog mt-4\">\n                  <div>\n                      <img src=\"src/images/services/Briefcase.png\" class=\"img-fluid\" alt=\"\">\n                  </div>\n                  <div class=\"service-head\">\n                      <h4>Formation</h4>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-4\" data-toggle=\"modal\" data-target=\"#gestion-organisation\">\n              <div class=\"services-blog mt-4\">\n                  <div>\n                      <img src=\"src/images/services/Briefcase.png\" class=\"img-fluid\" alt=\"\">\n                  </div>\n                  <div class=\"service-head\">\n                      <h4>Conseil en Gestion et Organisation</h4>\n                  </div>\n              </div>\n          </div>\n\n      </div>\n      <div class=\"row mt-4\">\n          <div class=\"col-lg-4\">\n              <div class=\"services-blog mt-4\">\n                  <div>\n                      <img src=\"src/images/services/Briefcase.png\" class=\"img-fluid\" alt=\"\">\n                  </div>\n                  <div class=\"service-head\">\n                      <h4>Coaching et leadership</h4>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-4\">\n              <div class=\"services-blog mt-4\">\n                  <div>\n                      <img src=\"src/images/services/Briefcase.png\" class=\"img-fluid\" alt=\"\">\n                  </div>\n                  <div class=\"service-head\">\n                      <h4> Constitution de société</h4>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-4\">\n              <div class=\"services-blog mt-4\">\n                  <div>\n                      <img src=\"src/images/services/Briefcase.png\" class=\"img-fluid\" alt=\"\">\n                  </div>\n                  <div class=\"service-head\">\n                      <h4>Gestion Comptable</h4>\n                  </div>\n              </div>\n          </div>\n\n      </div>\n      <div class=\"row mt-4\">\n          <div class=\"col-lg-4\" data-toggle=\"modal\" data-target=\"#ressource\">\n              <div class=\"services-blog mt-4\">\n                  <div>\n                      <img src=\"src/images/services/Briefcase.png\" class=\"img-fluid\" alt=\"\">\n                  </div>\n                  <div class=\"service-head\">\n                      <h4>Gestion des Ressources Humaines</h4>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-4\" data-toggle=\"modal\" data-target=\"#org-com\">\n              <div class=\"services-blog mt-4\">\n                  <div>\n                      <img src=\"src/images/services/Briefcase.png\" class=\"img-fluid\" alt=\"\">\n                  </div>\n                  <div class=\"service-head\">\n                      <h4>Stratégies Organisation - Communication</h4>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-4\">\n              <div class=\"services-blog mt-4\">\n                  <div>\n                      <img src=\"src/images/services/Briefcase.png\" class=\"img-fluid\" alt=\"\">\n                  </div>\n                  <div class=\"service-head\">\n                      <h4>Études - Conception - et création de Projet</h4>\n                  </div>\n              </div>\n          </div>\n\n      </div>\n      <div class=\"row mt-4\">\n          <div class=\"col-lg-4\">\n              <div class=\"services-blog mt-4\">\n                  <div>\n                      <img src=\"src/images/services/Briefcase.png\" class=\"img-fluid\" alt=\"\">\n                  </div>\n                  <div class=\"service-head\">\n                      <h4>Expertise Marketing et Management</h4>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-4\">\n              <div class=\"services-blog mt-4\">\n                  <div>\n                      <img src=\"src/images/services/Briefcase.png\" class=\"img-fluid\" alt=\"\">\n                  </div>\n                  <div class=\"service-head\">\n                      <h4>Consulting et accompagnement</h4>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-4\">\n              <div class=\"services-blog mt-4\">\n                  <div>\n                      <img src=\"src/images/services/Briefcase.png\" class=\"img-fluid\" alt=\"\">\n                  </div>\n                  <div class=\"service-head\">\n                      <h4>Ingénierie.</h4>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>\n<!-- SERVICES END -->\n<!-- CLIENT START -->\n<section class=\"section\" id=\"client\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-lg-12\">\n              <div class=\"\">\n                  <h4 class=\"title-heading text-uppercase\" style=\"text-align: center;\n                                  padding-bottom: 2em;\">Présentation</h4>\n                  <p class=\"title-desc text-muted\">\n                      La fulgurante évolution technologique que connait le monde depuis ces dernières décennies a entrainé la reconfiguration de bien de domaines de la vie de l’homme, notamment le domaine professionnel. En effet, l’explosion de l’activité scientifique a, de\n                      faite, entrainé des bouleversements énormes dans le monde du travail, allant de la disparition partielle ou totale, de pans entier d’activité à l’émergence d’autres.\n                  </p>\n                  <p class=\"title-desc text-muted\" style=\"padding: 2em;\">\n                      <img src=\"src/images/facade.jpg\" style=\"box-shadow: 0 10px 10px rgba(0, 0, 0, .1); width: 100%;\">\n                  </p>\n                  <div class=\"title-desc text-muted\">\n                      Conséquemment, les politiques et pratiques de formations mises en œuvre dans les entreprises du secteur public et privées sont de plus en plus axées sur l’adaptation et l’anticipation constante. Dans ce contexte la question essentielle qui se pose est\n                      de savoir :\n                      <ul>\n                          <li>\n                              Quelle formation professionnelle pour ce monde en perpétuelle mouvance?\n                          </li>\n                          <li>\n                              A qui confier la vie de son business ?\n                          </li>\n                      </ul>\n                    </div>\n                  <p class=\"title-desc text-muted\">\n                      <b>DIGNITE CONSULTING Sarl</b>, regroupant en son sein des consultants pluridisciplinaires et des ingénieurs de conception professionnel, œuvrant dans la réalisation de projets au profit des populations, des autorités, des\n                      organismes et des collectivités locales. Pour nous, gérer un projet revient essentiellement à manager le processus de transformation des ressources organisationnelles, intellectuelles, humaines et matérielles par des activités\n                      qui produiront des retombés qualitatifs en termes de développement.\n                  </p>\n                  <p class=\"title-desc text-muted\">\n                      <b>DIGNITE CONSULTING Sarl</b>, est une alternative aux nombreux soucis rencontrés par nos administrations, opérateurs économiques et acteurs de développement.\n                  </p>\n              </div>\n          </div>\n      </div>\n  </div>\n</section>\n<!-- CLIENT END -->\n<!-- TEAM START -->\n<section class=\"section bg-light\" id=\"team\">\n  <div class=\"container\">\n      <div class=\"row justify-content-center\">\n          <div class=\"col-lg-6\">\n              <div class=\"text-center\">\n                  <h4 class=\"title-heading text-uppercase\">Notre Equipe</h4>\n                  <p class=\"title-desc text-muted\">\n                      Une équipe de jeune diplôme pluridisciplinaire de haut niveau et professionnel ,qui accumule expérience, maîtrise, savoir faire faire efficace, dont les connaissances sont actualisées et formées à la législation du jour.\n                  </p>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"row mt-4\">\n          <div class=\"col-lg-3\">\n              <div class=\"team-member mt-4 text-center\">\n                  <img src=\"src/images/team/11.jpg\" class=\"img-fluid\" alt=\"\">\n                  <div>\n                      <h4 class=\"mt-3\">Nom Prénom(s)</h4>\n                      <p>Fonction</p>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-3\">\n              <div class=\"team-member mt-4 text-center\">\n                  <img src=\"src/images/team/11.jpg\" class=\"img-fluid\" alt=\"\">\n                  <div>\n                      <h4 class=\"mt-3\">Nom Prénom(s)</h4>\n                      <p>Fonction</p>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-3\">\n              <div class=\"team-member mt-4 text-center\">\n                  <img src=\"src/images/team/11.jpg\" class=\"img-fluid\" alt=\"\">\n                  <div>\n                      <h4 class=\"mt-3\">Nom Prénom(s)</h4>\n                      <p>Fonction</p>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-3\">\n              <div class=\"team-member mt-4 text-center\">\n                  <img src=\"src/images/team/11.jpg\" class=\"img-fluid\" alt=\"\">\n                  <div>\n                      <h4 class=\"mt-3\">Nom Prénom(s)</h4>\n                      <p>Fonction</p>\n                  </div>\n              </div>\n          </div>\n\n      </div>\n  </div>\n</section>\n<!-- TEAM END -->\n<!-- CONTACT START -->\n<section class=\"section\" id=\"contact\">\n  <div class=\"container\">\n      <div class=\"row justify-content-center\">\n          <div class=\"col-lg-6\">\n              <div class=\"contact-head text-center\">\n                  <h4 class=\"title-heading text-uppercase\">Nous Contacter</h4>\n                  <p class=\"title-desc text-muted\">Nous nous ferons le plaisir de vous répondre.</p>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"row mt-4 vertical-content\">\n          <div class=\"col-lg-12\">\n              <div class=\"row mt-5\">\n\n                  <div class=\"col-lg-4\">\n                      <div class=\"contact-info\">\n                          <div class=\"mt-3\">\n                              <div class=\"float-left\">\n                                  <i class=\"mdi mdi-email h5\"></i>\n                              </div>\n                              <div class=\"ml-5\">\n                                  <h6 class=\"text-custom\">Adresse Email</h6>\n                                  <p>afrique.dignite@yahoo.ca</p>\n                              </div>\n                          </div>\n\n                          <div class=\"mt-4\">\n                              <div class=\"float-left\">\n                                  <i class=\"mdi mdi-phone-in-talk h5\"></i>\n                              </div>\n                              <div class=\"ml-5\">\n                                  <h6 class=\"text-custom\">Téléphone</h6>\n                                  <p>(+225)220 029 41, (+225) 798 988 21</p>\n                              </div>\n                          </div>\n\n                          <div class=\"mt-4\">\n                              <div class=\"float-left\">\n                                  <i class=\"mdi mdi-home h5\"></i>\n                              </div>\n                              <div class=\"ml-5\">\n                                  <h6 class=\"text-custom\">Adresse</h6>\n                                  <p>\n                                      Face au 12e Arrondissement, - Deux-plateaux - Vallon Cocody - 20 BP 624 Abidjan 20 Abidjan - Côte d’Ivoire\n                                  </p>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n\n                  <div class=\"col-lg-8\">\n                      <div class=\"custom-form\">\n                          <div id=\"message\"></div>\n                          <form method=\"post\" action=\"#\" name=\"contact-form\" id=\"contact-form\">\n                              <div class=\"row\">\n                                  <div class=\"col-lg-6\">\n                                      <div class=\"form-group\">\n                                          <input name=\"name\" id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Votre Nom...\">\n                                      </div>\n                                  </div>\n                                  <div class=\"col-lg-6\">\n                                      <div class=\"form-group\">\n                                          <input name=\"email\" id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Votre email...\">\n                                      </div>\n                                  </div>\n                              </div>\n\n                              <div class=\"row\">\n                                  <div class=\"col-lg-12\">\n                                      <div class=\"form-group\">\n                                          <input name=\"text\" id=\"sub\" type=\"text\" class=\"form-control\" placeholder=\"Sujet...\">\n                                      </div>\n                                  </div>\n                              </div>\n\n                              <div class=\"row\">\n                                  <div class=\"col-lg-12\">\n                                      <div class=\"form-group\">\n                                          <textarea name=\"comments\" id=\"comments\" rows=\"4\" class=\"form-control\" placeholder=\"Votre message...\"></textarea>\n                                      </div>\n                                  </div>\n                              </div>\n                              <div class=\"row mt-3\">\n                                  <div class=\"col-lg-12\">\n                                      <input type=\"submit\" id=\"submit\" name=\"send\" class=\"submitBnt btn btn-custom\" value=\"Envoyer\">\n                                      <div id=\"simple-msg\"></div>\n                                  </div>\n                              </div>\n                          </form>\n                      </div>\n                  </div>\n\n              </div>\n          </div>\n      </div>\n  </div>\n</section>\n<!-- Modal -->\n<div class=\"modal fade\" id=\"formation\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                    \n                                        <!-- <div class=\"row\">\n                                            <div class=\"col-md-12 rubrique_title\">\n                                                Bienvenue sur notre forum\n                                            </div>\n                          \n                                        </div> -->\n                                        <div class=\"row forum_content\">\n                                            <div class=\"col-md-12 forum_subtitle\">\n                                                <div class=\"row\">\n                                                      <div class=\"col-md-8\" style=\"font-size: 1.5em;\">\n                                                        FORMATION\n                                                      </div>\n                                                      <div class=\"col-md-4\">\n                                                        \n                                                      </div>  \n                                                </div>\n                                                     \n                                          </div>\n                                          <div class=\"col-md-12 article_block\">\n                                            <div class=\"row\">\n                                            <div class=\"col-md-12 corp_aticle\">\n                                               <p>\n                                                    Il s’articule autour des grandes étapes suivantes :\n                                               </p>\n                                               <div class=\"col-lg-12\">\n                                                <h5 class=\"titre_prestation\">\n                                                        Vos objectifs\n                                                </h5>\n                                                \n                                                    <ul>\n                                                        <li>\n                                                                Donner une vision plus claire des\n                                                                enjeux et des avantages d’une\n                                                                gestion stratégique des RH,\n                                                        </li>\n                                                        <li>\n                                                                Remettre les Managers au cœur de\n                                                                la démarche RH de l’entreprise,\n                                                        </li>\n                                                        <li>\n                                                                Donner les outils clés pour une\n                                                                gestion efficace des ressources\n                                                                humaines,\n                                                        </li>\n                                                        <li>\n                                                                Permettre à tout encadrement\n                                                                hiérarchique ou fonctionnel,\n                                                                d'animer et de contrôler des équipes\n                                                                de collaborateurs,\n                                                        </li>\n                                                    </ul>\n                                                \n                                               </div>\n                                               <div class=\"col-md-12\">\n                                                    <h5 class=\"titre_prestation\">\n                                                            Notre méthodologie\n                                                    </h5>\n                                                    \n                                                        <ul>\n                                                            <li>\n                                                                    Les concepts, outils, grille de\n                                                                    lecture, techniques et tactiques\n                                                                    seront mis en application à travers\n                                                                    des cas de simulation, joués par des\n                                                                    participants et les animateurs.\n                                                            </li>\n                                                            <li>\n                                                                    Une pédagogie active à base\n                                                                    d’exposés puis d’étude de cas\n                                                                    permet aux participants de\n                                                                    s’entraîner sur des dossiers\n                                                                    concrets.\n                                                            </li>\n                                                            <li>\n                                                                    Les apports conceptuels sont\n                                                                    présentés à l’aide de mise en\n                                                                    situation ludiques et participatives\n                                                                    pour en accélérer l’appropriation\n                                                            </li>\n                                                        </ul>\n                                                    \n                                               </div>\n                                               <div class=\"col-md-12\">\n                                                    <h5 class=\"titre_prestation\">\n                                                            Vos avantages \n                                                    </h5>\n                                                    \n                                                        <ul>\n                                                            <li>\n                                                                    Mesurer l’impact des orientations\n                                                                    stratégiques sur les ressources\n                                                                    humaines,\n                                                            </li>\n                                                            <li>\n                                                                    Développer la capacité de son\n                                                                    entreprise à anticiper sur le plan des\n                                                                    compétences,\n                                                            </li>\n                                                            <li>\n                                                                    Savoir identifier et développer les\n                                                                    ressources humaines stratégiques en\n                                                                    fonction de la culture et des objectifs\n                                                                    de l’entreprise,\n                                                            </li>\n                                                            <li>\n                                                                    Construire une stratégie de formation\n                                                                    permettant de répondre aux défis\n                                                                    stratégiques de son entreprise,\n                                                            </li>\n                                                        </ul>\n                                                    \n                                               </div>\n                                               <div class=\"col-md-12\">\n                                                    <h5 class=\"titre_prestation\">\n                                                            Notre expertise\n                                                    </h5>\n                                                    \n                                                        <ul>\n                                                            <li>\n                                                                    Une équipe pluridisciplinaire,\n                                                                    homogène expérimentée, \n                                                            </li>\n                                                            <li>\n                                                                    Un positionnement international\n                                                                    unique et une bonne connaissance de\n                                                                    l’Afrique, \n                                                            </li>\n                                                            <li>\n                                                                    Un réseau en développement,\n                                                            </li>\n                                                            <li>\n                                                                    Une mise à jour technologique\n                                                                    permanente de nos outils et\n                                                                    méthodes,\n                                                            </li>\n                                                            <li>\n                                                                    L’association d’expériences multiples\n                                                                    et une constante actualisation des\n                                                                    connaissances pour vous proposer un\n                                                                    conseil performant.\n                                                            </li>\n                                                        </ul>\n                                                   \n                                               </div>\n                                              </div>\n                                            </div>\n                                          </div>\n                                        </div>\n                                  \n                         \n                          <!-- HOME END-->\n                          \n                          \n                          \n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fermer</button>\n              \n            </div>\n          </div>\n        </div>\n      </div>\n    <!-- ------------------------ -->\n      <div class=\"modal fade\" id=\"gestion-organisation\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                    \n                                        <!-- <div class=\"row\">\n                                            <div class=\"col-md-12 rubrique_title\">\n                                                Bienvenue sur notre forum\n                                            </div>\n                          \n                                        </div> -->\n                                        <div class=\"row forum_content\">\n                                            <div class=\"col-md-12 forum_subtitle\">\n                                                <div class=\"row\">\n                                                      <div class=\"col-md-8\" style=\"font-size: 1.5em;\">\n                                                        CONSEIL EN GESTION ET ORGANISATION\n                                                      </div>\n                                                      <div class=\"col-md-4\">\n                                                        \n                                                      </div>  \n                                                </div>\n                                                     \n                                          </div>\n                                          <div class=\"col-md-12 article_block\">\n                                            <div class=\"row\">\n                                            <div class=\"col-md-12 corp_aticle\">\n                                               <p>\n                                                    Il s’articule autour des grandes étapes suivantes :\n                                               </p>\n                                               <div class=\"col-lg-12\">\n                                                <h5 class=\"titre_prestation\">\n                                                        Vos objectifs\n                                                </h5>\n                                                \n                                                    <ul>\n                                                      <li>\n                                                        Obtenir un diagnostic de l'organisation\n                                                        en place et du fonctionnement\n                                                        existant de votre établissement,\n                                                      </li>\n                                                      <li>\n                                                        Détecter les sources d'amélioration :\n                                                        meilleure allocation des ressources,\n                                                        diminution des coûts, augmentation\n                                                        de la rentabilité...,\n                                                      </li> \n                                                      <li>\n                                                        Définir une organisation optimale dans\n                                                        le cadre de la prise en charge du\n                                                        patient.\n                                                      </li> \n                                                    </ul>\n                                                \n                                               </div>\n                                               <div class=\"col-md-12\">\n                                                    <h5 class=\"titre_prestation\">\n                                                            Notre méthodologie\n                                                    </h5>\n                                                    \n                                                        <ul>\n                                                          <li>\n                                                            Prendre connaissance de\n                                                            l'environnement (interne et externe),\n                                                          </li> \n                                                          <li>\n                                                            Analyser l'existant,\n                                                          </li>\n                                                          <li>\n                                                            Élaborer le diagnostic organisationnel,\n                                                          </li>\n                                                          <li>\n                                                            Hiérarchiser les actions à mener,\n                                                          </li>\n                                                          <li>\n                                                            Constituer le plan d'actions.\n                                                          </li>\n                                                        </ul>\n                                                    \n                                               </div>\n                                               <div class=\"col-md-12\">\n                                                    <h5 class=\"titre_prestation\">\n                                                            Vos avantages \n                                                    </h5>\n                                                    \n                                                        <ul>\n                                                           <li>\n                                                            Identification des points forts et\n                                                            points faibles de votre\n                                                            établissement,\n                                                           </li> \n                                                           <li>\n                                                            Mise à disposition d'un plan\n                                                            d'actions pragmatique et\n                                                            opérationnel,\n                                                           </li>\n                                                           <li>\n                                                            Définition de votre positionnement\n                                                            optimum dans le cadre de votre\n                                                            secteur sanitaire.\n                                                           </li>\n                                                        </ul>\n                                                    \n                                               </div>\n                                               <div class=\"col-md-12\">\n                                                    <h5 class=\"titre_prestation\">\n                                                            Notre expertise\n                                                    </h5>\n                                                    \n                                                        <ul>\n                                                           <li>\n                                                            Une équipe pluridisciplinaire,\n                                                            homogène, pilotée par un\n                                                            interlocuteur unique,\n                                                           </li>\n                                                           <li>\n                                                            Un accompagnement de proximité,\n                                                            personnalisé et indépendant,\n                                                           </li>\n                                                           <li>\n                                                            Une méthodologie pragmatique,\n                                                            adaptée à votre secteur d’activité,\n                                                           </li>\n                                                           <li>\n                                                            Une mise à jour technologique\n                                                            permanente de nos outils et\n                                                            méthodes,\n                                                           </li>\n                                                           <li>\n                                                            L’association d’expériences multiples\n                                                            et une constante actualisation des\n                                                            connaissances pour vous proposer un\n                                                            conseil performant.\n                                                           </li>\n                                                        </ul>\n                                                   \n                                               </div>\n                                              </div>\n                                            </div>\n                                          </div>\n                                        </div>\n                                  \n                         \n                          <!-- HOME END-->\n                          \n                          \n                          \n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fermer</button>\n              \n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- fin -->\n      <div class=\"modal fade\" id=\"org-com\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                    \n                                        <!-- <div class=\"row\">\n                                            <div class=\"col-md-12 rubrique_title\">\n                                                Bienvenue sur notre forum\n                                            </div>\n                          \n                                        </div> -->\n                                        <div class=\"row forum_content\">\n                                            <div class=\"col-md-12 forum_subtitle\">\n                                                <div class=\"row\">\n                                                      <div class=\"col-md-8\" style=\"font-size: 1.5em;\">\n                                                       STRATEGIES ORGANISATION - COMMUNICATION\n                                                      </div>\n                                                      <div class=\"col-md-4\">\n                                                        \n                                                      </div>  \n                                                </div>\n                                                     \n                                          </div>\n                                          <div class=\"col-md-12 article_block\">\n                                            <div class=\"row\">\n                                            <div class=\"col-md-12 corp_aticle\">\n                                               <p>\n                                                    Il s’articule autour des grandes étapes suivantes :\n                                               </p>\n                                               <div class=\"col-lg-12\">\n                                                <h5 class=\"titre_prestation\">\n                                                        Vos objectifs\n                                                </h5>\n                                                \n                                                    <ul>\n                                                        <li>\n                                                            Dresser la cartographie et la\n                                                            redéfinition de l'état de votre\n                                                            système d'information,\n                                                           </li>\n                                                           <li>\n                                                            Sécuriser et pérenniser votre\n                                                            système,\n                                                           </li>\n                                                           <li>\n                                                            Former et sensibiliser les acteurs de\n                                                            l'entreprise au pilotage de la\n                                                            communication,\n                                                           </li>\n                                                           <li>\n                                                            Revoir les procédures de diffusion et\n                                                            de sécurisation de votre système.\n                                                           </li>\n                                                    </ul>\n                                                \n                                               </div>\n                                               <div class=\"col-md-12\">\n                                                    <h5 class=\"titre_prestation\">\n                                                            Notre méthodologie\n                                                    </h5>\n                                                    \n                                                        <ul>\n                                                         <li>\n                                                            Élaborer un diagnostic reflétant la\n                                                            situation actuelle de votre système\n                                                            d'information,\n                                                         </li>\n                                                         <li>\n                                                            Identifier les zones de risque au\n                                                            regard des 4 axes fondamentaux\n                                                            (facteur humain, gestion\n                                                            documentaire, système informatique\n                                                            et procédures),\n                                                         </li>\n                                                         <li>\n                                                            Hiérarchiser et planifier les actions à\n                                                            entreprendre,\n                                                         </li>\n                                                         <li>\n                                                            Élaborer, mettre en place et suivre\n                                                            le plan d'actions.\n                                                         </li>\n                                                        </ul>\n                                                    \n                                               </div>\n                                               <div class=\"col-md-12\">\n                                                    <h5 class=\"titre_prestation\">\n                                                            Vos avantages \n                                                    </h5>\n                                                    \n                                                        <ul>\n                                                           <li>\n                                                            Une vision globale de votre système\n                                                            d'information,\n                                                           </li>\n                                                           <li>\n                                                            Un diagnostic exhaustif des zones de\n                                                            risque,\n                                                           </li>\n                                                           <li>\n                                                            Une optimisation modulable en\n                                                            fonction du niveau de risque identifié,\n                                                           </li>\n                                                           <li>\n                                                            Une démarche qualité dans\n                                                            l'élaboration de vos procédures (1ère\n                                                            étape vers une certification).\n                                                           </li>\n                                                        </ul>\n                                                    \n                                               </div>\n                                               <div class=\"col-md-12\">\n                                                    <h5 class=\"titre_prestation\">\n                                                            Notre expertise\n                                                    </h5>\n                                                    \n                                                        <ul>\n                                                           <li>\n                                                            Une équipe pluridisciplinaire,\n                                                            homogène, pilotée par un\n                                                            interlocuteur unique,\n                                                           </li>\n                                                           <li>\n                                                            Un accompagnement de proximité,\n                                                            personnalisé et indépendant,\n                                                           </li>\n                                                           <li>\n                                                            Une méthodologie pragmatique,\n                                                            adaptée à votre secteur d’activité,\n                                                           </li>\n                                                           <li>\n                                                            Une mise à jour technologique\n                                                            permanente de nos outils et\n                                                            méthodes,\n                                                           </li>\n                                                           <li>\n                                                            L’association d’expériences multiples\n                                                            et une constante actualisation des\n                                                            connaissances pour vous proposer un\n                                                            conseil performant.\n                                                           </li>\n                                                        </ul>\n                                                   \n                                               </div>\n                                              </div>\n                                            </div>\n                                          </div>\n                                        </div>\n                                  \n                         \n                          <!-- HOME END-->\n                          \n                          \n                          \n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fermer</button>\n              \n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- gestion des ressources humaines -->\n      <div class=\"modal fade\" id=\"ressource\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-body\">\n                    \n                                        <!-- <div class=\"row\">\n                                            <div class=\"col-md-12 rubrique_title\">\n                                                Bienvenue sur notre forum\n                                            </div>\n                          \n                                        </div> -->\n                                        <div class=\"row forum_content\">\n                                            <div class=\"col-md-12 forum_subtitle\">\n                                                <div class=\"row\">\n                                                      <div class=\"col-md-8\" style=\"font-size: 1.5em;\">\n                                                       GESTION DES RESSOURCES HUMAINES\n                                                      </div>\n                                                      <div class=\"col-md-4\">\n                                                        \n                                                      </div>  \n                                                </div>\n                                                     \n                                          </div>\n                                          <div class=\"col-md-12 article_block\">\n                                            <div class=\"row\">\n                                            <div class=\"col-md-12 corp_aticle\">\n                                               <p>\n                                                    Il s’articule autour des grandes étapes suivantes :\n                                               </p>\n                                               <div class=\"col-lg-12\">\n                                                <h5 class=\"titre_prestation\">\n                                                        Vos objectifs\n                                                </h5>\n                                                \n                                                    <ul>\n                                                       <li>\n                                                        Accroître votre performance en\n                                                        impliquant vos équipes,\n                                                       </li>\n                                                       <li>\n                                                        Anticiper vos besoins, adapter\n                                                        qualitativement et quantitativement\n                                                        vos ressources humaines,\n                                                       </li>\n                                                       <li>\n                                                        Mettre en place une politique de\n                                                        recrutement efficace,\n                                                       </li>\n                                                       <li>\n                                                        Adapter les compétences aux\n                                                        modifications de l’organisation et de\n                                                        l’environnement,\n                                                       </li>\n                                                       <li>\n                                                        Respect des délais\n                                                       </li>\n                                                    </ul>\n                                                \n                                               </div>\n                                               <div class=\"col-md-12\">\n                                                    <h5 class=\"titre_prestation\">\n                                                            Notre méthodologie\n                                                    </h5>\n                                                    \n                                                        <ul>\n                                                         <li>\n                                                            Recueil d’informations sur\n                                                            l’entreprise, la structure et le profil\n                                                            recherché.\n                                                         </li>\n                                                         <li>\n                                                            Définition de la géographie de la\n                                                            recherche et des modes\n                                                            d’approche.\n                                                         </li>\n                                                         <li>\n                                                            Recherche du candidat répondant\n                                                            au profil et entretiens avec les\n                                                            candidats sélectionnés avant\n                                                            présentation au client.\n                                                         </li>\n                                                         <li>\n                                                            Recrutement du candidat et\n                                                            accompagnement au sein de la\n                                                            structure par AfricSearch.\n                                                         </li>\n                                                        </ul>\n                                                    \n                                               </div>\n                                               <div class=\"col-md-12\">\n                                                    <h5 class=\"titre_prestation\">\n                                                            Vos avantages \n                                                    </h5>\n                                                    \n                                                        <ul>\n                                                          <li>\n                                                            Suppression des carences ou\n                                                            dysfonctionnement d’un service,\n                                                          </li>\n                                                          <li>\n                                                            Une équipe réactive adaptée à vos\n                                                            besoins et à ceux de vos clients,\n                                                          </li>\n                                                          <li>\n                                                            Actualisation permanente des\n                                                            compétences,\n                                                          </li>\n                                                          <li>\n                                                            Un accroissement de la compétence\n                                                            et de la motivation,\n                                                          </li>\n                                                          <li>\n                                                            Gain de productivité .\n                                                          </li>\n                                                        </ul>\n                                                    \n                                               </div>\n                                               <div class=\"col-md-12\">\n                                                    <h5 class=\"titre_prestation\">\n                                                            Notre expertise\n                                                    </h5>\n                                                    \n                                                        <ul>\n                                                           <li>\n                                                            Une équipe pluridisciplinaire,\n                                                            homogène expérimentée,\n                                                           </li>\n                                                           <li>\n                                                            Un positionnement international\n                                                            unique et une bonne connaissance de\n                                                            l’Afrique,\n                                                           </li>\n                                                           <li>\n                                                            Un réseau en développement,\n                                                           </li>\n                                                           <li>\n                                                            Une mise à jour technologique\n                                                            permanente de nos outils et\n                                                            méthodes,\n                                                           </li>\n                                                           <li>\n                                                            L’association d’expériences multiples\n                                                            et une constante actualisation des\n                                                            connaissances pour vous proposer un\n                                                            conseil performant.\n                                                           </li>\n                                                        </ul>\n                                                   \n                                               </div>\n                                              </div>\n                                            </div>\n                                          </div>\n                                        </div>\n                                  \n                         \n                          <!-- HOME END-->\n                          \n                          \n                          \n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fermer</button>\n              \n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- assistance juridique -->\n        <!-- gestion des ressources humaines -->\n        <div class=\"modal fade\" id=\"assistance-juridique\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-body\">\n                        \n                                            <!-- <div class=\"row\">\n                                                <div class=\"col-md-12 rubrique_title\">\n                                                    Bienvenue sur notre forum\n                                                </div>\n                              \n                                            </div> -->\n                                            <div class=\"row forum_content\">\n                                                <div class=\"col-md-12 forum_subtitle\">\n                                                    <div class=\"row\">\n                                                          <div class=\"col-md-8\" style=\"font-size: 1.5em;\">\n                                                            L’ASSISTANCE JURIDIQUE\n                                                          </div>\n                                                          <div class=\"col-md-4\">\n                                                            \n                                                          </div>  \n                                                    </div>\n                                                         \n                                              </div>\n                                              <div class=\"col-md-12 article_block\">\n                                                <div class=\"row\">\n                                                <div class=\"col-md-12 corp_aticle\">\n                                                   <p>\n                                                    L’assistance juridique est l’aide apportée à toute personne aussi bien morale que physique ayant juridiquement des difficultés ou litiges, ou voulant se protéger ou défendre ses intérêts par les mécanismes et les institutions du droit.\n                                                   </p>\n                                                   <p>\n                                                    C’est ce rôle que s’est assigné le cabinet AFRIQUE DIGNITE Sarl qui articule ses actions dans les matières ci-après :\n                                                   </p>\n                                                   <ul>\n                                                       <li>\n                                                           <b>\n                                                                La prévention des risques\n                                                           </b>\n                                                       \n                                                        \n                                                       </li>\n                                                       <li>\n                                                           <b>\n                                                                La défense et la protection des intérêts\n                                                           </b>\n                                                        \n                                                       </li>\n                                                       <li>\n                                                           <b>\n                                                                Les conseils sur les questions du droit\n                                                           </b>\n                                                        \n                                                       </li>\n                                                       <li>\n                                                           <b>\n                                                                Intervenir en cas de litige\n                                                           </b>\n                                                        \n                                                       </li>\n                                                   </ul>\n                                                   <h5>\n                                                    I- La prévention\n                                                   </h5>\n                                                   <p>\n                                                        Elle tend à prévenir les personnes de tous les risques qu’elles peuvent juridiquement courir dans leurs actes ou l’exercice de leurs activités. Elle  consiste également à prévoir et prévenir qu’à réparer les erreurs. \n                                                   </p>\n                                                   <h6>\n                                                        Offre de prestations :\n                                                   </h6>\n                                                   <ul>\n                                                       <li>\n                                                            Participation active et préalable aux tractations et aux conventions\n                                                       </li>\n                                                       <li>\n                                                            Rédaction des contrats\n                                                       </li>\n                                                       <li>\n                                                            Lecture et analyses des contrats\n                                                       </li>\n                                                       <li>\n                                                            Conseils d’usage  \n                                                       </li>\n                                                   </ul>\n                                                   <h5>\n                                                    II- La défense et la protection\n                                                   </h5>\n                                                   <p>\n                                                        Elle tend à défendre et protéger les intérêts de la personne par les mécanismes et institutions judiciaires.\n                                                   </p>\n                                                   <h6>\n                                                        Offre de prestations :\n                                                   </h6>\n                                                   <ul>\n                                                       <li>\n                                                           Engager et suivre ou représenter la personne dans la procédure judiciaire\n                                                           \n                                                        </li>\n                                                       <li>\n                                                            Assister les personnes en cas de litige\n                                                       </li>\n                                                   </ul>\n                                                   <h5>\n                                                        III- Conseils sur les questions de droit\n                                                   </h5>\n                                                   <p>\n                                                        C’est de tenir informer le client de l'évolution de la législation en droit commercial, droit du travail, droit des contrats en vue de plus apte et dynamique dans le choix de ses transactions et contourner ou le protéger de tout risques éventuels. En outre, c’est d’assurer les relations extérieures de l'entreprise ou de la personne avec des organismes professionnels ou être en liaison avec des experts ou avocats. \n                                                   </p>\n                                                   <h6>\n                                                        Offre de prestations\n                                                   </h6>\n                                                   <ul>\n                                                       <li>\n                                                            Appliquer la théorie de textes juridiques à la réalité de l'économie d’Entreprise ou du marché\n                                                       </li>\n                                                       <li>\n                                                            Rédiger des contrats, conseillés, donner un avis sur les affaires litigieuses\n                                                       </li>\n                                                   </ul>\n                                                   \n                                                   <div class=\"col-md-12 forum_subtitle\" style=\"margin-bottom: 2em;\"> \n                                                        <div class=\"row\">\n                                                              <div class=\"col-md-8\" style=\"font-size: 1.5em;\">\n                                                                    NOTRE ASSISTANCE JURIDIQUE\n                                                              </div>\n                                                              <div class=\"col-md-4\">\n                                                                \n                                                              </div>  \n                                                        </div>\n                                                             \n                                                  </div>\n                                                   <h6>\n                                                        PRESENTATION\n                                                   </h6>\n                                                   <p>\n                                                        Le cabinet exerce depuis plusieurs années  un rôle de plus en  plus polyvalent, notamment en PME. A ce titre, il peut intervenir sur les aspects juridiques d’un certain nombre de décisions marketing ou sur des choix de  communication institutionnelle.\n                                                   </p>\n                                                   <p>\n                                                        Les contrats complexes susceptibles d’avoir des enjeux financiers importants (comme les contrats informatiques de sous-traitance ou de partenariats), font l’objet de négociation et de réécriture par les juristes dont il compose.\n                                                   </p>\n                                                   <p>\n                                                        L’assistance juridique telle que menée par le cabinet, consiste à prévenir les risques, à défendre les intérêts et à protéger les biens des personnes tant morale que physique et ce, par les législations en vigueur.\n                                                   </p>\n                                                   <h6>\n                                                        NOS OFFRES \n                                                   </h6>\n                                                   <p>\n                                                        Elles s’articulent autour de plusieurs matières à savoir :\n                                                   </p>\n                                                   <ul>\n                                                       <li>\n                                                             Matière commerciale\n                                                            \n                                                       </li>\n                                                       <li>\n                                                            Matière civile\n                                                       </li>\n                                                       <li>\n                                                            Matière pénale\n                                                       </li>\n                                                       <li>\n                                                            Matière administrative\n                                                       </li>\n                                                   </ul>\n                                                   <h6>\n                                                        PERSONNES CIBLEES\n                                                   </h6>\n                                                   <ul>\n                                                       <li>\n                                                            Personnes morales : Entreprise  ayant  toute  forme  juridique ; coopérative ;\n                                                            \n                                                       </li>\n                                                       <li>\n                                                            Personne physique : commerçants ; non commerçants\n                                                       </li>\n                                                   </ul>\n                                                        <h6>\n                                                                NOS TACHES\n                                                        </h6>\n                                                        <p>\n                                                                Conseil auprès des opérationnels\n                                                        </p>\n                                                        <ul>\n                                                            <li>\n                                                                    Assurer une veille juridique permanente sur les activités de la personne (entreprise ou commerçant) en suivant à la fois l’évolution des réglementations nationales, européennes et parfois internationales ainsi que  la jurisprudence.\n                                                            </li>\n                                                            <li>\n                                                                    Assurer une veille économique et concurrentielle de manière à informer la personne (entreprises  ou commerçants) sur les pratiques des autres entreprises du secteur\n                                                            </li>\n                                                            <li>\n                                                                    Collecter l'ensemble des informations auprès des directions opérationnelles : sources documentaires, veille concurrentielle, réalisations en interne.\n                                                            </li>\n                                                            <li>\n                                                                    Elaborer et animer des actions de formation sur des thématiques juridiques liées aux activités de l’entreprise.\n                                                            </li>\n                                                        </ul>\n                                                        <p>\n                                                            <b>\n                                                                    Rédaction et suivi des contrats\n                                                            </b>\n                                                        </p>\n                                                        <ul>\n                                                            <li>\n                                                                    Rédiger ou aider à la rédaction des contrats pour les clients et/ou fournisseurs, les partenaires privés ou publics de l'entreprise.\n                                                            </li>\n                                                            <li>\n                                                                    Négocier et rédiger les  baux commerciaux\n                                                            </li>\n                                                            <li>\n                                                                    Rédiger et mettre à jour une base de contrats-type.\n                                                            </li>\n                                                            <li>\n                                                                    Négocier et rédiger les contrats liées à la propriété intellectuelle (brevets, droit des marques, noms de domaine...)\n                                                            </li>\n                                                        </ul>\n                                                        <p>\n                                                            <b>\n                                                                    Gestion du précontentieux et du contentieux\n                                                            </b>\n                                                        </p>\n                                                        <ul>\n                                                            <li>\n                                                                  Gérer et instruire les dossiers : mettre en œuvre et effectuer les procédures de mise en demeure, d'assignation en justice ou de recouvrement.\n                                                            </li>\n                                                            <li>\n                                                                    Proposer des solutions à l’amiable pour certains  dossiers.\n                                                            </li>\n                                                            <li>\n                                                                    Rédiger des recours.\n\n                                                            </li>\n                                                            <li>\n                                                                    Prendre contact avec des avocats, de notaires, d’huissier de justices ou d’autorités administratives ou judiciaires, dans le cadre de procédures judiciaires.\n                                                            </li>\n                                                            <li>\n                                                                    Décider au besoin d’interjeter appel ou de se pourvoir en cassation.\n                                                            </li>\n                                                            <li>\n                                                                    Veiller au règlement des litiges potentiels.\n                                                            </li>\n                                                            <li>\n                                                                    Décider si nécessaire de la nature de l’action à mener en justice (pénal, civil, commercial).\n                                                            </li>\n                                                        </ul>\n                                                        <h6>\n                                                                Création de société ou de coopératives (Constitution)\n                                                        </h6>\n                                                        <ul>\n                                                            <li>\n                                                                Accomplir sans exception de toutes les formalités tenant à la constitution de société de toute forme juridique.\n     \n                                                            </li>\n                                                            <li>\n                                                                    Etablissement de tous documents administratifs que juridique pour la constitution d’une coopérative.\n                                                            </li>\n                                                        </ul>\n                                                        <h6>\n                                                                Rôle de représentation externe\n                                                        </h6>\n                                                        <ul>\n                                                            <li>\n                                                                   Auprès des Institutions judicaires\n                                                            </li>\n                                                            <li>\n                                                                    Auprès des institutions administratives\n                                                            </li>\n                                                            <li>\n                                                                    Auprès d'associations de consommateurs.\n                                                            </li>\n                                                            <li>\n                                                                    Auprès de fédérations professionnelle\n                                                            </li>\n                                                            <li>\n                                                                    Auprès de coopérativesCréation de société ou de coopératives (Constitution)\n                                                            </li>\n                                                            <li>\n                                                                    Auprès d’organismes politiques\n                                                            </li>\n                                                        </ul>\n                                                        <h6>\n                                                                Notre savoir-être \n                                                        </h6>\n                                                        <ul>\n                                                            <li>\n                                                                    Faire preuve de méthode et de rigueur\n                                                            </li>\n                                                            <li>\n                                                                    Être organisé et posséder l'esprit de synthèse\n                                                            </li>\n                                                            <li>\n                                                                    Être autonome\n                                                            </li>\n                                                            <li>\n                                                                    Jouir de bonnes qualités relationnelles\n                                                            </li>\n                                                            <li>\n                                                                    Avoir un esprit créatif et ingénieux\n                                                            </li>\n                                                            <li>\n                                                                    Être réfléchi, précis et minutieux\n                                                            </li>\n                                                            <li>\n                                                                    Se révéler habile négociateur\n                                                            </li>\n                                                            <li>\n                                                                    S'adapter aux situations et à ses interlocuteurs dans un environnement de plus en plus multiculturel\n                                                            </li>\n                                                        </ul>\n                                                        <h6>\n                                                                Cadre professionnel\n                                                        </h6>\n                                                        <p>\n                                                                Le CABINET travaille pour des Entreprises et des particuliers dans le cadre socio professionnel, juridique et judiciaire\n                                                        </p>\n                                                        <h6>\n                                                                Titre du CABINET\n                                                        </h6>\n                                                        <p>\n                                                                Notre cabinet  a été reconnu et agréé par l’Agence Nationale de la Formation Professionnelle dite AGEFOP dans son courrier N/Réf : 407/13/DG/BT/MAG/of du 11 Septembre 2013.\n                                                        </p>\n                                                        <p>\n                                                                Il a été également habilité par le Fonds de Développement de la Formation Professionnelle dite FDFP dans son courrier N/Réf : FDFP-CG/N008/HAB/TBL/KK/kt en date du 24 Avril 2017.\n                                                        </p>\n\n                                                   </div>\n                                                    </div>\n                                                </div>\n                                              </div>\n                                            </div>\n                                      \n                             \n                              <!-- HOME END-->\n                              \n                              \n                              \n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fermer</button>\n                  \n                </div>\n              </div>\n            </div>\n            <div class=\"modal fade\" id=\"prospec\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n                    <div class=\"modal-dialog modal-pros\" role=\"document\">\n                      <div class=\"modal-content\">\n                        \n                        <div class=\"modal-body\">\n                            <img src=\"src/images/propectus.jpg\" style=\"width: 100%;\">\n                        </div>\n                        <div class=\"modal-footer\">\n                          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Fermer</button>\n                          \n                        </div>\n                      </div>\n                    </div>\n                  </div>\n          "

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            $("#prospec").modal("show");
        }, 3000);
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/local-storage.service.ts":
/*!******************************************!*\
  !*** ./src/app/local-storage.service.ts ***!
  \******************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var LocalStorageService = /** @class */ (function () {
    function LocalStorageService(storage) {
        this.storage = storage;
        this.data = [];
        this.url = "http://localhost/Dignite/src/api/";
    }
    LocalStorageService.prototype.saveInLocal = function (key, val) {
        console.log('recieved= key:' + key + 'value:' + val);
        this.storage.set(key, val);
        this.data[key] = this.storage.get(key);
    };
    LocalStorageService.prototype.getFromLocal = function (key) {
        console.log('recieved= key:' + key);
        this.data[key] = this.storage.get(key);
    };
    LocalStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["WebStorageService"]])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/phototeque/phototeque.component.css":
/*!*****************************************************!*\
  !*** ./src/app/phototeque/phototeque.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img_block{\n    margin-top: 2em;\n}\n.forum_subtitle{\n    background-image: url('photo.jpg');\n    background-size: cover;\n    padding: 1em;\n    color: white;\n    font-weight: bold;\n    padding-top: 4em;\n    padding-bottom: 4em;\n}"

/***/ }),

/***/ "./src/app/phototeque/phototeque.component.html":
/*!******************************************************!*\
  !*** ./src/app/phototeque/phototeque.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section\" id=\"home\">\n    <div class=\"bg-overlay\" st></div>\n    <div class=\"home-center\" style=\"background: #fffffe;\n  position: relative;\n  z-index: 10;\">\n        <div class=\"home-desc-center\">\n            <div class=\"container\">\n                <!-- <div class=\"row\">\n                    <div class=\"col-md-12 rubrique_title\">\n                        Bienvenue sur notre forum\n                    </div>\n  \n                </div> -->\n                <div class=\"row forum_content\">\n                    <div class=\"col-md-12 forum_subtitle\">\n                        <div class=\"row\">\n                              <div class=\"col-md-8\" style=\"font-size: 1.5em;\">\n                                PHOTOTHEQUE\n                              </div>\n                              <div class=\"col-md-4\">\n                                \n                              </div>  \n                        </div>\n                             \n                  </div>\n                  <div class=\"col-md-8 offset-md-2 img_block shadow p-3 mb-5 bg-white rounded\">\n                  <div class=\"row\">\n                      <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n                          <ol class=\"carousel-indicators\">\n                            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n                            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n                            <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n                          </ol>\n                          <div class=\"carousel-inner\">\n                            <div class=\"carousel-item active\">\n                              <img class=\"d-block w-100\" src=\"/src/images/coaching.jpg\" alt=\"First slide\">\n                              <div class=\"carousel-caption d-none d-md-block\">\n                                  <h5>PHOTO DE NOS LOCAUX</h5>\n                                  <p>composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500</p>\n                                </div>\n                            </div>\n                            <div class=\"carousel-item\">\n                              <img class=\"d-block w-100\" src=\"/src/images/coaching.jpg\" alt=\"Second slide\">\n                              <div class=\"carousel-caption d-none d-md-block\">\n                                  <h5>PHOTO DE NOS LOCAUX</h5>\n                                  <p>composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500</p>\n                                </div>\n                            </div>\n                            <div class=\"carousel-item\">\n                              <img class=\"d-block w-100\" src=\"/src/images/coaching.jpg\" alt=\"Third slide\">\n                              <div class=\"carousel-caption d-none d-md-block\">\n                                  <h5>PHOTO DE NOS LOCAUX</h5>\n                                  <p>composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500</p>\n                                </div>\n                            </div>\n                          </div>\n                          <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n                            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                            <span class=\"sr-only\">Previous</span>\n                          </a>\n                          <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n                            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                            <span class=\"sr-only\">Next</span>\n                          </a>\n                        </div>\n                  </div>\n                  </div>\n                </div>\n            </div>\n        </div>\n        </div>\n  </section>\n  <!-- HOME END-->\n  \n\n"

/***/ }),

/***/ "./src/app/phototeque/phototeque.component.ts":
/*!****************************************************!*\
  !*** ./src/app/phototeque/phototeque.component.ts ***!
  \****************************************************/
/*! exports provided: PhototequeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhototequeComponent", function() { return PhototequeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhototequeComponent = /** @class */ (function () {
    function PhototequeComponent() {
    }
    PhototequeComponent.prototype.ngOnInit = function () {
    };
    PhototequeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-phototeque',
            template: __webpack_require__(/*! ./phototeque.component.html */ "./src/app/phototeque/phototeque.component.html"),
            styles: [__webpack_require__(/*! ./phototeque.component.css */ "./src/app/phototeque/phototeque.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PhototequeComponent);
    return PhototequeComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/local-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = /** @class */ (function () {
    function UserService(http, localservice) {
        this.http = http;
        this.localservice = localservice;
        this.url = this.localservice.url + 'user.php';
    }
    UserService.prototype.Adduser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'Application/json');
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        console.log(user);
        return this.http.post(this.url, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    UserService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    UserService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.message || error);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/Dignite/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map