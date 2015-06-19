import {inject, computedFrom} from 'aurelia-framework';
import SVG from 'svg.js';

@inject(Element)
export class About{
  heading = 'This is another page';

  constructor(element) {
    this.element = element;
  }

  attached()
  {
    console.log('attached');
    var draw = SVG('drawing').size(300, 300)
    var rect = draw.rect(100, 100).attr({ fill: '#f06' })
  }
}