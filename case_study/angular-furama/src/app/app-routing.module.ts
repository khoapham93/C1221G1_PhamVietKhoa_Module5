import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ErrorComponent} from './error/error.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {
    path: 'contract',
    loadChildren: () => import('./contracts/contract.module').then(module => module.ContractModule)
  },
  {
    path: 'service',
    loadChildren: () => import('./facilities/facility.module').then(module => module.FacilityModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('./customers/customer.module').then(module => module.CustomerModule)
  },
  {path: 'error', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
