import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SlibrosService } from '../../service/catalogo_libros/slibros.service';

@Component({
  selector: 'app-cmlibros',
  templateUrl: './cmlibros.component.html',
  styleUrls: ['./cmlibros.component.css']
})
export class CmlibrosComponent implements OnInit {

  // variable para almacenar formulario
  form: FormGroup;
  formData: FormData;
  response: any = [];
  submited: boolean = false;
  idLibroActualizado: any;
  @Input() set idLibro(value) {
    this.idLibroActualizado = value;
    this.ngOnInit();
  };

  lib = {
    id: null,
    titulo: null,
    autor: null,
    editorial: null,
    disponible: null
  }



  libro: any;

  constructor(private slibros: SlibrosService, private fB: FormBuilder) {

  }

  ngOnInit(): void {
    console.log(this.idLibro, 'esto es en el componente actualizar');
    this.obtenerLibro();
  }

  obtenerLibro() {
    this.slibros.obtenerLibroID(this.idLibroActualizado).then((resp: any) => {
      this.libro = resp.libros;
      console.log(this.libro);

    }).catch((err) => {
      console.log(err);

    })
  }

  modificarlib() {
    console.log(this.idLibro);

    return this.slibros.modificarlib(this.idLibroActualizado, this.libro).then((res: any) => {
      console.log(res);
      alert(res.msg);

      this.ngOnInit();
    }).catch(err => {
      console.log(err);
      alert('Ocurrio un error')
    })
  }

  // Getters de los controles
  // get validTitle(){
  //   return this.form.get('title').invalid && this.form.get('title').touched;
  // }
  // get validAutor(){
  //   return this.form.get('autor').invalid && this.form.get('autor').touched;
  // }
  // get validEditorial(){
  //   return this.form.get('editorial').invalid && this.form.get('editorial').touched;
  // }
  // get validYear(){
  //   return this.form.get('year').invalid && this.form.get('year').touched;
  // }
  // get validCode(){
  //   return this.form.get('code').invalid && this.form.get('code').touched;
  // }





  // createForm(){
  //   this.form = this.fB.group({
  //     // El primer valor ('') representa el valor por defecto de cada control 
  //     // Como segundo estaremos agregando las validaciones
  //     title: ['', [ Validators.required, Validators.minLength(4) ]],
  //     autor: ['', [ Validators.required, Validators.minLength(4) ]],
  //     editorial: ['', [ Validators.required, Validators.minLength(4) ]],
  //     year: ['', [ Validators.required, Validators.minLength(4) ]],
  //     code: ['', [ Validators.required, Validators.minLength(2) ]]
  //   });
  // }

  // enviar(){
  //   console.log(this.form);
  //   if(this.form.invalid) {
  //     return Object.values( this.form.controls ).forEach( control => {
  //       control.markAsTouched();
  //       this.submited = false;
  //     } )
  //   }else{
  //     let data = {
  //       'title': this.form.get('title').value,
  //       'autor': this.form.get('autor').value,
  //       'editorial': this.form.get('editorial').value,
  //       'year': this.form.get('year').value,
  //       'code': this.form.get('code').value
  //     }

  //   }
  // }

  addOther() {
    this.submited = false;
    this.form.reset();
  }
} 
