import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, Form } from '@angular/forms';
import { SusuariosService } from '../../service/catalogo_usuarios/susuarios.service';

@Component({
  selector: 'app-cusuarios',
  templateUrl: './cusuarios.component.html',
  styles: [
  ]
})
export class CusuariosComponent implements OnInit {

  // variable para almacenar formulario
  form: FormGroup;
  formData: FormData;
  response: any = [];
  submited: boolean = false;
  idUsuarioActualizado: any;

  @Input() set idUsuario(value) {
    this.idUsuarioActualizado = value;
    this.ngOnInit();
  };

  usu = {
    nombre: null,
    password: null,
    email: null
  }

  usuarios: any;

  // usu: any;

  mostrarActualizar: Boolean = false;
  mostrarRegistrar: Boolean = false;

  // Getters de los controles
  // get validName() {
  //   return this.form.get('name').invalid && this.form.get('name').touched;
  // }
  // // get validPassword() {
  // //   return this.form.get('password').invalid && this.form.get('password').touched;
  // // }
  // get validEmail() {
  //   return this.form.get('email').invalid && this.form.get('email').touched;
  // }


  constructor(private susuarios: SusuariosService, private fB: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {

    this.obtenerUsuarios();

  }

  obtenerUsuarios() {
    this.susuarios.recuperarusuarios().then((res: any) => {
      console.log(res);

      this.usuarios = res.usuarios;
    }).catch(erro => {
      console.log('Ha sucedido un error', erro);
    });
  }

  mostrarAgregar() {
    this.mostrarRegistrar = true;
    this.mostrarActualizar = false;
  }

  altauser(forma: NgForm) {
    console.log(this.usu)

    this.susuarios.altauser(this.usu).then((res: any) => {
      console.log(res);
      alert(res.msg);
      forma.reset();
      this.ngOnInit();
      // this.susuarios.recuperarusuarios();
    }).catch(erro => {
      console.log(erro)
      alert('Ocurrio un error');

    });
  }

  eliminarID(id: any) {
    this.susuarios.desactivarusu(id).then((resp: any) => {
      alert(resp.msg)
      this.ngOnInit();
    }).catch((err) => {
      console.log(err);

    });

  }

  actualizarID(id: any) {
    console.log(id);
    this.idUsuario = id;
    this.mostrarActualizar = false;
    this.mostrarActualizar = true;
    this.mostrarRegistrar = false;
  }


  createForm() {
    this.form = this.fB.group({
      // El primer valor ('') representa el valor por defecto de cada control 
      // Como segundo estaremos agregando las validaciones
      name: ['', [Validators.required, Validators.minLength(4)]],
      apellido: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    });
  }

  // enviar() {
  //   console.log(this.form);
  //   if (this.form.invalid) {
  //     return Object.values(this.form.controls).forEach(control => {
  //       control.markAsTouched();
  //       this.submited = false;
  //     })
  //   } else {
  //     let data = {
  //       'name': this.form.get('name').value,
  //       'password': this.form.get('password').value,
  //       'email': this.form.get('email').value,
  //     }

  //   }
  // }

  addOther() {
    this.submited = false;
    this.form.reset();
  }

}
