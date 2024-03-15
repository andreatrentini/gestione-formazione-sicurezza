import { Routes } from '@angular/router';
import { ImportStudentiComponent } from './studenti/import-studenti/import-studenti.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: 'studenti/import', component: ImportStudentiComponent},
    {path: 'login', component: LoginComponent},
];
