class car {

    constructor(make: string, color: string, doors: number) {
        this._make = make;
        this._color = color;
        this._doors = doors;
    }

    _make: string;
    _color: string;
    _doors: number;

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
}