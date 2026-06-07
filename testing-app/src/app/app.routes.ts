import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';

export const routes: Routes = [
    {
        path: '',
        component: EmployeeListComponent
    },

    {
        path: 'add',
        component: EmployeeAddComponent
    },

    {
        path: 'edit/:id',
        component: EmployeeEditComponent
    }
];
