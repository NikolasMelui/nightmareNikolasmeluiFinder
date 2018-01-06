const Nightmare = require('nightmare');
const dream = Nightmare({ show: 'true' });

dream
	.goto('https://duckduckgo.com')
	.wait(3000)
	// .end() TODO: close window
	.then(result => {
		console.log('Okey!');
	});
