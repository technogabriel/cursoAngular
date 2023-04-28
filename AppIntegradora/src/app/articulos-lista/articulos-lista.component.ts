import { Component } from '@angular/core';
import {listaArticulos} from '../listaarticulos'
import Articulo from '../articulo';

@Component({
  selector: 'app-articulos-lista',
  templateUrl: './articulos-lista.component.html',
  styleUrls: ['./articulos-lista.component.css']
})
export class ArticulosListaComponent {

  descripcion:String = 'Lista de Articulos';
  items = listaArticulos;

  onSelect(articulo: Articulo){
    console.log("function excecute..!")
    
  }
  
}
