export function keyboardinput(key)
{
    var input = document.querySelector('input');
    
    if(key === 'Backspace'){
        input.value = input.value.slice(0,-1);
    }
    else if(key === 'Delete'){
        input.value = '';
        document.getElementById('result').innerHTML="";
    }
    else if(['Shift','Ctrl','Control','CapsLock','Alt','ArrowDown','ArrowUp','ArrowLeft','ArrowRight'].includes(key)){
        return;
    }
    else if(input.value === '' && ['+','-','x','*','/','%','^','!'].includes(key)){
        alert("Invalid format used");
      }
    else if(input.value.charAt(input.value.length - 1) === '(' && ['x','*','/','%','^','!'].includes(key)){
    alert("Invalid format used");
    }
    else if(input.value === '' && key === '.'){
    input.value += 0;
    input.value += key;
    }
    else if(key === '*'){
        input.value += 'x';
    }
    else{
        input.value += key;
    }
}
