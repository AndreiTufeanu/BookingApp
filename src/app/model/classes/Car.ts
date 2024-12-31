export class Car {
    carId: number;
    brand: string;
    model: string;
    year: number;
    color: string;
    dailyRate: number;
    carImage: string;
    regNo: string;

    constructor() {
        this.carId = 0;
        this.brand = '';
        this.model = '';
        this.year = 2000;
        this.color = '';
        this.dailyRate = 0;
        this.carImage = '';
        this.regNo = '';
    }
}
