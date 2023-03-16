import { Component, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/Movie.model';
import { ApiService } from '../services/api.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss']
})
export class MainPage implements OnChanges {

  public title = 'movie-project';
  public overView = '';
  public movie$: Observable<Movie|null> = this.apiService.getMovie('550');

  public constructor(private apiService: ApiService) {}

  public ngOnChanges(): void {
    this.apiService.getMovie('550').subscribe((movie: Movie) => {
        //this.movie = movie;
        this.title = movie.original_title;
        this.overView = movie.overview;
    });
  }


}
