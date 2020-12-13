import { Component, OnInit } from '@angular/core';
import {Reservation} from '../../core/model/reservation';
import {Hotel} from '../../core/model/hotel';
import {HotelService} from '../../core/services/hotel.service';

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.css']
})
export class ListHotelComponent implements OnInit {
  title: string;
  listHotel: Hotel[];
  priceMax: number;
  formState: boolean;
  serviceProductr: HotelService;
  constructor(private serviceProduct: HotelService) { }
  ngOnInit(): void {

    this.listHotel = this.serviceProduct.getHotels();
    this.formState = false;
  }

  incrementLike(product: Hotel){
    let i = this.listHotel.indexOf(product);
    this.listHotel[i].like++;
  }
  incrementLikee(product: Hotel){
    let i = this.listHotel.indexOf(product);
    this.listHotel[i].like++;
  }

  pushProduct(p: Hotel){
    this.listHotel.push(p);
    console.log(this.listHotel);
    this.formState = false;
  }
  showForm(){
    this.formState = true;
  }
}
