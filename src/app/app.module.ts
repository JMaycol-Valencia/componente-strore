import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './componentes/img/img.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { ProductComponent } from './componentes/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
