interface SquarConfig{
    color?:string;  //此处定义的为可选属性
    width?:number;  //此处定义的为可选属性
    // height:number;  //此参数必须存在
}

function createSquare(config:SquarConfig):{color:string;area:number}{
    let newSquare={color:"white",area:100};
    if(config.color){
        newSquare.color=config.color;
    }
    if(config.width){
        newSquare.area=config.width;
    }

    return newSquare;
}

let mySquare=createSquare({color:"black"});

//因为两个参数都是可选的所有可以传递空对象
let otherSquare=createSquare({});
console.log(mySquare);
console.log(otherSquare);