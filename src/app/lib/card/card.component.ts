import { Component, Input, OnInit } from "@angular/core";
import { Movie } from "src/app/models/Movie.model";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
  })
  export class CardComponent implements OnInit {
  
    @Input() public movie: Movie | null | undefined;
  
    public constructor() {}
  
    public ngOnInit(): void {}
  
  
  }
  