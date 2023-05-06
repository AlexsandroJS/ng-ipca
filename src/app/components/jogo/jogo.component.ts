import { Component } from '@angular/core';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.scss'],
})
export class JogoComponent {
  list = ['', '', '', '', '', '', '', '', ''];
  jogador = 'X';
  count = 0;

  onSquareClick(index: number) {
    if (this.list[index]) {
      alert('Esta casa já foi selecionada!');
    } else {
      this.list[index] = this.jogador;
      this.count++;
      this.verificarFimDeJogo();
      this.jogador = this.jogador === 'X' ? 'O' : 'X';
      console.log(this.list);
    }
  }

  verificarFimDeJogo() {
    if (
      this.casasIguais(this.list[0], this.list[1], this.list[2]) ||
      this.casasIguais(this.list[3], this.list[4], this.list[5]) ||
      this.casasIguais(this.list[6], this.list[7], this.list[8]) ||
      this.casasIguais(this.list[0], this.list[3], this.list[6]) ||
      this.casasIguais(this.list[1], this.list[4], this.list[7]) ||
      this.casasIguais(this.list[2], this.list[5], this.list[8]) ||
      this.casasIguais(this.list[0], this.list[4], this.list[8]) ||
      this.casasIguais(this.list[2], this.list[4], this.list[6])
    ) {
      alert(`O jogador ${this.jogador} venceu!`);
      this.reset();
    } else {
      if (this.count === 9) {
        alert(`Houve empate!`);
        this.reset();
      }
    }
  }

  casasIguais(casa1: string, casa2: string, casa3: string) {
    if (!casa1 || !casa2 || !casa3) {
      return false;
    }
    return casa1 === casa2 && casa2 === casa3;
  }

  private reset() {
    this.list = ['', '', '', '', '', '', '', '', ''];
    this.jogador = 'X';
  }
}
