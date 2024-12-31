import { Component, inject } from '@angular/core';
import { Customer } from '../../model/classes/Customer';
import { CustomerService } from '../../services/customer.service';
import { APIResponseModel } from '../../model/interfaces/APIResponseModel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  imports: [FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  customerObj: Customer = new Customer();
  customersList: Customer[] = [];

  customerService = inject(CustomerService);

  ngOnInit(): void {
    this.loadAllCustomers();
  }

  loadAllCustomers() {
    this.customerService.getAllCustomers().subscribe((res: APIResponseModel) => {
      this.customersList = res.data;
    })
  }

  onSaveCustomer() {
    this.customerService.addCustomer(this.customerObj).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert("Customer added successfully");
        this.loadAllCustomers();
        this.customerObj = new Customer();
      }
      else {
        alert(res.message);
      }
    })
  }

  onUpdateCustomer() {
    this.customerService.updateCustomerInfo(this.customerObj).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert("Customer updated successfully");
        this.loadAllCustomers();
        this.customerObj = new Customer();
      }
      else {
        alert(res.message);
      }
    })
  }

  onEditCustomer(data: Customer) {
    this.customerObj = data;
  }

  onDeleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert("Customer deleted successfully");
        this.loadAllCustomers();
      }
      else {
        alert(res.message);
      }
    })
  }

  onReset() {
    this.customerObj = new Customer();
  }
}
