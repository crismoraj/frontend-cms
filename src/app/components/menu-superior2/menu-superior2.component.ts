import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Menu } from '../../models/menu';
import { MenuService } from '../../services/menus.service';

@Component({
  selector: 'menu-superior2',
  templateUrl: './menu-superior2.component.html',
  styleUrls: ['./menu-superior2.component.css'],
  providers: [MenuService]
})
export class MenuSuperior2Component implements OnInit {

  public menuSup2: Menu;
  public status: string;
  public message: string;
  public messageError: string;
  public listaMenu;

  constructor(private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _menuService: MenuService) {
    this.menuSup2 = new Menu('', '', '', '', 'superior2', '', '/inicio');
  }

  ngOnInit(): void {
    this.carga_menu();
  }

  carga_menu() {
    this._menuService.getMenuSuperior(this.menuSup2).subscribe(
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
