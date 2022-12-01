import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { OccupationComponent } from './occupation/occupation.component';
import { HttpClientModule } from '@angular/common/http';
import { PokedexComponent } from './pokedex/pokedex.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    SkillsComponent,
    NavComponent,
    HomeComponent,
    OccupationComponent,
    PokedexComponent,
    SearchBarComponent,
    PokemonDetailComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
