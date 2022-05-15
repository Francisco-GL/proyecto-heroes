import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  data;

  constructor() {
    this.data = JSON.parse(localStorage.getItem('usuario') || '{}');
    if(localStorage.getItem('usuario') === null){
      this.data = [];
      alert("aki");
      // this.agregar();
    }
    for(let i in this.data)
      this.data[i] = JSON.parse(this.data[i]);
    
  }

  ngOnInit(): void {
  }

  // agregar(): void {
  //   this.data = [];
  //   let datas = [
  //     { nombre: 'Alan', sexo: 'M', correo: 'alan@gmail.com', nacimiento: '2/3/2001' },
  //     { nombre: 'Dafne', sexo: 'F', correo: 'dafne@gmail.com', nacimiento: '2/3/2001' },
  //     { nombre: 'Luis', sexo: 'M', correo: 'luis@gmail.com', nacimiento: '2/3/2001' },
  //     { nombre: 'María', sexo: 'F', correo: 'maria@gmail.com', nacimiento: '2/3/2001' },
  //     { nombre: 'Carolina', sexo: 'F', correo: 'caro@gmail.com', nacimiento: '2/3/2001' }
  //   ];
  //   let aux;
  //   for(let i in datas){
  //     aux = JSON.stringify({
  //       nombre: datas[i].nombre,
  //       sexo: datas[i].sexo,
  //       correo: datas[i].correo,
  //       nacimiento: datas[i].nacimiento
  //     })
  //     this.data.push(aux);
  //   }
    
    
  //   localStorage.setItem("usuarios", JSON.stringify(this.data));
  // }
}

