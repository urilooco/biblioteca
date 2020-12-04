import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// para hacer funcionar rutas
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

// Para trabajar con formularios
import { FormsModule } from '@angular/forms';
// Para trabajar con formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CusuariosComponent } from './components/cusuarios/cusuarios.component';
import { ClibrosComponent } from './components/clibros/clibros.component';
import { CplibrosComponent } from './components/cplibros/cplibros.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CmusuariosComponent } from './components/cmusuarios/cmusuarios.component';
import { CmlibrosComponent } from './components/cmlibros/cmlibros.component'

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    NavbarComponent,
    CusuariosComponent,
    ClibrosComponent,
    CplibrosComponent,
    CmusuariosComponent,
    CmlibrosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
