import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.css']
})
export class TimesComponent implements OnInit {
  
  titulo = 'Times';
  public timeSelecionado = String;

  public times = [
    { id: 1, nome: 'Cuiabá', estado: 'Mato Grosso',},
    { id: 2, nome: 'Chapecoense', estado: 'Santa Catarina',},
    { id: 3, nome: 'Real Ariquemes', estado: 'Rondônia',},
    { id: 4, nome: 'Ponte Preta', estado: 'São Paulo',},
    { id: 5, nome: 'Operário', estado: 'Paraná' }
]

timeSelected(time: any){
  this.timeSelecionado = time.nome; 
}

/* voltar(){
this.timeSelecionado = '';
}   */

  constructor() { }

  ngOnInit() {
  }

}
