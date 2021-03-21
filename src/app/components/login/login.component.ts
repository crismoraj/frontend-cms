import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public page_title: string;
  public user: User;
  public status: string;
  public message: string;
  public messageError: string;
  public faCheckCircle = faCheckCircle;
  public faTimesCircle = faTimesCircle;
  public token;
  public identity;

  constructor(private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute) {
    this.page_title = 'Identificate';
    this.user = new User('', '', '', '', '', '', 'ROLE_USER');
  }

  ngOnInit(): void {
    //Se ejecuta siempre que carga este componente y cierra session solo cuando llega el parametro sure por get
    this.logout();
  }

  onSubmit(form) {
    this._userService.signup(this.user).subscribe(
      response => {
        //Obtenermos el objeto comoleto de usuario
        if (response.datosUser && response.datosUser._id) {

          this.identity = response.datosUser;
          this.message = response.message;
          this.status = 'success';
          //buscamos el token
          this._userService.signup(this.user, true).subscribe(
            response => {
              //TOKEN
              if (response.token) {
                //console.log(response);
                this.token = response.token;
                localStorage.setItem('token', this.token);
                localStorage.setItem('identity', JSON.stringify(this.identity));
                //redireccion a inicio
                this._router.navigate(['inicio']);
              } else {
                this.status = 'error';
                this.message = response.message;
                form.reset();
              }
            },
            error => {
              this.status = 'error';
              this.message = response.message;
              form.reset();
            }
          );
        } else {
          this.message = response.message;
          this.status = 'error';
          form.reset();
        }
      },
      error => {
        this.status = 'error';
        this.message = error.error.message;
        form.reset();
      }
    );
  }

  logout() {
    this._route.params.subscribe((params) => {
      let logout = +params['sure'];

      if (logout == 1) {
        localStorage.removeItem('identity');
        localStorage.removeItem('token');

        this.identity = null;
        this.token = null;

        //redireccion a inicio
        this._router.navigate(['inicio']);
      }
    });
  }

}
