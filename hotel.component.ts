import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hotel} from '../core/model/hotel';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
@Input() recipeId: number;
  @Input() product: Hotel;
  @Output() notifLike = new EventEmitter<Hotel>();
  @Output() notifdisLike = new EventEmitter<Hotel>();

  @Input() priceInput: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  sendNotif() {
    this.notifLike.emit(this.product);
  }
  sendNotiff(){
    this.notifdisLike.emit(this.product);

  }

}




