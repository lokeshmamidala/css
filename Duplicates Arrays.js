

const array = [10, 20, 30, 40, 50, 10, 20, 80, 90, 110, 10];

function removingDuplicatesFromArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] == array[j]) {
                array.splice(j, 1);
            }
        }
    }
    return array;
}

console.log(removingDuplicatesFromArray(array));