import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { switchMap, forkJoin, tap, Observable } from 'rxjs';
import { IDetails } from '../interfaces';


@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})

export class PokedexComponent implements OnInit {

  pokemon: Observable<IDetails[]> = this.dataService.getPokemon().pipe(
    switchMap(res => {
      const detailRequests = res.results.map(n => this.dataService.getDetails(n.name));
      return forkJoin([...detailRequests]);
    }), tap(x => console.log(x))
  )

  constructor(
    private dataService: ServiceService
  ) { }

  ngOnInit() { }

}
