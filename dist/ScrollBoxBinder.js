"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var component_1 = require("@wildebeest/component");
var ScrollBoxBinder = (function () {
    function ScrollBoxBinder(scrollBoxFactory, elementService) {
        this.scrollBoxFactory = scrollBoxFactory;
        this.elementService = elementService;
    }
    ScrollBoxBinder.prototype.bind = function (element) {
        var scrollBox = this.scrollBoxFactory();
        var config = {
            onScroll: {}
        };
        if (element.getAttribute('data-on-scroll-class')) {
            config.onScroll.class = element.getAttribute('data-on-scroll-class');
        }
        if (element.getAttribute('data-hide-delay')) {
            config.onScroll.delay = element.getAttribute('data-hide-delay');
        }
        scrollBox.initialize(element, config);
        this.elementService.addComponent(element, scrollBox);
        return scrollBox;
    };
    ScrollBoxBinder = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('Factory<ScrollBox>')), __param(1, inversify_1.inject(component_1.ElementService)),
        __metadata("design:paramtypes", [Function, component_1.ElementService])
    ], ScrollBoxBinder);
    return ScrollBoxBinder;
}());
exports.ScrollBoxBinder = ScrollBoxBinder;
//# sourceMappingURL=ScrollBoxBinder.js.map