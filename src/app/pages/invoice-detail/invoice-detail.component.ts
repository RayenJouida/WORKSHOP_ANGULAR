import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from 'src/app/core/inovice';



@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent {
  invoices: Invoice[] = [
    {id:1,discountAmount:120, billAmount:10, dateBill:"12/12/2021",
    status:true},
    {id:2,discountAmount:1020, billAmount:90, dateBill:"22/11/2020"
    ,status:true},
    {id:3,discountAmount:260, billAmount:30, dateBill:"18/10/2020",
    status:false},
     {id:4,discountAmount:450, billAmount:40, dateBill:"14/12/2020",
     status:true},


  ];
  invoice: Invoice | undefined;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const idFacture = +params['idFacture'];
      const active = params['active'] === 'true';
            // Maintenant, vous pouvez rechercher la facture dans la liste en fonction de l'ID
            this.invoice = this.invoices.find(i => i.id === idFacture && i.status === active);
          });

      
  
  }


}
