import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias/';

constructor(private httpClient: HttpClient) {
  this.listaTransferencia = [];
 }

 get transferencias() {
  return this.listaTransferencia;
}

adicionar(transferencia: any) {
  this.hidratar(transferencia);
  this.listaTransferencia.push(transferencia);
}

todas() {
  return this.httpClient.get<Transferencia[]>(this.url);
}

private hidratar(transferencia: any) {
  transferencia.data = new Date();
}

}
