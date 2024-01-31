import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Studentregister } from '../model/studentregister';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetworkcallService {
  private urlRegistration = "http://localhost:8080/student/registration";
  
  constructor(public httpclient: HttpClient) { }

  createstudentreg(studentreg: Studentregister): Observable<object> {
    return this.httpclient.post(`${this.urlRegistration}`, studentreg);
  }
}
