var a: string = "123";
console.log(a);

let notSure: Object = "";
console.log("notSure----notSure", notSure.constructor);

// any 数据类型:
// 1. 可以是任意的数据类型
// 2. 如果是对象，不能提示对象中的属性和方法
// 3. 未赋初始值，是任意类型

// null ｜ undefined 是所有类型的子类型
// 配置strictNullChecks：false
// 推荐写法：
let c: number | null = null;
let d: string | undefined = undefined;

// nerver 不存在的类型(死循环、报错)：
function error(msg: string): never {
  throw new Error(msg);
}
function infiniteLoop(): never {
  while (true) {}
}

// 类型注释 & 类型推断
// 联合类型：
// 1.共有属性不会报错
// 2.赋值确认类型

// 接口：interface
// 1.对象的形状进行描述
// 2.对类的部分行为抽象
// 属性、方法不可少、也不可多，但可选
// [propName: string]: any
// readonly 只读

interface Person {
  readonly name: string;
  age?: number;
  // 任意属性
  [propName: string]: any;
}
let person: Person = {
  name: "张三",
  age: 10,
  sex: "male",
  son: "张无忌",
};

// 数组：
// 写法：1. 类型[]  // number[] 纯数字数组
//      2. Array<类型> // Array<number>
//      3. interface方式

let list = [1, 2, 3, 4, 5, "6"];

interface NumberArray {
  [index: number]: number | string;
}
// 类数组
interface Args {
  [index: number]: any;
  length: number;
  callee: Function;
}
function test1() {
  const args: IArguments | Args = arguments;
  console.log("args----args", args);
}

// 函数注解
//   1.函数声明注解
//   2.函数表达式注解

const test2: (a: number, b: number) => number = (a, b) => {
  return a + b;
};

// noImplicitThis -> false  指定this为参数，注解this的类型

// 函数的重载

function reverse(x: number | string) {
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
  // "strictPropertyInitialization": false
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m.`);
  }
  weight(kg: number) {
    console.log("kg----kg", kg);
  }
}

// 子类

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distance: number = 0) {
    console.log("slitthering.....");
    super.move(distance);
  }
}

let newAnimal = new Dog("我叫啥");

// 类OOP: 封装、继承、多态

// super不在构造函数当中指的是类本身

// 类成员修饰符
// public: 1. 自身调用  2.子类可以调用  3. 实例调用
// private: 1.自身调用
// protected 1. 自身调用  2. 子类可以调用

// 抽象类：abstract

// 1. 不能创建实例
// 2. 抽象方法一定要有实现

// 类类型接口
// 测试
