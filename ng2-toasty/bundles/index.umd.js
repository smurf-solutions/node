(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("rxjs/Subject"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "rxjs/Subject"], factory);
	else if(typeof exports === 'object')
		exports["ng2-toasty"] = factory(require("@angular/core"), require("@angular/common"), require("rxjs/Subject"));
	else
		root["ng2-toasty"] = factory(root["@angular/core"], root["@angular/common"], root["rxjs/Subject"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toasty_utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ToastData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ToastyConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ToastyEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ToastyEvent; });
/* harmony export (immutable) */ __webpack_exports__["f"] = toastyServiceFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ToastyService; });
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Options to configure specific Toast
 */
var ToastOptions = (function () {
    function ToastOptions() {
    }
    ToastOptions = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ToastOptions);
    return ToastOptions;
}());
/**
 * Structrure of Toast
 */
var ToastData = (function () {
    function ToastData() {
    }
    ToastData = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ToastData);
    return ToastData;
}());
/**
 * Default configuration foa all toats and toasty container
 */
var ToastyConfig = (function () {
    function ToastyConfig() {
        // Maximum number of toasties to show at once
        this.limit = 5;
        // Whether to show the 'X' icon to close the toast
        this.showClose = true;
        // The window position where the toast pops up
        this.position = 'bottom-right';
        // How long (in miliseconds) the toasty shows before it's removed. Set to null/0 to turn off.
        this.timeout = 5000;
        // What theme to use
        this.theme = 'default';
    }
    ToastyConfig = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ToastyConfig);
    return ToastyConfig;
}());
var ToastyEventType;
(function (ToastyEventType) {
    ToastyEventType[ToastyEventType["ADD"] = 0] = "ADD";
    ToastyEventType[ToastyEventType["CLEAR"] = 1] = "CLEAR";
    ToastyEventType[ToastyEventType["CLEAR_ALL"] = 2] = "CLEAR_ALL";
})(ToastyEventType || (ToastyEventType = {}));
var ToastyEvent = (function () {
    function ToastyEvent(type, value) {
        this.type = type;
        this.value = value;
    }
    return ToastyEvent;
}());
function toastyServiceFactory(config) {
    return new ToastyService(config);
}
/**
 * Toasty service helps create different kinds of Toasts
 */
var ToastyService = (function () {
    function ToastyService(config) {
        this.config = config;
        // Init the counter
        this.uniqueCounter = 0;
        // ToastData event emitter
        // private toastsEmitter: EventEmitter<ToastData> = new EventEmitter<ToastData>();
        // Clear event emitter
        // private clearEmitter: EventEmitter<number> = new EventEmitter<number>();
        this.eventSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.events = this.eventSource.asObservable();
    }
    /**
     * Get list of toats
     */
    // getToasts(): Observable<ToastData> {
    //   return this.toastsEmitter.asObservable();
    // }
    // getClear(): Observable<number> {
    //   return this.clearEmitter.asObservable();
    // }
    /**
     * Create Toast of a default type
     */
    ToastyService.prototype.default = function (options) {
        this.add(options, 'default');
    };
    /**
     * Create Toast of info type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.info = function (options) {
        this.add(options, 'info');
    };
    /**
     * Create Toast of success type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.success = function (options) {
        this.add(options, 'success');
    };
    /**
     * Create Toast of wait type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.wait = function (options) {
        this.add(options, 'wait');
    };
    /**
     * Create Toast of error type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.error = function (options) {
        this.add(options, 'error');
    };
    /**
     * Create Toast of warning type
     * @param  {object} options Individual toasty config overrides
     */
    ToastyService.prototype.warning = function (options) {
        this.add(options, 'warning');
    };
    // Add a new toast item
    ToastyService.prototype.add = function (options, type) {
        var toastyOptions;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["b" /* isString */])(options) && options !== '' || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["c" /* isNumber */])(options)) {
            toastyOptions = {
                title: options.toString()
            };
        }
        else {
            toastyOptions = options;
        }
        if (!toastyOptions || !toastyOptions.title && !toastyOptions.msg) {
            throw new Error('ng2-toasty: No toast title or message specified!');
        }
        type = type || 'default';
        // Set a unique counter for an id
        this.uniqueCounter++;
        // Set the local vs global config items
        var showClose = this._checkConfigItem(this.config, toastyOptions, 'showClose');
        // If we have a theme set, make sure it's a valid one
        var theme;
        if (toastyOptions.theme) {
            theme = ToastyService.THEMES.indexOf(toastyOptions.theme) > -1 ? toastyOptions.theme : this.config.theme;
        }
        else {
            theme = this.config.theme;
        }
        var toast = {
            id: this.uniqueCounter,
            title: toastyOptions.title,
            msg: toastyOptions.msg,
            showClose: showClose,
            type: 'toasty-type-' + type,
            theme: 'toasty-theme-' + theme,
            onAdd: toastyOptions.onAdd && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["a" /* isFunction */])(toastyOptions.onAdd) ? toastyOptions.onAdd : null,
            onRemove: toastyOptions.onRemove && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["a" /* isFunction */])(toastyOptions.onRemove) ? toastyOptions.onRemove : null
        };
        // If there's a timeout individually or globally, set the toast to timeout
        // Allows a caller to pass null/0 and override the default. Can also set the default to null/0 to turn off.
        toast.timeout = toastyOptions.hasOwnProperty('timeout') ? toastyOptions.timeout : this.config.timeout;
        // Push up a new toast item
        // this.toastsSubscriber.next(toast);
        // this.toastsEmitter.next(toast);
        this.emitEvent(new ToastyEvent(ToastyEventType.ADD, toast));
        // If we have a onAdd function, call it here
        if (toastyOptions.onAdd && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["a" /* isFunction */])(toastyOptions.onAdd)) {
            toastyOptions.onAdd.call(this, toast);
        }
    };
    // Clear all toasts
    ToastyService.prototype.clearAll = function () {
        // this.clearEmitter.next(null);
        this.emitEvent(new ToastyEvent(ToastyEventType.CLEAR_ALL));
    };
    // Clear the specific one
    ToastyService.prototype.clear = function (id) {
        // this.clearEmitter.next(id);
        this.emitEvent(new ToastyEvent(ToastyEventType.CLEAR, id));
    };
    // Checks whether the local option is set, if not,
    // checks the global config
    ToastyService.prototype._checkConfigItem = function (config, options, property) {
        if (options[property] === false) {
            return false;
        }
        else if (!options[property]) {
            return config[property];
        }
        else {
            return true;
        }
    };
    ToastyService.prototype.emitEvent = function (event) {
        if (this.eventSource) {
            // Push up a new event
            this.eventSource.next(event);
        }
    };
    // Allowed THEMES
    ToastyService.THEMES = ['default', 'material', 'bootstrap'];
    ToastyService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [ToastyConfig])
    ], ToastyService);
    return ToastyService;
}());


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toasty_utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toasty_service__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastyComponent; });
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Toasty is container for Toast components
 */
var ToastyComponent = (function () {
    function ToastyComponent(config, toastyService) {
        this.config = config;
        this.toastyService = toastyService;
        this._position = '';
        // The storage for toasts.
        this.toasts = [];
        // Initialise position
        this.position = '';
    }
    Object.defineProperty(ToastyComponent.prototype, "position", {
        get: function () {
            return this._position;
        },
        // The window position where the toast pops up. Possible values:
        // - bottom-right (default value from ToastConfig)
        // - bottom-left
        // - top-right
        // - top-left
        // - top-center
        // - bottom-center
        // - center-center
        set: function (value) {
            if (value) {
                var notFound = true;
                for (var i = 0; i < ToastyComponent.POSITIONS.length; i++) {
                    if (ToastyComponent.POSITIONS[i] === value) {
                        notFound = false;
                        break;
                    }
                }
                if (notFound) {
                    // Position was wrong - clear it here to use the one from config.
                    value = this.config.position;
                }
            }
            else {
                value = this.config.position;
            }
            this._position = 'toasty-position-' + value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * `ngOnInit` is called right after the directive's data-bound properties have been checked for the
     * first time, and before any of its children have been checked. It is invoked only once when the
     * directive is instantiated.
     */
    ToastyComponent.prototype.ngOnInit = function () {
        var _this = this;
        // We listen events from our service
        this.toastyService.events.subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_2__toasty_service__["d" /* ToastyEventType */].ADD) {
                // Add the new one
                var toast = event.value;
                _this.add(toast);
            }
            else if (event.type === __WEBPACK_IMPORTED_MODULE_2__toasty_service__["d" /* ToastyEventType */].CLEAR) {
                // Clear the one by number
                var id = event.value;
                _this.clear(id);
            }
            else if (event.type === __WEBPACK_IMPORTED_MODULE_2__toasty_service__["d" /* ToastyEventType */].CLEAR_ALL) {
                // Lets clear all toasts
                _this.clearAll();
            }
        });
    };
    /**
     * Event listener of 'closeToast' event comes from ToastyComponent.
     * This method removes ToastComponent assosiated with this Toast.
     */
    ToastyComponent.prototype.closeToast = function (toast) {
        this.clear(toast.id);
    };
    /**
     * Add new Toast
     */
    ToastyComponent.prototype.add = function (toast) {
        // If we've gone over our limit, remove the earliest
        // one from the array
        if (this.toasts.length >= this.config.limit) {
            this.toasts.shift();
        }
        // Add toasty to array
        this.toasts.push(toast);
        //
        // If there's a timeout individually or globally,
        // set the toast to timeout
        if (toast.timeout) {
            this._setTimeout(toast);
        }
    };
    /**
     * Clear individual toast by id
     * @param id is unique identifier of Toast
     */
    ToastyComponent.prototype.clear = function (id) {
        var _this = this;
        if (id) {
            this.toasts.forEach(function (value, key) {
                if (value.id === id) {
                    if (value.onRemove && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["a" /* isFunction */])(value.onRemove)) {
                        value.onRemove.call(_this, value);
                    }
                    _this.toasts.splice(key, 1);
                }
            });
        }
        else {
            throw new Error('Please provide id of Toast to close');
        }
    };
    /**
     * Clear all toasts
     */
    ToastyComponent.prototype.clearAll = function () {
        var _this = this;
        this.toasts.forEach(function (value, key) {
            if (value.onRemove && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["a" /* isFunction */])(value.onRemove)) {
                value.onRemove.call(_this, value);
            }
        });
        this.toasts = [];
    };
    /**
     * Custom setTimeout function for specific setTimeouts on individual toasts.
     */
    ToastyComponent.prototype._setTimeout = function (toast) {
        var _this = this;
        window.setTimeout(function () {
            _this.clear(toast.id);
        }, toast.timeout);
    };
    /**
     * Set of constants defins position of Toasty on the page.
     */
    ToastyComponent.POSITIONS = ['bottom-right', 'bottom-left', 'top-right', 'top-left', 'top-center', 'bottom-center', 'center-center'];
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], ToastyComponent.prototype, "position", null);
    ToastyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ng2-toasty',
            template: "\n    <div id=\"toasty\" [ngClass]=\"[position]\">\n        <ng2-toast *ngFor=\"let toast of toasts\" [toast]=\"toast\" (closeToast)=\"closeToast(toast)\"></ng2-toast>\n    </div>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__toasty_service__["c" /* ToastyConfig */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__toasty_service__["c" /* ToastyConfig */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__toasty_service__["g" /* ToastyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__toasty_service__["g" /* ToastyService */]) === 'function' && _b) || Object])
    ], ToastyComponent);
    return ToastyComponent;
    var _a, _b;
}());


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isString;
/* harmony export (immutable) */ __webpack_exports__["c"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["a"] = isFunction;
/**
 * Check and return true if an object is type of string
 */
function isString(obj) {
    return typeof obj === "string";
}
/**
 * Check and return true if an object is type of number
 */
function isNumber(obj) {
    return typeof obj === "number";
}
/**
 * Check and return true if an object is type of Function
 */
function isFunction(obj) {
    return typeof obj === "function";
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toasty_service__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastComponent; });
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * A Toast component shows message with title and close button.
 */
var ToastComponent = (function () {
    function ToastComponent() {
        this.closeToastEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * Event handler invokes when user clicks on close button.
     * This method emit new event into ToastyContainer to close it.
     */
    ToastComponent.prototype.close = function ($event) {
        $event.preventDefault();
        this.closeToastEvent.next(this.toast);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__toasty_service__["b" /* ToastData */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__toasty_service__["b" /* ToastData */]) === 'function' && _a) || Object)
    ], ToastComponent.prototype, "toast", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('closeToast'), 
        __metadata('design:type', Object)
    ], ToastComponent.prototype, "closeToastEvent", void 0);
    ToastComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ng2-toast',
            template: "\n        <div class=\"toast\" [ngClass]=\"[toast.type, toast.theme]\">\n            <div *ngIf=\"toast.showClose\" class=\"close-button\" (click)=\"close($event)\"></div>\n            <div *ngIf=\"toast.title || toast.msg\" class=\"toast-text\">\n                <span *ngIf=\"toast.title\" class=\"toast-title\">{{toast.title}}</span>\n                <br *ngIf=\"toast.title && toast.msg\" />\n                <span *ngIf=\"toast.msg\" class=\"toast-msg\">{{toast.msg}}</span>\n            </div>\n        </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], ToastComponent);
    return ToastComponent;
    var _a;
}());


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastOptions", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastData", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastyConfig", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastyEventType", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastyEvent", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toastyServiceFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastyService", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_toasty_component__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastyComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__src_toasty_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_toast_component__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "providers", function() { return providers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastyModule", function() { return ToastyModule; });
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var providers = [
    __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["c" /* ToastyConfig */],
    { provide: __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["g" /* ToastyService */], useFactory: __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["f" /* toastyServiceFactory */], deps: [__WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["c" /* ToastyConfig */]] }
];
var ToastyModule = (function () {
    function ToastyModule() {
    }
    ToastyModule.forRoot = function () {
        return {
            ngModule: ToastyModule,
            providers: providers
        };
    };
    ToastyModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__src_toast_component__["a" /* ToastComponent */], __WEBPACK_IMPORTED_MODULE_3__src_toasty_component__["a" /* ToastyComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__src_toast_component__["a" /* ToastComponent */], __WEBPACK_IMPORTED_MODULE_3__src_toasty_component__["a" /* ToastyComponent */]],
            providers: providers
        }), 
        __metadata('design:paramtypes', [])
    ], ToastyModule);
    return ToastyModule;
}());


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjOWRmN2E0Y2M2OWQ3ZjUyODk0YiIsIndlYnBhY2s6Ly8vLi9zcmMvdG9hc3R5LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy8uL3NyYy90b2FzdHkuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy90b2FzdHkudXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvYXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL1N1YmplY3RcIiIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFBQSwwQ0FBMEM7QUFDMUMsK0RBQStEO0FBQy9ELHVDQUF1Qzs7Ozs7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QVk7WUFDdEIsU0FBUyxFQUFFLFNBQVM7U0FDdkIsQ0FBQztJQUNOLENBQUM7SUFaTDtRQUFDLDhFQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyw2REFBWSxDQUFDO1lBQ3ZCLFlBQVksRUFBRSxDQUFDLDRFQUFjLEVBQUUsOEVBQWUsQ0FBQztZQUMvQyxPQUFPLEVBQUUsQ0FBRSw0RUFBYyxFQUFFLDhFQUFlLENBQUM7WUFDM0MsU0FBUyxFQUFFLFNBQVM7U0FDdkIsQ0FBQzs7b0JBQUE7SUFRRixtQkFBQztBQUFELENBQUMiLCJmaWxlIjoiaW5kZXgudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKSwgcmVxdWlyZShcInJ4anMvU3ViamVjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAYW5ndWxhci9jb3JlXCIsIFwiQGFuZ3VsYXIvY29tbW9uXCIsIFwicnhqcy9TdWJqZWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5nMi10b2FzdHlcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpLCByZXF1aXJlKFwicnhqcy9TdWJqZWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZzItdG9hc3R5XCJdID0gZmFjdG9yeShyb290W1wiQGFuZ3VsYXIvY29yZVwiXSwgcm9vdFtcIkBhbmd1bGFyL2NvbW1vblwiXSwgcm9vdFtcInJ4anMvU3ViamVjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjOWRmN2E0Y2M2OWQ3ZjUyODk0YiIsIi8vIENvcHlyaWdodCAoQykgMjAxNiBTZXJnZXkgQWtvcGtva2h5YW50c1xuLy8gVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWtzZXJnL25nMi10b2FzdHlcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNTdHJpbmcsIGlzTnVtYmVyLCBpc0Z1bmN0aW9uIH0gZnJvbSAnLi90b2FzdHkudXRpbHMnO1xuXG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbi8qKlxuICogT3B0aW9ucyB0byBjb25maWd1cmUgc3BlY2lmaWMgVG9hc3RcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvYXN0T3B0aW9ucyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG1zZz86IHN0cmluZztcbiAgc2hvd0Nsb3NlPzogYm9vbGVhbjtcbiAgdGhlbWU/OiBzdHJpbmc7XG4gIHRpbWVvdXQ/OiBudW1iZXI7XG4gIG9uQWRkPzogRnVuY3Rpb247XG4gIG9uUmVtb3ZlPzogRnVuY3Rpb247XG59XG5cbi8qKlxuICogU3RydWN0cnVyZSBvZiBUb2FzdFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9hc3REYXRhIHtcbiAgaWQ6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgbXNnOiBzdHJpbmc7XG4gIHNob3dDbG9zZTogYm9vbGVhbjtcbiAgdHlwZTogc3RyaW5nO1xuICB0aGVtZTogc3RyaW5nO1xuICB0aW1lb3V0OiBudW1iZXI7XG4gIG9uQWRkOiBGdW5jdGlvbjtcbiAgb25SZW1vdmU6IEZ1bmN0aW9uO1xuICBvbkNsaWNrOiBGdW5jdGlvbjtcbn1cblxuLyoqXG4gKiBEZWZhdWx0IGNvbmZpZ3VyYXRpb24gZm9hIGFsbCB0b2F0cyBhbmQgdG9hc3R5IGNvbnRhaW5lclxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9hc3R5Q29uZmlnIHtcblxuICAvLyBNYXhpbXVtIG51bWJlciBvZiB0b2FzdGllcyB0byBzaG93IGF0IG9uY2VcbiAgbGltaXQ6IG51bWJlciA9IDU7XG5cbiAgLy8gV2hldGhlciB0byBzaG93IHRoZSAnWCcgaWNvbiB0byBjbG9zZSB0aGUgdG9hc3RcbiAgc2hvd0Nsb3NlOiBib29sZWFuID0gdHJ1ZTtcblxuICAvLyBUaGUgd2luZG93IHBvc2l0aW9uIHdoZXJlIHRoZSB0b2FzdCBwb3BzIHVwXG4gIHBvc2l0aW9uOiAnYm90dG9tLXJpZ2h0JyB8ICdib3R0b20tbGVmdCcgfCAndG9wLXJpZ2h0JyB8ICd0b3AtbGVmdCcgfCAndG9wLWNlbnRlcicgfCAnYm90dG9tLWNlbnRlcicgfCAnY2VudGVyLWNlbnRlcicgPSAnYm90dG9tLXJpZ2h0JztcblxuICAvLyBIb3cgbG9uZyAoaW4gbWlsaXNlY29uZHMpIHRoZSB0b2FzdHkgc2hvd3MgYmVmb3JlIGl0J3MgcmVtb3ZlZC4gU2V0IHRvIG51bGwvMCB0byB0dXJuIG9mZi5cbiAgdGltZW91dDogbnVtYmVyID0gNTAwMDtcblxuICAvLyBXaGF0IHRoZW1lIHRvIHVzZVxuICB0aGVtZTogJ2RlZmF1bHQnIHwgJ21hdGVyaWFsJyB8ICdib290c3RyYXAnID0gJ2RlZmF1bHQnO1xufVxuXG5leHBvcnQgZW51bSBUb2FzdHlFdmVudFR5cGUge1xuICBBREQsXG4gIENMRUFSLFxuICBDTEVBUl9BTExcbn1cblxuZXhwb3J0IGNsYXNzIFRvYXN0eUV2ZW50IHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdHlwZTpUb2FzdHlFdmVudFR5cGUsIHB1YmxpYyB2YWx1ZT86YW55KSB7fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9hc3R5U2VydmljZUZhY3RvcnkoY29uZmlnOiBUb2FzdHlDb25maWcpOiBUb2FzdHlTZXJ2aWNlICB7XG4gICAgcmV0dXJuIG5ldyBUb2FzdHlTZXJ2aWNlKGNvbmZpZyk7XG59XG5cbi8qKlxuICogVG9hc3R5IHNlcnZpY2UgaGVscHMgY3JlYXRlIGRpZmZlcmVudCBraW5kcyBvZiBUb2FzdHNcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvYXN0eVNlcnZpY2Uge1xuICAvLyBBbGxvd2VkIFRIRU1FU1xuICBzdGF0aWMgVEhFTUVTOiBBcnJheTxzdHJpbmc+ID0gWydkZWZhdWx0JywgJ21hdGVyaWFsJywgJ2Jvb3RzdHJhcCddO1xuICAvLyBJbml0IHRoZSBjb3VudGVyXG4gIHVuaXF1ZUNvdW50ZXI6IG51bWJlciA9IDA7XG4gIC8vIFRvYXN0RGF0YSBldmVudCBlbWl0dGVyXG4gIC8vIHByaXZhdGUgdG9hc3RzRW1pdHRlcjogRXZlbnRFbWl0dGVyPFRvYXN0RGF0YT4gPSBuZXcgRXZlbnRFbWl0dGVyPFRvYXN0RGF0YT4oKTtcbiAgLy8gQ2xlYXIgZXZlbnQgZW1pdHRlclxuICAvLyBwcml2YXRlIGNsZWFyRW1pdHRlcjogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBwcml2YXRlIGV2ZW50U291cmNlOiBTdWJqZWN0PFRvYXN0eUV2ZW50PiA9IG5ldyBTdWJqZWN0PFRvYXN0eUV2ZW50PigpO1xuICBwdWJsaWMgZXZlbnRzOiBPYnNlcnZhYmxlPFRvYXN0eUV2ZW50PiA9IHRoaXMuZXZlbnRTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IFRvYXN0eUNvbmZpZykge31cblxuICAvKipcbiAgICogR2V0IGxpc3Qgb2YgdG9hdHNcbiAgICovXG4gIC8vIGdldFRvYXN0cygpOiBPYnNlcnZhYmxlPFRvYXN0RGF0YT4ge1xuICAvLyAgIHJldHVybiB0aGlzLnRvYXN0c0VtaXR0ZXIuYXNPYnNlcnZhYmxlKCk7XG4gIC8vIH1cblxuICAvLyBnZXRDbGVhcigpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAvLyAgIHJldHVybiB0aGlzLmNsZWFyRW1pdHRlci5hc09ic2VydmFibGUoKTtcbiAgLy8gfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgVG9hc3Qgb2YgYSBkZWZhdWx0IHR5cGVcbiAgICovXG4gIGRlZmF1bHQob3B0aW9uczogVG9hc3RPcHRpb25zfHN0cmluZ3xudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFkZChvcHRpb25zLCAnZGVmYXVsdCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBUb2FzdCBvZiBpbmZvIHR5cGVcbiAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zIEluZGl2aWR1YWwgdG9hc3R5IGNvbmZpZyBvdmVycmlkZXNcbiAgICovXG4gIGluZm8ob3B0aW9uczogVG9hc3RPcHRpb25zfHN0cmluZ3xudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFkZChvcHRpb25zLCAnaW5mbycpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBUb2FzdCBvZiBzdWNjZXNzIHR5cGVcbiAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zIEluZGl2aWR1YWwgdG9hc3R5IGNvbmZpZyBvdmVycmlkZXNcbiAgICovXG4gIHN1Y2Nlc3Mob3B0aW9uczogVG9hc3RPcHRpb25zfHN0cmluZ3xudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFkZChvcHRpb25zLCAnc3VjY2VzcycpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBUb2FzdCBvZiB3YWl0IHR5cGVcbiAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zIEluZGl2aWR1YWwgdG9hc3R5IGNvbmZpZyBvdmVycmlkZXNcbiAgICovXG4gIHdhaXQob3B0aW9uczogVG9hc3RPcHRpb25zfHN0cmluZ3xudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFkZChvcHRpb25zLCAnd2FpdCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBUb2FzdCBvZiBlcnJvciB0eXBlXG4gICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9ucyBJbmRpdmlkdWFsIHRvYXN0eSBjb25maWcgb3ZlcnJpZGVzXG4gICAqL1xuICBlcnJvcihvcHRpb25zOiBUb2FzdE9wdGlvbnN8c3RyaW5nfG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWRkKG9wdGlvbnMsICdlcnJvcicpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBUb2FzdCBvZiB3YXJuaW5nIHR5cGVcbiAgICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zIEluZGl2aWR1YWwgdG9hc3R5IGNvbmZpZyBvdmVycmlkZXNcbiAgICovXG4gIHdhcm5pbmcob3B0aW9uczogVG9hc3RPcHRpb25zfHN0cmluZ3xudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFkZChvcHRpb25zLCAnd2FybmluZycpO1xuICB9XG5cblxuICAvLyBBZGQgYSBuZXcgdG9hc3QgaXRlbVxuICBwcml2YXRlIGFkZChvcHRpb25zOiBUb2FzdE9wdGlvbnN8c3RyaW5nfG51bWJlciwgdHlwZTogc3RyaW5nKSB7XG4gICAgbGV0IHRvYXN0eU9wdGlvbnM6IFRvYXN0T3B0aW9ucztcblxuICAgIGlmIChpc1N0cmluZyhvcHRpb25zKSAmJiBvcHRpb25zICE9PSAnJyB8fCBpc051bWJlcihvcHRpb25zKSkge1xuICAgICAgdG9hc3R5T3B0aW9ucyA9IDxUb2FzdE9wdGlvbnM+e1xuICAgICAgICB0aXRsZTogb3B0aW9ucy50b1N0cmluZygpXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2FzdHlPcHRpb25zID0gPFRvYXN0T3B0aW9ucz5vcHRpb25zO1xuICAgIH1cblxuICAgIGlmICghdG9hc3R5T3B0aW9ucyB8fCAhdG9hc3R5T3B0aW9ucy50aXRsZSAmJiAhdG9hc3R5T3B0aW9ucy5tc2cpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbmcyLXRvYXN0eTogTm8gdG9hc3QgdGl0bGUgb3IgbWVzc2FnZSBzcGVjaWZpZWQhJyk7XG4gICAgfVxuXG4gICAgdHlwZSA9IHR5cGUgfHwgJ2RlZmF1bHQnO1xuXG4gICAgLy8gU2V0IGEgdW5pcXVlIGNvdW50ZXIgZm9yIGFuIGlkXG4gICAgdGhpcy51bmlxdWVDb3VudGVyKys7XG5cbiAgICAvLyBTZXQgdGhlIGxvY2FsIHZzIGdsb2JhbCBjb25maWcgaXRlbXNcbiAgICBsZXQgc2hvd0Nsb3NlID0gdGhpcy5fY2hlY2tDb25maWdJdGVtKHRoaXMuY29uZmlnLCB0b2FzdHlPcHRpb25zLCAnc2hvd0Nsb3NlJyk7XG5cbiAgICAvLyBJZiB3ZSBoYXZlIGEgdGhlbWUgc2V0LCBtYWtlIHN1cmUgaXQncyBhIHZhbGlkIG9uZVxuICAgIGxldCB0aGVtZTogc3RyaW5nO1xuICAgIGlmICh0b2FzdHlPcHRpb25zLnRoZW1lKSB7XG4gICAgICB0aGVtZSA9IFRvYXN0eVNlcnZpY2UuVEhFTUVTLmluZGV4T2YodG9hc3R5T3B0aW9ucy50aGVtZSkgPiAtMSA/IHRvYXN0eU9wdGlvbnMudGhlbWUgOiB0aGlzLmNvbmZpZy50aGVtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhlbWUgPSB0aGlzLmNvbmZpZy50aGVtZTtcbiAgICB9XG5cbiAgICBsZXQgdG9hc3Q6IFRvYXN0RGF0YSA9IDxUb2FzdERhdGE+e1xuICAgICAgaWQgICAgICAgOiB0aGlzLnVuaXF1ZUNvdW50ZXIsXG4gICAgICB0aXRsZSAgICA6IHRvYXN0eU9wdGlvbnMudGl0bGUsXG4gICAgICBtc2cgICAgICA6IHRvYXN0eU9wdGlvbnMubXNnLFxuICAgICAgc2hvd0Nsb3NlOiBzaG93Q2xvc2UsXG4gICAgICB0eXBlICAgICA6ICd0b2FzdHktdHlwZS0nICsgdHlwZSxcbiAgICAgIHRoZW1lICAgIDogJ3RvYXN0eS10aGVtZS0nICsgdGhlbWUsXG4gICAgICBvbkFkZCAgICA6IHRvYXN0eU9wdGlvbnMub25BZGQgJiYgaXNGdW5jdGlvbih0b2FzdHlPcHRpb25zLm9uQWRkKSA/IHRvYXN0eU9wdGlvbnMub25BZGQgOiBudWxsLFxuICAgICAgb25SZW1vdmUgOiB0b2FzdHlPcHRpb25zLm9uUmVtb3ZlICYmIGlzRnVuY3Rpb24odG9hc3R5T3B0aW9ucy5vblJlbW92ZSkgPyB0b2FzdHlPcHRpb25zLm9uUmVtb3ZlIDogbnVsbFxuICAgIH07XG5cbiAgICAvLyBJZiB0aGVyZSdzIGEgdGltZW91dCBpbmRpdmlkdWFsbHkgb3IgZ2xvYmFsbHksIHNldCB0aGUgdG9hc3QgdG8gdGltZW91dFxuICAgIC8vIEFsbG93cyBhIGNhbGxlciB0byBwYXNzIG51bGwvMCBhbmQgb3ZlcnJpZGUgdGhlIGRlZmF1bHQuIENhbiBhbHNvIHNldCB0aGUgZGVmYXVsdCB0byBudWxsLzAgdG8gdHVybiBvZmYuXG4gICAgdG9hc3QudGltZW91dCA9IHRvYXN0eU9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ3RpbWVvdXQnKSA/IHRvYXN0eU9wdGlvbnMudGltZW91dCA6IHRoaXMuY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBQdXNoIHVwIGEgbmV3IHRvYXN0IGl0ZW1cbiAgICAvLyB0aGlzLnRvYXN0c1N1YnNjcmliZXIubmV4dCh0b2FzdCk7XG4gICAgLy8gdGhpcy50b2FzdHNFbWl0dGVyLm5leHQodG9hc3QpO1xuICAgIHRoaXMuZW1pdEV2ZW50KG5ldyBUb2FzdHlFdmVudChUb2FzdHlFdmVudFR5cGUuQURELCB0b2FzdCkpO1xuICAgIC8vIElmIHdlIGhhdmUgYSBvbkFkZCBmdW5jdGlvbiwgY2FsbCBpdCBoZXJlXG4gICAgaWYgKHRvYXN0eU9wdGlvbnMub25BZGQgJiYgaXNGdW5jdGlvbih0b2FzdHlPcHRpb25zLm9uQWRkKSkge1xuICAgICAgdG9hc3R5T3B0aW9ucy5vbkFkZC5jYWxsKHRoaXMsIHRvYXN0KTtcbiAgICB9XG4gIH1cblxuICAvLyBDbGVhciBhbGwgdG9hc3RzXG4gIGNsZWFyQWxsKCkge1xuICAgIC8vIHRoaXMuY2xlYXJFbWl0dGVyLm5leHQobnVsbCk7XG4gICAgdGhpcy5lbWl0RXZlbnQobmV3IFRvYXN0eUV2ZW50KFRvYXN0eUV2ZW50VHlwZS5DTEVBUl9BTEwpKTtcbiAgfVxuXG4gIC8vIENsZWFyIHRoZSBzcGVjaWZpYyBvbmVcbiAgY2xlYXIoaWQ6IG51bWJlcikge1xuICAgIC8vIHRoaXMuY2xlYXJFbWl0dGVyLm5leHQoaWQpO1xuICAgIHRoaXMuZW1pdEV2ZW50KG5ldyBUb2FzdHlFdmVudChUb2FzdHlFdmVudFR5cGUuQ0xFQVIsIGlkKSk7XG4gIH1cblxuICAvLyBDaGVja3Mgd2hldGhlciB0aGUgbG9jYWwgb3B0aW9uIGlzIHNldCwgaWYgbm90LFxuICAvLyBjaGVja3MgdGhlIGdsb2JhbCBjb25maWdcbiAgcHJpdmF0ZSBfY2hlY2tDb25maWdJdGVtKGNvbmZpZzogYW55LCBvcHRpb25zOiBhbnksIHByb3BlcnR5OiBzdHJpbmcpIHtcbiAgICBpZiAob3B0aW9uc1twcm9wZXJ0eV0gPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmICghb3B0aW9uc1twcm9wZXJ0eV0pIHtcbiAgICAgIHJldHVybiBjb25maWdbcHJvcGVydHldO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGVtaXRFdmVudChldmVudDogVG9hc3R5RXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuZXZlbnRTb3VyY2UpIHtcbiAgICAgICAgICAgIC8vIFB1c2ggdXAgYSBuZXcgZXZlbnRcbiAgICAgICAgICAgIHRoaXMuZXZlbnRTb3VyY2UubmV4dChldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvdG9hc3R5LnNlcnZpY2UudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIENvcHlyaWdodCAoQykgMjAxNiBTZXJnZXkgQWtvcGtva2h5YW50c1xuLy8gVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2UuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vYWtzZXJnL25nMi10b2FzdHlcblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL3RvYXN0eS51dGlscyc7XG5pbXBvcnQgeyBUb2FzdHlTZXJ2aWNlLCBUb2FzdERhdGEsIFRvYXN0eUNvbmZpZywgVG9hc3R5RXZlbnQsIFRvYXN0eUV2ZW50VHlwZSB9IGZyb20gJy4vdG9hc3R5LnNlcnZpY2UnO1xuXG4vKipcbiAqIFRvYXN0eSBpcyBjb250YWluZXIgZm9yIFRvYXN0IGNvbXBvbmVudHNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmcyLXRvYXN0eScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBpZD1cInRvYXN0eVwiIFtuZ0NsYXNzXT1cIltwb3NpdGlvbl1cIj5cbiAgICAgICAgPG5nMi10b2FzdCAqbmdGb3I9XCJsZXQgdG9hc3Qgb2YgdG9hc3RzXCIgW3RvYXN0XT1cInRvYXN0XCIgKGNsb3NlVG9hc3QpPVwiY2xvc2VUb2FzdCh0b2FzdClcIj48L25nMi10b2FzdD5cbiAgICA8L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0eUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBTZXQgb2YgY29uc3RhbnRzIGRlZmlucyBwb3NpdGlvbiBvZiBUb2FzdHkgb24gdGhlIHBhZ2UuXG4gICAqL1xuICBzdGF0aWMgUE9TSVRJT05TOiBBcnJheTxTdHJpbmc+ID0gWydib3R0b20tcmlnaHQnLCAnYm90dG9tLWxlZnQnLCAndG9wLXJpZ2h0JywgJ3RvcC1sZWZ0JywgJ3RvcC1jZW50ZXInLCAnYm90dG9tLWNlbnRlcicsICdjZW50ZXItY2VudGVyJ107XG5cbiAgcHJpdmF0ZSBfcG9zaXRpb246IHN0cmluZyA9ICcnO1xuICAvLyBUaGUgd2luZG93IHBvc2l0aW9uIHdoZXJlIHRoZSB0b2FzdCBwb3BzIHVwLiBQb3NzaWJsZSB2YWx1ZXM6XG4gIC8vIC0gYm90dG9tLXJpZ2h0IChkZWZhdWx0IHZhbHVlIGZyb20gVG9hc3RDb25maWcpXG4gIC8vIC0gYm90dG9tLWxlZnRcbiAgLy8gLSB0b3AtcmlnaHRcbiAgLy8gLSB0b3AtbGVmdFxuICAvLyAtIHRvcC1jZW50ZXJcbiAgLy8gLSBib3R0b20tY2VudGVyXG4gIC8vIC0gY2VudGVyLWNlbnRlclxuICBASW5wdXQoKSBzZXQgcG9zaXRpb24odmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbGV0IG5vdEZvdW5kID0gdHJ1ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVG9hc3R5Q29tcG9uZW50LlBPU0lUSU9OUy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoVG9hc3R5Q29tcG9uZW50LlBPU0lUSU9OU1tpXSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICBub3RGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobm90Rm91bmQpIHtcbiAgICAgICAgLy8gUG9zaXRpb24gd2FzIHdyb25nIC0gY2xlYXIgaXQgaGVyZSB0byB1c2UgdGhlIG9uZSBmcm9tIGNvbmZpZy5cbiAgICAgICAgdmFsdWUgPSB0aGlzLmNvbmZpZy5wb3NpdGlvbjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSB0aGlzLmNvbmZpZy5wb3NpdGlvbjtcbiAgICB9XG4gICAgdGhpcy5fcG9zaXRpb24gPSAndG9hc3R5LXBvc2l0aW9uLScgKyB2YWx1ZTtcbiAgfVxuXG4gIGdldCBwb3NpdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuXG4gIC8vIFRoZSBzdG9yYWdlIGZvciB0b2FzdHMuXG4gIHRvYXN0czogQXJyYXk8VG9hc3REYXRhPiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBUb2FzdHlDb25maWcsIHByaXZhdGUgdG9hc3R5U2VydmljZTogVG9hc3R5U2VydmljZSkge1xuICAgIC8vIEluaXRpYWxpc2UgcG9zaXRpb25cbiAgICB0aGlzLnBvc2l0aW9uID0gJyc7XG4gIH1cblxuICAvKipcbiAgICogYG5nT25Jbml0YCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgdGhlIGRpcmVjdGl2ZSdzIGRhdGEtYm91bmQgcHJvcGVydGllcyBoYXZlIGJlZW4gY2hlY2tlZCBmb3IgdGhlXG4gICAqIGZpcnN0IHRpbWUsIGFuZCBiZWZvcmUgYW55IG9mIGl0cyBjaGlsZHJlbiBoYXZlIGJlZW4gY2hlY2tlZC4gSXQgaXMgaW52b2tlZCBvbmx5IG9uY2Ugd2hlbiB0aGVcbiAgICogZGlyZWN0aXZlIGlzIGluc3RhbnRpYXRlZC5cbiAgICovXG4gIG5nT25Jbml0KCk6IGFueSB7XG4gICAgLy8gV2UgbGlzdGVuIGV2ZW50cyBmcm9tIG91ciBzZXJ2aWNlXG4gICAgdGhpcy50b2FzdHlTZXJ2aWNlLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50OiBUb2FzdHlFdmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IFRvYXN0eUV2ZW50VHlwZS5BREQpIHtcbiAgICAgICAgLy8gQWRkIHRoZSBuZXcgb25lXG4gICAgICAgIGxldCB0b2FzdDogVG9hc3REYXRhID0gZXZlbnQudmFsdWU7XG4gICAgICAgIHRoaXMuYWRkKHRvYXN0KTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gVG9hc3R5RXZlbnRUeXBlLkNMRUFSKSB7XG4gICAgICAgIC8vIENsZWFyIHRoZSBvbmUgYnkgbnVtYmVyXG4gICAgICAgIGxldCBpZDogbnVtYmVyID0gZXZlbnQudmFsdWU7XG4gICAgICAgIHRoaXMuY2xlYXIoaWQpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSBUb2FzdHlFdmVudFR5cGUuQ0xFQVJfQUxMKSB7XG4gICAgICAgIC8vIExldHMgY2xlYXIgYWxsIHRvYXN0c1xuICAgICAgICB0aGlzLmNsZWFyQWxsKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgbGlzdGVuZXIgb2YgJ2Nsb3NlVG9hc3QnIGV2ZW50IGNvbWVzIGZyb20gVG9hc3R5Q29tcG9uZW50LlxuICAgKiBUaGlzIG1ldGhvZCByZW1vdmVzIFRvYXN0Q29tcG9uZW50IGFzc29zaWF0ZWQgd2l0aCB0aGlzIFRvYXN0LlxuICAgKi9cbiAgY2xvc2VUb2FzdCh0b2FzdDogVG9hc3REYXRhKSB7XG4gICAgdGhpcy5jbGVhcih0b2FzdC5pZCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIG5ldyBUb2FzdFxuICAgKi9cbiAgYWRkKHRvYXN0OiBUb2FzdERhdGEpIHtcbiAgICAvLyBJZiB3ZSd2ZSBnb25lIG92ZXIgb3VyIGxpbWl0LCByZW1vdmUgdGhlIGVhcmxpZXN0XG4gICAgLy8gb25lIGZyb20gdGhlIGFycmF5XG4gICAgaWYgKHRoaXMudG9hc3RzLmxlbmd0aCA+PSB0aGlzLmNvbmZpZy5saW1pdCkge1xuICAgICAgdGhpcy50b2FzdHMuc2hpZnQoKTtcbiAgICB9XG4gICAgLy8gQWRkIHRvYXN0eSB0byBhcnJheVxuICAgIHRoaXMudG9hc3RzLnB1c2godG9hc3QpO1xuICAgIC8vXG4gICAgLy8gSWYgdGhlcmUncyBhIHRpbWVvdXQgaW5kaXZpZHVhbGx5IG9yIGdsb2JhbGx5LFxuICAgIC8vIHNldCB0aGUgdG9hc3QgdG8gdGltZW91dFxuICAgIGlmICh0b2FzdC50aW1lb3V0KSB7XG4gICAgICB0aGlzLl9zZXRUaW1lb3V0KHRvYXN0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgaW5kaXZpZHVhbCB0b2FzdCBieSBpZFxuICAgKiBAcGFyYW0gaWQgaXMgdW5pcXVlIGlkZW50aWZpZXIgb2YgVG9hc3RcbiAgICovXG4gIGNsZWFyKGlkOiBudW1iZXIpIHtcbiAgICBpZiAoaWQpIHtcbiAgICAgIHRoaXMudG9hc3RzLmZvckVhY2goKHZhbHVlOiBhbnksIGtleTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICBpZiAodmFsdWUub25SZW1vdmUgJiYgaXNGdW5jdGlvbih2YWx1ZS5vblJlbW92ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlLm9uUmVtb3ZlLmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnRvYXN0cy5zcGxpY2Uoa2V5LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgaWQgb2YgVG9hc3QgdG8gY2xvc2UnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIHRvYXN0c1xuICAgKi9cbiAgY2xlYXJBbGwoKSB7XG4gICAgdGhpcy50b2FzdHMuZm9yRWFjaCgodmFsdWU6IGFueSwga2V5OiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh2YWx1ZS5vblJlbW92ZSAmJiBpc0Z1bmN0aW9uKHZhbHVlLm9uUmVtb3ZlKSkge1xuICAgICAgICB2YWx1ZS5vblJlbW92ZS5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnRvYXN0cyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEN1c3RvbSBzZXRUaW1lb3V0IGZ1bmN0aW9uIGZvciBzcGVjaWZpYyBzZXRUaW1lb3V0cyBvbiBpbmRpdmlkdWFsIHRvYXN0cy5cbiAgICovXG4gIHByaXZhdGUgX3NldFRpbWVvdXQodG9hc3Q6IFRvYXN0RGF0YSkge1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2xlYXIodG9hc3QuaWQpO1xuICAgIH0sIHRvYXN0LnRpbWVvdXQpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvdG9hc3R5LmNvbXBvbmVudC50cyIsIi8qKlxuICogQ2hlY2sgYW5kIHJldHVybiB0cnVlIGlmIGFuIG9iamVjdCBpcyB0eXBlIG9mIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcob2JqOmFueSkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiO1xufVxuXG4vKipcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3QgaXMgdHlwZSBvZiBudW1iZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKG9iajogYW55KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwibnVtYmVyXCI7XG59XG5cbi8qKlxuICogQ2hlY2sgYW5kIHJldHVybiB0cnVlIGlmIGFuIG9iamVjdCBpcyB0eXBlIG9mIEZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iajogYW55KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIjtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy90b2FzdHkudXRpbHMudHMiLCIvLyBDb3B5cmlnaHQgKEMpIDIwMTYgU2VyZ2V5IEFrb3Brb2toeWFudHNcbi8vIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Frc2VyZy9uZzItdG9hc3R5XG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRvYXN0RGF0YSB9IGZyb20gJy4vdG9hc3R5LnNlcnZpY2UnO1xuXG4vKipcbiAqIEEgVG9hc3QgY29tcG9uZW50IHNob3dzIG1lc3NhZ2Ugd2l0aCB0aXRsZSBhbmQgY2xvc2UgYnV0dG9uLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZzItdG9hc3QnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9hc3RcIiBbbmdDbGFzc109XCJbdG9hc3QudHlwZSwgdG9hc3QudGhlbWVdXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidG9hc3Quc2hvd0Nsb3NlXCIgY2xhc3M9XCJjbG9zZS1idXR0b25cIiAoY2xpY2spPVwiY2xvc2UoJGV2ZW50KVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInRvYXN0LnRpdGxlIHx8IHRvYXN0Lm1zZ1wiIGNsYXNzPVwidG9hc3QtdGV4dFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidG9hc3QudGl0bGVcIiBjbGFzcz1cInRvYXN0LXRpdGxlXCI+e3t0b2FzdC50aXRsZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxiciAqbmdJZj1cInRvYXN0LnRpdGxlICYmIHRvYXN0Lm1zZ1wiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJ0b2FzdC5tc2dcIiBjbGFzcz1cInRvYXN0LW1zZ1wiPnt7dG9hc3QubXNnfX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgdG9hc3Q6IFRvYXN0RGF0YTtcbiAgQE91dHB1dCgnY2xvc2VUb2FzdCcpIGNsb3NlVG9hc3RFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBpbnZva2VzIHdoZW4gdXNlciBjbGlja3Mgb24gY2xvc2UgYnV0dG9uLlxuICAgKiBUaGlzIG1ldGhvZCBlbWl0IG5ldyBldmVudCBpbnRvIFRvYXN0eUNvbnRhaW5lciB0byBjbG9zZSBpdC5cbiAgICovXG4gIGNsb3NlKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jbG9zZVRvYXN0RXZlbnQubmV4dCh0aGlzLnRvYXN0KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3RvYXN0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNl9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9TdWJqZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2IFNlcmdleSBBa29wa29raHlhbnRzXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLXRvYXN0eVxuXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5leHBvcnQgKiBmcm9tICcuL3NyYy90b2FzdHkuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3NyYy90b2FzdHkuY29tcG9uZW50JztcblxuaW1wb3J0IHsgVG9hc3R5Q29tcG9uZW50IH0gZnJvbSAnLi9zcmMvdG9hc3R5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb2FzdENvbXBvbmVudCB9IGZyb20gJy4vc3JjL3RvYXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUb2FzdHlTZXJ2aWNlLCBUb2FzdHlDb25maWcsIHRvYXN0eVNlcnZpY2VGYWN0b3J5IH0gZnJvbSAnLi9zcmMvdG9hc3R5LnNlcnZpY2UnO1xuXG5leHBvcnQgbGV0IHByb3ZpZGVycyA9IFtcbiAgICBUb2FzdHlDb25maWcsXG4gICAgeyBwcm92aWRlOiBUb2FzdHlTZXJ2aWNlLCB1c2VGYWN0b3J5OiB0b2FzdHlTZXJ2aWNlRmFjdG9yeSwgZGVwczogW1RvYXN0eUNvbmZpZ10gfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtUb2FzdENvbXBvbmVudCwgVG9hc3R5Q29tcG9uZW50XSxcbiAgICBleHBvcnRzOiBbIFRvYXN0Q29tcG9uZW50LCBUb2FzdHlDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogcHJvdmlkZXJzXG59KVxuZXhwb3J0IGNsYXNzIFRvYXN0eU1vZHVsZSB7XG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogVG9hc3R5TW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBwcm92aWRlcnNcbiAgICAgICAgfTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vaW5kZXgudHMiXSwic291cmNlUm9vdCI6IiJ9