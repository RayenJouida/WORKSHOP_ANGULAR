/*
export class Invoice{
    idFacture!:number;
    montantFacture!:number;
    montantRemise!:number;
    dateFacture!:string;
    active!:boolean;
    }
    */

    
export class Invoice {
    id!: number;
    discountAmount!: number;
    billAmount!: number;
    dateBill!: string;
    status!: boolean;
  }