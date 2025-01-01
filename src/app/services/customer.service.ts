import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { APIResponseModel } from '../model/interfaces/APIResponseModel';
import { Customer } from '../model/classes/Customer';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  http = inject(HttpClient);

  getAllCustomers() {
    return this.http.get<APIResponseModel>(`${environment.API_URL}${Constant.CUSTOMER_API_METHOD.GET_ALL_CUSTOMERS}`);
  }

  addCustomer(customerObj: Customer): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(`${environment.API_URL}${Constant.CUSTOMER_API_METHOD.ADD_CUSTOMER}`, customerObj);
  }

  updateCustomerInfo(customerObj: Customer): Observable<APIResponseModel> {
    return this.http.put<APIResponseModel>(`${environment.API_URL}${Constant.CUSTOMER_API_METHOD.UPDATE_CUSTOMER}`, customerObj);
  }

  deleteCustomer(id: number) : Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(`${environment.API_URL}${Constant.CUSTOMER_API_METHOD.DELETE_CUSTOMER}${id}`);
  }
}
