import { injectable, inject } from "inversify";
import { ComponentBinder, Component } from "@wildebeest/component";
import { ScrollBox } from "@wildebeest/scroll";

@injectable()
export class ScrollBoxBinder implements ComponentBinder
{
    protected scrollBoxFactory: () => ScrollBox;
    constructor(@inject('Factory<ScrollBox>') scrollBoxFactory: () => ScrollBox)
    {
        this.scrollBoxFactory = scrollBoxFactory;
    }

    bind(element: HTMLElement): Component
    {
        let scrollBox: ScrollBox = this.scrollBoxFactory();
        let config: any = {
            onScroll: {}
        };
        if (element.getAttribute('data-on-scroll-class')) {
            config.onScroll.class = element.getAttribute('data-on-scroll-class');
        }
        if (element.getAttribute('data-hide-delay')) {
            config.onScroll.delay = element.getAttribute('data-hide-delay');
        }
        scrollBox.initialize(element, config);
        return scrollBox;
    }
}