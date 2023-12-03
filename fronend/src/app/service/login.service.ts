import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient ) { }
  private apiUrl = 'http://localhost:8080/api/usuario';

  //obtener  User
  obtenerUser(): Observable<any>{
    return this.http.get(`${this.apiUrl}/obtener`);
  }
  //Enviar  dUser
  enviarUser(data:any){
    return this.http.post(this.apiUrl,data);
  }
  sendObjectToServer(myObject: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/agregar`, myObject);
  }
    
}
