
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MyMaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		ErrorComponent,
		CustomerCreateComponent,
		CustomerListComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MyMaterialModule,
		AppRoutingModule,
		
	],
	entryComponents: [ ErrorComponent ],
	exports: [
		
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }


