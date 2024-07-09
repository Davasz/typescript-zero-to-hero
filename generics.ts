function getArray<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);                      // OK
// numberArray.push('This is not a number');  // Generates a compile time type check error;

let stringArray = getArray<string>(['Cats', 'Dogs', 'Birds']);
stringArray.push('Rabbits');               // OK
// stringArray.push(30);                      // Generates a compile time type check error

function identity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let returnNumber = identity<number, string>(100, 'Hello!');
let returnString = identity<string, string>('100', 'Hola!');
let returnBoolean = identity<boolean, string>(true, 'Bonjour!');

returnNumber = returnNumber * 100;   // OK
// returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'

type ValidTypes = string | number;

function identity2<T extends ValidTypes, U> (value: T, message: U) : T {
    // let result: T = value + value;    // Error
    console.log(message);
    return value
}

let returnNumber2 = identity2<number, string>(100, 'Hello!');      // OK
let returnString2 = identity2<string, string>('100', 'Hola!');     // OK
// let returnBoolean2 = identity2<boolean, string>(true, 'Bonjour!'); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.