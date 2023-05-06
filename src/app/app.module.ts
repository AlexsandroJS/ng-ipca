import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogoComponent } from './components/jogo/jogo.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { QuadradoComponent } from './components/jogo/quadrado/quadrado.component';

@NgModule({
  declarations: [AppComponent, JogoComponent, ResultadoComponent, QuadradoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
