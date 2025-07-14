
// Reversing Words in String

function reversedWordsInString(string) {
    return string.split(" ").map((ele) => (ele.split("").reverse().join(""))).join(" ");
}

console.log(reversedWordsInString("Ashok"))