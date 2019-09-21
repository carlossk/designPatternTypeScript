export abstract class Car {
    public description: string = '';
    public getDescription() {
        return this.description;
    }
    public abstract cost(): number;
}

export class ModelS extends Car {
    public description = "Tesla Model S";

    constructor() {
        super();
    }
    cost(): number {
        return 50000;
    }

}

export class ModelX extends Car {
    public description: string = "Tesla Model X";
    constructor() {
        super();
    }
    cost(): number {
        return 90000;
    }
    
}

export abstract class CarOptions extends Car {
    decoratedCar!: Car;
    public abstract getDescription(): string;
    public abstract cost(): number;


}
export class EnhancedAutoPilot extends CarOptions {
    constructor(car:Car){
        super();
        this.decoratedCar=car;
    }
    public getDescription(): string {
       return this.decoratedCar.getDescription()+ ', autopilot';
    }
    public cost(): number {
        return this.decoratedCar.cost()+50;
    }

}
