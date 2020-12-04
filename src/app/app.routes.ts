import { Routes } from '@angular/router';
import { BooksListComponent } from './components/books-list/books-list.component';
import { ClibrosComponent } from './components/clibros/clibros.component';
import { CusuariosComponent } from './components/cusuarios/cusuarios.component';
import { CplibrosComponent } from './components/cplibros/cplibros.component';
import { CmlibrosComponent } from './components/cmlibros/cmlibros.component';
import { CmusuariosComponent } from './components/cmusuarios/cmusuarios.component';

export const ROUTES: Routes = [
    { path: 'books-list', component: BooksListComponent },
    { path: 'cusuarios', component: CusuariosComponent },
    { path: 'clibros', component: ClibrosComponent },
    { path: 'cplibros', component: CplibrosComponent },
    { path: 'cmlibros', component: CmlibrosComponent },
    { path: 'cmusuarios', component: CmusuariosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'cplibros' }
]