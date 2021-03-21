import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public page_title: string;
  constructor() {
    this.page_title = "TUSCAMIONES.COM";
  }

  ngOnInit(): void {
  }

}

//debemos construir los banners adminsitrables y los productos
