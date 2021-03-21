//importar modulos del router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { global } from './services/global';
import { PageService } from './services/page.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//importar componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PagesComponent } from './components/pages/pages.component';
import { PageloreamComponent } from './components/pageloream/pageloream.component';



//var coche = JSON.parse(jsonTexto);

//var rutas = [{ path: '', component: InicioComponent }, { path: 'inicio', component: InicioComponent }, { path: 'login', component: LoginComponent }, { path: 'registro', component: RegisterComponent }, { path: 'noticias', component: PagesComponent }, { path: 'contactenos', component: PagesComponent }, { path: '**', component: LoginComponent }];
//array de rutas
const appRoutes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegisterComponent },
    { path: 'quienes-somos', component: PageloreamComponent },
    { path: 'contactanos', component: PageloreamComponent },
    { path: 'calcula-tu-credito', component: PageloreamComponent },
    { path: 'venda-su-camion', component: PageloreamComponent },
    { path: 'en-venta', component: PageloreamComponent },
    { path: 'preguntas-frecuentes', component: PageloreamComponent },
    { path: 'promociones', component: PageloreamComponent },
    { path: 'todos-nuestros-servicios', component: PageloreamComponent },
    { path: 'noticias', component: PageloreamComponent },
    { path: '**', component: LoginComponent }
];
/*
const appRoutes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegisterComponent },
    { path: 'quienes-somos', component: PagesComponent },
    { path: 'contactanos', component: PagesComponent },
    { path: 'calcula-tu-credito', component: PagesComponent },
    { path: 'venda-su-camion', component: PagesComponent },
    { path: 'en-venta', component: PagesComponent },
    { path: 'preguntas-frecuentes', component: PagesComponent },
    { path: 'promociones', component: PagesComponent },
    { path: 'todos-nuestros-servicios', component: PagesComponent },
    { path: 'noticias', component: PagesComponent },
    { path: '**', component: LoginComponent }
];
*/
//

//const appRoutes: Routes = Object.assign(appRoutes_temp, rutas);


//exportar configuración
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);