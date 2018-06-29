const num:number  = 10;
function run1(): string[]{
    console.log('test');
    // num = 50;
    // console.log(num);

    return ['10','ravi'];
    
}
console.log(num);
run1();
let test1 = (a,b) => {
    console.log(a);
    return a + b
};
console.log(test1(10,20));
interface engineI  {
    start:() => Array<number>
    stop:() => Array<Object>
    engineType: string
    cc?:string
    
}

class Engine implements engineI {
    
    constructor(public engineType) {
        
    }
    start() {
        console.log('start');
        return [10];

    }
    stop(){
        console.log('stop');
        return [{}];
    }
    

}

class car extends Engine{
    constructor(enginetype) {
        super(enginetype);
    }
}

var newCar = new car('v2');
newCar.start();
console.log(newCar.engineType);
newCar.stop();