//@flow

import only from 'onlyjs';

export function setupFont(){

  /*
  hypothetically the following should setup the font. However, it doesn't really seem to work,
  so I just put it directly in index.html.
  */
  // only.makeCss("@font-face", {
      // fontFamily : "pixelated",
      // src : "url(AtariSmall.tff) format('truetype')"
    // });
}

//Some css that will commonly be used
export let font = {
  fontFamily : "pixelated",
  color : "orange"
}

export let centered = {
  marginLeft : 'auto',
  marginRight : 'auto',
  textAlign : 'center'
}
export let shrink = {
  display : 'block'
}
export let noSpace = {
  margin : 0,
  padding : 0
}

export let border = {
  outline : '4px solid orange',
}
