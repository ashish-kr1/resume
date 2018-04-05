import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {NgModule} from "@angular/core";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';

export const route: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'home', component:HomeComponent, pathMatch: 'full'},
    {path:'second',component:SecondComponent, pathMatch: 'full'}
];

export const routes:ModuleWithProviders=RouterModule.forRoot(route);