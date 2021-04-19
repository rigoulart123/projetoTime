import { Component, OnInit } from '@angular/core';
import { Jogador } from 'src/models/Jogador';

@Component({
  selector: 'app-jogadores',
  templateUrl: './jogadores.component.html',
  styleUrls: ['./jogadores.component.css']
})
export class JogadoresComponent implements OnInit {

  titulo = 'Jogadores';
  public jogadorSelecionado = Jogador;

  public jogadores = [
    { id: 1, nome: 'A', apelido:'Zeze', numero:7 , },
    { id: 2, nome: 'B', apelido:'Canhotinha', numero:9 , },
    { id: 3, nome: 'C', apelido:'Fumaça', numero:1 , },
    { id: 4, nome: 'D', apelido:'Cabeleira', numero:3 , },
    { id: 5, nome: 'E', apelido:'Dimarinho', numero:10 ,}
]
  
jogadorSelected(jogador: Jogador ){
    this.jogadorSelecionado = jogador; 
  }

  constructor() { }

  ngOnInit() {
  }

}
