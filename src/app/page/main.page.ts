import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/Movie.model';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss']
})
export class MainPage implements OnInit {

  protected title = 'movie-project';
  protected overView = '';

  public constructor(private apiService: ApiService) {}

  public ngOnInit(): void {
    this.apiService.getMovie('550').subscribe((movie: Movie) => {
        this.title = movie.original_title;
        this.overView = movie.overview;
    });
  }


}
