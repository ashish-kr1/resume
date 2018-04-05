import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
name:string;
username:string;
email:string;
password:string;
 
  constructor(
    private validateService: ValidateService,
  private authService:AuthService,
  private router:Router
  ) { }

  ngOnInit() {
  }
onRegisterSubmit(){
  const user={
    name:this.name,
    username:this.username,
    email:this.email,
    password:this.password
  }
  //required field
  if(!this.validateService.validateRegister(user)){
    console.log('please fill all the detail');
    return false;
  }
  // validate email
  if(!this.validateService.validateEmail(user.email)){
    console.log('please use a valid email');
    return false;
  }
  //register user
  this.authService.registerUser(user).subscribe(data=>{
    if(data.success){
      console.log('You are registered');
      this.router.navigate(['/login']);
    }
    else{
      console.log('Something wrong');
      this.router.navigate(['/register']);
    }
  });
}
}
