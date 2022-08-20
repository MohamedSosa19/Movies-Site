import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { NgxSpinnerService } from "ngx-spinner";




@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  imgPrefix:string='https://image.tmdb.org/t/p/w500'
  TrendingTv:any[]=[];
  loadingDone:any=false;
  collection: any[]=[] ;  
  p: number = 1;
  totalLength:any;



  constructor(private _MovieService:MovieService,private spinner: NgxSpinnerService) {
    this.spinner.show();

    _MovieService.getTrending('tv').subscribe((data)=>{
      this.TrendingTv=data.results;
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
