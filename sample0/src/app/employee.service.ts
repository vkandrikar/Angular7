import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public url = '/assets/data/employee.json';
  
  constructor(private http: HttpClient) { }

  fnGetEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url)
      .pipe(
        catchError(this.fnHandleError)
      );
  }

  fnHandleError(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }
}
