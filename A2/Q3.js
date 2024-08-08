//factorial
var num = 10;
var factorial = 1;
for (i = 1; i <= num; i++) 
    {
        factorial *= i;
    }
console.log(`The factorial of ${num} = ${factorial}.`);