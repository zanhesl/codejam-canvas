import {image4x4, image32x32} from './images.js';

const DEFAULT_SIZE = 256;


const ctx = document.querySelector(`.canvas-main`)

const resizeButtons = document.querySelectorAll(`.resize-canvas button`);

// var request = new XMLHttpRequest();
// request.open("GET", "../data/4x4.json", false);
// request.send(null);
// request.onreadystatechange = function() {
//   if ( request.readyState === 4 && request.status === 200 ) {
//     var my_JSON_object = JSON.parse(request.responseText);
//     console.log(my_JSON_object);
//   }
// }



resizeButtons.forEach(function(element) {
  let resizeValue = element.innerHTML.split(`x`)[0];
  element.addEventListener(`click`, (evt) => {
    [ctx.height, ctx.width] = [resizeValue, resizeValue];
    ctx.style.transform = `scale(${DEFAULT_SIZE / resizeValue})`;
  });
})
