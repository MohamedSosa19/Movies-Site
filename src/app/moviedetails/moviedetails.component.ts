import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { NgxSpinnerService } from "ngx-spinner";





@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
  
})
export class MoviedetailsComponent implements OnInit {
  id:string=''
  movieDetails:any={};
  genres:any='';
  imgPrefix:string='https://image.tmdb.org/t/p/w500'

 

  
  constructor(private _ActivatedRoute:ActivatedRoute,private _MovieService:MovieService,private spinner: NgxSpinnerService) { 
    this.spinner.show();

    this.id=_ActivatedRoute.snapshot.params.id;
    _MovieService.getMovieDetails(this.id).subscribe((data)=>{
      this.movieDetails=data;
      this.genres=data.genres;


      setTimeout(() => {
        this.spinner.hide();  
      }, 500);


    })

  }

  ngOnInit(): void {
  }

}
