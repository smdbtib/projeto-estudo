import { Repository } from './../../exemplos/app-github/modelos/repository';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private readonly baseUrl = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getUserRepositories(userName: string): Observable<Repository[]>{
    const url = `${this.baseUrl}/users/${userName}/repos`;
    return this.http.get<Repository[]>(url);
  }
}
