import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SlibrosService {
  url = environment.url + '/libro';
  url2 = environment.url + '/modificarLibro';

  constructor(private http: HttpClient) { }

  recuperarlibros() {
    return this.http.get(this.url).toPromise();
  }

  altalib(libro) {
    return this.http.post(this.url, libro).toPromise();
  }

  modificarlib(id, libro: any) {
    return this.http.put(`${this.url2}/${id}`, libro).toPromise();
  }

  obtenerLibroID(id) {
    return this.http.get(`${this.url}/${id}`).toPromise();
  }

  desactivarLib(id) {
    return this.http.delete(`${this.url}/${id}`).toPromise();
  }
}

