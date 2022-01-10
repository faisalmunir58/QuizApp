import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService extends BaseService {

  constructor(
    protected http: HttpClient
  ) { super(http); }

  getAllQuiz(): Observable<any> {
    const url = `${environment.BASE_URL}papers/get-all`;
    return this.http.get(url, this.httpOptions).pipe(
      // Map(this.extractData),
      catchError(this.handleError)
    );
  }
}