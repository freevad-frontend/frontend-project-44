#!/usr/bin/env node
import greeting from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const greetingUser = greeting('May I have your name?');
console.log(`Hello, ${greetingUser}!`);
