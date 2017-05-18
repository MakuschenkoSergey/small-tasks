var keys = document.getElementsByClassName("num");
var operators = ['+', '-'];
var input = document.getElementById("display");
var operations = document.getElementsByClassName('sign');
var sign = undefined,
    op1 = "",
    op2 = "",
    result,
    c;

/**
 * handler for buttons [+, -]
 */
for (var k = 0; k < operations.length; k++){
  operations[k].onclick = function(){
    sign = this.innerHTML;
  };
};


/**
 * handler for buttons [1,2,3,4,5,6,7,8,9]
 */
for ( var i = 0; i < keys.length; i++){
  keys[i].onclick = function(){
    
    if (sign == undefined){
      op1 += this.innerHTML;
      input.value = op1;
    }else{
      input.value = "";
      op2 += this.innerHTML;
      input.value = op2;
    }
  };
 };

/**
 * handler for button '='
 */
document.getElementById('eval').onclick = function(){
  if (sign == '+'){
    result = parseInt(op1) + parseInt(op2);
  } else {
    result = parseInt(op1) - parseInt(op2);
  };
  input.value = result;
};

/**
 * handler for "C" button.
 */
document.getElementById("c").onclick = function(){
  input.value = "";
  op1 = op2 = "";
};