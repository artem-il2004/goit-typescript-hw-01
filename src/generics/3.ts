function merge<T extends object, U extends object> (objA: T, objB: U): Object {
  return Object.assign(objA, objB);
}

console.log(merge({ name: '2' }, {age:3}));
