function findmaxelement(arr){
    if(arr.length==0){
        return undefined 
    }
    let max =arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}
let arr =[ 5,4,3,2,1]
console.log(findmaxelement(arr))