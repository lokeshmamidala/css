let n = 13;
if (n % 3 == 0 && n % 5 == 0) {
    console.log("fizz buzz");
} else if (n % 3 === 0) {
    console.log("fizz");
} else if (n % 5 === 0) {
    console.log("buzz");
} else {
    console.log(n);
}
