function Sorted(arr){
   for(let i = 0;i < arr.length;i++){
    if(arr[i + 1] < arr[i])
         return false;
   }
   return true;
}
let result = Sorted([1,1,3,4]);
console.log(result);