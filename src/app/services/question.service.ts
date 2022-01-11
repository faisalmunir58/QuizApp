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

  getQuestionsByID(id): Observable<any> {
    const url = `${environment.BASE_URL}questions/get/by-id/${id}`;
    return this.http.get(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  addQuestion(data): Observable<any> {
    const url = `${environment.BASE_URL}questions/insert`;
    return this.http.post(url, data, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  edittQuestions(data): Observable<any> {
    const url = `${environment.BASE_URL}questions/update`;
    return this.http.put(url, data, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteQuestion(id): Observable<any> {
    const url = `${environment.BASE_URL}questions/delete/by-id/${id}`;
    return this.http.delete(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
