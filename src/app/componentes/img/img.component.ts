/*Archivo que manejara la logica de nuestro componente*/
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

/*EN ANGULAR LO SIG LO CONOCEMOS COMO DECORADOR
	SELECTOR -> NOMBRE CON EL QUE PODREMOS USAR EL COMPONENTE
	TEMPLATEURL -> ARCHIVO HTML QUE FUNCIONA COMO VISTA
	STYLEURLS -> HOJA DE ESTILOS PERSONALIZADA PARA EL COMPONENTE*/
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {


  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = "./assets/imagenes/default.png"

  constructor() {
    //lo primero en renderizarse
    //solo corre una vez
    //no correr codigo de forma asyncrona
    console.log('Constructor', 'imgValue =>', this.img);
  }

  //CORRE AL INICIAR EL RENDER
  //MONITOREA LOS CAMBIOS EN LOS INPUTS
  //CORRE TODAS LAS VECES QUE CORRE NUESTROS INPUTS
  ngOnChanges() {
    console.log('ngOnChanges', 'imgValue =>', this.img);
  }

  ngOnInit(): void {
    //CORRE ANTES DEL RENDER
    //PODEMOS CORRER COSAS ASYNCRONAS
    //LLAMADAS FETCH , LLAMADAS DE API'S
    //CORRE UNA SOLA VEZ
    console.log('ngOnInit', 'imgValue =>', this.img);
  }

  ngAfterViewInit() {
    //CORRE DESPUES DE QUE TODO SE RENDERIZE
    //MANEJAMOS LOS COMPONENTES HIJOS
    console.log('ngAfterViewInit');

  }

  ngOnDestroy() {
      //elimina el componente
      console.log('ngOnDestroy');
  }

  imgError(){
    this.img = this.imageDefault
  }

  imgLoad(){
    console.log('Log Hijo');
    this.loaded.emit(this.img);
  }

}
