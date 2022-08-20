import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  imgPrefix:string='https://image.tmdb.org/t/p/w500'

  TrendingMovies:any[]=[];
  loadingDone:any=false;

  collection: any[]=[] ;  
  p: number = 1;
  totalLength:any;




  constructor(private _MovieService:MovieService,private spinner: NgxSpinnerService) {
    this.spinner.show();

    _MovieService.getTrending('movie').subscribe((data)=>{
      this.TrendingMovies=data.results;
      this.totalLength=data.length;

    });

    setTimeout(() => {

      this.spinner.hide();
      this.loadingDone=true;

    }, 500);

   }

  ngOnInit(): void {
  }

}
