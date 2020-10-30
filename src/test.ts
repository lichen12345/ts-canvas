let b: boolean = false;
console.log("----", b);
// interface Radio {
//   switchRadio(trigger: boolean): void; //注意写法，void表示函数没有返回值
// }

// class Car implements Radio {
//   switchRadio(trigger: boolean) {}
// }

// class cellphone implements Radio {
//   switchRadio(trigger: boolean) {}
// }

interface Battery {
  checkBatteryStatus(): void;
}

interface Radio {
  switchRadio(trigger: boolean): void; //注意写法，void表示函数没有返回值
}

interface BatterywithRadio extends Radio {
  checkBatteryStatus(): void;
}

class Car implements Radio {
  switchRadio(trigger: boolean) {}
}

class cellphone implements BatterywithRadio {
  //逗号连接
  switchRadio(trigger: boolean) {}

  checkBatteryStatus() {}
}

let animal = {
  dog: {
    age: 2,
    color: "yellow",
  },
  cat: {
    eat: "fish",
  },
};

console.log(animal?.dog?.color);

interface Iprops {
  age: String | number;
  getName: () => void;
}

class Item {
  id: String = "123";
  name: String = "里斯";
  getProp: any;
  constructor(props?: Partial<Iprops>) {
    this.getProp =     props;
    console.log("props------props", props, this);
  }
}

const getItem = new Item({ age: "18" });

console.log(getItem);
