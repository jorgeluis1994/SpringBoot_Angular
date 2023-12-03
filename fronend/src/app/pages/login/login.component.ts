import { Component, OnInit } from '@angular/core';
import { error, log } from 'console';
import { User } from 'src/app/Models/User';
import { LoginService } from 'src/app/service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuaio: User = {};

  constructor(private loginservice: LoginService) {}
  ngOnInit(): void {
    this.getuser();
  }
  getuser() {
    return this.loginservice.obtenerUser().subscribe((data) => {
      //creo lista
      const lista = [];
      //agrego a lista
      lista.push(data);
      console.log(data);
    });
  }
  onSubmit() {
    this.setUser(this.usuaio);
  }

  setUser(user: User) {
    return this.loginservice.sendObjectToServer(user).subscribe(
      (resp) => {
        console.log('LLego la data');
      },
      (error) => {
        console.log('Error en la llegada de datos');
      }
    );
  }
}
