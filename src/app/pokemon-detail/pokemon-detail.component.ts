import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../pokemon.service';
import { map } from 'rxjs/operators';

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

}
