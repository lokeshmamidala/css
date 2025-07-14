

function removeDuplicateFromString(string) {
    return removingDuplicatesFromArray(string.toLowerCase().split("")).join("")
}

console.log(removeDuplicateFromString("HariHaraVeeraMallu"))