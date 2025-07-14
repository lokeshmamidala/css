function lettercount(str) {
    let result = {};
    str = str.split(" ")
    for (let char of str) {
        if (result[char]) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    return result;
}

console.log(lettercount("The concat() method can be used instead of the plus operator. These two lines do the same  "));
