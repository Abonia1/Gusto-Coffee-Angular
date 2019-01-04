import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from "@angular/router";
import { Coffee } from '../logic/coffee';
import {GeolocationService} from "../geolocation.service"

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  coffee:Coffee;
  types = ["Espresso", "Ristretto", "Americano", "Cappuccino", "Frappe"];

  constructor(private route: ActivatedRoute,private geolocation:GeolocationService) { }

  routingSubscription: any;

  ngOnInit() {
    this.coffee=new Coffee();
    this.routingSubscription = 
        this.route.params.subscribe(params => {
            console.log(params["id"]);
        });
        this.geolocation.requestLocation(location=>{
          if(location){
            this.coffee.location.latitude=location.latitude;
            this.coffee.location.longitude=location.longitude;
          }
        })
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
