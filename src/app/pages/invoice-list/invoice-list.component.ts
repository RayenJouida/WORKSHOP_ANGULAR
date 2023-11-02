import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from 'src/app/core/inovice';
import { InovoiceServiceService } from 'src/app/services/inovoice-service.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  invoices: Invoice[] = [];
  active: boolean = false;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private invoiceService: InovoiceServiceService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.active = params['active'] === 'true';

      if (this.active) {
        this.loadInvoices();
      } else {
        this.errorMessage = "Impossible de visualiser les détails de la facture.";
      }
    });
  }

  loadInvoices() {
    this.invoiceService.getInvoices().subscribe(
      (invoices: Invoice[]) => { // Spécification du type pour les données de facture
        this.invoices = invoices;
      },
      (error: HttpErrorResponse) => { // Spécification du type pour les erreurs
        console.error('Erreur lors du chargement des factures :', error);
        this.errorMessage = 'Erreur lors du chargement des factures.';
      }
    );
  }
  

  addNewInvoice() {
    const newInvoice: Invoice = {
      id: 5,
      discountAmount: 300,
      billAmount: 50,
      dateBill: "2023-10-29",
      status: true
    };

    this.invoiceService.addInvoice(newInvoice).subscribe(
      (addedInvoice: Invoice) => {
        console.log('Nouvelle facture ajoutée :', addedInvoice);
        this.loadInvoices();
      },
      (error: HttpErrorResponse) => {
        console.error('Erreur lors de l\'ajout de la facture :', error);
        this.errorMessage = 'Erreur lors de l\'ajout de la facture.';
      }
    );
  }

    updateInvoice(invoiceToUpdate: Invoice) {
      this.invoiceService.updateInvoice(invoiceToUpdate).subscribe(
        (updatedInvoice: Invoice) => {
          console.log('Facture mise à jour :', updatedInvoice);
          this.loadInvoices();
        },
        (error: HttpErrorResponse) => {
          console.error('Erreur lors de la mise à jour de la facture :', error);
          this.errorMessage = 'Erreur lors de la mise à jour de la facture.';
        }
      );
    }
    
    deleteInvoice(id: number) {
      this.invoiceService.deleteInvoice(id).subscribe(
        () => {
          console.log('Facture supprimée avec succès');
          this.loadInvoices();
        },
        (error: HttpErrorResponse) => {
          console.error('Erreur lors de la suppression de la facture :', error);
          this.errorMessage = 'Erreur lors de la suppression de la facture.';
        }
      );
    }
    
}
