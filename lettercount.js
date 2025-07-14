function lettercount(str) {
    let result = {};
    for (let char of str) {
        if (result[char]) {
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    return result;
}

console.log(lettercount("mamidala satya bhaskara lokesh"));
