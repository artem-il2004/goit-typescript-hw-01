type AllType = {
 name: string;
 position: number;
 color: string;
 weight: number
}

function compare<T extends keyof AllType>(obj1: Pick<AllType, T>, obj2: Pick<AllType, T>): AllType {

  return { ...obj1, ...obj2 } as AllType;
}
