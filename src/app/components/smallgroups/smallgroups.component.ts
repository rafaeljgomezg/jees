import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smallgroups',
  templateUrl: './smallgroups.component.html',
  styleUrls: ['./smallgroups.component.css']
})
export class SmallgroupsComponent implements OnInit{

  constructor(private router: Router) { }


  ngOnInit(): void {

  }

  onBtnClick(){
    this.router.navigate(['/involved/smallgroups/direccionescelulas']);
  }

}
