import { Component } from '@angular/core';
import { Product } from 'src/app/core/produit';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  ListProduct: Product[] = [];
  selectedLibelle: string = '';
  productCount: number = 0;

  constructor(private productService: ProductService) {
    this.ListProduct = this.productService.getAllProducts();
  }
  showCount(libelle: string): void {
    this.selectedLibelle = libelle;
    this.productCount = this.getNbProductsByLibelle(libelle);
  }

  getNbProductsByLibelle(libelle: string): number {
    return this.productService.getNbProductsByLibelle(libelle);
  }

}
