import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  { path: 'resume', component: ResumeComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'pokemon-detail/:id', component: PokemonDetailComponent },
  { path: 'forms', component: FormsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// One of my favorite features of Angular is the built-in Routing. It is something that React doesn't 
// have automatically available to it but it makes navigation easy to write and maintain. Routing also
// makes it easier to take advantage of Angular's component structure, delegating certain tasks as to keep
// the code clean, readable, and therefore more easily maintained.  