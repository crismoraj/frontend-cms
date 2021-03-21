import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck {
  public title = 'tuscamiones.com';
  public token;
  public identity;
  public status: string;
  public message: string;
  public messageError: string;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    //Se ejecuta siempre que carga este componente y cierra session solo cuando llega el parametro sure por get
    //console.log(this.identity);
    //console.log(this.token);
  }

  ngDoCheck() {
    this.identity = this._userService.getIdentity();
  }

  logout() {
    localStorage.clear();
    this.identity = null;
    this.token = null;
    this._router.navigate(['/inicio']);
  }



}
