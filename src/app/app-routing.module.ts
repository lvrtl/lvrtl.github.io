import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TalesComponent } from './tales/tales.component';
import { SoundsComponent } from './sounds/sounds.component';
import { PoemsComponent } from './poems/poems.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tales', component: TalesComponent },
  { path: 'poems', component: PoemsComponent },
  { path: 'sounds', component: SoundsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
