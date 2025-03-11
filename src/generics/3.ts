function merge<T extends object, U extends object> (objA: T, objB: U): Object {
  return Object.assign(objA, objB);
}