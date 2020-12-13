import {Component, OnInit} from '@angular/core';
import {Reservation} from '../core/model/reservation';
import {ReservationService} from '../core/services/reservation.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent implements OnInit {
  listes: Reservation[];
  resrv: Reservation;
  val: string;
  submited = false;
  today = new Date();
  new_reservation: Reservation

  constructor(private service: ReservationService) {
  }

  ngOnInit(): void {
    this.service.getReservation().subscribe(
      (data: Reservation[]) => this.listes = data
    );

    this.resrv = new Reservation();
    this.val = 'Ajouter';

  }

  deleteE(id) {
    this.service.deleteReservation(id).subscribe(
      () => this.listes = this.listes.filter(resrv => resrv.id != id)
    );

  }

  save(form: NgForm) {

    if (this.val === 'Ajouter'){
       this.new_reservation = this.resrv;
       this.resrv = new Reservation();
       console.log(this.new_reservation);
    this.service.addReservation(this.new_reservation).subscribe(
      () => this.listes = [this.new_reservation, ...this.listes]
    );

    }
    else if ( this.val === 'Modifier' )
    { this.new_reservation = this.resrv;
      this.resrv = new Reservation();
      this.service.putReservation(this.new_reservation).subscribe();

    }
    form.resetForm();
  }
  update(e) {

    this.resrv = e;
    this.val = 'Modifier' ;
  }
}
