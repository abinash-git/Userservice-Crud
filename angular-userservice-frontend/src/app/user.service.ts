import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = 'http://localhost:8080/user';
  
  constructor(private httpClient: HttpClient) { }

  getUserById(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/byId/${id}`);
  }
  getUserList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}/allUsers`);
  } 

  createUser(user: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/register`, user);
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/edit/${id}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseURL}/hardDeleteById/${id}`, { responseType: 'text' });
  }

}
