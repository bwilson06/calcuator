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
        equalsFunction();
    }
    else if(value.match("clear")){
        console.log(value); 
        clearDisplay()
    }
    else{
        console.log(value);
        operator = value
        opdisplay.text(operator)
    }

    function equalsFunction() {
        var results = 0;
        switch (operator){
        case "-":
            results = parseInt(num1) - parseInt(num2)
            resultdisplay.text(results)
            break;
        case "+":
            results = parseInt(num1) + parseInt(num2)
            resultdisplay.text(results)
            break;
        case "/":
            results = parseInt(num1) / parseInt(num2)
            resultdisplay.text(results)
            break;
        case "*":
            results = parseInt(num1) * parseInt(num2)
            resultdisplay.text(results)
            break;
        case "^":
            results = Math.pow(num1, num2)
            resultdisplay.text(results)
            break;
            default:
            break;
        
        }
    }

    function clearDisplay(){
        num1 = '';
        num2 = '';
        operator = '';
        numdisplay1.text(num1)
        numdisplay2.text(num2)
        opdisplay.text(operator)
        resultdisplay.text('')
    };

  });

});