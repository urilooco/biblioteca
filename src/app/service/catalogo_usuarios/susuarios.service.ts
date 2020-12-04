import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SusuariosService {
  url = environment.url + '/usuario';
  url2 = environment.url + '/modificarusuario';

  constructor(private http: HttpClient) { }

  recuperarusuarios() {
    return this.http.get(this.url).toPromise();
  }

  altauser(usuario) {
    return this.http.post(this.url, usuario).toPromise();
  }

  obtenerusuarioID(id) {
    return this.http.get(`${this.url}/${id}`).toPromise();
  }

  modificarusuario(id, usuario: any) {
    return this.http.put(`${this.url2}/${id}`, usuario).toPromise();
  }

  desactivarusu(id) {
    return this.http.delete(`${this.url}/${id}`).toPromise();
  }
}
