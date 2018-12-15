import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  routingSubscription: any;

  ngOnInit() {
    this.routingSubscription = 
        this.route.params.subscribe(params => {
            console.log(params["id"]);
        })
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
