import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-getinvolved',
  templateUrl: './getinvolved.component.html',
  styleUrls: ['./getinvolved.component.css']
})
export class GetinvolvedComponent implements OnInit{
  ngOnInit(): void {
    $(function(){
      ($("#tabs")as any).tabs();
    });
  }

}
