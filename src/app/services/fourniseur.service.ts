import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Fournisseur } from '../core/fournisseur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FourniseurService {
  apiUrl = environment.baseUrl+'fournisseurs/';
  listFournisseurs: Fournisseur[] = [
    { id: 1, code: '1ABC4522', libelle: 'hp' },
    { id: 2, code: '2ABC4522', libelle: 'dell' },
    { id: 3, code: '3ABC4522', libelle: 'lenovo' },
    { id: 400, code: '40ABC452', libelle: 'asus' },
  ];

  constructor(private http: HttpClient) {}

  getFournisseurs(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(this.apiUrl);
  }
  
  getFournisseurById(id: number): Observable<Fournisseur> {
    return this.http.get<Fournisseur>(`${this.apiUrl}/${id}`);
  }
  
  addFournisseur(fournisseur: Fournisseur): Observable<Fournisseur> {
    return this.http.post<Fournisseur>(this.apiUrl, fournisseur);
  }

  updateFournisseur(fournisseur: Fournisseur): Observable<Fournisseur> {
    return this.http.put<Fournisseur>(`${this.apiUrl}/${fournisseur.id}`, fournisseur);
  }
  deleteFournisseur(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  searchFournisseurs(searchTerm: string): Observable<Fournisseur[]> {
    const searchUrl = `${this.apiUrl}/search?term=${searchTerm}`; // Exemple d'URL de recherche
  
    return this.http.get<Fournisseur[]>(searchUrl);
  }
  
  
  
}
