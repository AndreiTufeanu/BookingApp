import { Component, inject } from '@angular/core';
import { Car } from '../../model/classes/Car';
import { APIResponseModel } from '../../model/interfaces/APIResponseModel';
import { CarService } from '../../services/car.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car',
  imports: [FormsModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  carObj: Car = new Car();
  carList: Car[] = [];

  carService = inject(CarService);

  ngOnInit(): void {
    this.loadAllCars();
  }

  loadAllCars() {
    this.carService.getAllCars().subscribe((res:APIResponseModel)=> {
      this.carList = res.data;
    })
  }

  onSaveCar() {
    this.carService.addCar(this.carObj).subscribe((res:APIResponseModel)=> {
      if (res.result) {
        alert("Car added successfully");
        this.loadAllCars();
        this.carObj = new Car();
      }
      else {
        alert(res.message);
      }
    })
  }

  onUpdateCar() {
    this.carService.updateCarInfo(this.carObj).subscribe((res:APIResponseModel)=> {
      if (res.result) {
        alert("Car updated successfully");
        this.loadAllCars();
        this.carObj = new Car();
      }
      else {
        alert(res.message);
      }
    })
  }

  onEditCar(data: Car) {
    this.carObj = data;
  }

  onDeleteCar(id: number) {
    this.carService.deleteCar(id).subscribe((res:APIResponseModel)=> {
      if (res.result) {
        alert("Car deleted successfully");
        this.loadAllCars();
      }
      else {
        alert(res.message);
      }
    })
  }

  onReset() {
    this.carObj = new Car();
  }
}
