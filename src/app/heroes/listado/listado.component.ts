import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

heroes: string[] = ['superman','batman','goku','gohan'];
heroeBorrado: string = '';

borrarHeroe(){
  this.heroeBorrado = this.heroes.shift() || '';
  console.log();
}

}
