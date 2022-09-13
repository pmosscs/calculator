const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);
	const num3 = Number(tokens[3]);

		console.log('tokens', tokens);
		console.log('input', input);

			console.log('mathSymbol', mathSymbol);
            console.log('num1', num1);
            console.log('num2', num2);
			console.log('num3', num3)

		if (mathSymbol === '+') {
			console.log('answer:', num1 + num2 + num3);
		} else if (mathSymbol === '-') {
			console.log('answer:', num1 - num2 - num3);
		} else if (mathSymbol === '*') {
			console.log('answer:', num1 * num2 * num3);
		} else if (mathSymbol === '/') {
			console.log('answer:', num1 / num2);
		} else if (mathSymbol === 'sqrt') {
			console.log('answer:', Math.sqrt(num1));
		} else if (mathSymbol === 'sq') {
			console.log('answer', num1 ** 2);
		} else if (mathSymbol === 'cube') {
			console.log('answer', num1 ** 3);
		} else if (mathSymbol === 'exp') {
			console.log('answer', num1 ** num2);
		} else if (mathSymbol === '%') {
			console.log('answer', num1 % num2);
		}



	// This line closes the connection to the command line interface.
	reader.close()

});
