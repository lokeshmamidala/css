let array = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = [];

for (let i = 0; i < array.length; i++) {
  let isDuplicate = false;
  for (let j = 0; j < uniqueArray.length; j++) {
    if (array[i] === uniqueArray[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    uniqueArray[uniqueArray.length] = array[i];
  }
}

console.log(uniqueArray); 
