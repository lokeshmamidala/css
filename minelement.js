function findminelement(arr){
    if(arr.length==0){
        return undefined 
    }
    let min =arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i]
        }
    }
    return min
}
let arr =[ 5,4,3,2,1]
console.log(findminelement(arr))