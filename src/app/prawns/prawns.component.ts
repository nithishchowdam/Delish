import { Component, OnInit } from '@angular/core';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-prawns',
  templateUrl: './prawns.component.html',
  styleUrls: ['./prawns.component.css']
})
export class PrawnsComponent implements OnInit {

  array:any;
  menu:any;
  constructor(private dsobj:Data2Service) { }

  ngOnInit(): void {
    this.dsobj.getMenuData()
      .subscribe(
         data=>{
        this.array=data;
        this.menu=this.array.seafood.prawns;
         },
         err=>{
          console.log("err is ",err)
        }
         )
  }
}
