import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routes} from './app.route';
import { FormsModule } from '@angular/forms';
//import {RouterModule}from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { HttpModule } from '@angular/http';
import {AuthService} from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ValidateService} from './services/validate.service';
//import {FlashMessageModule} from 'angular2-flash-message';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,routes,FormsModule,HttpModule
    
    ,
    RouterModule.forRoot([
      {
        path:'home',component:HomeComponent
      },
      {
        path:'login',component:LoginComponent
      },
      {
        path:'register',component:RegisterComponent
      }
    ])
  ],
  providers: [ValidateService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
