import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterResolver } from 'src/app/shared/services/character/character.service';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterSearchComponent } from './character-search/character-search.component';

const routes: Routes = [
  {path: '', component: CharacterSearchComponent, children: [
    {path: ':id', component: CharacterDetailComponent, resolve: {character: CharacterResolver}}
  ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
