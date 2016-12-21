interface SquareConfig{
    color?:string;
    width?:number;
}

function createSquare02(config:SquareConfig):{color:string;area:number}{
    let newSquare={color:"white",area:100};
    if(config.color){
        newSquare.color=config.color;
    }

    if(config.width){
        newSquare.area=config.width;
    }

    return newSquare;
}

let mySquare2={color:"black"};
console.log(createSquare02(mySquare2));