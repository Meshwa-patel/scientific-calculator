// class for binary operators
class calculate_binary{
    constructor(number1, number2) {
        this.number1 = number1;  
        this.number2 = number2;  
    }
    addition = () => {
        return this.number1 + this.number2;
    }
    substract = () => {
        return this.number1 - this.number2;
    }
    multiply = () => {
        return this.number1 * this.number2;
    }
    divide = () => {
        try {
            if(this.number2 === 0){
                throw new Error("Cannot divide by 0");
            }
            else{
                return this.number1 / this.number2;
            }
        } catch (Error) {
            return Error.message;
        }
    }
    power = () => {
        return Math.pow(this.number1,this.number2);
    }
    modulus = () => {
        return this.number1 % this.number2;
    }
}

// class for pi and e
class calculate{
    pi = () => {
        return Math.PI;
    }
    e = () => {
        return Math.E;
    }
}

// class foe unary operators
class calculate_unary{
    constructor(number) {
        this.number = number;  
    }
    factorial(){
        let number = this.number;
        let fac = 1;
        if(number === 0){
            return 1;
        }
        for(let i =1 ; i <= number ; i++){
            fac = fac*i;
        }
        return fac;
    }
}
calculate_unary.prototype.squareroot = function(){
    return Math.sqrt(this.number);
}
calculate_unary.prototype.sin = function(){
    return Math.sin(this.number);
}
calculate_unary.prototype.cos = function(){
    return Math.cos(this.number);
}
calculate_unary.prototype.tan = function(){
    return Math.tan(this.number);
}
calculate_unary.prototype.abs = function(){
    return Math.abs(this.number);
}
calculate_unary.prototype.log = function(){
    return Math.log10(this.number);
}
calculate_unary.prototype.ln = function(){
    return Math.log(this.number);
}

calculate_unary.prototype.asin = function(){
    return Math.asin(this.number);
}

calculate_unary.prototype.acos = function(){
    return Math.acos(this.number);
}

calculate_unary.prototype.atan = function(){
    return Math.atan(this.number);
}

calculate_unary.prototype.sinh = function(){
    return Math.sinh(this.number);
}
calculate_unary.prototype.cosh = function(){
    return Math.cosh(this.number);
}
calculate_unary.prototype.tanh = function(){
    return Math.tanh(this.number);
}

calculate_unary.prototype.asinh = function(){
    return Math.asinh(this.number);
}

calculate_unary.prototype.acosh = function(){
    return Math.acosh(this.number);
}

calculate_unary.prototype.atanh = function(){
    return Math.atanh(this.number);
}

export {calculate,calculate_binary, calculate_unary}