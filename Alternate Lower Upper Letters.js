
// Alternate lower and upper cased character in a String

function isLowerCase(character) {

    return character === character.toLowerCase();

}

function alternateEitherLowerUpper(string) {

    let flag = 0;

    isLowerCase(string[0]) ? flag = 0 : flag = 1;

    let newString = "";

    for (let i = 0; i < string.length; i++) {
        if (flag == 0 && string[i] != " ") {
            newString += string[i].toLowerCase();
            flag = 1;
        }
        else if (flag == 1 && string[i] != " ") {
            newString += string[i].toUpperCase();
            flag = 0;
        }
        else {
            newString += string[i];
        }
    }

    return newString;

}

console.log(alternateEitherLowerUpper("Ravi is a good boy"));
