// import React from 'react';
// import HeroSection from '/Users/michellekong/my-app/src/Components/HeroSection.js';

// const Typewriter = function(txtElement, words, wait = 3000) {
//     this.txtElement = txtElement;
//     this.words = words;
//     this.txt = '';
//     this.wordIntex = 0;
//     this.wait = parseInt(wait, 10);
//     this.type();
//     this.isDeleting = false;
// }

// // Init ON MK Load
// document.addEventListener('MKContentLoaded', init);

// Typewriter.prototype.type = function() {
//     const i = this.wordIndex % this.words.length;
//     // Current index of word
//     const fullTxt = this.words[i];
//     //get full text of current word
    
//     //check if it's deleting
//     if(this.isDeleting) {
//         //Remove char
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//         // Add char
//         this.txt = fullTxt.substring(0,this.txt.length) + 1;
//     }

//     this.txtElement.innerHTML = `<span class = "txt">${this.txt}</span>`;
//     //insert txt into element

//     setTimeout(() => this.type(), 500)
// }

// //Init App
// function init() {
//     const txtElement = document.querySelector('.txt-type');
//     const words = JSON.parse(txtElement.getAttribute('data-words'));
//     const wait = txtElement.getAttribute('data-wait');
//     new Typewriter(txtElement, words, wait);
// }

// export default Typewriter;