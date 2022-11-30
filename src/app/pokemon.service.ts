import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDetails, IPokemon } from './pokemon-interfaces';
import { forkJoin, Observable, switchMap } from 'rxjs';
import { getLocaleId } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  endpoint: string = 'https://pokeapi.co/api/v2/pokemon';

  // This observable is where the data is being processed into a format that caters to my web app.
  // switchMap() allows me to handle data relationships between two independent streams (first GET & second GET).
  // Here, it is being used to transition the data received from the first GET request to gain access to more
  // data in a second observable.
  // forkJoin waits for all passed observables to emit and complete, and then it will emit an array with the
  // processed values from the IDetails Observable.

  pokemon$: Observable<IDetails[]> = this.getPokemon().pipe(
    switchMap(response => {
      const details = response.results.map(pokemon => this.getDetails(pokemon.name));
      return forkJoin([...details]);
    })
  )

  constructor(
    private http: HttpClient
  ) { }

  // Returns an array of objects [{name: string, url: string}, ...] but is limited to the name of the pokemon.
  // We need to make another GET request using the data from this observable to get more data.
  // This is an example of a basic GET Request to a Web API. 

  getPokemon() {
    return this.http.get<IPokemon>(`${this.endpoint}?limit=151`);
  }

  // This is the second GET request being made with data from the first GET request. We're using the 
  // pokemon's name property to request data from a different endpoint. By completion, this method will
  // be executed 152 times, at least.

  getDetails(name: string) {
    return this.http.get<IDetails>(`${this.endpoint}/${name}`);
  }

}