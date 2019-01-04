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


  //manage links in map,share,details in coffee list
  goDetails(coffee:Coffee){
    this.router.navigate(["/coffee",coffee._id]);
  }
  
  goMap(coffee:Coffee){
    const mapURL=this.geolocation.getMapLink(coffee.location);
    location.href=mapURL;
  }
  
  share(coffee:Coffee){
    const shareText=`i had this coffee at ${coffee.place} and for me its a ${coffee.rating} star`
    if('share' in navigator){
     (navigator as any).share({
        title:coffee.name,
        text:shareText,
        url:window.location.href
      }).then( () => console.log("shared")).catch( () => console.log("error sharing"));
    }else{
      const shareURL=`whatsapp://send?text=${encodeURIComponent(shareText)}`;
      location.href=shareURL;
    }
  }

  ngOnInit() {
    this.data.getList(list=>{
      this.list=list;
    })
  }

}
