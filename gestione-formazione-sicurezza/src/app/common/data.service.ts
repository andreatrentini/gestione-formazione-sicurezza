import { Injectable } from '@angular/core';
import { IStudente } from '../interfaces/i-studente';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  studenti: IStudente[] = [];

  constructor() { }

  getStudenti(): IStudente[] {
    return this.studenti;
  }

  addStudente(studente: IStudente): void {
    this.studenti.push(studente);
  }

  addStudenti(studenti: IStudente[]): void {
    this.studenti = this.studenti.concat(studenti);
  }
}
