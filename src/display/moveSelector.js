//@flow

import only from "onlyjs";
import {horizontalFit} from "./htmlUtils";
import {xvar} from "x-reactor";
import type {XVar} from "x-reactor";
import type {Move} from '../Character/Move';
import {centered, shrink, noSpace, font, border} from './css';
import {selector} from './selector';
import {Map} from 'immutable';

let verticalLine = {
  div : [],
  css : {
    backgroundColor : 'orange',
    outline : '2px solid orange',
    height : '3em'
  }
};

let horizontalDivider = {
  div : [],
  css : {
    width : '1em'
  }
}
let moves = {
  a : {p : "AAA", css : {color : 'white'}},
  b : {p : "BBB", css : {color : 'white'}},
  c : {p : "CCC", css : {color : 'white'}},
}
export function moveSelector(n : number) : [HTMLElement, XVar<Move>]{
  let [selectorHtml, selectedValue] = selector(Map(moves), "a");
  let el = only.html({
    div : [
      {
        div : [
          horizontalFit([
            {
              p : {b : "Move " + n},
              css : font
            },
            verticalLine,
            horizontalDivider,
            {
              p : "Base:",
              css : only.merge(font, {color : 'white'})
            },
            selectorHtml,
            horizontalDivider,
            {
              p : "Traits:",
              css : only.merge(font, {color : 'white'})
            }
          ])
        ],
        css : only.merge(border, {
          display : 'inline-block',
          // borderRadius : '7px', //can't get this to work for some reason
          overflow: 'hidden',
          backgroundColor : 'hsl(0, 0%, 0%)'
        })
      }
    ],
    css : only.merge(centered)
  })
  return [el, xvar(() => 4)]
}
