import { NgModule } from "@angular/core";
import { contadorComponent } from './contador/contador.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [contadorComponent],
  imports: [ CommonModule ],
  exports: [contadorComponent],
  providers: [],
})

export class ContadorModules{

}
