//@flow

import only from "onlyjs";
import {horizontalFit} from "./htmlUtils";
import {xvar} from "x-reactor";
import type {XVar} from "x-reactor";
import type {Move} from '../Character/Move';
import {centered, shrink, noSpace, font, border} from './css';

let verticalLine = {
  div : [],
  css : {
    backgroundColor : 'orange',
    outline : '2px solid orange',
    height : '3em'
  }
};

export function moveSelector(n : number) : [HTMLElement, XVar<Move>]{
  let el = only.html({
    div : [
      {
        div : [
          horizontalFit([
            {
              p : {b : "Move " + n + ":"},
              css : font
            },
            verticalLine,
            {p : "stuff"}, {p : "more stuff"}
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
