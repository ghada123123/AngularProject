import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Reservation} from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  url = 'http://localhost:3000/reservations/';

  constructor(private http: HttpClient) {
  }

  getReservation() {
    return this.http.get<Reservation[]>(this.url);
  }

  deleteReservation(id) {
    return this.http.delete(this.url + id);
  }

  addReservation(e: Reservation) {
    return this.http.post(this.url, e);
  }

  searchReservation(id) {
    return this.http.get(this.url + id);
  }

  putReservation(e: Reservation) {
    return this.http.put(this.url + '/' + e.id, e);
  }
}
