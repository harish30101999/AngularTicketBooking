import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from './list';


@Injectable({
  providedIn: 'root',
})
export class ListService {

  constructor(private httpClient: HttpClient) {}

  public getAllListService() {
    return this.httpClient.get('http://localhost:8080/list/');
  }

  public getListService(id) {
    return this.httpClient.get('http://localhost:8080/list/' + id);
  }

  public deleteListService(id) {
    return this.httpClient.delete('http://localhost:8080/list/' + id);
  }
  
  public createListService(list: List) {
   // alert(JSON.stringify(ticketbooking));
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.post(
      'http://localhost:8080/list/',
      JSON.stringify(list),
      {
        headers: headers,
      }
    );
  }
  
  public updateListService(id, list: List) {
    const headers = { 'content-type': 'application/json' };
    return this.httpClient.put(
      'http://localhost:8080/list/' + id,
      JSON.stringify(list),
      {
        headers: headers,
      }
    );
  }
}
