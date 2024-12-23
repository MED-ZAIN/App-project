import { Injectable } from '@angular/core';
import { MyInterface } from '../models/my-interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private urlApi = 'http://localhost:3000/employes';  

  constructor(private http: HttpClient) {}

  
  getAll(): Observable<MyInterface[]> {
    return this.http.get<MyInterface[]>(this.urlApi);
  }

 
  delete(id: number) {
    return this.http.delete<void>(`${this.urlApi}/${id}`);
  }

  
  add(employee: MyInterface): Observable<MyInterface> {
    return this.http.post<MyInterface>(this.urlApi, employee);
  }
}

