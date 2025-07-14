let start = 0;
let end = 100;

for (let i = start; i <= end; i++) {
  let str = i.toString();
  let reversed = str.split('').reverse().join('');
  
  if (str === reversed) {
    console.log(i);
  }
}
