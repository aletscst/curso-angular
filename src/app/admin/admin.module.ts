import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { BooksComponent } from './components/books/books.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    UsersComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
