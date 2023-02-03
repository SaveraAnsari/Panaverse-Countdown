#! /usr/bin/env node  
import chalk from "chalk";
let countDownDate = new Date("feb 2, 2023  20:00").getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    let diff = countDownDate - now;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);
    console.log(chalk.bgBlueBright(days + " days and " + hours + ":"+ minutes + ":" + seconds));
    if (diff < 0) {
        clearInterval(x);
        "EXPIRED";
    }
}, 1000);
