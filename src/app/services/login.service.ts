import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  constructor(
    protected http: HttpClient
  ) { super(http); }

  checkAuth(data): Observable<any> {
    const url = `${environment.BASE_URL}users/login`;
    return this.http.post(url, data, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}

