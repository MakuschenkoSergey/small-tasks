"use strict"

var input = document.getElementById("login"),
	input2 = document.getElementById("password"),
	re = /^[a-z]{0,10}$/,
	pass = /[1-9]/;

input.oninput = function() {
	
	if (re.test(input.value)) {
		document.getElementById('log-msg').innerHTML = "Good";
		document.getElementById('log-msg').style = "border: 1px solid lightgreen";		
	} else {
		document.getElementById('log-msg').innerHTML = "bad";
		document.getElementById('log-msg').style = "border: 1px solid red";
	}
}

input2.oninput = function() {
	
	if (pass.test(input2.value)) {
		document.getElementById('pass-msg').innerHTML = "Good";
		document.getElementById('pass-msg').style = "border: 1px solid lightgreen";		
	} else {
		document.getElementById('pass-msg').innerHTML = "bad";
		document.getElementById('pass-msg').style = "border: 1px solid red";
	}
}
	
// усложнить регулярное выражение чтобы валидировались еще и цифры
// изменить цвет бордера и текста всответствии результату.
// добавить очистку сообщений при пустоте (возникает после бэкспейса)
// в длиннуне не больше 10 ти символов

// написать проверку пассворда, (применить # $ % хоть 1)

// ** указать в сообщении необходимость спецсимволов
