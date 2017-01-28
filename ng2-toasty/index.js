// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-toasty
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
export * from './src/toasty.service';
export * from './src/toasty.component';
import { ToastyComponent } from './src/toasty.component';
import { ToastComponent } from './src/toast.component';
import { ToastyService, ToastyConfig, toastyServiceFactory } from './src/toasty.service';
export var providers = [
    ToastyConfig,
    { provide: ToastyService, useFactory: toastyServiceFactory, deps: [ToastyConfig] }
];
export var ToastyModule = (function () {
    function ToastyModule() {
    }
    ToastyModule.forRoot = function () {
        return {
            ngModule: ToastyModule,
            providers: providers
        };
    };
    ToastyModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [ToastComponent, ToastyComponent],
                    exports: [ToastComponent, ToastyComponent],
                    providers: providers
                },] },
    ];
    /** @nocollapse */
    ToastyModule.ctorParameters = function () { return []; };
    return ToastyModule;
}());
