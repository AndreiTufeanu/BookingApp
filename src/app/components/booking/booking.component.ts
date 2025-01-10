import { Component, inject } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { CustomerService } from '../../services/customer.service';
import { CarService } from '../../services/car.service';
import { Car } from '../../model/classes/Car';
import { Customer } from '../../model/classes/Customer';
import { BookingInfo } from '../../model/classes/BookingInfo';
import { Booking } from '../../model/classes/Booking';
import { APIResponseModel } from '../../model/interfaces/APIResponseModel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  bookingObj: Booking = new Booking();
  bookingList: BookingInfo[] = [];

  customersList: Customer[] = [];
  carsList: Car[] = [];

  bookingService = inject(BookingService);
  customerService = inject(CustomerService);
  carService = inject(CarService);

  ngOnInit(): void {
    this.loadAllBookings();
  }

  loadAllBookings() {
    this.carService.getAllCars().subscribe((res: APIResponseModel) => {
      this.carsList = res.data;
    })
    this.customerService.getAllCustomers().subscribe((res: APIResponseModel) => {
      this.customersList = res.data;
    })
    this.bookingService.getAllBookings().subscribe((res: APIResponseModel) => {
      this.bookingList = res.data;
    })
  }

  onSaveBooking() {
    this.bookingService.addBooking(this.bookingObj).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert("Booking added successfully");
        this.loadAllBookings();
        this.bookingObj = new Booking();
      }
      else {
        alert(res.message);
      }
    })
  }

  onDeleteBooking(id: number) {
    this.bookingService.deleteBooking(id).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert("Booking deleted successfully");
        this.loadAllBookings();
      }
      else {
        alert(res.message);
      }
    })
  }

  onReset() {
    this.bookingObj = new Booking();
  }

  onCustomerChange(event: Event) {
    const selectedId = +(event.target as HTMLSelectElement).value;

    const customer = this.customersList.find(c => c.customerId === selectedId);

    if (customer) {
      this.bookingObj.updateCustomerInfo(customer);
    }
  }
}
