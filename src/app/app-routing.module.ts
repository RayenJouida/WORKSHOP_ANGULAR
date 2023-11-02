import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainInvoiceComponent } from './pages/main-invoice/main-invoice.component';
import { InvoiceListComponent } from './pages/invoice-list/invoice-list.component';
import { InvoiceDetailComponent } from './pages/invoice-detail/invoice-detail.component';
import { FournisseurDetailsComponentComponent } from './components/fournisseur-details-component/fournisseur-details-component.component';

const routes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'fournisseur',
    loadChildren: () =>
      import('./features/fournisseur/fournisseur.module').then(
        (m) => m.FournisseurModule
      ),
  },
  { path: 'fournisseur/:id', component: FournisseurDetailsComponentComponent }, 
  
  { path: 'main-invoice', component: MainInvoiceComponent },
  { path: 'invoice-list', component: InvoiceListComponent },

  { path: 'invoice/:idFacture/:active', component: InvoiceDetailComponent },
  {
    path: 'product',
    loadChildren: () =>
      import('./features/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./features/user/user.module').then((m) => m.UserModule),
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
