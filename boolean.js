function boolean(a,b,c){
    if((a | c) && (b |a ) &&(a|b)&&(b|c)) return true
    else return false
}
console.log(boolean(1,1,1))
console.log(boolean(1,0,0))
console.log(boolean(0,1,0))
console.log(boolean(1,0,0))
