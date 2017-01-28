(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["ng2-toasty"] = factory(require("@angular/core"), require("@angular/common"));
	else
		root["ng2-toasty"] = factory(root["@angular/core"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toasty_utils__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ToastData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ToastyConfig; });
/* harmony export (immutable) */ __webpack_exports__["d"] = toastyServiceFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ToastyService; });
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
        // The window position where the toast pops up. Possible values
        // bottom-right, bottom-left, top-right, top-left, top-center, bottom-center, center-center
        this.position = 'bottom-right';
        // How long (in miliseconds) the toasty shows before it's removed. Set to null/0 to turn off.
        this.timeout = 5000;
        // What theme to use. Possible values:
        // default, material or bootstrap
        this.theme = 'default';
    }
    ToastyConfig = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ToastyConfig);
    return ToastyConfig;
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
        this.toastsEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // Clear event emitter
        this.clearEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * Get list of toats
     */
    ToastyService.prototype.getToasts = function () {
        return this.toastsEmitter.asObservable();
    };
    ToastyService.prototype.getClear = function () {
        return this.clearEmitter.asObservable();
    };
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
        this.toastsEmitter.next(toast);
        // If we have a onAdd function, call it here
        if (toastyOptions.onAdd && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__toasty_utils__["a" /* isFunction */])(toastyOptions.onAdd)) {
            toastyOptions.onAdd.call(this, toast);
        }
    };
    // Clear all toasts
    ToastyService.prototype.clearAll = function () {
        this.clearEmitter.next(null);
    };
    // Clear the specific one
    ToastyService.prototype.clear = function (id) {
        this.clearEmitter.next(id);
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
        // We listen our service to recieve new toasts from it
        this.toastyService.getToasts().subscribe(function (toast) {
            // If we've gone over our limit, remove the earliest
            // one from the array
            if (_this.toasts.length >= _this.config.limit) {
                _this.toasts.shift();
            }
            // Add toasty to array
            _this.toasts.push(toast);
            //
            // If there's a timeout individually or globally,
            // set the toast to timeout
            if (toast.timeout) {
                _this._setTimeout(toast);
            }
        });
        // We listen clear all comes from service here.
        this.toastyService.getClear().subscribe(function (id) {
            if (id) {
                _this.clear(id);
            }
            else {
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
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__toasty_service__["c" /* ToastyConfig */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__toasty_service__["c" /* ToastyConfig */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__toasty_service__["e" /* ToastyService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__toasty_service__["e" /* ToastyService */]) === 'function' && _b) || Object])
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
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toastyServiceFactory", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToastyService", function() { return __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["e"]; });
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
    { provide: __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["e" /* ToastyService */], useFactory: __WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["d" /* toastyServiceFactory */], deps: [__WEBPACK_IMPORTED_MODULE_2__src_toasty_service__["c" /* ToastyConfig */]] }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwMTM5ZGU1OGEzMTZmMWM3MzE5ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdG9hc3R5LnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy8uL3NyYy90b2FzdHkuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy90b2FzdHkudXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RvYXN0LmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIiIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUFBLDBDQUEwQztBQUMxQywrREFBK0Q7QUFDL0QsdUNBQXVDOzs7Ozs7Ozs7O0FBRWlCO0FBQ087QUFJL0Q7O0dBRUc7QUFFSDtJQUFBO0lBUUEs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QUFFLElBQUksRUFBRSxDQUFDLHlFQUFZLENBQUMsRUFBRTtDQUNyRixDQUFDO0FBUUY7SUFBQTtJQU9BLENBQUM7SUFOVSxvQkFBTyxHQUFkO1FBQ0ksTUFBTSxDQUFDO1lBQ0gsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLFNBQVM7U0FDdkIsQ0FBQztJQUNOLENBQUM7SUFaTDtRQUFDLDhFQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyw2REFBWSxDQUFDO1lBQ3ZCLFlBQVksRUFBRSxDQUFDLDRFQUFjLEVBQUUsOEVBQWUsQ0FBQztZQUMvQyxPQUFPLEVBQUUsQ0FBRSw0RUFBYyxFQUFFLDhFQUFlLENBQUM7WUFDM0MsU0FBUyxFQUFFLFNBQVM7U0FDdkIsQ0FBQzs7b0JBQUE7SUFRRixtQkFBQztBQUFELENBQUMiLCJmaWxlIjoiaW5kZXgudW1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKSwgcmVxdWlyZShcIkBhbmd1bGFyL2NvbW1vblwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJAYW5ndWxhci9jb3JlXCIsIFwiQGFuZ3VsYXIvY29tbW9uXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5nMi10b2FzdHlcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpLCByZXF1aXJlKFwiQGFuZ3VsYXIvY29tbW9uXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJuZzItdG9hc3R5XCJdID0gZmFjdG9yeShyb290W1wiQGFuZ3VsYXIvY29yZVwiXSwgcm9vdFtcIkBhbmd1bGFyL2NvbW1vblwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAxMzlkZTU4YTMxNmYxYzczMTllIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2IFNlcmdleSBBa29wa29raHlhbnRzXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLXRvYXN0eVxuXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzU3RyaW5nLCBpc051bWJlciwgaXNGdW5jdGlvbiB9IGZyb20gJy4vdG9hc3R5LnV0aWxzJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5cbi8qKlxuICogT3B0aW9ucyB0byBjb25maWd1cmUgc3BlY2lmaWMgVG9hc3RcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRvYXN0T3B0aW9ucyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG1zZz86IHN0cmluZztcbiAgc2hvd0Nsb3NlPzogYm9vbGVhbjtcbiAgdGhlbWU/OiBzdHJpbmc7XG4gIHRpbWVvdXQ/OiBudW1iZXI7XG4gIG9uQWRkPzogRnVuY3Rpb247XG4gIG9uUmVtb3ZlPzogRnVuY3Rpb247XG59XG5cbi8qKlxuICogU3RydWN0cnVyZSBvZiBUb2FzdFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9hc3REYXRhIHtcbiAgaWQ6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgbXNnOiBzdHJpbmc7XG4gIHNob3dDbG9zZTogYm9vbGVhbjtcbiAgdHlwZTogc3RyaW5nO1xuICB0aGVtZTogc3RyaW5nO1xuICB0aW1lb3V0OiBudW1iZXI7XG4gIG9uQWRkOiBGdW5jdGlvbjtcbiAgb25SZW1vdmU6IEZ1bmN0aW9uO1xuICBvbkNsaWNrOiBGdW5jdGlvbjtcbn1cblxuLyoqXG4gKiBEZWZhdWx0IGNvbmZpZ3VyYXRpb24gZm9hIGFsbCB0b2F0cyBhbmQgdG9hc3R5IGNvbnRhaW5lclxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9hc3R5Q29uZmlnIHtcblxuICAvLyBNYXhpbXVtIG51bWJlciBvZiB0b2FzdGllcyB0byBzaG93IGF0IG9uY2VcbiAgbGltaXQ6IG51bWJlciA9IDU7XG5cbiAgLy8gV2hldGhlciB0byBzaG93IHRoZSAnWCcgaWNvbiB0byBjbG9zZSB0aGUgdG9hc3RcbiAgc2hvd0Nsb3NlOiBib29sZWFuID0gdHJ1ZTtcblxuICAvLyBUaGUgd2luZG93IHBvc2l0aW9uIHdoZXJlIHRoZSB0b2FzdCBwb3BzIHVwLiBQb3NzaWJsZSB2YWx1ZXNcbiAgLy8gYm90dG9tLXJpZ2h0LCBib3R0b20tbGVmdCwgdG9wLXJpZ2h0LCB0b3AtbGVmdCwgdG9wLWNlbnRlciwgYm90dG9tLWNlbnRlciwgY2VudGVyLWNlbnRlclxuICBwb3NpdGlvbjogc3RyaW5nID0gJ2JvdHRvbS1yaWdodCc7XG5cbiAgLy8gSG93IGxvbmcgKGluIG1pbGlzZWNvbmRzKSB0aGUgdG9hc3R5IHNob3dzIGJlZm9yZSBpdCdzIHJlbW92ZWQuIFNldCB0byBudWxsLzAgdG8gdHVybiBvZmYuXG4gIHRpbWVvdXQ6IG51bWJlciA9IDUwMDA7XG5cbiAgLy8gV2hhdCB0aGVtZSB0byB1c2UuIFBvc3NpYmxlIHZhbHVlczpcbiAgLy8gZGVmYXVsdCwgbWF0ZXJpYWwgb3IgYm9vdHN0cmFwXG4gIHRoZW1lOiBzdHJpbmcgPSAnZGVmYXVsdCc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2FzdHlTZXJ2aWNlRmFjdG9yeShjb25maWc6IFRvYXN0eUNvbmZpZyk6IFRvYXN0eVNlcnZpY2UgIHtcbiAgICByZXR1cm4gbmV3IFRvYXN0eVNlcnZpY2UoY29uZmlnKTtcbn1cblxuLyoqXG4gKiBUb2FzdHkgc2VydmljZSBoZWxwcyBjcmVhdGUgZGlmZmVyZW50IGtpbmRzIG9mIFRvYXN0c1xuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVG9hc3R5U2VydmljZSB7XG4gIC8vIEFsbG93ZWQgVEhFTUVTXG4gIHN0YXRpYyBUSEVNRVM6IEFycmF5PHN0cmluZz4gPSBbJ2RlZmF1bHQnLCAnbWF0ZXJpYWwnLCAnYm9vdHN0cmFwJ107XG4gIC8vIEluaXQgdGhlIGNvdW50ZXJcbiAgdW5pcXVlQ291bnRlcjogbnVtYmVyID0gMDtcbiAgLy8gVG9hc3REYXRhIGV2ZW50IGVtaXR0ZXJcbiAgcHJpdmF0ZSB0b2FzdHNFbWl0dGVyOiBFdmVudEVtaXR0ZXI8VG9hc3REYXRhPiA9IG5ldyBFdmVudEVtaXR0ZXI8VG9hc3REYXRhPigpO1xuICAvLyBDbGVhciBldmVudCBlbWl0dGVyXG4gIHByaXZhdGUgY2xlYXJFbWl0dGVyOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBUb2FzdHlDb25maWcpIHt9XG5cbiAgLyoqXG4gICAqIEdldCBsaXN0IG9mIHRvYXRzXG4gICAqL1xuICBnZXRUb2FzdHMoKTogT2JzZXJ2YWJsZTxUb2FzdERhdGE+IHtcbiAgICByZXR1cm4gdGhpcy50b2FzdHNFbWl0dGVyLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgZ2V0Q2xlYXIoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5jbGVhckVtaXR0ZXIuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIFRvYXN0IG9mIGEgZGVmYXVsdCB0eXBlXG4gICAqL1xuICBkZWZhdWx0KG9wdGlvbnM6IFRvYXN0T3B0aW9uc3xzdHJpbmd8bnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hZGQob3B0aW9ucywgJ2RlZmF1bHQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgVG9hc3Qgb2YgaW5mbyB0eXBlXG4gICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9ucyBJbmRpdmlkdWFsIHRvYXN0eSBjb25maWcgb3ZlcnJpZGVzXG4gICAqL1xuICBpbmZvKG9wdGlvbnM6IFRvYXN0T3B0aW9uc3xzdHJpbmd8bnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hZGQob3B0aW9ucywgJ2luZm8nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgVG9hc3Qgb2Ygc3VjY2VzcyB0eXBlXG4gICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9ucyBJbmRpdmlkdWFsIHRvYXN0eSBjb25maWcgb3ZlcnJpZGVzXG4gICAqL1xuICBzdWNjZXNzKG9wdGlvbnM6IFRvYXN0T3B0aW9uc3xzdHJpbmd8bnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hZGQob3B0aW9ucywgJ3N1Y2Nlc3MnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgVG9hc3Qgb2Ygd2FpdCB0eXBlXG4gICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9ucyBJbmRpdmlkdWFsIHRvYXN0eSBjb25maWcgb3ZlcnJpZGVzXG4gICAqL1xuICB3YWl0KG9wdGlvbnM6IFRvYXN0T3B0aW9uc3xzdHJpbmd8bnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hZGQob3B0aW9ucywgJ3dhaXQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgVG9hc3Qgb2YgZXJyb3IgdHlwZVxuICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnMgSW5kaXZpZHVhbCB0b2FzdHkgY29uZmlnIG92ZXJyaWRlc1xuICAgKi9cbiAgZXJyb3Iob3B0aW9uczogVG9hc3RPcHRpb25zfHN0cmluZ3xudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFkZChvcHRpb25zLCAnZXJyb3InKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgVG9hc3Qgb2Ygd2FybmluZyB0eXBlXG4gICAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9ucyBJbmRpdmlkdWFsIHRvYXN0eSBjb25maWcgb3ZlcnJpZGVzXG4gICAqL1xuICB3YXJuaW5nKG9wdGlvbnM6IFRvYXN0T3B0aW9uc3xzdHJpbmd8bnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hZGQob3B0aW9ucywgJ3dhcm5pbmcnKTtcbiAgfVxuXG5cbiAgLy8gQWRkIGEgbmV3IHRvYXN0IGl0ZW1cbiAgcHJpdmF0ZSBhZGQob3B0aW9uczogVG9hc3RPcHRpb25zfHN0cmluZ3xudW1iZXIsIHR5cGU6IHN0cmluZykge1xuICAgIGxldCB0b2FzdHlPcHRpb25zOiBUb2FzdE9wdGlvbnM7XG5cbiAgICBpZiAoaXNTdHJpbmcob3B0aW9ucykgJiYgb3B0aW9ucyAhPT0gJycgfHwgaXNOdW1iZXIob3B0aW9ucykpIHtcbiAgICAgIHRvYXN0eU9wdGlvbnMgPSA8VG9hc3RPcHRpb25zPntcbiAgICAgICAgdGl0bGU6IG9wdGlvbnMudG9TdHJpbmcoKVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9hc3R5T3B0aW9ucyA9IDxUb2FzdE9wdGlvbnM+b3B0aW9ucztcbiAgICB9XG5cbiAgICBpZiAoIXRvYXN0eU9wdGlvbnMgfHwgIXRvYXN0eU9wdGlvbnMudGl0bGUgJiYgIXRvYXN0eU9wdGlvbnMubXNnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ25nMi10b2FzdHk6IE5vIHRvYXN0IHRpdGxlIG9yIG1lc3NhZ2Ugc3BlY2lmaWVkIScpO1xuICAgIH1cblxuICAgIHR5cGUgPSB0eXBlIHx8ICdkZWZhdWx0JztcblxuICAgIC8vIFNldCBhIHVuaXF1ZSBjb3VudGVyIGZvciBhbiBpZFxuICAgIHRoaXMudW5pcXVlQ291bnRlcisrO1xuXG4gICAgLy8gU2V0IHRoZSBsb2NhbCB2cyBnbG9iYWwgY29uZmlnIGl0ZW1zXG4gICAgbGV0IHNob3dDbG9zZSA9IHRoaXMuX2NoZWNrQ29uZmlnSXRlbSh0aGlzLmNvbmZpZywgdG9hc3R5T3B0aW9ucywgJ3Nob3dDbG9zZScpO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSBhIHRoZW1lIHNldCwgbWFrZSBzdXJlIGl0J3MgYSB2YWxpZCBvbmVcbiAgICBsZXQgdGhlbWU6IHN0cmluZztcbiAgICBpZiAodG9hc3R5T3B0aW9ucy50aGVtZSkge1xuICAgICAgdGhlbWUgPSBUb2FzdHlTZXJ2aWNlLlRIRU1FUy5pbmRleE9mKHRvYXN0eU9wdGlvbnMudGhlbWUpID4gLTEgPyB0b2FzdHlPcHRpb25zLnRoZW1lIDogdGhpcy5jb25maWcudGhlbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoZW1lID0gdGhpcy5jb25maWcudGhlbWU7XG4gICAgfVxuXG4gICAgbGV0IHRvYXN0OiBUb2FzdERhdGEgPSA8VG9hc3REYXRhPntcbiAgICAgIGlkICAgICAgIDogdGhpcy51bmlxdWVDb3VudGVyLFxuICAgICAgdGl0bGUgICAgOiB0b2FzdHlPcHRpb25zLnRpdGxlLFxuICAgICAgbXNnICAgICAgOiB0b2FzdHlPcHRpb25zLm1zZyxcbiAgICAgIHNob3dDbG9zZTogc2hvd0Nsb3NlLFxuICAgICAgdHlwZSAgICAgOiAndG9hc3R5LXR5cGUtJyArIHR5cGUsXG4gICAgICB0aGVtZSAgICA6ICd0b2FzdHktdGhlbWUtJyArIHRoZW1lLFxuICAgICAgb25BZGQgICAgOiB0b2FzdHlPcHRpb25zLm9uQWRkICYmIGlzRnVuY3Rpb24odG9hc3R5T3B0aW9ucy5vbkFkZCkgPyB0b2FzdHlPcHRpb25zLm9uQWRkIDogbnVsbCxcbiAgICAgIG9uUmVtb3ZlIDogdG9hc3R5T3B0aW9ucy5vblJlbW92ZSAmJiBpc0Z1bmN0aW9uKHRvYXN0eU9wdGlvbnMub25SZW1vdmUpID8gdG9hc3R5T3B0aW9ucy5vblJlbW92ZSA6IG51bGxcbiAgICB9O1xuXG4gICAgLy8gSWYgdGhlcmUncyBhIHRpbWVvdXQgaW5kaXZpZHVhbGx5IG9yIGdsb2JhbGx5LCBzZXQgdGhlIHRvYXN0IHRvIHRpbWVvdXRcbiAgICAvLyBBbGxvd3MgYSBjYWxsZXIgdG8gcGFzcyBudWxsLzAgYW5kIG92ZXJyaWRlIHRoZSBkZWZhdWx0LiBDYW4gYWxzbyBzZXQgdGhlIGRlZmF1bHQgdG8gbnVsbC8wIHRvIHR1cm4gb2ZmLlxuICAgIHRvYXN0LnRpbWVvdXQgPSB0b2FzdHlPcHRpb25zLmhhc093blByb3BlcnR5KCd0aW1lb3V0JykgPyB0b2FzdHlPcHRpb25zLnRpbWVvdXQgOiB0aGlzLmNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gUHVzaCB1cCBhIG5ldyB0b2FzdCBpdGVtXG4gICAgLy8gdGhpcy50b2FzdHNTdWJzY3JpYmVyLm5leHQodG9hc3QpO1xuICAgIHRoaXMudG9hc3RzRW1pdHRlci5uZXh0KHRvYXN0KTtcbiAgICAvLyBJZiB3ZSBoYXZlIGEgb25BZGQgZnVuY3Rpb24sIGNhbGwgaXQgaGVyZVxuICAgIGlmICh0b2FzdHlPcHRpb25zLm9uQWRkICYmIGlzRnVuY3Rpb24odG9hc3R5T3B0aW9ucy5vbkFkZCkpIHtcbiAgICAgIHRvYXN0eU9wdGlvbnMub25BZGQuY2FsbCh0aGlzLCB0b2FzdCk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2xlYXIgYWxsIHRvYXN0c1xuICBjbGVhckFsbCgpIHtcbiAgICB0aGlzLmNsZWFyRW1pdHRlci5uZXh0KG51bGwpO1xuICB9XG5cbiAgLy8gQ2xlYXIgdGhlIHNwZWNpZmljIG9uZVxuICBjbGVhcihpZDogbnVtYmVyKSB7XG4gICAgdGhpcy5jbGVhckVtaXR0ZXIubmV4dChpZCk7XG4gIH1cblxuICAvLyBDaGVja3Mgd2hldGhlciB0aGUgbG9jYWwgb3B0aW9uIGlzIHNldCwgaWYgbm90LFxuICAvLyBjaGVja3MgdGhlIGdsb2JhbCBjb25maWdcbiAgcHJpdmF0ZSBfY2hlY2tDb25maWdJdGVtKGNvbmZpZzogYW55LCBvcHRpb25zOiBhbnksIHByb3BlcnR5OiBzdHJpbmcpIHtcbiAgICBpZiAob3B0aW9uc1twcm9wZXJ0eV0gPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmICghb3B0aW9uc1twcm9wZXJ0eV0pIHtcbiAgICAgIHJldHVybiBjb25maWdbcHJvcGVydHldO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy90b2FzdHkuc2VydmljZS50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb3JlXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQ29weXJpZ2h0IChDKSAyMDE2IFNlcmdleSBBa29wa29raHlhbnRzXG4vLyBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZS5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ha3NlcmcvbmcyLXRvYXN0eVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vdG9hc3R5LnV0aWxzJztcbmltcG9ydCB7IFRvYXN0eVNlcnZpY2UsIFRvYXN0RGF0YSwgVG9hc3R5Q29uZmlnIH0gZnJvbSAnLi90b2FzdHkuc2VydmljZSc7XG5cbi8qKlxuICogVG9hc3R5IGlzIGNvbnRhaW5lciBmb3IgVG9hc3QgY29tcG9uZW50c1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZzItdG9hc3R5JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGlkPVwidG9hc3R5XCIgW25nQ2xhc3NdPVwiW3Bvc2l0aW9uXVwiPlxuICAgICAgICA8bmcyLXRvYXN0ICpuZ0Zvcj1cImxldCB0b2FzdCBvZiB0b2FzdHNcIiBbdG9hc3RdPVwidG9hc3RcIiAoY2xvc2VUb2FzdCk9XCJjbG9zZVRvYXN0KHRvYXN0KVwiPjwvbmcyLXRvYXN0PlxuICAgIDwvZGl2PmBcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3R5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIFNldCBvZiBjb25zdGFudHMgZGVmaW5zIHBvc2l0aW9uIG9mIFRvYXN0eSBvbiB0aGUgcGFnZS5cbiAgICovXG4gIHN0YXRpYyBQT1NJVElPTlM6IEFycmF5PFN0cmluZz4gPSBbJ2JvdHRvbS1yaWdodCcsICdib3R0b20tbGVmdCcsICd0b3AtcmlnaHQnLCAndG9wLWxlZnQnLCAndG9wLWNlbnRlcicsICdib3R0b20tY2VudGVyJywgJ2NlbnRlci1jZW50ZXInXTtcblxuICBwcml2YXRlIF9wb3NpdGlvbjogc3RyaW5nID0gJyc7XG4gIC8vIFRoZSB3aW5kb3cgcG9zaXRpb24gd2hlcmUgdGhlIHRvYXN0IHBvcHMgdXAuIFBvc3NpYmxlIHZhbHVlczpcbiAgLy8gLSBib3R0b20tcmlnaHQgKGRlZmF1bHQgdmFsdWUgZnJvbSBUb2FzdENvbmZpZylcbiAgLy8gLSBib3R0b20tbGVmdFxuICAvLyAtIHRvcC1yaWdodFxuICAvLyAtIHRvcC1sZWZ0XG4gIC8vIC0gdG9wLWNlbnRlclxuICAvLyAtIGJvdHRvbS1jZW50ZXJcbiAgLy8gLSBjZW50ZXItY2VudGVyXG4gIEBJbnB1dCgpIHNldCBwb3NpdGlvbih2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBsZXQgbm90Rm91bmQgPSB0cnVlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBUb2FzdHlDb21wb25lbnQuUE9TSVRJT05TLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChUb2FzdHlDb21wb25lbnQuUE9TSVRJT05TW2ldID09PSB2YWx1ZSkge1xuICAgICAgICAgIG5vdEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChub3RGb3VuZCkge1xuICAgICAgICAvLyBQb3NpdGlvbiB3YXMgd3JvbmcgLSBjbGVhciBpdCBoZXJlIHRvIHVzZSB0aGUgb25lIGZyb20gY29uZmlnLlxuICAgICAgICB2YWx1ZSA9IHRoaXMuY29uZmlnLnBvc2l0aW9uO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuY29uZmlnLnBvc2l0aW9uO1xuICAgIH1cbiAgICB0aGlzLl9wb3NpdGlvbiA9ICd0b2FzdHktcG9zaXRpb24tJyArIHZhbHVlO1xuICB9XG5cbiAgZ2V0IHBvc2l0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgLy8gVGhlIHN0b3JhZ2UgZm9yIHRvYXN0cy5cbiAgdG9hc3RzOiBBcnJheTxUb2FzdERhdGE+ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IFRvYXN0eUNvbmZpZywgcHJpdmF0ZSB0b2FzdHlTZXJ2aWNlOiBUb2FzdHlTZXJ2aWNlKSB7XG4gICAgLy8gSW5pdGlhbGlzZSBwb3NpdGlvblxuICAgIHRoaXMucG9zaXRpb24gPSAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBgbmdPbkluaXRgIGlzIGNhbGxlZCByaWdodCBhZnRlciB0aGUgZGlyZWN0aXZlJ3MgZGF0YS1ib3VuZCBwcm9wZXJ0aWVzIGhhdmUgYmVlbiBjaGVja2VkIGZvciB0aGVcbiAgICogZmlyc3QgdGltZSwgYW5kIGJlZm9yZSBhbnkgb2YgaXRzIGNoaWxkcmVuIGhhdmUgYmVlbiBjaGVja2VkLiBJdCBpcyBpbnZva2VkIG9ubHkgb25jZSB3aGVuIHRoZVxuICAgKiBkaXJlY3RpdmUgaXMgaW5zdGFudGlhdGVkLlxuICAgKi9cbiAgbmdPbkluaXQoKTogYW55IHtcbiAgICAvLyBXZSBsaXN0ZW4gb3VyIHNlcnZpY2UgdG8gcmVjaWV2ZSBuZXcgdG9hc3RzIGZyb20gaXRcbiAgICB0aGlzLnRvYXN0eVNlcnZpY2UuZ2V0VG9hc3RzKCkuc3Vic2NyaWJlKCh0b2FzdDogVG9hc3REYXRhKSA9PiB7XG4gICAgICAvLyBJZiB3ZSd2ZSBnb25lIG92ZXIgb3VyIGxpbWl0LCByZW1vdmUgdGhlIGVhcmxpZXN0XG4gICAgICAvLyBvbmUgZnJvbSB0aGUgYXJyYXlcbiAgICAgIGlmICh0aGlzLnRvYXN0cy5sZW5ndGggPj0gdGhpcy5jb25maWcubGltaXQpIHtcbiAgICAgICAgdGhpcy50b2FzdHMuc2hpZnQoKTtcbiAgICAgIH1cbiAgICAgIC8vIEFkZCB0b2FzdHkgdG8gYXJyYXlcbiAgICAgIHRoaXMudG9hc3RzLnB1c2godG9hc3QpO1xuICAgICAgLy9cbiAgICAgIC8vIElmIHRoZXJlJ3MgYSB0aW1lb3V0IGluZGl2aWR1YWxseSBvciBnbG9iYWxseSxcbiAgICAgIC8vIHNldCB0aGUgdG9hc3QgdG8gdGltZW91dFxuICAgICAgaWYgKHRvYXN0LnRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy5fc2V0VGltZW91dCh0b2FzdCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gV2UgbGlzdGVuIGNsZWFyIGFsbCBjb21lcyBmcm9tIHNlcnZpY2UgaGVyZS5cbiAgICB0aGlzLnRvYXN0eVNlcnZpY2UuZ2V0Q2xlYXIoKS5zdWJzY3JpYmUoKGlkOiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKGlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIExldHMgY2xlYXIgYWxsIHRvYXN0c1xuICAgICAgICAgICAgdGhpcy5jbGVhckFsbCgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRXZlbnQgbGlzdGVuZXIgb2YgJ2Nsb3NlVG9hc3QnIGV2ZW50IGNvbWVzIGZyb20gVG9hc3R5Q29tcG9uZW50LlxuICAgKiBUaGlzIG1ldGhvZCByZW1vdmVzIFRvYXN0Q29tcG9uZW50IGFzc29zaWF0ZWQgd2l0aCB0aGlzIFRvYXN0LlxuICAgKi9cbiAgY2xvc2VUb2FzdCh0b2FzdDogVG9hc3REYXRhKSB7XG4gICAgdGhpcy5jbGVhcih0b2FzdC5pZCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgaW5kaXZpZHVhbCB0b2FzdCBieSBpZFxuICAgKiBAcGFyYW0gaWQgaXMgdW5pcXVlIGlkZW50aWZpZXIgb2YgVG9hc3RcbiAgICovXG4gIGNsZWFyKGlkOiBudW1iZXIpIHtcbiAgICBpZiAoaWQpIHtcbiAgICAgIHRoaXMudG9hc3RzLmZvckVhY2goKHZhbHVlOiBhbnksIGtleTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICBpZiAodmFsdWUub25SZW1vdmUgJiYgaXNGdW5jdGlvbih2YWx1ZS5vblJlbW92ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlLm9uUmVtb3ZlLmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnRvYXN0cy5zcGxpY2Uoa2V5LCAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgaWQgb2YgVG9hc3QgdG8gY2xvc2UnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIHRvYXN0c1xuICAgKi9cbiAgY2xlYXJBbGwoKSB7XG4gICAgdGhpcy50b2FzdHMuZm9yRWFjaCgodmFsdWU6IGFueSwga2V5OiBudW1iZXIpID0+IHtcbiAgICAgIGlmICh2YWx1ZS5vblJlbW92ZSAmJiBpc0Z1bmN0aW9uKHZhbHVlLm9uUmVtb3ZlKSkge1xuICAgICAgICB2YWx1ZS5vblJlbW92ZS5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnRvYXN0cyA9IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEN1c3RvbSBzZXRUaW1lb3V0IGZ1bmN0aW9uIGZvciBzcGVjaWZpYyBzZXRUaW1lb3V0cyBvbiBpbmRpdmlkdWFsIHRvYXN0cy5cbiAgICovXG4gIHByaXZhdGUgX3NldFRpbWVvdXQodG9hc3Q6IFRvYXN0RGF0YSkge1xuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2xlYXIodG9hc3QuaWQpO1xuICAgIH0sIHRvYXN0LnRpbWVvdXQpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9zcmMvdG9hc3R5LmNvbXBvbmVudC50cyIsIi8qKlxuICogQ2hlY2sgYW5kIHJldHVybiB0cnVlIGlmIGFuIG9iamVjdCBpcyB0eXBlIG9mIHN0cmluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcob2JqOmFueSkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiO1xufVxuXG4vKipcbiAqIENoZWNrIGFuZCByZXR1cm4gdHJ1ZSBpZiBhbiBvYmplY3QgaXMgdHlwZSBvZiBudW1iZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKG9iajogYW55KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwibnVtYmVyXCI7XG59XG5cbi8qKlxuICogQ2hlY2sgYW5kIHJldHVybiB0cnVlIGlmIGFuIG9iamVjdCBpcyB0eXBlIG9mIEZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iajogYW55KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIjtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL34vdHNsaW50LWxvYWRlciEuL3NyYy90b2FzdHkudXRpbHMudHMiLCIvLyBDb3B5cmlnaHQgKEMpIDIwMTYgU2VyZ2V5IEFrb3Brb2toeWFudHNcbi8vIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Frc2VyZy9uZzItdG9hc3R5XG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRvYXN0RGF0YSB9IGZyb20gJy4vdG9hc3R5LnNlcnZpY2UnO1xuXG4vKipcbiAqIEEgVG9hc3QgY29tcG9uZW50IHNob3dzIG1lc3NhZ2Ugd2l0aCB0aXRsZSBhbmQgY2xvc2UgYnV0dG9uLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZzItdG9hc3QnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9hc3RcIiBbbmdDbGFzc109XCJbdG9hc3QudHlwZSwgdG9hc3QudGhlbWVdXCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidG9hc3Quc2hvd0Nsb3NlXCIgY2xhc3M9XCJjbG9zZS1idXR0b25cIiAoY2xpY2spPVwiY2xvc2UoJGV2ZW50KVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInRvYXN0LnRpdGxlIHx8IHRvYXN0Lm1zZ1wiIGNsYXNzPVwidG9hc3QtdGV4dFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidG9hc3QudGl0bGVcIiBjbGFzcz1cInRvYXN0LXRpdGxlXCI+e3t0b2FzdC50aXRsZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxiciAqbmdJZj1cInRvYXN0LnRpdGxlICYmIHRvYXN0Lm1zZ1wiIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJ0b2FzdC5tc2dcIiBjbGFzcz1cInRvYXN0LW1zZ1wiPnt7dG9hc3QubXNnfX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdENvbXBvbmVudCB7XG5cbiAgQElucHV0KCkgdG9hc3Q6IFRvYXN0RGF0YTtcbiAgQE91dHB1dCgnY2xvc2VUb2FzdCcpIGNsb3NlVG9hc3RFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRXZlbnQgaGFuZGxlciBpbnZva2VzIHdoZW4gdXNlciBjbGlja3Mgb24gY2xvc2UgYnV0dG9uLlxuICAgKiBUaGlzIG1ldGhvZCBlbWl0IG5ldyBldmVudCBpbnRvIFRvYXN0eUNvbnRhaW5lciB0byBjbG9zZSBpdC5cbiAgICovXG4gIGNsb3NlKCRldmVudDogYW55KSB7XG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5jbG9zZVRvYXN0RXZlbnQubmV4dCh0aGlzLnRvYXN0KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vfi90c2xpbnQtbG9hZGVyIS4vc3JjL3RvYXN0LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAYW5ndWxhci9jb21tb25cIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBDb3B5cmlnaHQgKEMpIDIwMTYgU2VyZ2V5IEFrb3Brb2toeWFudHNcbi8vIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Frc2VyZy9uZzItdG9hc3R5XG5cbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmV4cG9ydCAqIGZyb20gJy4vc3JjL3RvYXN0eS5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL3RvYXN0eS5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBUb2FzdHlDb21wb25lbnQgfSBmcm9tICcuL3NyYy90b2FzdHkuY29tcG9uZW50JztcbmltcG9ydCB7IFRvYXN0Q29tcG9uZW50IH0gZnJvbSAnLi9zcmMvdG9hc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFRvYXN0eVNlcnZpY2UsIFRvYXN0eUNvbmZpZywgdG9hc3R5U2VydmljZUZhY3RvcnkgfSBmcm9tICcuL3NyYy90b2FzdHkuc2VydmljZSc7XG5cbmV4cG9ydCBsZXQgcHJvdmlkZXJzID0gW1xuICAgIFRvYXN0eUNvbmZpZyxcbiAgICB7IHByb3ZpZGU6IFRvYXN0eVNlcnZpY2UsIHVzZUZhY3Rvcnk6IHRvYXN0eVNlcnZpY2VGYWN0b3J5LCBkZXBzOiBbVG9hc3R5Q29uZmlnXSB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGRlY2xhcmF0aW9uczogW1RvYXN0Q29tcG9uZW50LCBUb2FzdHlDb21wb25lbnRdLFxuICAgIGV4cG9ydHM6IFsgVG9hc3RDb21wb25lbnQsIFRvYXN0eUNvbXBvbmVudF0sXG4gICAgcHJvdmlkZXJzOiBwcm92aWRlcnNcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3R5TW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBUb2FzdHlNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IHByb3ZpZGVyc1xuICAgICAgICB9O1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9+L3RzbGludC1sb2FkZXIhLi9pbmRleC50cyJdLCJzb3VyY2VSb290IjoiIn0=