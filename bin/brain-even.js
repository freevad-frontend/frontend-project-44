#!/usr/bin/env node

// Игра: "Проверка на чётность"

import greeting from '../src/cli.js';

import even from '../src/games/brain-even.js';

console.log('Welcome to the Brain Games!');

const greetingUser = greeting('May I have your name?');
console.log(`Hello, ${greetingUser}!`);

even(greetingUser);// вызов игры с именем пользователя
