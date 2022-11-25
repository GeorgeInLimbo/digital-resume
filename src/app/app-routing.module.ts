import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'resume', component: ResumeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  // ^^ This redirects the given route to the home page automatically.

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