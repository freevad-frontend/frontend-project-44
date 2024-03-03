#!/usr/bin/env node
console.log('Welcome to the Brain Games!');
//import readlineSync from 'readline-sync';
//const userName = readlineSync.question('May I have your name? ');
//console.log('Hello, ' + userName + '!');

import greeting from "../src/cli.js";
console.log('Hello, ' + greeting() + '!');