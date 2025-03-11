type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
}

function compare<T extends keyof AllType>(obj1: Pick<AllType, T>, obj2: Pick<AllType, T>): AllType {
    return { ...obj1, ...obj2 } as AllType;
}

const obj1 = { name: 'Item1', position: 1 };
const obj2 = { name: 'Item2', position: 2 };

console.log(compare(obj1, obj2));
