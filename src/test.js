var _a;
var b = false;
console.log("----", b);
var Car = /** @class */ (function () {
  function Car() {}
  Car.prototype.switchRadio = function (trigger) {};
  return Car;
})();
var cellphone = /** @class */ (function () {
  function cellphone() {}
  //逗号连接
  cellphone.prototype.switchRadio = function (trigger) {};
  cellphone.prototype.checkBatteryStatus = function () {};
  return cellphone;
})();
var animal = {
  dog: {
    age: 2,
    color: "yellow",
  },
  cat: {
    eat: "fish",
  },
};
console.log(
  (_a = animal === null || animal === void 0 ? void 0 : animal.dog) === null ||
    _a === void 0
    ? void 0
    : _a.color
);
var Item = /** @class */ (function () {
  function Item(props) {
    this.id = "123";
    this.name = "李晨";
    this.getProp = props;
    console.log("props------props", props, this);
  }
  return Item;
})();
var getItem = new Item({ age: "30" });
console.log(getItem);
