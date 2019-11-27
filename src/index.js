//@flow
import {xvar} from "x-reactor";
import type {XVar} from "x-reactor";
import {setupDisplay} from "./display/main";
import {setupFont} from './display/css';

setupFont();
setupDisplay();

let a = xvar(() => 7)
let b : XVar<number> = xvar(() => a.xget() * 2)

console.log("hey")

function yoot(n : number) : number{
  return n
}
