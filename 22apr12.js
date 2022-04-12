//Given a string with numbers and letters, return only the letters


function stringClean(s) {
	return s.split('').filter(element => element != parseInt(element)).join('');
};
