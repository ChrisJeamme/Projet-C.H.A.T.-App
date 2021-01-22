import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerCommunicationService
{

  constructor(
    private http: HttpClient
  ) { }

  testOk()
  {
    this.http.get('https://my-json-server.typicode.com/typicode/demo/posts').subscribe(
      success =>
      {
        console.log(success);
      }
    )
  }
  testFail()
  {
    this.http.get('https://my-json-server.typicodes.com/typicode/demo/posts').subscribe(
      success =>
      {
        console.log(success);
      }
    )
  }
}
