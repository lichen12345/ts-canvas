type A = 'a' | 'b' | 'c';
type B = 'a' | 'd';

type C = Exclude<A, B>;

interface I {
  name: string;
}

interface U {
  age: string;
  sex: string;
}

type R = I & U;

type keys = keyof U;

function getValue<T extends Object, k extends keyof T>(o: T, key: k): T[k] {
  return o[key];
}

const obj1 = { name: '123', age: '12' };

getValue(obj1, 'name');
