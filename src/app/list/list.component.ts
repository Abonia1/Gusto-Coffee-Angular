import { Component, OnInit } from '@angular/core';
import{DataService}from "../data.service"
import { Coffee } from '../logic/coffee';
import { Router } from '@angular/router';
import { GeolocationService } from '../geolocation.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list=[Coffee]
  
  constructor(private data: DataService,
    private router:Router,
    private geolocation:GeolocationService) { }

  goDetails(coffee:Coffee){
    this.router.navigate(["/coffee",coffee._id]);
  }
  
  goMap(coffee:Coffee){
    const mapURL=this.geolocation.getMapLink(coffee.location);
    location.href=mapURL;
  }

  ngOnInit() {
    this.data.getList(list=>{
      this.list=list;
    })
  }

}
