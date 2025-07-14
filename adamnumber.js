function reverseDigits(num) {
    let reversed = 0;
    while (num > 0) {
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return reversed;
}

function checkAdamNumber(num) {
    const squareNum = num * num;
    const reversedNum = reverseDigits(num);
    const squareReversed = reversedNum * reversedNum;
    
    return squareNum === reverseDigits(squareReversed);
}
console.log(checkAdamNumber(17))