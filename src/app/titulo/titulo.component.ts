import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {


  public titulo = 'Titulo';

  constructor() { }

  ngOnInit() {
  }

}
function input() {
  throw new Error('Function not implemented.');
}

