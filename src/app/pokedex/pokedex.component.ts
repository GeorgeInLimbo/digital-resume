import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})

export class PokedexComponent {

  pokemon$ = this.dataService.pokemon$

  constructor(
    private dataService: ServiceService
  ) { }

}
