import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre?: String;
  apellido?: String;
  edad?: String;
  estado?: String;
  sexo?: String;
  correo?: String;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.ejecutar('Erika','Usca');
  }

  ejecutar(name:string,fistname:string) {
    this.nombre=name;
    this.apellido=fistname;
  

    console.log('Bienvenido',this.nombre,this.apellido);

  }

}
