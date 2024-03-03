#!/usr/bin/env node
console.log('Welcome to the Brain Games!');

import greeting from "../src/cli.js";
const greetingUser = greeting('May I have your name?')
console.log('Hello, ' + greetingUser + '!');

import even from "./brain-even.js";
const evenUser = even(greetingUser);