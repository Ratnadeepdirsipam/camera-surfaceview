// import { Cropper } from "cropper.min.js";
// import Cropper from "cropper.min.js";
// import * as module from "cropper.min.js";
// import cropperjs from 'bcjs.js'
// import { hi } from './jqry.js'
// import Jcrop from "jcrop";
function newimgcapture(track){
    console.log(track)
    return new ImageCapture(track)
}

function jcropp()
{
    console.log("jcrop")
    // return Jcrop
}
// console.log(hi)
// jQuery
// $.getScript("./jqry.js");

// $.getScript(',/cropper.min.js', function(img)
// {
//     console.log('deepu')
//     // return new Cropper(img)
//     // script is now loaded and executed.
//     // put your dependent JS here.
// });
// function newcropper(img){
//     console.log("img")
//     // return new Cropper(img)
// }


// ChromeSamples = {
//     log: function() {
//       var line = Array.prototype.slice.call(arguments).map(function(argument) {
//         return typeof argument === 'string' ? argument : JSON.stringify(argument);
//       }).join(' ');
  
//       document.querySelector('#log').textContent += line + '\n';
//     },
  
//     clearLog: function() {
//       document.querySelector('#log').textContent = '';
//     },
  
//     setStatus: function(status) {
//       document.querySelector('#status').textContent = status;
//     },
  
//     setContent: function(newContent) {
//       var content = document.querySelector('#content');
//       while(content.hasChildNodes()) {
//         content.removeChild(content.lastChild);
//       }
//       content.appendChild(newContent);
//     }
//   };