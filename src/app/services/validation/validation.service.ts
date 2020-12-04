import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  // Validación de contraseñas
  matchPassword( pass1: string, pass2: string ){
    return (formGruop: FormGroup) =>{
      const controlPass1 = formGruop.controls[pass1];
      const controlPass2 = formGruop.controls[pass2];

      if(controlPass1.value === controlPass2.value){
        controlPass2.setErrors(null);
      }else{
        controlPass2.setErrors({passError: true})
      }
    }
  }
}
