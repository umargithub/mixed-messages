
function generateRandomNumber(num) {
	return Math.floor(Math.random() * num)
}

const foodCategory = {
	starter: ['salad', 'wings', 'samosa', 'shrimp'],
	mainCourse: ['butter chicken', 'chicken biryani', 'fish curry', 'egg curry', 'mutton biryani'],
	dessert: ['ice-cream', 'shahi tukda', 'cookies', 'pastries']
}

function foodPlatter(obj) {

	let platter = [];

	for(let prop in obj) {
		let optionIndex = generateRandomNumber(obj[prop].length);

		switch(prop) {
			case 'starter':
				platter.push(`We recommend ${obj[prop][optionIndex]} for your starter.`)
				break;
			case 'mainCourse':
				platter.push(`You should try ${obj[prop][optionIndex]} in main course.`)
				break;
			case 'dessert':
				platter.push(`You must try ${obj[prop][optionIndex]} for your dessert.`)
				break;
			default:
	        platter.push('You should select yourself.')
		}
	}

	return platter;

}


function showFoodPlatter(func, obj) {
	const formatted = func(obj).join('\n')
	console.log(formatted);
}

showFoodPlatter(foodPlatter, foodCategory);
