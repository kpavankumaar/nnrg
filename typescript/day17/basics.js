// function fun (input: boolean) {
//     let a = 100;
//     a = 10;
//     if (true) {
//         // Still okay to reference 'a'
//         let b = a + 1 + 10;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
//     };
//     // alert(a);
//     // Error: 'b' doesn't exist here
//     console.log(b);
//     return b;
// }
// fun(true);
//******************************************************
var numLivesForCat = 9;
var kitty = {
    name: "Aurora",
    numLives: numLivesForCat
};
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
var arr = [1, 2];
var firstNumber = arr[0];
var secondNumber = arr[1];
var firstNo, secondNo;
_a = [1, 2], firstNo = _a[0], secondNo = _a[1];
var _b = [1, 2, 3, 4], firstNum = _b[0], secondNum = _b.slice(1);
console.log(secondNum);
var firstInfo = [1, 2, 3, 4][0];
var _c = [1, 2, 3, 4], secondInfo = _c[1], fourthInfo = _c[3];
console.log(firstInfo);
console.log(secondInfo);
// destructure objects 
var obj = {
    a: 10,
    b: 'ravi',
    c: 5
};
var obj1 = __assign({ content: 'red' }, obj);
console.log(obj1);
function f1(_a) {
    var a = _a.a, b = _a.b;
    console.log(a);
    console.log(b);
    return a;
}
f1({ a: 'pavan', b: 10 });
var _a;
