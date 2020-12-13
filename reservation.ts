export class Reservation {
  id: number;
  nom: string;
  nmbrpersonne: number;
  date: Date;
  prenom: string;
  constructor(){
    this.date = new Date();
  }
}
