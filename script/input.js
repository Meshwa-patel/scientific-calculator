import { clearHistory } from "./history.js";

export function reply(clicked_id,unit)
{
    var input = document.querySelector('input');

    var value = document.getElementById(clicked_id).getAttribute("value");
    
    if(value === 'nd'){
      toggle_text();
    }
    else if(value === 'cl'){
      input.value = '';
      document.getElementById('result').innerHTML="";
    }
    else if(value === 'bs'){
      const functions = ['asin(', 'acos(', 'atan(', 'sin(', 'cos(', 'tan(', 'asinh(', 'acosh(', 'atanh(', 'sinh(', 'cosh(', 'tanh(', 'log(', 'ln(', 'abs(','^2','√(','^(','(-','^3'];
      for (const func of functions) {
          if (input.value.endsWith(func)) {
              input.value = input.value.slice(0, -func.length);
              return; 
          }
      }
      // If no function match is found, remove the last character
      input.value = input.value.slice(0, -1);      
    }
    else if(clicked_id === 'clear-history'){
      clearHistory();
    }
    else if(value === 'deg' || value === 'rad'){
      toggle_unit();
      unit = value;
    }
    else if(input.value === '' && ['+','-','x','*','/','%','^(','^2','!','^3'].includes(value)){
      alert("Invalid format used");
    }
    else if(input.value.charAt(input.value.length - 1) === '(' && ['x','*','/','%','^(','^2','!','^3'].includes(value)){
      alert("Invalid format used");
    }
    else if(input.value === '' && value === '.'){
      input.value += 0;
      input.value += value;
    }
    else if(input.value.charAt(input.value.length - 1) === ')' && ['sin(','cos(','tan(','√','(','log(','ln(','(-','asin(','acos(','atan(','sinh(','cosh(','tanh(','asinh(','acosh(','atanh(','0','1','2','3','4','5','6','7','8','9'].includes(value)){
      input.value += 'x'
      input.value += value;
    }
    else{
        input.value += value;
    }
  return unit;
}
function toggle_unit() {
  var x = document.getElementById("10");
  if (x.innerHTML === "deg") {
    x.innerHTML = "rad";
    x.value = "rad";

  } else if(x.innerHTML === "rad"){
    x.innerHTML = "deg";
    x.value = "deg";
  }
}
//togle fuction to toggle buttons when 2nd is clicked
function toggle_text() {
  var x = document.getElementById("2");
  if (x.innerHTML === "π") {
    x.innerHTML = "2<sup>x</sup>";
    x.value = "2^(";

  } else {
    x.innerHTML = "π";
    x.value = "π";
  }

  var x = document.getElementById("3");
  if (x.innerHTML === "e") {
    x.innerHTML = "x<sup>3</sup>";
    x.value = "^3";

  } else {
    x.innerHTML = "e";
    x.value = "e";
  }

  var x = document.getElementById("10");
  if (x.innerHTML === "%") {
    x.innerHTML = "deg";
    x.value = "deg";

  }
  else {
    x.innerHTML = "%";
    x.value = "%";
  }

  var x = document.getElementById("7");
  if (x.innerHTML === "sin") {
    x.innerHTML = "sin<sup>-1</sup>";
    x.value = "asin(";

  } else {
    x.innerHTML = "sin";
    x.value = "sin(";
  }

  var y = document.getElementById("8");
  if (y.innerHTML === "cos") {
    y.innerHTML = "cos<sup>-1</sup>";
    y.value = "acos(";

  } else {
    y.innerHTML = "cos";
    y.value = "cos("
  }

  var z = document.getElementById("9");
  if (z.innerHTML === "tan") {
    z.innerHTML = "tan<sup>-1</sup>";
    z.value = "atan(";

  } else {
    z.innerHTML = "tan";
    z.value = "tan("
  }

  var z = document.getElementById("6");
  if (z.innerHTML === "x<sup>2</sup>") {
    z.innerHTML = "sinh";
    z.value = "sinh(";

  } else {
    z.innerHTML = "x<sup>2</sup>";
    z.value = "^2"
  }

  var z = document.getElementById("11");
  if (z.innerHTML === "√x") {
    z.innerHTML = "cosh";
    z.value = "cosh(";

  } else {
    z.innerHTML = "√x";
    z.value = "√("
  }

  var z = document.getElementById("16");
  if (z.innerHTML === "x<sup>y</sup>") {
    z.innerHTML = "tanh";
    z.value = "tanh(";

  } else {
    z.innerHTML = "x<sup>y</sup>";
    z.value = "^("
  }

  var z = document.getElementById("21");
  if (z.innerHTML === "|x|") {
    z.innerHTML = "sinh<sup>-1</sup>";
    z.value = "asinh(";

  } else {
    z.innerHTML = "|x|";
    z.value = "abs("
  }

  var z = document.getElementById("26");
  if (z.innerHTML === "log") {
    z.innerHTML = "cosh<sup>-1</sup>";
    z.value = "acosh(";

  } else {
    z.innerHTML = "log";
    z.value = "log("
  }

  var z = document.getElementById("31");
  if (z.innerHTML === "ln") {
    z.innerHTML = "tanh<sup>-1</sup>";
    z.value = "atanh(";

  } else {
    z.innerHTML = "ln";
    z.value = "ln("
  }
}