import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService extends BaseService {

  constructor(
    protected http: HttpClient
  ) { super(http); }

  getallQuestions(): Observable<any> {
    const url = `${environment.BASE_URL}questions/get-all`;
    return this.http.get(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
