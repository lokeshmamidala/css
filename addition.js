let prompt = require('prompt-sync')();
function sum(n){
let count = 0;
let sum = 0;            
for (let i = 1; i <= n; i++) {
    if (n % i === 0) {         
        sum += i;
        
     console.log(i); 
    }
}

     console.log(sum); 
}
let s =prompt("enter the value :");
sum(s);

  
