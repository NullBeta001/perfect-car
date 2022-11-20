import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CadastroVeiculoService {
  constructor(private http: HttpClient) { }
}