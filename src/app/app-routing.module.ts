import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';

import { CreditsComponent } from './credits/credits.component';

import { UsersComponent } from './users/users.component';

import { SearchComponent } from './search/search.component';

import { UnheroeComponent } from './unheroe/unheroe.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'heroes', component: HeroesComponent},
  { path: 'about', component: AboutComponent},
  { path: 'users', component: UsersComponent},
  { path: 'credits', component: CreditsComponent},

  { path: 'heroe/:id', component: UnheroeComponent},
  { path: 'buscador/:nombreh', component: SearchComponent},
  { path: '**',pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
