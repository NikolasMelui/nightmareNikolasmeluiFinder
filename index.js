const Nightmare = require('nightmare');

const dream = Nightmare({ show: 'true' });
dream
	.goto('https://duckduckgo.com')
	.type('input', 'NikolasMelui') // First arg is field, second is info
	.click('input#search_button_homepage')
	.wait(3000)
	.evaluate(() => document.querySelector('div#links_wrapper').innerHTML)
	// .end() TODO: close window
	.then(res => {
		console.log(res);
	});
