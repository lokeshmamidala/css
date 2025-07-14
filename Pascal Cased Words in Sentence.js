
// Converting each word into pascal case

function pascalSentence(string) {

    return string.split(" ").map((ele) => (ele[0].toUpperCase() + ele.slice(1).toLowerCase())).join(" ");

}

console.log(pascalSentence("Ravi is a good boy"))