#! /usr/bin/env node  

import chalk from "chalk";

let countDownDate = new Date("feb 22, 2024  10:00").getTime( );



 let x = setInterval(function() {

  
  let now = new Date().getTime();


  let diff = countDownDate - now;

  
  let  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  console.log(days);
  
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  console.log(hours);
  
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  console.log(minutes);
  
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);
console.log(seconds);


  console.log(chalk.bgBlueBright
  ( days + "d " + hours + "hrs "
  + minutes + "min" + seconds + "sec "));  

  
  if (diff < 0) {
    clearInterval(x);
      "EXPIRED";
  }
}, 1000);































