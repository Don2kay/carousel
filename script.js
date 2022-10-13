//Hint
//Critically Examine the mark up and the CSS
//Select the left and right buttons
//Select element with id of imgs
//select all the images
//crate a function to change image on button click
//you may need to learn about about the setInterval method
//you will need to transform the images offscreen to implement sliding effect
//Goodluck😎 

"use strict";

//On click method

let images = document.getElementsByTagName("img"),
    imgCon = document.querySelector("#imgs"),
    starter = 0;

// // Function for looping through images
function display(){
  for(let i = 0; i < images.length; i++){
    imgCon.style.transform = `translate(${-starter * 500}px)`;
  };
};

// // Function for the next button
function rightSlider(){
  if (starter == images.length - 1) {
    starter = 0;
  } else {
    starter++;
  };
  display();
};

// // Function for the prev button
function leftSlider(){
  if (starter == 0) {
    starter = images.length - 1;
  } else {
    starter--;
  };
  display();
};

// AddEventListener Method
// const leftBtn = document.querySelector("#left"),
//       rightBtn = document.querySelector("#right"),
//       imageCon = document.querySelector("#imgs"),
//       images = document.querySelectorAll("img");
// let counter = 0;

// const changeImage = function(){
//   if(counter > images.length - 1){
//     counter = 0;
//   } else if (counter < 0){
//     counter = images.length - 1;
//   }
//   imageCon.style.transform = `translate(${-counter * 500}px)`
// };

// rightBtn.addEventListener("click", function(){
//   counter++
//   changeImage();
// })
// leftBtn.addEventListener("click", function(){
//   counter--
//   changeImage();
// });