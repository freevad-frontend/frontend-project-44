#!/usr/bin/env node

// Игра: "Калькулятор"

import greeting from '../src/cli.js';

import calculator from '../src/games/brain-calc.js';

console.log('Welcome to the Brain Games!');

const greetingUser = greeting('May I have your name?');
console.log(`Hello, ${greetingUser}!`);

const calculatorThisUser = calculator(greetingUser);// собственно вызов игры с именем пользователя
