import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Page } from '../../models/page';
import { PageService } from '../../services/page.service';


@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  providers: [PageService]
})
export class PagesComponent implements OnInit {

  public page: Page;
  public status: string;
  public message: string;
  public messageError: string;
  public listaPage;
  public urlNavigate: string;
  public url: string;
  public bodyContent;

  constructor(private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _pageService: PageService) {

    this.urlNavigate = '/inicio' + this._router.url;
    this.page = new Page('', '', '', this.urlNavigate, '', '', '', '', '');

  }

  ngOnInit(): void {
    //this.carga_pages();
    this.carga_pages();
  }

  carga_pages() {
    //console.log(this.page);
    this._pageService.loadPage(this.page).subscribe(
      response => {
        if (!response.pageLoad) {
          this.bodyContent = 'Sin contenido';
        } else {
          this.bodyContent = response.pageLoad;
        }
      },
      error => {
        this.status = 'error';
        this.message = error.error.message;
        this.bodyContent = 'Error en carga de datos';
      }
    );
  }


}
