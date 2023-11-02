import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fournisseur } from 'src/app/core/fournisseur';
import { FourniseurService } from 'src/app/services/fourniseur.service';

@Component({
  selector: 'app-fournisseur-details-component',
  templateUrl: './fournisseur-details-component.component.html',
  styleUrls: ['./fournisseur-details-component.component.css']
})
export class FournisseurDetailsComponentComponent implements OnInit {
  fournisseur: Fournisseur | undefined;

  constructor(
    private route: ActivatedRoute,
    private fournisseurService: FourniseurService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const fournisseurId = params['id']; // Récupérer l'ID du fournisseur depuis l'URL
      if (fournisseurId) {
        this.loadFournisseurDetails(fournisseurId);
      }
    });
  }

  loadFournisseurDetails(fournisseurId: number): void {
    this.fournisseurService.getFournisseurById(fournisseurId).subscribe({
      next: (data) => {
        this.fournisseur = data;
        // Ici, vous avez les détails du fournisseur dans this.fournisseur
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

}
