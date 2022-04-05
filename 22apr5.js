//convert usd to cny (chinese yuan) with a ratio of usd at 1 and cny at 6.75.
//Ensure that the result looks something like this '600.00 Chinese Yuan'
//It must always have two decimal places


function toYuan(usd) {
	return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
}
