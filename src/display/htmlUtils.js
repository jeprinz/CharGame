//@flow

import only from 'onlyjs';
import type {XVar} from 'x-reactor';
import type {Obj} from 'onlyjs';

export function horizontalExpandSized(elements : Array<HTMLElement>, values : Array<number>){
  var tds = [];
  for (var i = 0; i < elements.length; ++i){
    var td = only.html({td: elements[i],
      css: {
        width: (values[i]*100) + "%"
      }});
    tds.push(td);
  }
  var table = only.html({table: [
    {tr: tds,
      css: {width: "100%"}},
  ],
    css: {width: "100%"}});
  return table;
}

export function verticalFit(elements : Array<Obj>) : HTMLElement {
  return only.html({div: elements});
}

export function horizontalFit(elements : Array<Obj>) : HTMLElement {
  var tds = elements.map(function(element){
    return only.html({td: element});
  })
  var table = only.html({table: [
    {tr: tds},
  ]});
  return table;
}

export function xhtml(el : XVar<Obj>): HTMLElement{
  var div = only.html({div : el.get()});
  el.onUpdate(() => {
    div.childNodes.forEach((node) => div.removeChild(node))
    div.appendChild(only.html(el.get()));
  })
  return div;
}
