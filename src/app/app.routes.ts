import { Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CustomerComponent } from './components/customer/customer.component';
import { BookingComponent } from './components/booking/booking.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'car',
        pathMatch: 'full'
    },
    {
        path: 'car',
        component: CarComponent
    },
    {
        path: 'customer',
        component: CustomerComponent
    },
    {
        path: 'booking',
        component: BookingComponent
    }
];
