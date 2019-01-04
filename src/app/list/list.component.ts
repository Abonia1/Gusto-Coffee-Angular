import { Component, OnInit } from '@angular/core';
import{DataService}from "../data.service"
import { Coffee } from '../logic/coffee';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private data: DataService) { }
  list=[Coffee]
  ngOnInit() {
    this.data.getList(list=>{
      this.list=list;
    })
  }

}
