import { Routes } from '@angular/router';
import { PerviyComponent } from './perviy/perviy.component';
import { VtoroiComponent } from './vtoroi/vtoroi.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataManagerComponent } from './data-manager/data-manager.component';



export const routes: Routes = [
    {path: '', component: PerviyComponent},
    {path: 'vtoroi', component: VtoroiComponent},
    {path: 'data', component: DataManagerComponent },
    {path: '**', component: PageNotFoundComponent},

];
