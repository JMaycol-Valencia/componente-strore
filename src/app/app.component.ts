import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'componente-store';
  imgParent: string = '';         /*https://www.w3schools.com/howto/img_avatar.png --- link de prueba img*/
  ayudaCodigo = 'https://stackoverflow.com/questions/64573177/unable-to-resolve-dependency-tree-error-when-installing-npm-packages';

  onLoaded(img: string){
    console.log('log padre', img);
  }
}
