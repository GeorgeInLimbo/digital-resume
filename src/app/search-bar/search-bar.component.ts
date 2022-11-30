import { Component, OnInit } from '@angular/core';
import { combineLatest, debounce, debounceTime, distinctUntilChanged, map, Subject } from 'rxjs';
import { ServiceService } from '../pokemon.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent {


  constructor(
    private dataService: ServiceService,
  ) { }


  // Search Bar functionality

  pokemon$ = this.dataService.pokemon$

  private _searchTerm = new Subject<string>();

  search(term: string): void {
    this._searchTerm.next(term.toLowerCase());
  }

  filterPokemon$ = combineLatest([this.pokemon$, this._searchTerm])
    .pipe(
      debounceTime(300),
      distinctUntilChanged(),
      map(([pokemon, searchTerm]) => {
        return searchTerm?.trim().toLowerCase()
          ? pokemon.filter(x => x.name.toLowerCase().includes(searchTerm))
          : [];
      })
    )

  // Random Search Functionality
  random: string = ``;

  randomID(): number {
    return Math.floor(Math.random() * 153);
  }

  ngOnInit() {
    let randomID = this.randomID();
    this.random = `/pokemon-detail/${randomID}`;
  }
}

// private router: Router
// this.router.navigate([`/pokemon-detail/${randomID}`])
// Jake's solution for the random pokemon button
