import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../core/inovice';

@Injectable({
  providedIn: 'root'
})
export class InovoiceServiceService {
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
  invoicesUrl : string = "/api/invoices";

  constructor(private http: HttpClient) {}

  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.invoicesUrl);
  }
  
  addInvoice(invoice: Invoice): Observable<Invoice> {
    return this.http.post<Invoice>(this.invoicesUrl, invoice);
  }
  
  updateInvoice(invoice: Invoice): Observable<Invoice> {
    const url = `${this.invoicesUrl}/${invoice.id}`;
    return this.http.put<Invoice>(url, invoice);
  }
  
  deleteInvoice(id: number): Observable<{}> {
    const url = `${this.invoicesUrl}/${id}`;
    return this.http.delete(url);
  }
  
}
