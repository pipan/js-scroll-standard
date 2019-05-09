"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var scroll_1 = require("@wildebeest/scroll");
var component_1 = require("@wildebeest/component");
var ScrollBoxBinder_1 = require("./ScrollBoxBinder");
var common_1 = require("@wildebeest/common");
var ScrollStandardModule = (function () {
    function ScrollStandardModule() {
    }
    ScrollStandardModule.prototype.getDependencies = function () {
        return [scroll_1.ScrollModule, component_1.ComponentModule, common_1.CommonModule];
    };
    ScrollStandardModule.prototype.register = function (container) {
        container.bind("ComponentBinder").to(ScrollBoxBinder_1.ScrollBoxBinder).whenTargetNamed('scroll-box');
    };
    ScrollStandardModule.prototype.boot = function (container) {
        var componentBindService = container.get(component_1.ComponentBindService);
        componentBindService.addBinder('scrollBox', {
            selector: '.std-scroll-box',
            binder: container.getNamed("ComponentBinder", 'scroll-box')
        });
    };
    return ScrollStandardModule;
}());
exports.ScrollStandardModule = ScrollStandardModule;
//# sourceMappingURL=ScrollStandardModule.js.map