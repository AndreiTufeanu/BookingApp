export class Customer {
    customerId: number;
    customerName: string;
    customerCity: string;
    mobileNo: string;
    email: string;

    constructor() {
        this.customerId = 0;
        this.customerName = '';
        this.customerCity = '';
        this.mobileNo = '0000000000';
        this.email = '';
    }
}
