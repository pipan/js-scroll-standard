import 'ts-jest';
import { Application } from '@wildebeest/js-modules';
import { ScrollStandardModule } from '../src/ScrollStandardModule';
import { ScrollBoxBinder } from '../src/ScrollBoxBinder';

let app: Application = new Application();
app.run([ScrollStandardModule]);

test("register services", () => {
    expect(app.getContainer().getNamed('ComponentBinder', 'scroll-box')).toBeInstanceOf(ScrollBoxBinder);
});