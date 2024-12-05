import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Usuarios} from './usuarios';

interface resp {
  msg:string;
  data: Usuarios[];
  err: number;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url: string = 'http://localhost:3000/api/data';
  constructor(private clientHttp: HttpClient) {}

  obtenerUsuarios(): Observable<resp>{
    return this.clientHttp.get<resp>(this.url);
  }
}
