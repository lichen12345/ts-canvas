var a = "123";
console.log(a);
var notSure = "";
console.log("notSure----notSure", notSure.constructor);
// any 数据类型:
// 1. 可以是任意的数据类型
// 2. 如果是对象，不能提示对象中的属性和方法
// 3. 未赋初始值，是任意类型
// null ｜ undefined 是所有类型的子类型
// 配置strictNullChecks：false
// 推荐写法：
var c = null;
var d = undefined;
// nerver 不存在的类型(死循环、报错)：
function error(msg) {
  throw new Error(msg);
}
function infiniteLoop() {
  while (true) {}
}
var person = {
  name: "张三",
  age: 10,
  sex: "male",
  son: "张无忌",
};
// 数组：
// 写法：1. 类型[]  // number[] 纯数字数组
//      2. Array<类型> // Array<number>
//      3. interface方式
var list = [1, 2, 3, 4, 5, "6"];
function test1() {
  var args = arguments;
  console.log("args----args", args);
}
// 函数注解
//   1.函数声明注解
//   2.函数表达式注解
var test2 = function (a, b) {
  return a + b;
};
// noImplicitThis -> false  指定this为参数，注解this的类型
// 函数的重载: 表意更清楚
function reverse(x) {
  if (typeof x === "string") {
    return x.split("").reverse().join("");
  }
  if (typeof x === "number") {
    return x.toString().split("").reverse().join("");
  }
}
console.log(reverse(123345));

// 父类

class Animal {
  name: string;
}

// 子类

class Dog extends Animal {}
