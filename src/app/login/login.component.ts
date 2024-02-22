import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  name: string;
  password: string;
  message: string = 'Vous êtes déconnecté (login: pikachu, mot de passe: pikachu';
  authService: AuthService;

  constructor(
    private router: Router,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.authService = this.auth;
  }

  login(){
    this.authService.login(this.name, this.password).subscribe(
      (isLoggedIn) => {
        if (isLoggedIn) {
          this.message = 'Vous êtes connecté';
          this.router.navigate(['pokemons']);
        } else {
          this.message = 'Login ou mot de passe incorrect';
          this.router.navigate(['login']);
        }
      }
    )
  }

  logout(){
    this.authService.logout();
    this.message = 'Vous êtes déconnecté'
  }

}
