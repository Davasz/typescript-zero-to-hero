class Car {

    private static nubersOfCars: number = 0;

    constructor(make: string, color: string, doors: number) {
        this._make = make;
        this._color = color;
        this._doors = doors % 2 === 0 ? doors : 2;
        Car.nubersOfCars++; 
    }

    private _make: string;
    private _color: string;
    private _doors: number;

    get make() {
        return this._make;
    }
    set make(make) {
        this._make = make;
    }
    get color() {
        return 'The color of the car is ' + this._color;
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number');
        }
    }

    protected worker() {
        return `The ${this._make}`;
    }

    public static getNumberOfCars(): number {
        return Car.nubersOfCars;
    }
}

const myCar = new Car('BMW', 'blue', 6);
const myCar2 = new Car('Ferrari', 'red', 4);

console.log(Car.getNumberOfCars());

// -----------------------------


class EletricCar extends Car {

    constructor(make: string, color: string, range: number, doors = 2) {
        super(make, color, doors);
        this._range = range;
    }

    private _range: number;
    
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }

    public charge() {
        console.log(this.worker() + " is charging.")
    }
}

let eCar: EletricCar = new EletricCar('BYD', 'black', 123, 2);
let eCar2: EletricCar = new EletricCar('BYD', 'blue', 244);

console.log(Car.getNumberOfCars())
console.log(eCar.charge())