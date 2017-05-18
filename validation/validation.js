"use strict"

var input = document.getElementById("login"),
	re = /[a-z]/;

input.oninput = function() {
	// document.getElementById('log-msg').innerHTML = input.value;
	if (re.test(input.value)) {
		document.getElementById('log-msg').innerHTML = "Good";
	} else {
		document.getElementById('log-msg').innerHTML = "bad";
	}
}
