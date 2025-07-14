let num = 729
let sum = 0
while(num>0){
    sum = sum +(num%10)**2;
    num = Math.floor(num/10);
}
console.log(num,sum);