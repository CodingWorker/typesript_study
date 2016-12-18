function f03(input:boolean){
    let a=100;
    if(input){
        let b=a+1;
        return b;
    }

    return a;
}

console.log(f03(true));