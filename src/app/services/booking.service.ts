import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Constant } from '../constant/Constant';
import { APIResponseModel } from '../model/interfaces/APIResponseModel';
import { Observable } from 'rxjs';
import { Booking } from '../model/classes/Booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  http = inject(HttpClient);

  getAllBookings(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(`${environment.API_URL}${Constant.BOOKING_API_METHOD.GET_ALL_BOOKINGS}`);
  }

  addBooking(bookingObj: Booking): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(`${environment.API_URL}${Constant.BOOKING_API_METHOD.ADD_BOOKING}`, bookingObj);
  }

  deleteBooking(id: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(`${environment.API_URL}${Constant.BOOKING_API_METHOD.DELETE_BOOKING}${id}`);
  }
}
