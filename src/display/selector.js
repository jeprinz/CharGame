//@flow

import only from "onlyjs";
import {xvar} from "x-reactor";
import type {XVar} from "x-reactor";
import {centered, shrink, noSpace, font, border} from './css';
import {xhtml, hoverVar, horizontalFit} from './htmlUtils';
import {Map} from 'immutable';
import {List} from 'immutable';
import type {Obj} from 'onlyjs';

export function selector <T> (values : Map<T, Obj> , defaultVal : T) : [HTMLElement, XVar<T>]{
  const value : XVar<T> = xvar(() => defaultVal);
  const error = only.html({p : "something is very wrong", css : {color : 'blue'}});

  const toDisplay : XVar<Obj> = xvar(() => values.get(value.xget(), error));
  const isHovering : XVar<boolean> = xvar(() => false)//hoverVar(html)

  const hover = {
    div : horizontalFit(Array.from(values.values())),
    css : only.merge(border, {
      position : 'absolute',
      backgroundColor : 'black'
    })
  }

  const selectorHtml = xhtml(xvar(() =>
    ({
      div : [toDisplay.xget()].concat(!isHovering.xget() ? [] : [hover]),
      css : (isHovering.xget() ? border : {})
    })
  ))

  hoverVar(selectorHtml, isHovering)

  /*
  This whole section kinda fucked. I think maybe I should replace only wih react?
  unless i'm just being dumb.
  I think the problem is that HTMLElement values are not really values so much as pointers.

  OTHER SOLUTION: only ever do only.html at the last minute. We have to work with other kinds
  of values up unil then.
  Obj is type of
  */

  // global.thing = selectorHtml

  return [selectorHtml, value]
}
