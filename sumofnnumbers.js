function sumofnumbers(num){
    if(num==1){
        return 1
    }
    return num + sumofnumbers(num-1)
}
let result = sumofnumbers(6)
console.log(result)