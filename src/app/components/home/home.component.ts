import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movies [] = [];
   
  

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getHome()
  }

  getHome() {
     
  }

}