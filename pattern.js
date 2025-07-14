function patternn(num)
{
    let pattern=""
    for(i=0;i<=5;i++){
        for(j=i;j<=5;j++){
            pattern+="*"
        }
        pattern+="\n"
    }
    return pattern
}
console.log(patternn(5))