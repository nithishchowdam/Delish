import { Component, OnInit } from '@angular/core';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {

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
