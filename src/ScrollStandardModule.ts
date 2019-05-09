import { Module } from "@wildebeest/js-modules";
import { ScrollModule } from "@wildebeest/scroll";
import { ComponentBindService, ComponentModule } from "@wildebeest/component";
import { Container } from "inversify";
import { ScrollBoxBinder } from "./ScrollBoxBinder";
import { CommonModule } from "@wildebeest/common";

export class ScrollStandardModule implements Module
{
    getDependencies(): Array<any>
    {
        return [ScrollModule, ComponentModule, CommonModule];
    }

    register(container: Container): void
    {        
        container.bind<ScrollBoxBinder>("ComponentBinder").to(ScrollBoxBinder).whenTargetNamed('scroll-box');
    }

    boot(container: Container): void
    {
        let componentBindService: ComponentBindService = container.get<ComponentBindService>(ComponentBindService);
        componentBindService.addBinder('scrollBox', {
            selector: '.std-scroll-box', 
            binder: container.getNamed("ComponentBinder", 'scroll-box')
        });
    }
}