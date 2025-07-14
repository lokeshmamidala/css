let n = 121;  
let next = n + 1;

while (true) {
  let str = next.toString();
  let reversed = str.split('').reverse().join('');
  
  if (str === reversed) {
    console.log("Next palindrome is:", next);
    break;
  }
  
  next++;
}