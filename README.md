# Stanadrd Scroll Module

Standardisation css class naming for Scroll Module

## Installation

```sh
npm install --save @wildebeest/scroll-standard
```

## Requirements

It's usefull to know these libraries:

* inversify
* @wildebeest/js-modules
* @wildebeest/scroll

## Preview

![](https://media.giphy.com/media/UuHW8aLzpAh2GABnub/giphy.gif)

> You have to add your own styles for scroll bar. That are `scroll-bar` and `scroll-bar__mark` css classes.

```css
.scroll-bar__mark {
    background-color: #b2d624;
    width: 6px;
    border-radius: 3px;
    position: absolute;
    right: 0px;
    top: 50%;
    cursor: grab;
}

.scroll-bar {
    position: absolute;
    right: 0px;
    top: 0px;
    height: 100%;
    transform: translateX(100%);
    transition: transform ease 160ms;
    background-color: #e3e8d3;
    width: 6px;
    border-radius: 4px;
}

.scroll-box--hover:hover .scroll-bar, .scroll-box--show .scroll-bar {
    transform: translateX(0%);
}
```

## Usage

#### HTML

```html
<!DOCTYPE html>
<html>
    <head>...</head>
    <body>
        <div class="std-scroll-box">
            <div>...</div>
        </div>
    </body>
</html>
```

#### JS

```js
import { Application } from '@wildebeest/js-modules';
import { ScrollStandardModule } from '@wildebeest/scroll-standard';
import { ComponentBindService } from '@wildebeest/component';

let app = new Application();
app.run([ScrollStandardModule]);
let componentBindService = app.getContainer().get(ComponentBindService);
componentBindService.bindToElement(document.body);
```

`componentBindService.bindToElement` will find every occurence of `.std-scroll-box` in element you provide as a parameter and initialize ScrollBox on that element. In this case, we want to find every `.std-scroll-bar` in the entire body.

## Configuration

You can add your own css class when onScroll event occures.

```html
<div class="std-scroll-box" data-on-scroll-class="scroll--show">
```

Add delay when removing your onScroll css class, by adding `data-hide-delay`. This is a value in ms.

```html
<div class="std-scroll-box" data-on-scroll-class="scroll--show" data-hide-delay="500">
```

