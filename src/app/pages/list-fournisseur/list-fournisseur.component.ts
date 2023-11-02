import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../../core/fournisseur';
import { Router } from '@angular/router';
import { FourniseurService } from 'src/app/services/fourniseur.service';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css'],
})
export class ListFournisseurComponent implements OnInit {
  listFournisseurs: Fournisseur[] = [];
  constructor(private _router: Router, private fournisseurService: FourniseurService) {}
  
  ngOnInit(): void {
    this.fournisseurService.getFournisseurs().subscribe({
      next: (data) => {
        this.listFournisseurs = data as Fournisseur[];
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('completed');
      }
    });
  }
  deleteFournisseur(f: Fournisseur) {
    this.fournisseurService.deleteFournisseur(f.id).subscribe({
      next: () => {
        this.listFournisseurs = this.listFournisseurs.filter((element) => element.id !== f.id);
      },
      error: (err) => console.log(err),
    });
  }
  search = '';
  searchById() {
    const searchNumber = parseInt(this.search, 10); // Convertir la chaîne en nombre
    if (!isNaN(searchNumber)) {
      this.fournisseurService.getFournisseurById(searchNumber).subscribe({
        next: (data) => {
          this.listFournisseurs = data ? [data] : []; // Remplacer la liste par l'élément trouvé
        },
        error: (err) => console.log(err),
      });
    } else {
      console.log('Please enter a valid number for the search.');
    }
  }
  editFournisseur(f: Fournisseur) {
    // Vous pouvez rediriger vers une autre page pour modifier les détails du fournisseur
    // Par exemple, naviguer vers 'fournisseur/edit/{f.id}'
    this._router.navigate(['fournisseur', 'edit', f.id]);
  }
  

  toDetails(f: Fournisseur) {
    this._router.navigate(['fournisseur', f.id]);
  }
//  search = '';
  /*
  listFournisseurs: Fournisseur[] = [
    { id: 1, code: '1ABC4522', libelle: 'hp' },
    { id: 2, code: '2ABC4522', libelle: 'dell' },
    { id: 3, code: '3ABC4522', libelle: 'lenovo' },
    { id: 400, code: '40ABC452', libelle: 'asus' },
  ];
  
  
  deleteFournisseur(f: Fournisseur) {
    this.listFournisseurs = this.listFournisseurs.filter(
      (element) => element.id !== f.id
    );
  }

  Onsearch() {
    if (this.search === '') {
      // Réinitialisez la liste si la recherche est vide
      this.listFournisseurs = [
        { id: 1, code: '1ABC4522', libelle: 'hp' },
        { id: 2, code: '2ABC4522', libelle: 'dell' },
        { id: 3, code: '3ABC4522', libelle: 'lenovo' },
        { id: 400, code: '40ABC452', libelle: 'asus' },
      ];
    } else {
      // Filtrez la liste en fonction de la recherche
      this.listFournisseurs = this.listFournisseurs.filter(
        (e) => e.libelle === this.search
      );
    }
  }

  toDetails(f: Fournisseur) {
    this._router.navigate(['fournisseur', f.code, f.libelle, f.id]);
  }
  */
}

