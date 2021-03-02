import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { TecnologicosComponent } from './tecnologicos/tecnologicos.component';

const routes: Routes = [
  {path:'books', component:BookComponent},
  {path:'tecnologicos', component:TecnologicosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
