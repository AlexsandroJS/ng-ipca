import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogoComponent } from './components/jogo/jogo.component';
import { ResultadoComponent } from './components/resultado/resultado.component';

const routes: Routes = [
  { path: 'jogo', component: JogoComponent },
  { path: 'resultado', component: ResultadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
