import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.scss']
})
export class TvdetailsComponent implements OnInit {
  id:string=''
  tvDetails:any={};
  genres:any='';
  imgPrefix:string='https://image.tmdb.org/t/p/w500'


  constructor(private _ActivatedRoute:ActivatedRoute,private _MovieService:MovieService) {
    this.id=_ActivatedRoute.snapshot.params.id;
    _MovieService.getTvDetails(this.id).subscribe((data)=>{
      this.tvDetails=data;
      this.genres=data.genres;


    })

   }

  ngOnInit(): void {
  }

}
