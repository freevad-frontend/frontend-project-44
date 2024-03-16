### Hexlet tests and linter status:

[![Actions Status](https://github.com/freevad-frontend/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/freevad-frontend/frontend-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/aaaf529c3aebf3beddf4/maintainability)](https://codeclimate.com/github/freevad-frontend/frontend-project-44/maintainability)


#Brain Games

A set of 5 console games.
You have to answer the question you are asked.
If the answer is incorrect, the game ends. Any incorrect input is considered an error and is equal to a wrong answer.
If the answer is correct - the game continues for three consecutive rounds.

#System requirements
	Node.js v20.11.1

#Installation
##for Windows:

	- Install the latest version of Node.js on your system from https://nodejs.org/en/download
	- Clone the created repository to your computer using command 
		`git clone https://github.com/freevad-frontend/frontend-project-44`
	- Go to the folder frontend-project-44
		`cd frontend-project-44`

##for Ubuntu:

	- Install the latest version of Node.js on your system 
		`node install`
	- Clone the created repository to your computer using command 
		`git clone https://github.com/freevad-frontend/frontend-project-44`
	- Go to the folder frontend-project-44
		`cd frontend-project-44`
	- Install make with the install command running npm ci
		`make install npm ci`
	- Initialize your npm package inside the root directory of your project using command npm init
		`npm init`
	- Install the package on your system using npm link. The npm link command may require running with sudo
		`npm link`


#Gameplay
##The game "Parity Check"
###Description
The essence of the game is the following: a random number is shown and you should answer yes if the number is even or no if it is odd.
###Launch

- for Windows:
  `node bin/brain-even.js`
- for Ubuntu:
  `make brain-even`

[![asciicast](https://asciinema.org/a/645949.svg)](https://asciinema.org/a/645949)

###Calculator game
###Description
The essence of the game is the following: a random mathematical expression is shown, for example 35 + 16, which you need to calculate and write down the correct answer.
##Launch

- for Windows:
  `node bin/brain-calc.js`
- for Ubuntu:
  `make brain-calc`

[![asciicast](https://asciinema.org/a/645946.svg)](https://asciinema.org/a/645946?t=15)

##The game "Greatest Common Divisor (GND)"
###Description
The essence of the game is as follows: two random numbers are shown, for example, 25 50. It is necessary to calculate and record the greatest common divisor of these numbers.
###Launch

- for Windows:
  `node bin/brain-gcd.js`
- for Ubuntu:
  `make brain-gcd`

[![asciicast](https://asciinema.org/a/DFNAWnMdLvuWFZGlTARzFJXGy.svg)](https://asciinema.org/a/DFNAWnMdLvuWFZGlTARzFJXGy)

##The game "Arithmetic Progression"
###Description
The essence of the game is as follows: a series of numbers is shown that form an arithmetic progression, replacing any of the numbers with two dots. It is necessary to determine this number.
###Launch

- for Windows:
  `node bin/brain-progression.js`
- for Ubuntu:
  `make brain-progression`

[![asciicast](https://asciinema.org/a/645951.svg)](https://asciinema.org/a/645951)

##The game "Is the number prime?"
###Description
The essence of the game is as follows: a number is shown. It is necessary to determine whether this number is simple or not and enter yes if it is simple and no if it is not.
###Launch

- for Windows:
  `node bin/brain-prime.js`
- for Ubuntu:
  `make brain-prime`

[![asciicast](https://asciinema.org/a/BGtQ1I9jGPojqvXs3DhVKcfyh.svg)](https://asciinema.org/a/BGtQ1I9jGPojqvXs3DhVKcfyh)
