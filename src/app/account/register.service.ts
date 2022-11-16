import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';



@Injectable({
  providedIn: 'root',
})


export class RegisterService {

  constructor(private httpClient: HttpClient) {}

  public getAllRegisterService() {
    return this.httpClient.get('http://localhost:8080/register/');
  }

  public getRegisterService(id) {
    return this.httpClient.get('http://localhost:8080/register/' + id);
  }

  public deleteRegisterService(id) {
    return this.httpClient.delete('http://localhost:8080/register/' + id);
  }
  
  public createRegisterService(user: User) {
   // alert(JSON.stringify(ticketbooking));
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.post(
      'http://localhost:8080/register/',
      JSON.stringify(user),
      {
        headers: headers,
      }
    );
  }
  
  public updateRegisterService(id, user: User) {
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.put(
      'http://localhost:8080/user/' + id,
      JSON.stringify(user),
      {
        headers: headers,
      }
    );
  }
}
