import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Hulk', 'IronMan', 'Spiderman', 'Thor', 'Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
