import readlineSync from 'readline-sync';
const greeting = (question) => {
	const userName = readlineSync.question(question + ' ');
	return userName;
};

export default greeting;