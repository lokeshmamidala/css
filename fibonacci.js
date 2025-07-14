// function fibonacci(num){
//     let a = 0
//     let b = 1
//     let c = 0
//     let count = 0
//     while(count <= num ){
//         console.log(a)
//         c= a+b
//         a=b
//         b=c
//         count++
        
//     }
//     return c
// }
// let result = fibonacci(7)
// console.log(result)
function revfib(num){
    if(num === 0)return 0
    if(num === 1)return 1
    return revfib(num-1)+revfib(num-2)
}
let a =revfib(8)
console.log(a)