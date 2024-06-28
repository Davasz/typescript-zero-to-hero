let nome : string = 'Davi';

let fruits : string[] = ['apple', 'orange', 'banana'];

let carr : {
    name : string,
    model : string,
    year : number
};

carr = {
    name : 'Ford',
    model : 'Mustang',
    year : 1969
};

console.log(carr);

function multNumber(num1: number, num2: number): number {
    return num1 * num2;
}

console.log(multNumber(12, 12));

let bool : boolean = 12 > 20;

console.log(bool);


let nums: Array<number> = [1, 2, 3, 4, 5];

let moreNums: Array<number> = [...nums, 6, 7, 8, 9, 10]

console.log(moreNums);

// Tuple

let tuple : [string, number, boolean];

tuple = ['Davi', 12, true];
// tuple = ['Davi', true, 12]; -- NAO PODE

console.log(tuple);

let listFruits : [string, ...string[]] = ['apple', 'orange', 'banana', 'lemon']
console.log(...listFruits);

let listFruits2 : [number, boolean, ...string[]] = [5, true, ...listFruits]
console.log(...listFruits2);

// Functions:

type Name =
        | [firstName: string, string: string]
        | [firstName: string, middleName: string, lastName: string]

function createPeople(...name: Name) {
    return [...name];
}

console.log(createPeople('Davi', 'Souza'))
console.log(createPeople('Davi', 'Ribeiro', 'Souza'))