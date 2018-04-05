import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import {SecondService} from '../second.service';
import {Builder} from '../second';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  providers:[SecondService]
})
export class SecondComponent implements OnInit {

  @ViewChild('content') content:ElementRef;
  public downloadpdf(){
    let doc = new jsPDF();
    let speclialElementHandlers = {
      '#editor' : function(element,renderer){
        return true;
      }
    };
    let content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML,15,15,{
      'width':190,
      'elementHandlers':speclialElementHandlers
    });
    doc.save('test.pdf');
  }


  showTemplates: boolean;
  vl=true;
  button=false;
  show=true;
  showData=false;
  hide=false;
  databasePreview=false;
  template1=true;
  template2=true;
  databasePreview2=false;
  customise1=false;
  personal=false;
  awards=false;
  uni=false;
  technology=false;
  template:any;
  //builders:any[];
  builders:Builder[]=[];
  builder:Builder;

  name: string='Ashish';
  designation:string="WebDeveloper" ;  
  email:string="ashihraj108786@gmail.com";
  website:string="https://lpuguide.com" ;
  phone:string="8699986501" ;
  address:string="place , state, country" ;
  pinf:string="Enter  your personal and professional information" ;
  caption:string="For me respresentation of my achievement is important." ;
  university:string="Oxford" ;
  uni_sub:string="Web developer" ;
  detailed_qualification:string="Pursuing computer science and engineering............................" ;
  uni_duration:string="2015-2019" ;
  universit:string="Oxford" ;
  uni_su:string="Web developer" ;
  detailed_qualificatio:string="Pursuing computer science and engineering............................" ;
  uni_duratio:string="2015-2019" ;
  tech_heading:string="Tech heading" ;
  tech_detail:string="jssabadnkjasbbsbs hdbhsvdhsbd sdvsbhasvdjbshfbsjhf s dbfebfkjsab hjsfhavfwufs djhbfewgfwefw hjwvbwfgeui" ;
  


  constructor(private secondService: SecondService) { }


  addBuilder()
  {
    
    const newBuilder={
      name: this.name,
      designation: this.designation,
      phone: this.phone,
      email:this.email,
      website:this.website,
      address:this.address,   
      pinf:this.pinf,    
      caption: this.caption,
      university:this.university,
      uni_sub:this.uni_sub,
      detailed_qualification:this.detailed_qualification,
      uni_duration:this.uni_duration,
      universit:this.universit,
      uni_su:this.uni_su,
      detailed_qualificatio:this.detailed_qualificatio,
      uni_duratio:this.uni_duratio,
      tech_heading:this.tech_heading,
      tech_detail:this.tech_detail
    }
    this.secondService.addBuilder(newBuilder)
    .subscribe(builder =>{
      this.builders.push(builder);
      this.secondService.getBuilders()
      .subscribe(builders=>
      this.builders=builders); 
    }); 
  } 



  resumeBuilder(id:any){
    this.showTemplates = true;
    if(id==1){
      this.template=1;
    }
    else this.template=2;
  }
  container(){
    this.show=false;
    this.hide=false;
    this.vl=false;
    this.template1=true;
    this.databasePreview=false;
    this.template2=true;
    this.databasePreview2=false;
    this.button=true;
    this.customise1=false;
  }
 ar1(){
  this.show=false;
  this.hide=true;
  this.vl=true;
  this.template1=true;
  this.databasePreview=false;
  this.template2=true;
    this.databasePreview2=false;
    this.customise1=false;
 }
 ar2(){
  this.show=true;
  this.hide=false;
  this.vl=true;
  this.template1=true;
  this.databasePreview=false;
  this.template2=true;
    this.databasePreview2=false;
    this.customise1=false;
 }

 a1(){
this.personal=!this.personal;
this.show=true;
this.hide=false;
 }
 a2(){
this.awards=!this.awards;
this.show=true;
this.hide=false;
 }
 a3(){
this.uni=!this.uni;
this.show=true;
this.hide=false;
 }
 a4(){
this.technology=!this.technology;
this.show=true;
this.hide=false;
 }
custm1(){
  this.customise1=true;
  this.show=false;
  this.hide=false;
  this.vl=false;
  this.template1=false;
  this.databasePreview=false;
  this.template2=false;
    this.databasePreview2=false;
}
repo(){
  this.databasePreview=true;
  this.customise1=false;
  this.show=false;
  this.hide=false;
  this.vl=false;
  this.template1=false;
  this.template2=false;
    this.databasePreview2=false;
}

 ngOnInit() {
  this.showTemplates = false;
  /*
  this.secondService.getBuilders()
  .subscribe( builders =>
  this.builders = builders);
*/
}
}
