import { Component, OnInit } from '@angular/core';

declare var $: any;



@Component({
  selector: 'app-getinvolved',
  templateUrl: './getinvolved.component.html',
  styleUrls: ['./getinvolved.component.css']
})
export class GetinvolvedComponent implements OnInit{
  ngOnInit(): void {
    $(function(){
      $("#tabs").tabs();
    });
  }

}
