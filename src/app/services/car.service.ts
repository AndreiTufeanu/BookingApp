import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/interfaces/APIResponseModel';
import { Car } from '../model/classes/Car';
import { environment } from '../../environments/environment.development';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  http = inject(HttpClient);
  
  getAllCars() : Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(`${environment.API_URL}${Constant.CAR_API_METHOD.GET_ALL_CARS}`);
  }

  addCar(carObj: Car) : Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(`${environment.API_URL}${Constant.CAR_API_METHOD.ADD_CAR}`, carObj);
  }

  updateCarInfo(carObj: Car) : Observable<APIResponseModel> {
    return this.http.put<APIResponseModel>(`${environment.API_URL}${Constant.CAR_API_METHOD.UPDATE_CAR}`, carObj);
  }

  deleteCar(id: number) : Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(`${environment.API_URL}${Constant.CAR_API_METHOD.DELETE_CAR}${id}`);
  }
}
