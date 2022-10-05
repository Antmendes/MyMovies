import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../models/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  urlHome = 'https://imdb-api.com/en/API/ComingSoon/k_g8e34g19'

  constructor(private httpClient: HttpClient) { }

  getHome(): Observable<Movies[]>{
    return this.httpClient.get<Movies[]>(this.urlHome);
  }
}
