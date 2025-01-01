import { Customer } from "./Customer";

export class Booking {
    customerName:    string;
    customerCity:    string;
    mobileNo:        string;
    email:           string;
    bookingId:       number;
    carId:           number;
    bookingDate:     Date;
    discount:        number;
    totalBillAmount: number;

    constructor() {
        this.customerName = '';
        this.customerCity = '';
        this.mobileNo = '0000000000';
        this.email = '';
        this.bookingId = 0;
        this.carId = 0;
        this.bookingDate = new Date();
        this.discount = 0;
        this.totalBillAmount = 0;
    }

    updateCustomerInfo(customer: Customer) {
        this.customerName = customer.customerName;
        this.customerCity = customer.customerCity;
        this.mobileNo = customer.mobileNo;
        this.email = customer.email;
    }
}
