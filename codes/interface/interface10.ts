interface SequareConfig{
    color?:string;
    width?:number;
}

function createSequare10(config:SequareConfig):{color:string,area:number}{
    let newSequare={color:"white",area:100};
    if(config.color){
        newSequare.color=config.color;
    }

    if(config.width){
        newSequare.area=config.width;
    }

    return newSequare;
}

// let mySequare10=createSequare10({colour:"black"} as SequareConfig);   //第二种方法
let squareOptions={colour:"black"};
let mySequare10=createSequare10(squareOptions);      //将参数放在外边就不会有属性、类型检查
console.log(mySequare10);
