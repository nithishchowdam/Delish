import { Component, OnInit } from '@angular/core';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-vegcurry',
  templateUrl: './vegcurry.component.html',
  styleUrls: ['./vegcurry.component.css']
})
export class VegcurryComponent implements OnInit {

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
