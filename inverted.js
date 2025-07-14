function invertedTriangle(num) {
    let pattern = "";
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < i; j++) {
            pattern += " ";
        }
        for (let k = 0; k < 2 * (num - i) - 1; k++) {
            pattern += "*";
        }
        pattern += "\n";
    }
    return pattern;
}

console.log(invertedTriangle(5));
                    