import { InterfazPeliculas } from './models/interfaz-peliculas';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



    
// PELICULAS DE ACCIÓN
    
    public peliculasAccion: InterfazPeliculas= {
      genero: "Acción",
      films:[{
        titulo:"Ejercito de los muertos",
        src:"assets/images/Accion/ejercitomuertos.jpg"
        
      },
      {
        titulo:"El protector",
        src:"assets/images/Accion/elprotector.webp"
      },
      {
        titulo:"Ecualizer 2",
        src: "assets/images/Accion/equalizer2.webp"        
      },
      {
        titulo:"Heat",
        src: "assets/images/Accion/heat.webp"        
      },
      {
        titulo:"Jack Reacher",
        src: "assets/images/Accion/jackreacher.webp"        
      },
      {
        titulo:"John Wick 2",
        src: "assets/images/Accion/johnwick2.webp"        
      },
      {
        titulo:"Kill Bill 2",
        src: "assets/images/Accion/killbill2.webp"        
      },
      {
        titulo:"Misión Imposible nación",
        src: "assets/images/Accion/misionimposiblenacion.webp"        
      },
      {
        titulo:"El Renacido",
        src: "assets/images/Accion/renacido.webp"        
      },
      {
        titulo:"Terminator 2",
        src: "assets/images/Accion/terminator2.webp"        
      },
      {
        titulo:"Guerra Mundial Z",
        src: "assets/images/Accion/worldwarz.webp"        
      },
    ]
    }
    public peliculasAnime: InterfazPeliculas={
      genero: "Anime",
      films:[{
        titulo:"Ajin",
        src: "assets/images/Anime/ajin.jpg"
      },
      {
        titulo:"El castillo ambulante",
        src: "assets/images/Anime/castilloambulante.webp"
      },
      {
        titulo:"El viaje de Chihiro",
        src: "assets/images/Anime/chihiro.webp"
      },
      {
        titulo:"Neon Genesis Evangelion",
        src: "assets/images/Anime/evangelion.webp"
      },
      {
        titulo:"Arise",
        src: "assets/images/Anime/gitsarise.webp"
      },
      {
        titulo:"Mobile suit Gundam",
        src: "assets/images/Anime/gundam.webp"
      },
      {
        titulo:"El castillo en el cielo",
        src: "assets/images/Anime/laputa.webp"
      },
      {
        titulo:"La princesa Mononoke",
        src: "assets/images/Anime/mononoke.webp"
      },
      {
        titulo:"Ninokuni",
        src: "assets/images/Anime/ninokuni.jpg"
      },
      {
        titulo:"Perfect blue",
        src: "assets/images/Anime/perfectblue.webp"
      },
      {
        titulo:"Porco Rosso",
        src: "assets/images/Anime/porcorosso.webp"
      },]
      
    }
  
//llave que cierra el constructor
 }// llave que cierra el export class

