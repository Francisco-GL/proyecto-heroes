import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  data:any;

  constructor() {
    this.data = localStorage.getItem('usuario');
    console.log(this.data);
    this.obtenerDatos();
  }

  ngOnInit(): void {
  }

  obtenerDatos(): void {
    console.log("obtenerDatos");
    if(localStorage.getItem('usuario') === null){
      this.data = [];
    }else
      this.data = JSON.parse(this.data);
  }
}

