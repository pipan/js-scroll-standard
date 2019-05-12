import { ComponentBinder, Component, ElementService } from "@wildebeest/component";
import { ScrollBox } from "@wildebeest/scroll";
export declare class ScrollBoxBinder implements ComponentBinder {
    protected scrollBoxFactory: () => ScrollBox;
    protected elementService: ElementService;
    constructor(scrollBoxFactory: () => ScrollBox, elementService: ElementService);
    bind(element: HTMLElement): Component;
}
