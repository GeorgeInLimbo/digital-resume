import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { OccupationComponent } from './occupation/occupation.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    SkillsComponent,
    NavComponent,
    HomeComponent,
    OccupationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
