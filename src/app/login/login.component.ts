import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error:string=''
  loginInfo: any;
  info:any;
  firstName:any='';
  email:any='';
  age:any='';
  lastName:any='';
  constructor(private _AuthService:AuthService ,private _Router:Router,private toastr: ToastrService ) { }

  loginForm=new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern('^[A-z][a-z 0-9]{3,10}$')]),
    
  })

  showSuccess(){
    this._AuthService.currentUser.subscribe((data:any)=>{
      this.info=data;
      this.firstName=data?.first_name;
      this.lastName=data?.last_name;
      this.age=data?.age;
      this.email=data?.email;


    })
    this.toastr.success(`Welcome ${this.firstName} ${this.lastName}`, '', {
      timeOut: 2000,
    });

  }
  showerror(){
    this.toastr.error('Login is invalid plz try again', 'Major Error', {
      timeOut: 3000,
    });
  }

  

  submitloginForm(loginForm:FormGroup){

    if(this.loginForm.invalid){
      return;
    }
    this._AuthService.login(loginForm.value).subscribe((response)=>{
      if (response.message =="success"){
        localStorage.setItem("userToken",response.token)
        this._AuthService.saveCurrentUser()
        this._Router.navigate(['/home'])
        this.showSuccess()


      }
      else{
        this.error=response.message
        this.loginForm.reset();
        this.showerror();


      }
    })
    
  }

  

  ngOnInit(): void {
  }

}
