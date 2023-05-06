import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.scss']
})
export class JogoComponent {

constructor(private router: Router){}

  irParaResultado(){
    this.router.navigate(['resultado'])
  }
}
