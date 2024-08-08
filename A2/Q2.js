//Basic calculator

function calculator(n1,n2,o) {
    var result=0;
    switch(o) {
        case '+':
             result = n1 + n2;
            console.log(`${n1} + ${n2} = ${result}`);
            break;
    
        case '-':
             result = n1 - n2;
            console.log(`${n1} - ${n2} = ${result}`);
            break;
    
        case '*':
             result = n1 * n2;
            console.log(`${n1} * ${n2} = ${result}`);
            break;
    
        case '/':
             result = n1 / n2;
            console.log(`${n1} / ${n2} = ${result}`);
            break;
        
        case '%':
            result = n1 % n2;
            console.log(`${n1} % ${n2} = ${result}`);
            break;
        default:
            console.log('Invalid operator');
            break;
    }
}

var o = '-';
var n1 = 9;
var n2 = 4;
calculator(n1,n2,o);
