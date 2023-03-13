import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from "../models/Movie.model";

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private BASE_URL = 'https://api.themoviedb.org/3';
    
    private TOKEN_V4 = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2Y5NjQ3ZWZkNjYzMTkxYWMzZTg2ZDUzMzg5NjM0YSIsInN1YiI6IjY0MGE1M2RkMzE2NDRiMDA5OTY1MGE2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zQmAmDhReeaxfvjMor-QF7nro4-v57G4GXACVtbqJVo';
    
    private headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.TOKEN_V4}`)
    .set('Content-Type', 'application/json;charset=utf-8');

    public constructor(private http: HttpClient) {}

    public getMovie(id: string): Observable<Movie> {
        return this.http.get(this.BASE_URL + '/movie/' + id, { headers: this.headers }) as Observable<Movie>;
    }
}