import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OptionsService extends BaseService {

  constructor(
    protected http: HttpClient
  ) { super(http); }

  getAllOption(): Observable<any> {
    const url = `${environment.BASE_URL}options/get-all`;
    return this.http.get(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getOptionByID(id): Observable<any> {
    const url = `${environment.BASE_URL}options/by-id/${id}`;
    return this.http.get(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  addOption(data): Observable<any> {
    const url = `${environment.BASE_URL}options/insert`;
    return this.http.post(url, data, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  editOption(data): Observable<any> {
    const url = `${environment.BASE_URL}options/update`;
    return this.http.put(url, data, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  DeleteOption(id): Observable<any> {
    const url = `${environment.BASE_URL}options/delete/by-id/${id}`;
    return this.http.delete(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
