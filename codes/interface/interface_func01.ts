interface jiekou01{
    color?:string;
    width?:number;
    (source:string,substring:string):Boolean;     //定义一个函数类型
}

function createJK01(jk:jiekou01){

}

let cc=createJK01({});

console.log(cc);
