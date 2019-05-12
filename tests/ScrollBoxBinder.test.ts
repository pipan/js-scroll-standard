import 'ts-jest';
import { Application } from '@wildebeest/js-modules';
import { ComponentBindService, Component, ElementService } from '@wildebeest/component';
import { ScrollStandardModule } from '../src/ScrollStandardModule';
import { DomService } from '@wildebeest/common';
import { ScrollBox } from '@wildebeest/scroll';

let app: Application = new Application();
app.run([ScrollStandardModule]);
let domService: DomService = app.getContainer().get(DomService);
let bindService: ComponentBindService = app.getContainer().get(ComponentBindService);
let elementService: ElementService = app.getContainer().get(ElementService);

test("bind scroll box to html element", () => {
    let element: HTMLElement = domService.create('<div class="std-scroll-box" data-on-scroll-class="std-scroll--show" data-hide-delay="500"><div>no content</div></div>');
    domService.insert([element], document.body);

    expect(elementService.hasComponent(element, ScrollBox)).toEqual(false);
    let components: Map<string, Array<Component>> = bindService.autoBind(document.body);

    expect(components.get('scrollBox')).toBeDefined();
    expect(components.get('scrollBox').length).toEqual(1);

    expect(elementService.hasComponent(element, ScrollBox)).toEqual(true);
});