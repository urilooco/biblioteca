import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import {HttpClient, HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SusuariosService {
  // url = environment.url+'/usuario';

  constructor(  ) { }

  // recuperarusuarios(){
  //   return this.http.get(this.url).toPromise();
  // }

  // altauser(usuario){
  //   return this.http.post(this.url,usuario).toPromise();
  // }
}
