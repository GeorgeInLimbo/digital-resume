import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { IPokemon, IDetails } from './interfaces';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(
    private http: HttpClient
  ) { }

  // Gets Pokemon information from the PokeAPI.
  getPokemon() {
    return this.http.get<IPokemon>(`https://pokeapi.co/api/v2/pokemon?limit=151`)
      .pipe(
        tap(p => console.log(p))
      );
  }

  // Second observable which provides details for each Pokemon respectively.
  getDetails(name: string) {
    return this.http.get<IDetails>(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .pipe(
        tap(d => console.log(d))
      );
  }
}
