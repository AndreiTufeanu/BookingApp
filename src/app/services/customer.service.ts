import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { APIResponseModel } from '../model/interfaces/APIResponseModel';
import { Customer } from '../model/classes/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  http = inject(HttpClient);

  getAllCustomers() {
    return this.http.get<APIResponseModel>(`https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCustomers`);
  }

  addCustomer(customerObj: Customer): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(`https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCustomer`, customerObj);
  }

  updateCustomerInfo(customerObj: Customer): Observable<APIResponseModel> {
    return this.http.put<APIResponseModel>(`https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCustomer`, customerObj);
  }

  deleteCustomer(id: number) : Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(`https://freeapi.miniprojectideas.com/api/CarRentalApp/DeletCustomerById?id=${id}`);
  }
}
