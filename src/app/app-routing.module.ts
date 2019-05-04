import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { LoginComponent } from './login/login.component';

const appRoutes = [
	{ path: 'customer-list', component: CustomerListComponent },
	{ path: 'customer-create', component: CustomerCreateComponent },
	{ path: 'login', component: LoginComponent },
	{ path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],	// makes ang router aware of routes
	exports: [RouterModule]		// makes it available outside this module (in app.module)

})


export class AppRoutingModule {}
