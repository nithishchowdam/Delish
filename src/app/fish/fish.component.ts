import { Component, OnInit } from '@angular/core';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent implements OnInit {

  array:any;
  constructor(private dsobj:Data2Service) { }

  ngOnInit(): void {
    this.dsobj.getMenuData()
      .subscribe(
         data=>{
        this.array=data;
         },
         err=>{
          console.log("err is ",err)
        }
         )
  }


}
