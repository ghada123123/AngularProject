import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Hotel} from '../core/model/hotel';
import {HotelService} from '../core/services/hotel.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private hotelindex: number;
  hotel: Hotel;
  @Input() recipeId: number;
  private sub: any;
  products: Hotel[];
  product: Hotel = new Hotel();
  constructor(private serviceRoute: ActivatedRoute, private serviceProduct: HotelService, private router: Router) { }
  ngOnInit(): void {
    this.hotelindex = this.serviceRoute.snapshot.params.id;
    this.product = this.serviceProduct.gethotel(this.hotelindex);
    console.log(this.product);
  }

}
