import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';
import { BasicResponse } from '../models/general';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(`${environment.apiUrl}/books`);
  }

  addBook(book:Book):Observable<BasicResponse>{
    return this.http.post<BasicResponse>(`${environment.apiUrl}/books`,book);
  }

  updateBook(book:Book):Observable<BasicResponse>{
    return this.http.put<BasicResponse>(`${environment.apiUrl}/books/${book.id}`,book);
  }

  deleteBook(id:any):Observable<BasicResponse>{
    return this.http.delete<BasicResponse>(`${environment.apiUrl}/books/${id}`);
  }

  uploadImage(datos:FormData):Observable<BasicResponse>{
    //return of({message:'ok'})

    return this.http.post<BasicResponse>(`${environment.apiUrl}/books`, datos);
  }

}
