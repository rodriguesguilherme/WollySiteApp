import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  vagas = [
    { titulo: 'front-end', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', img: '../../assets/frontend.jpg' },
    { titulo: 'mobile', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', img: '../../assets/mobile.jpg' },
    { titulo: 'back-end', descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit', img: '../../assets/backend.jpg' },
  ]

}
