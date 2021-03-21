import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public page_title: string;
  public user: User;
  public faCheckCircle = faCheckCircle;
  public faTimesCircle = faTimesCircle;
  public status: string;
  public messageError: string;

  //constructor(private _userService: UserService) {
  constructor(private _userService: UserService) {
    this.page_title = 'Registrate';
    this.user = new User('', '', '', '', '', '', 'ROLE_USER');
  }

  ngOnInit(): void {
    //console.log(this._userService.prueba());
  }

  onSubmit(form) {
    console.log(this.user);
    this._userService.register(this.user).subscribe(
      response => {
        if (response.user && response.user._id) {
          this.status = 'success';
          form.reset();
        } else {
          this.messageError = response.message;
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
        this.messageError = error.error.message;
        console.log(<any>error);
      }
    );
  }
}
