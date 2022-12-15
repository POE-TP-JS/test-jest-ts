export function add(a:number,b:number):number{
    return a+b;
}

export function addMultiple(...numbers:Array<number>):number{
    let sum=0;
    for(let number of numbers){
        sum +=number;
    }
    return sum;
}


export function substract(a:number,b:number):number{
    return a-b;
}

export function divide(a:number,b:number):number{
    return a/b;
}

export function multiply(a:number,b:number):number{
    return a*b;
}

export function multiplyMany(...numbers:Array<number>):number{
    let product=0;
    for(let number of numbers){
        product *=number;
    }
    return product;
}