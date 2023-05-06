import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quadrado',
  templateUrl: './quadrado.component.html',
  styleUrls: ['./quadrado.component.scss'],
})
export class QuadradoComponent {
  @Input() value: string;
  @Input() index: number;
  @Output() clicou = new EventEmitter<number>();

  onClick() {
    this.clicou.emit(this.index);
  }
}
