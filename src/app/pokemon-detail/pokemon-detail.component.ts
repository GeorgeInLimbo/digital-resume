import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../pokemon.service';
import { map } from 'rxjs/operators';
// import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})

export class PokemonDetailComponent {

  constructor(
    private dataService: ServiceService,
    private route: ActivatedRoute
  ) { }

  id = Number(this.route.snapshot.paramMap.get('id'));

  pokemon$ = this.dataService.pokemon$.pipe(
    map(details => details.find(pokemon => pokemon.id === this.id))
  )

  // private id$ = this.route.paramMap.pipe(map(params => Number(params.get('id'))))

  // pokemon$ = combineLatest([this.id$, this.dataService.pokemon$]).pipe(
  //   map(([id, pokemon]) => pokemon.find(p => p.id === id))
  // )

}
