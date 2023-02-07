import { InterfazPelicula } from './../../models/interfaz-peliculas';
import { Component, Input } from '@angular/core';
import { InterfazPeliculas } from 'src/app/models/interfaz-peliculas';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
@Input() public peliculas!: InterfazPeliculas

// @Input() public peliculasPrueba: InterfazPeliculas= {"",[]}
// @Input() public peliculas: any;

}
