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

let images = document.getElementsByTagName("img"),
    imgCon = document.querySelector("#imgs"),
    starter = 0;

// Function for looping through images
function display(){
  for(let i = 0; i < images.length; i++){
    images[i].style.display= "none";
  }
  images[starter].style.display= "block";
};

// Function for the next button
function rightSlider(){
  if (starter == images.length - 1) {
    starter = 0;
  } else {
    starter++;
  };
  display();
};

// Function for the prev button
function leftSlider(){
  if (starter == 0) {
    starter = images.length - 1;
  } else {
    starter--;
  };
  display();
};
