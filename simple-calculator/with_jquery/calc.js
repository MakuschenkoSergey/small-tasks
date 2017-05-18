/**
 * Simple calculator with jquery;
 */

'use strict'

var keys = $('.num');
var input = $("#display");
var operations = $(".sign");
var sign = undefined;
var op1 = "",
	op2 = "",
	result,
	c;

/**
 * handler for buttons [+, -]
 */
$.each( operations, function(key, value) {
	value.onclick = function(){
		sign = this.innerHTML;
	};
});


/**
 * handler for buttons [1,2,3,4,5,6,7,8,9]
 */
$.each( keys, function(key, value) {
	value.onclick = function(){
		if (sign == undefined){
      		op1 += this.innerHTML;
      		input.val(op1);
    	}else{
      		input.val('');
      		op2 += this.innerHTML;
      		input.val(op2);
    	}
	}
});

/**
 * handler for '=' button
 */
$('#eval').click( function(){
	  if (sign == '+'){
	    result = parseInt(op1) + parseInt(op2);
	  } else {
	    result = parseInt(op1) - parseInt(op2);
	  };
	  input.val(result);

});

/**
 * handler for 'Clear" button
 */
$("#c").click( function(){
  input.val("");
  op1 = op2 = "";
});