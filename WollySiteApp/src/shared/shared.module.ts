import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { VagasComponent } from './vagas/vagas.component';
import { ContatoComponent } from './contato/contato.component';

import { ReactiveFormsModule } from '@angular/forms';
import { TelefonePipe } from 'src/pipes/telefone.pipe';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    HeaderComponent, 
    VagasComponent, 
    ContatoComponent, 
    TelefonePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent, 
    VagasComponent, 
    ContatoComponent
  ]
})
export class SharedModule { }
