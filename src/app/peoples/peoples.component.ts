import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss']
})
export class PeoplesComponent implements OnInit {
  TrendingPerson:any[]=[];
  imgPrefix:string='https://image.tmdb.org/t/p/w500'
  loadingDone:any=false;

  collection: any[]=[] ;  
  p: number = 1;
  totalLength:any;



  constructor(private _MovieService:MovieService,private spinner: NgxSpinnerService) {
    this.spinner.show();

    _MovieService.getTrending('person').subscribe((data)=>{
      this.TrendingPerson=data.results;
    })

    setTimeout(() => {

      this.spinner.hide();
      this.loadingDone=true;

    }, 500);

   }

  ngOnInit(): void {
  }

}
