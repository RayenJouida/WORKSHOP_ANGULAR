import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainInvoiceComponent } from './pages/main-invoice/main-invoice.component';
import { InvoiceListComponent } from './pages/invoice-list/invoice-list.component';
import { InvoiceDetailComponent } from './pages/invoice-detail/invoice-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { FournisseurDetailsComponentComponent } from './components/fournisseur-details-component/fournisseur-details-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    NotFoundComponent,
    MainInvoiceComponent,
    InvoiceListComponent,
    InvoiceDetailComponent,
    ListProductsComponent,
    FournisseurDetailsComponentComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
