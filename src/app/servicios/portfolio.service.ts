import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  personaURL = 'https://almirondiegodavidbackendap.herokuapp.com/persona/';

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any>{
    return this.http.get('./assets/data/data.json');
  }

  public mostrarPersona(): Observable<any>{
    return this.http.get(this.personaURL+'lista');
  }

  public editarPersona(persona: Persona): Observable<any>{
    return this.http.put<any>(this.personaURL+'editar',persona);
  }


}
