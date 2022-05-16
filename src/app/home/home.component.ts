import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  forma!: FormGroup;
  data:any;
  info: tipoDato[] = [];

  objeto: any = {
    nombre : "",
    sexo : "",
    correo : "",
    fecha: ""
  };

  constructor() {
    this.data = localStorage.getItem('usuario');
    if(this.data.length < 1){
      localStorage.setItem('usuario', JSON.stringify(this.info));
    }
    
    this.forma = new FormGroup({
      nombre: new FormControl(),
      sexo: new FormControl(),
      correo: new FormControl(),
      fecha: new FormControl(),
    });
  }

  guardarCambios(): void {

    var data = [];
    //localStorage.clear();

    this.info = JSON.parse(localStorage.getItem('usuario') || '{}');
    
    this.info.push(this.forma.value);

    localStorage.setItem('usuario', JSON.stringify(this.info));


    console.log('metodo guardarCambios');
    console.log(this.forma.value);
    alert("Registro exitoso!!");
  }

  ngOnInit(): void {}
}

interface tipoDato {
  nombre: number;
  sexo: string;
  correo: string;
  fecha: string;
}