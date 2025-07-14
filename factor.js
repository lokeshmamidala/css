let n = 220
let count = 0
for(i =1;i <=n; i++){
    if(n %i ==0){
        console.log(i);
        count++;
    }
}
console.log(count);