function sortByStrings(s, t) {
	var output = "";
	var obj = {};
	for (var i = 0; i < s.length; i++) {
		obj[s[i]] ? (obj[s[i]] += s[i]) : (obj[s[i]] = s[i]);
	}
	for (var j = 0; j < t.length; j++) {
		obj[t[j]] ? (output += obj[t[j]]) : null;
	}
	return output;
}

console.log(sortByStrings("weather", "therapyw")); //theeraw
console.log(sortByStrings("good", "odg")); //oodg
