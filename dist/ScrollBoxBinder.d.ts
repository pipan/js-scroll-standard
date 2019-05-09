import { ComponentBinder, Component } from "@wildebeest/component";
import { ScrollBox } from "@wildebeest/scroll";
export declare class ScrollBoxBinder implements ComponentBinder {
    protected scrollBoxFactory: () => ScrollBox;
    constructor(scrollBoxFactory: () => ScrollBox);
    bind(element: HTMLElement): Component;
}
