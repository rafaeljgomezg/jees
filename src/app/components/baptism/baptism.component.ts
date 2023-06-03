import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-baptism',
  templateUrl: './baptism.component.html',
  styleUrls: ['./baptism.component.css']
})

export class BaptismComponent implements OnInit{
  public getScreenWidth: any;
  public getScreenHeight: any;

  ngOnInit(): void {

  }

  @HostListener('window:resize', ['$event'])
  
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;

    if(this.getScreenWidth<780){
     
    }
  }

}
