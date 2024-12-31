import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/interfaces/APIResponseModel';
import { Car } from '../model/classes/Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  http = inject(HttpClient);
  
  getAllCars() : Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(`https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars`);
  }

  addCar(carObj: Car) : Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(`https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar`, carObj);
  }

  updateCarInfo(carObj: Car) : Observable<APIResponseModel> {
    return this.http.put<APIResponseModel>(`https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar`, carObj);
  }

  deleteCar(id: number) : Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(`https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?carid=${id}`);
  }
}
