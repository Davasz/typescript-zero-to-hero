let nome : string = 'Davi';

let fruits : string[] = ['apple', 'orange', 'banana'];

let car : {
    name : string,
    model : string,
    year : number
};

car = {
    name : 'Ford',
    model : 'Mustang',
    year : 1969
};

console.log(car);

function multNumber(num1: number, num2: number): number {
    return num1 * num2;
}

console.log(multNumber(12, 12));

let bool : boolean = 12 > 20;

console.log(bool);
