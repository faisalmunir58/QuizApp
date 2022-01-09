import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService extends BaseService {
  private readonly API_User = `${environment.BASE_URL}users`;
  constructor(protected http: HttpClient) {
    super(http);
  }

  adduser(data): Observable<any> {
    const url = `${this.API_User}/insert`;
    return this.http
      .post(url, data, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
}
