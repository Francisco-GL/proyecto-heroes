import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent implements OnInit {
  
  date: string='';
  constructor() { }

  ngOnInit(): void {
  }

  obtenerFecha() {
    var fecha = new Date();
    this.date = fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear();
    return this.date;
  }

}
