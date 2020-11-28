import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Transfert } from "../models/transfert";
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'any'
})
export class TransfertService {

  constructor(private http : HttpClient) { }

  listeTransfert() : Observable<Transfert[]> {
    return this.http.get<Transfert[]>("http://localhost:8080/Transfert").pipe(
      map(response => response)
    )
  }

  addTransfert(transfert :Transfert) : Observable<Transfert> {
    return this.http.post<Transfert>("http://localhost:8080/Transfert/add", transfert)
  }

}
