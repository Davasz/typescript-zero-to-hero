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

class SportsCar extends Car {
    private _topSpeed: number;

    constructor(make: string, color: string, topSpeed: number, doors = 2) {
        super(make, color, doors);
        this._topSpeed = topSpeed;
    }

    get topSpeed() {
        return this._topSpeed;
    }

    set topSpeed(speed: number) {
        this._topSpeed = speed;
    }

    public boost() {
        console.log(`${this.worker()} is boosting to ${this._topSpeed} km/h!`);
    }
}

class Truck extends Car {
    private _capacity: number;

    constructor(make: string, color: string, capacity: number, doors = 4) {
        super(make, color, doors);
        this._capacity = capacity;
    }

    get capacity() {
        return this._capacity;
    }

    set capacity(capacity: number) {
        this._capacity = capacity;
    }

    public loadCargo(cargoWeight: number) {
        if (cargoWeight > this._capacity) {
            console.log(`Cannot load cargo. Maximum capacity is ${this._capacity} kg.`);
        } else {
            console.log(`Loading ${cargoWeight} kg of cargo into the ${this.worker()}.`);
        }
    }
}

// Testando as novas classes

const sportsCar = new SportsCar('Porsche', 'yellow', 320);
const truck = new Truck('Ford', 'white', 5000);

console.log(Car.getNumberOfCars());

sportsCar.boost();
truck.loadCargo(4000);
truck.loadCargo(6000);
