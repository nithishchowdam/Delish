import { Component, OnInit } from '@angular/core';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-prawns',
  templateUrl: './prawns.component.html',
  styleUrls: ['./prawns.component.css']
})
export class PrawnsComponent implements OnInit {

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
