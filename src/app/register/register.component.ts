  import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  error:string=''
  constructor(private _AuthService:AuthService,private _Router:Router) { }


  registerForm= new FormGroup({
    first_name: new FormControl(null,[Validators.pattern('^[A-Z][a-z]{3,10}$'),Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    last_name: new FormControl(null,[Validators.pattern('^[A-Z][a-z]{3,10}$'),Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    age: new FormControl(null,[Validators.required,Validators.min(16),Validators.max(80)]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required,Validators.pattern('^[A-z][a-z 0-9]{3,10}$')]),
    
  })

  submitRegisterForm(registerForm:FormGroup){
    if(this.registerForm.invalid){
      return ;
    }
    this._AuthService.register(registerForm.value).subscribe((response)=>{
      if (response.message =="success"){
        this._Router.navigate(['/login'])

      }
      else{
        this.error=response.errors.email.message
      }
    })
    
 
  }


  ngOnInit(): void {
  }

}
