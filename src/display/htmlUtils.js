//@flow

import only from 'onlyjs';
import type {XVar} from 'x-reactor';
import type {Obj} from 'onlyjs';
import {xvar} from 'x-reactor';

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

export function verticalFit(elements : Array<Obj>) : Obj {
  return {div: elements};
}

export function horizontalFit(elements : Array<Obj>) : Obj {
  var tds = elements.map(function(element){
    return {td: element};
  })
  var table = {table: [
    {tr: tds},
  ]};
  return table;
}

export function xhtml(el : XVar<Obj>): HTMLElement{
  var div = only.html({div : el.get()});
  el.onUpdate(() => {
    div.removeChild(div.childNodes[0])
    div.appendChild(only.html(el.get()));
  })
  return div;
}

export function hoverVar(el : HTMLElement, v : XVar<boolean>) {
  el.addEventListener('mouseover', () => {
      v.set(() => true)
    })
  el.addEventListener('mouseout', () => {
      v.set(() => false)
    })
}
