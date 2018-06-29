// function fun (input: boolean) {
//     let a = 100;
//     a = 10;
//     if (true) {
//         // Still okay to reference 'a'
//         let b = a + 1 + 10;
        
//     };
//     // alert(a);
//     // Error: 'b' doesn't exist here
//     console.log(b);

//     return b;
// }
// fun(true);

//******************************************************
const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}

// Error
kitty = {
    name: "Danielle",
    numLives: numLivesForCat
};

// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
console.log(kitty);

// destructuring of arrays 
var arr = [1,2];
var firstNumber = arr[0];
var secondNumber = arr[1];
var firstNo,secondNo;
[firstNo,secondNo] = [1,2];
let [firstNum, ...secondNum] = [1,2,3,4];
console.log(secondNum);
let [firstInfo] = [1, 2, 3, 4];
let [, secondInfo, , fourthInfo] = [1, 2, 3, 4]
console.log(firstInfo);
console.log(secondInfo);
// destructure objects 
let obj = {
    a:10,
    b:'ravi',
    c:5
}
let obj1 = {content:'red',...obj};
console.log(obj1);
// let obj1 ={a:0 ,b: ...passthrough} ;
// obj1 = obj;
// console.log(obj1.a, obj1.b);
// let {a,...b} = obj;
type C = { a: string, b?: number }
function f1({ a, b }:C):string{
    console.log(a);
    console.log(b);
    return a;
}
f1({a:'pavan',b:10})

// ***********************************************
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!