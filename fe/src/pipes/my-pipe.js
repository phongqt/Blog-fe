///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MyPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyPipe = (function () {
                function MyPipe() {
                }
                MyPipe.prototype.transform = function (text, args) {
                    return text.split(' ').map(function (str) {
                        return str.charAt(0).toUpperCase() + str.slice(1);
                    }).join(' ');
                };
                MyPipe = __decorate([
                    core_1.Pipe({ name: 'capitalizeWords' }), 
                    __metadata('design:paramtypes', [])
                ], MyPipe);
                return MyPipe;
            }());
            exports_1("MyPipe", MyPipe);
        }
    }
});
//# sourceMappingURL=my-pipe.js.map