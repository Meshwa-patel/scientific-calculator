
export function convert_to_infix(equation) {
    let infix_arr = [];
    let temp_num = '';

    for (let i = 0; i < equation.length; i++) {
        let char = equation[i];

        if (!/\d|\./.test(char)) {
            // If we encounter a digit, handle multi-digit numbers
            if (temp_num !== '') {
                infix_arr.push(temp_num);
                temp_num = '';
            }

            // Handle negative sign at the beginning or after operators
            if (char === '-' && i === 0) {
                infix_arr.push('0'); 
                infix_arr.push(char);
            }
            if(char === '-' &&  ['+', '*', '/', '(', '^'].includes(equation[i - 1]))
            {
                temp_num += char;
            }
            else if(char === 'x'){
                infix_arr.push('*')
            }
            // Handle functions like sin, cos, tan, abs, log, ln
            else if (char === 's' && equation[i + 1] === 'i' && equation[i + 3] === '(') {
                infix_arr.push('sin');
                i += 2;
            }
            else if (char === 'c' && equation[i + 1] === 'o' && equation[i + 3] === '(') {
                infix_arr.push('cos');
                i += 2;
            }
            else if (char === 't' && equation[i + 1] === 'a'&& equation[i + 3] === '(') {
                infix_arr.push('tan');
                i += 2;
            }
            else if (char === 'a' && equation[i + 1] === 'b') {
                infix_arr.push('abs');
                i += 2;
            }
            else if (char === 'l' && equation[i + 1] === 'o') {
                infix_arr.push('log');
                i += 2;
            }
            else if (char === 'l' && equation[i + 1] === 'n') {
                infix_arr.push('ln');
                i += 1;
            }
            // handle sin-1 , cos-1, tan-1
            else if (char === 'a' && equation[i + 1] === 's' && equation[i + 4] === '(') {
                infix_arr.push('asin');
                i += 3; 
            } 
            else if (char === 'a' && equation[i + 1] === 'c' && equation[i + 4] === '(') {
                infix_arr.push('acos');
                i += 3; 
            }
            else if (char === 'a' && equation[i + 1] === 't' && equation[i + 4] === '(') {
                infix_arr.push('atan');
                i += 3; 
            }
            // Handle functions like sinh, cosh, tanh
            else if (char === 's' && equation[i + 1] === 'i' && equation[i + 4] === '(') {
                infix_arr.push('sinh');
                i += 3;
            }
            else if (char === 'c' && equation[i + 1] === 'o' && equation[i + 4] === '(') {
                infix_arr.push('cosh');
                i += 3;
            }
            else if (char === 't' && equation[i + 1] === 'a' && equation[i + 4] === '(') {
                infix_arr.push('tanh');
                i += 3;
            }
            // handle sinh-1 , cosh-1, tanh-1
            else if (char === 'a' && equation[i + 1] === 's' && equation[i + 5] === '(') {
                infix_arr.push('asinh');
                i += 4; 
            } 
            else if (char === 'a' && equation[i + 1] === 'c' && equation[i + 5] === '(') {
                infix_arr.push('acosh');
                i += 4; 
            }
            else if (char === 'a' && equation[i + 1] === 't' && equation[i + 5] === '(') {
                infix_arr.push('atanh');
                i += 4; 
            }
            else {
                // For any other character, just push it
                infix_arr.push(char);
            }
        } 
        else {
            // Handle multi-digit numbers
            temp_num += char;
        }
    }

    // If a number is left in temp_num at the end, push it to infix_arr
    if (temp_num !== '') {
        infix_arr.push(temp_num);
    }

    return infix_arr;
}
