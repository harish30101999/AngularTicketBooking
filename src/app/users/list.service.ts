import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../_models/user';



@Injectable({
  providedIn: 'root',
})
export class ListService {

  constructor(private httpClient: HttpClient) {}

  public getAllListService() {
    return this.httpClient.get('http://localhost:8080/register/');
  }

  public getListService(id) {
    return this.httpClient.get('http://localhost:8080/register/' + id);
  }

  public deleteListService(id) {
    return this.httpClient.delete('http://localhost:8080/register/' + id);
  }
  
  public createListService(user: User) {
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
  
  public updateListService(id, user: User) {
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.put(
      'http://localhost:8080/register/' + id,
      JSON.stringify(user),
      {
        headers: headers,
      }
    );
  }
}
