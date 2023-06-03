import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'jees';
  
  constructor(){

  }
  
  
  ngOnInit(): void {

    $(window).resize(function() {
      changeMenu();
    })

    changeMenu();

   
  }

 

}

function changeMenu() {
  if(window.innerWidth<=768) {
    $("#hambur").on("click", () => {
      $(".menu-items li").css("display","block").css("line-height","50px");
      $("#hambur").css("display","none");
      $("#hambur1").css("display","inline");
      //$(".menu-items li").css("background","blue").css("color","white");
    });

    $("#hambur1").on("click", () => {
      if(window.matchMedia("(max-width: 768px)").matches){
        $(".menu-items li").css("display","none");
        $("#hambur").css("display","inline");
        $("#hambur1").css("display","none")
      }
    });

    $(".menu-items li").on("click", () => {
      if(window.matchMedia("(max-width: 768px)").matches){
        $(".menu-items li").css("display","none");
        $("#hambur").css("display","inline");
        $("#hambur1").css("display","none")
        //$(".menu-items").css("background", "lightgrey");
      }
    });

    $(".menu-items li").css("display","none");
    $("#hambur").css("display","inline");
    //$("#hamburguesa1").css("display","none");
  }else{
    $(".menu-items li").css("display","inline-block").css("line-height","130px");
    $("#hambur, #hambur1").css("display","none");
  }
}

