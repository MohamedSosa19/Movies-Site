import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  term:any='';
  imgPrefix:string='https://image.tmdb.org/t/p/w500'
  TrendingMovies:any[]=[];
  TrendingTv:any[]=[];
  TrendingPerson:any[]=[];
  



  constructor(private _MovieService:MovieService,private spinner: NgxSpinnerService) {


    _MovieService.getTrending('movie').subscribe((data)=>{
      this.TrendingMovies=data.results.slice(0,10);
    });
    _MovieService.getTrending('tv').subscribe((data)=>{
      this.TrendingTv=data.results.slice(0,10);
    });
    _MovieService.getTrending('person').subscribe((data)=>{
      this.TrendingPerson=data.results.slice(0,10);
    })

   }
   

   ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }

  }
  


