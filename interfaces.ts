interface Employeee {
    firstName: string,
    lastName: string,
    fullName(): string
}

let employee : Employeee = {
    firstName: 'John',
    lastName: 'Doe',
    fullName() : string {
        return `${this.firstName} ${this.lastName}`;
    }
}

// employee.firstName = 10 ---Error

type Employeeee = {
    firstName: string;
    lastName: string;
    fullName(): string;
}

// MESMA COISA - ALGUMAS COISINHAS

let employeee : Employeeee = {
    firstName: 'John',
    lastName: 'Doe',
    fullName() : string {
        return `${this.firstName} ${this.lastName}`;
    }
}

interface People {
    name: string,
    lastName: string,
    age: number
}

interface PeopleWithJob extends People {
    jobTitle: string
}

let people : PeopleWithJob = {
    name: 'John',
    lastName: 'Doe',
    age: 30,
    jobTitle: 'Developer'
}
