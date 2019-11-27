//@flow

import only from "onlyjs";
import {horizontalFit} from "./htmlUtils";
import {xvar} from "x-reactor";
import type {XVar} from "x-reactor";
import {centered, shrink, noSpace, border} from './css';
import {moveSelector} from './moveSelector';

console.log('hi')

let [moveshtml1, movesvar1] = moveSelector(1);
let [moveshtml2, movesvar2] = moveSelector(2);
let [moveshtml3, movesvar3] = moveSelector(3);

export function setupDisplay(){
  if (!document.body) throw new Error("Unexpectedly missing <body>.");
  document.body.appendChild(
    only.html({
      div : [
        {
          div : [],
          css : only.merge(centered, border, {
            backgroundColor : "black",
            width : "200px",
            height : "300px"
          })

        },
        {// vertical space
          div : [],
          css : {
            height : '1em'
          }
        },
        moveshtml1,
        moveshtml2,
        moveshtml3,
      ],
      css : only.merge(centered, shrink)
    })
  )
}

type Move = number;
