/*Archivo que manejara la logica de nuestro componente*/
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/*EN ANGULAR LO SIG LO CONOCEMOS COMO DECORADOR
	SELECTOR -> NOMBRE CON EL QUE PODREMOS USAR EL COMPONENTE
	TEMPLATEURL -> ARCHIVO HTML QUE FUNCIONA COMO VISTA
	STYLEURLS -> HOJA DE ESTILOS PERSONALIZADA PARA EL COMPONENTE*/
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {


  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = "./assets/imagenes/default.png"

  constructor() { }

  ngOnInit(): void {
  }

  imgError(){
    this.img = this.imageDefault
  }

  imgLoad(){
    console.log('Log Hijo');
    this.loaded.emit(this.img);
  }

}
