import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { BuyersComponentComponent } from './buyers-component/buyers-component.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  { path: '', component: ProductsComponentComponent },
  { path: 'buyers', component: BuyersComponentComponent },
  { path: 'products', component: ProductsComponentComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BuyersComponentComponent,
    ProductsComponentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
