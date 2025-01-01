export class BookingInfo {
    bookingId:       number;
    bookingDate:     Date;
    discount:        number;
    totalBillAmount: number;
    customerName:    string;
    mobileNo:        string;
    brand:           string;
    model:           string;
    bookingUid:      string;

    constructor() {
        this.bookingId = 0;
        this.bookingDate = new Date();
        this.discount = 0;
        this.totalBillAmount = 0;
        this.customerName = '';
        this.mobileNo = '0000000000';
        this.brand = '';
        this.model = '';
        this.bookingUid = '';
    }
}