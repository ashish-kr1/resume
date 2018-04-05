import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
    private authService:AuthService

  
  ) { }

  ngOnInit() {
  }
  navigate(){
    this.router.navigate(['/second']);
  }
  onLogoutClick(){
this.authService.logout();
this.router.navigate(['/login']);
return false;
  }
}
