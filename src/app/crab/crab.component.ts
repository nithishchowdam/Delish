import { Component, OnInit } from '@angular/core';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-crab',
  templateUrl: './crab.component.html',
  styleUrls: ['./crab.component.css']
})
export class CrabComponent implements OnInit {

  array:any;
  menu:any;
  constructor(private dsobj:Data2Service) { }

  ngOnInit(): void {
    this.dsobj.getMenuData()
      .subscribe(
         data=>{
        this.array=data;
        this.menu=this.array.seafood.crabs;
         },
         err=>{
          console.log("err is ",err)
        }
         )
  }


}
