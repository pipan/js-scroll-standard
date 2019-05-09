import 'ts-jest';
import { Application } from '@wildebeest/js-modules';
import { ComponentBindService, Component } from '@wildebeest/component';
import { ScrollStandardModule } from '../src/ScrollStandardModule';
import { ScrollBoxBinder } from '../src/ScrollBoxBinder';
import { DomService } from '@wildebeest/common';

let app: Application = new Application();
app.run([ScrollStandardModule]);
let domService: DomService = app.getContainer().get(DomService);
let bindService: ComponentBindService = app.getContainer().get(ComponentBindService);

test("register services", () => {
    expect(app.getContainer().getNamed('ComponentBinder', 'scroll-box')).toBeInstanceOf(ScrollBoxBinder);
});

test("bind scroll box to html element", () => {
    let element: HTMLElement = domService.create('<div class="std-scroll-box" data-on-scroll-class="std-scroll--show" data-hide-delay="500"><div>no content</div></div>');
    domService.insert([element], document.body);

    let components: Map<string, Array<Component>> = bindService.bindToElement(document.body);

    expect(components.get('scrollBox')).toBeDefined();
    expect(components.get('scrollBox').length).toEqual(1);
});