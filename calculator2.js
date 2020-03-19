$(document).ready(function(){

var num1 = ""
var num2 = ""
var operator = ""
var numdisplay1 = $('#first-number');
var numdisplay2 = $('#second-number');
var opdisplay = $('#operator');
var resultdisplay = $('#result');

$('button').on("click",function(event){
    var regnum = /^\d+$/ 
    var value =  event.currentTarget.value
    //numdisplay1.text(event.currentTarget.value)
    if(value.match(regnum)){
        if (operator === ""){
            num1 = num1.concat(value)
            numdisplay1.text(num1)
        }
        else{
            num2 = num2.concat(value)
            numdisplay2.text(num2)
        }
    }
    else if(value.match("=")){
        console.log(value);
    }
    else if(value.match("clear")){
        console.log(value); 
    }
    else{
        console.log(value);
        operator = value
        opdisplay.text(operator)
    }
})
/*create functions for equals and clear
//equals needs to run the math using the nums and operator, 
and return the result to #result. 
function equals (num1,num2,operator) {
    var results = 0;
    swtich statements operators = "- + *" 
    case (operator === "+"){
        results = parseint(num1) + parseint(num2):
        ... ...
        resultdisplay.text(results)
    }
    */


});