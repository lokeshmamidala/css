
function sentenceWordCount(sentence) {

    let extraCharacterArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '/', '.', ',', '?', ':']

    for (const character of extraCharacterArray) {

        sentence = sentence.replaceAll(character, "");

    }

    console.log(sentence)

    let array = sentence.trim().toLowerCase().split(" ");

    let obj = {};

    for (let i = 0; i < array.length; i++) {

        array[i] in obj ? obj[array[i]]++ : obj[array[i]] = 1

    }

    return obj;

}

let sentence = "Yes, there are several ways to check whether a key exists in a dictionary in Python. In JavaScript, you can check whether a key exists in an object using several methods."

console.log()
console.log(sentenceWordCount(sentence))
console.log()