#!/usr/bin/env node

//Игра: "Калькулятор"

import greeting from "../src/cli.js";

console.log('Welcome to the Brain Games!');

const greetingUser = greeting('May I have your name?')
console.log('Hello, ' + greetingUser + '!');

//сама игра, оформленная как функция (чтобы потом можно было перенести куда угодно и вызывать отсюда)
const calculator = (userName) => {
	console.log('What is the result of the expression?'); //пишем строчку условия игры
	const min = 1; // задаем минимальное число
	const max = 20; // задаем максимальное число
	const mathSymbols = ['+', '-', '*']; // задаем массив операций
	for (let i = 1; i <= 3; i += 1) {
		const randomInt1 = Math.floor(Math.random() * (max - min + 1)) + min; //генерируем первое случайное число
		const randomInt2 = Math.floor(Math.random() * (max - min + 1)) + min; //генерируем второе случайное число
		const mathSymbol = Math.floor(Math.random() * (2 - 0 + 1)) + 0; //генерируем  случайное число индекс операции от 0 до 2

		var result;
		switch (mathSymbol) {
			case 0: result = randomInt1 + randomInt2;
				break;
			case 1: result = randomInt1 - randomInt2;
				break;
			case 2: result = randomInt1 * randomInt2;
		}
		
		console.log('Question: ' + randomInt1 + mathSymbols[mathSymbol] + randomInt2); //пишем число пользователю
		const answer = greeting('Your answer:') //спрашиваем его ответ
		console.log('Your answer: ' + answer); //показываем его ответ
		
		if (answer == result) {
			console.log('Correct!');			
		}; //если ответ верный - пишем что правильно и уходим на новый цикл
		
		if (answer != result) {
			console.log("'" + answer + "' is wrong answer ;(. Correct answer was '" + result + "'.");
			console.log("Let's try again, " + userName + "!");
			return;
		}; //если ответ неверный - пишем что неверно, прерываем цикл и всю программу
	};
	console.log('Congratulations, ' + userName + '!'); //если все разы ответил правильно - хвалим и выходим
	return;
};
const calculatorThisUser = calculator(greetingUser);//собственно вызов игры с именем пользователя