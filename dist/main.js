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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _food_center_food_center_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food-center/food-center.component */ "./src/app/food-center/food-center.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'foods', component: _food_center_food_center_component__WEBPACK_IMPORTED_MODULE_3__["FoodCenterComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n  <!-- Brand/logo -->\n  <a class=\"navbar-brand\" href=\"#\">MyFridge</a>\n  \n  <!-- Links -->\n  <ul class=\"navbar-nav\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLink=\"/foods\" routerLinkActive=\"active\">Foods</a>\n    </li>\n  </ul>\n</nav>\n<div class=\"container\" style=\"margin: 20px\">\n  <router-outlet></router-outlet>\n</div>"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'notepad';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _food_center_food_center_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./food-center/food-center.component */ "./src/app/food-center/food-center.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _food_list_food_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./food-list/food-list.component */ "./src/app/food-list/food-list.component.ts");
/* harmony import */ var _food_detail_food_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./food-detail/food-detail.component */ "./src/app/food-detail/food-detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
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
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _food_center_food_center_component__WEBPACK_IMPORTED_MODULE_4__["FoodCenterComponent"],
                _food_list_food_list_component__WEBPACK_IMPORTED_MODULE_6__["FoodListComponent"],
                _food_detail_food_detail_component__WEBPACK_IMPORTED_MODULE_7__["FoodDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/food-center/food-center.component.css":
/*!*******************************************************!*\
  !*** ./src/app/food-center/food-center.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/food-center/food-center.component.html":
/*!********************************************************!*\
  !*** ./src/app/food-center/food-center.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-9\">\n        <div *ngIf=\"!hidenewFood\">\n          \n            <h2>New Food</h2>\n            <form #form=\"ngForm\" (ngSubmit)=\"onSubmitAddValue(form.value)\" class=\"well\">\n                  <div class=\"form-group\">\n                      <label>Title</label>\n                      <input type=\"text\" class=\"form-control\" required name=\"name\" ngModel>\n                  </div>\n                  <div class=\"form-group\">\n                      <label>Date</label>\n                      <input type=\"text\" class=\"form-control\" required name=\"dates\" ngModel>\n                  </div>\n                  <div class=\"form-group\">\n                      <label>Description</label>\n                      <div class=\"form-group\">\n                            <textarea class=\"form-control\" required rows=\"5\" name=\"exp_date\" ngModel>\n                                </textarea>\n                        </div>\n                  </div>\n                  <button type=\"submit\" class=\"btn btn-success\">Save</button>\n            </form>\n        </div>\n        <food-detail (updateFoodEvent)=\"onUpdateFoodEvent($event)\" \n        (deleteFoodEvent)=\"onDeleteFoodEvent($event)\"\n         *ngIf=\"selectedFood && hidenewFood\" \n         [food]=\"selectedFood\"></food-detail>\n    </div>\n    <div class=\"col-sm-3\">\n        <button (click)=\"newNote()\" style=\"margin-bottom:2px;\" type=\"button\" class=\"btn btn-success btn-block\"> + New Food </button>\n        <food-list (SelectFood)=\"onSelectFood($event)\" [foods]='foods'></food-list>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/food-center/food-center.component.ts":
/*!******************************************************!*\
  !*** ./src/app/food-center/food-center.component.ts ***!
  \******************************************************/
/*! exports provided: FoodCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodCenterComponent", function() { return FoodCenterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../food.service */ "./src/app/food.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FoodCenterComponent = /** @class */ (function () {
    function FoodCenterComponent(_foodService) {
        this._foodService = _foodService;
        this.hidenewFood = true;
    }
    FoodCenterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._foodService.getFoods()
            .subscribe(function (resFoodData) { return _this.foods = resFoodData; });
    };
    FoodCenterComponent.prototype.onSelectFood = function (note) {
        this.selectedFood = note;
        this.hidenewFood = true;
        console.log(this.selectedFood);
    };
    FoodCenterComponent.prototype.onSubmitAddValue = function (note) {
        var _this = this;
        this._foodService.addFood(note)
            .subscribe(function (resNewNote) {
            // This code is mainly used for updated notes show in UI 
            _this.foods.push(resNewNote);
            _this.hidenewFood = true;
            _this.selectedFood = resNewNote;
        });
    };
    FoodCenterComponent.prototype.onUpdateFoodEvent = function (note) {
        this._foodService.updateFood(note)
            .subscribe(function (resUpdateNote) { return note = resUpdateNote; });
        this.selectedFood = null;
    };
    ;
    FoodCenterComponent.prototype.onDeleteFoodEvent = function (note) {
        var noteArray = this.foods;
        this._foodService.deleteFood(note)
            .subscribe(function (resDeletedNote) {
            for (var i = 0; i < noteArray.length; i++) {
                if (noteArray[i]._id === note._id) {
                    noteArray.splice(i, 1);
                }
            }
        });
        this.selectedFood = null;
    };
    ;
    FoodCenterComponent.prototype.newNote = function () {
        this.hidenewFood = false;
    };
    FoodCenterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-center',
            template: __webpack_require__(/*! ./food-center.component.html */ "./src/app/food-center/food-center.component.html"),
            styles: [__webpack_require__(/*! ./food-center.component.css */ "./src/app/food-center/food-center.component.css")],
            providers: [_food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"]]
        }),
        __metadata("design:paramtypes", [_food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"]])
    ], FoodCenterComponent);
    return FoodCenterComponent;
}());



/***/ }),

/***/ "./src/app/food-detail/food-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/food-detail/food-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/food-detail/food-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/food-detail/food-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div>\n        <!-- <iframe width=\"100%\" height=\"300\" [src]=\"note.url | safe\"></iframe> -->\n    </div>\n    <form>\n        <div *ngIf=\"editTitle\" class=\"form-group\">\n            <input type=\"input\" class=\"form-control\" name=\"name\" required placeholder=\"name\" \n            [(ngModel)]=\"food.name\">\n        </div>\n        <h3 *ngIf=\"!editTitle\" (click)=\"onTitleClick()\">{{food.name}}</h3>\n        <div class=\"form-group\">\n            <input type=\"input\" class=\"form-control\" name=\"dates\" required placeholder=\"Timing\" \n            [(ngModel)]=\"food.dates\">\n        </div>\n        <div class=\"form-group\">\n            <textarea class=\"form-control\" rows=\"5\" name=\"exp_date\" [(ngModel)]=\"food.exp_date\">\n                </textarea>\n        </div>\n        <button type=\"button\" (click)=\"updateFood()\" class=\"btn btn-primary\">Update</button>\n        <button type=\"button\" (click)=\"deleteFood()\" class=\"btn btn-danger\">Delete</button>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/food-detail/food-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/food-detail/food-detail.component.ts ***!
  \******************************************************/
/*! exports provided: FoodDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodDetailComponent", function() { return FoodDetailComponent; });
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

var FoodDetailComponent = /** @class */ (function () {
    function FoodDetailComponent() {
        this.editTitle = false;
        this.updateFoodEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteFoodEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FoodDetailComponent.prototype.ngOnInit = function () {
    };
    FoodDetailComponent.prototype.ngOnChanges = function () {
        this.editTitle = false;
    };
    FoodDetailComponent.prototype.onTitleClick = function () {
        this.editTitle = true;
    };
    FoodDetailComponent.prototype.updateFood = function () {
        this.updateFoodEvent.emit(this.food);
    };
    FoodDetailComponent.prototype.deleteFood = function () {
        this.deleteFoodEvent.emit(this.food);
    };
    FoodDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'food-detail',
            template: __webpack_require__(/*! ./food-detail.component.html */ "./src/app/food-detail/food-detail.component.html"),
            styles: [__webpack_require__(/*! ./food-detail.component.css */ "./src/app/food-detail/food-detail.component.css")],
            inputs: ['food'],
            outputs: ['updateFoodEvent', 'deleteFoodEvent']
        }),
        __metadata("design:paramtypes", [])
    ], FoodDetailComponent);
    return FoodDetailComponent;
}());



/***/ }),

/***/ "./src/app/food-list/food-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/food-list/food-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/food-list/food-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/food-list/food-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n    <li class=\"list-group-item\" (click)=\"onSelect(food)\" *ngFor=\"let food of foods\"><a>{{food.name}}</a></li>\n</ul>"

/***/ }),

/***/ "./src/app/food-list/food-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/food-list/food-list.component.ts ***!
  \**************************************************/
/*! exports provided: FoodListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodListComponent", function() { return FoodListComponent; });
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

var FoodListComponent = /** @class */ (function () {
    function FoodListComponent() {
        this.SelectFood = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FoodListComponent.prototype.ngOnInit = function () {
    };
    FoodListComponent.prototype.onSelect = function (foo) {
        this.SelectFood.emit(foo);
    };
    FoodListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'food-list',
            template: __webpack_require__(/*! ./food-list.component.html */ "./src/app/food-list/food-list.component.html"),
            styles: [__webpack_require__(/*! ./food-list.component.css */ "./src/app/food-list/food-list.component.css")],
            inputs: ['foods'],
            outputs: ['SelectFood']
        }),
        __metadata("design:paramtypes", [])
    ], FoodListComponent);
    return FoodListComponent;
}());



/***/ }),

/***/ "./src/app/food.service.ts":
/*!*********************************!*\
  !*** ./src/app/food.service.ts ***!
  \*********************************/
/*! exports provided: FoodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodService", function() { return FoodService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FoodService = /** @class */ (function () {
    function FoodService(_http) {
        this._http = _http;
        /**
         * Select, Insert, Update, Delete
         * connection url
         */
        this._getUrl = "/api/food";
        this._postUrl = "/api/food";
        this._putUrl = "/api/food/";
        this._deleteUrl = "/api/food/";
    }
    FoodService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    /**
     * method to get data from the db
     */
    /**
    * method to get data from the db
    */
    FoodService.prototype.getFoods = function () {
        return this._http.get(this._getUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    /**
     * MEthod to insert data into db
     */
    FoodService.prototype.addFood = function (food) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this._http.post(this._postUrl, JSON.stringify(food), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    /**
     * Method to update data into db
     */
    FoodService.prototype.updateFood = function (food) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this._http.put(this._putUrl + food._id, JSON.stringify(food), options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    /**
     * Method to delete data into db
     */
    FoodService.prototype.deleteFood = function (food) {
        return this._http.delete(this._deleteUrl + food._id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    FoodService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], FoodService);
    return FoodService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1>MyFridge</h1>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\angular project\MyFridge\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map