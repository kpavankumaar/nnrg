var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var num = 10;
function run1() {
    console.log('test');
    num = 50;
    console.log(num);
    return ['10', 'ravi'];
}
console.log(num);
run1();
var test1 = function (a, b) {
    console.log(a);
    return a + b;
};
console.log(test1(10, 20));
var Engine = /** @class */ (function () {
    function Engine(engineType) {
        this.engineType = engineType;
    }
    Engine.prototype.start = function () {
        console.log('start');
    };
    Engine.prototype.stop = function () {
        console.log('stop');
    };
    return Engine;
}());
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car(enginetype) {
        return _super.call(this, enginetype) || this;
    }
    return car;
}(Engine));
var newCar = new car('v2');
newCar.start();
console.log(newCar.engineType);
newCar.stop();
