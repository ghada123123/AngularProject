import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hotel} from '../model/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  listHotel: Hotel[];
  constructor() { }
  //share data
  getHotels(){
    this.listHotel =    [
      {id: 0, title: 'Four Seasons Hotel', price: 750, image: 'https://www.marhba.com/images/tourisme/Cover2.jpg' , like: 0, dislike: 0, description: '*****'},
      {id: 1, title: 'Movenpick Hotel', price: 700, image: 'https://www.sunshinevacances.fr/cxfile/photosi/EXT3.jpg' , like: 0, dislike: 0, description: '*****'},
      {id: 2, title: 'Ibis Hotel', price: 1000, image: 'https://www.histoiredesfax.com/wp-content/uploads/2018/04/hotel-ibis-sfax-la-nuit.jpg' , like: 0, dislike: 0, description: '***'},
      {id: 3, title: 'Jasmin Hotel', price: 200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-8LRgVUY2np6ZTM_4rjXqWilfOekz9Uj5Q&usqp=CAU' , like: 0, dislike: 0, description: '***'},
      {id: 4, title: 'Concorde Hotel', price: 250, image: 'data:image/jpeg;base64,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' , like: 0, dislike: 0, description: '******'},
      {id: 5, title: 'Marigold Hotel', price: 400, image: 'https://www.besthotelstunis.com/data/Photos/Large7/7898/789853/789853929.JPEG' , like: 0, dislike: 0, description: '****'},
      {id: 6, title: 'Le Royal Hammamet Hotel', price: 500, image: 'https://www.bluebayresorts.com/images/hoteles/le_royal_hammamet_hotel_by/v5/large/gal_43_01.jpg' , like: 0, dislike: 0, description: '****'},
      {id: 7, title: 'Bacha Hotel', price: 300, image: 'https://cf.bstatic.com/images/hotel/max1024x768/795/79524565.jpg' , like: 0, dislike: 0, description: '***'},
    ];
    return this.listHotel;
  }

  gethotel(hotelindex: number) {
    return this.listHotel[hotelindex];
  }
}
