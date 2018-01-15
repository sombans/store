import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BuyersComponentComponent } from './components/buyers-component/buyers-component.component';
import { ProductsComponentComponent } from './components/products-component/products-component.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BuyersService } from './services/buyers.service';
import { PurchasesComponent } from './components/purchases/purchases.component';

const appRoutes: Routes = [
  { path: '', component: ProductsComponentComponent },
  { path: 'products', component: ProductsComponentComponent },
  { path: 'buyers', component: BuyersComponentComponent},
  { path: 'buyers/:id', component: PurchasesComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BuyersComponentComponent,
    ProductsComponentComponent,
    NavbarComponent,
    PurchasesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,
      { enableTracing: true }),
    FormsModule

  ],
  providers: [
    BuyersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
