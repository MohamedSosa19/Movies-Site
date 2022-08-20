import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin:boolean=false

  constructor(private _AuthService:AuthService,private _Router:Router ) {
    _AuthService.currentUser.subscribe(()=>{
      if(_AuthService.currentUser.getValue()!= null){
        this.isLogin=true
      }
      else{
        this.isLogin=false
      }
    })
   }

  islogout(){
    this._AuthService.logout()
  }

  ngOnInit(): void {
  }

}
