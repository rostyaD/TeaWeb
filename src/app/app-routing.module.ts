import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeaTypeInfoComponent } from './tea-type-info/tea-type-info.component';
import { TeaResolver } from './tea.resolver';

const routes: Routes = [
  {path: '', component: HomeComponent,
  resolve: {tea: TeaResolver},
  runGuardsAndResolvers: 'always'},
  {path: ':name',
  component: TeaTypeInfoComponent,
  resolve: {tea: TeaResolver},
  runGuardsAndResolvers: 'always'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
