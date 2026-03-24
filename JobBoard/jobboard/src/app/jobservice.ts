import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Jobservice {
  private url = 'https://hacker-news.firebaseio.com/v0/jobstories.json';
  constructor(private http: HttpClient) {}
  getJobs(): Observable<any> {
    return this.http.get(this.url);
  }
  getJobById(id: number): Observable<any> {
    return this.http.get<any>(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
  }
}
