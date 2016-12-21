interface SequareConfig{
    color?:string;
    width?:number;
    [propName:string]:any;
}

function createSequare(config:SequareConfig):{color:string,area:number}{
    let newSequare={color:"white",area:100};
    if(config.color){
        newSequare.color=config.color;
    }

    if(config.width){
        newSequare.area=config.width;
    }

    return newSequare;
}

let mySequare=createSequare({colour:"black"});     //接口声明了字符串索引签名
