#!/usr/bin/env node

// Игра: "Простое ли число?"

import eachGame from '../src/index.js';

const taskCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
eachGame('Prime', taskCondition);
