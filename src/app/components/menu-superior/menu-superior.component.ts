import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Menu } from '../../models/menu';
import { MenuService } from '../../services/menus.service';

@Component({
  selector: 'menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css'],
  providers: [MenuService]
})
export class MenuSuperiorComponent implements OnInit {

  public menuSup: Menu;
  public status: string;
  public message: string;
  public messageError: string;
  public listaMenu;

  constructor(private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _menuService: MenuService) {
    this.menuSup = new Menu('', '', '', '', 'superior', '', '/inicio');
  }

  ngOnInit(): void {
    this.carga_menu();
  }

  carga_menu() {
    this._menuService.getMenuSuperior(this.menuSup).subscribe(
      response => {
        this.listaMenu = response.menus;
      },
      error => {
        this.status = 'error';
        this.message = error.error.message;
      }
    );
  }

}
