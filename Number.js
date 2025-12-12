function checkNumberType(num) {

    let result;

    if (num > 0) {
        result = "The number is positive";
    } else if (num < 0) {
        result = "The number is negative";
    } else {
        result = "The number is zero";
    }

    return result;  
}

console.log(checkNumberType(10));
console.log(checkNumberType(-1));
console.log(checkNumberType(0))