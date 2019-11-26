import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SaveContactService } from '../../services/saveContact.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private saveContactService: SaveContactService) { }

  ngOnInit() {
    this.mascara();
  }

  modal = false;
  modalTitle = '';
  modalText = '';

  addContato = new FormGroup({
    name: new FormControl('', Validators.required),
    mail: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    msg: new FormControl('', Validators.required)
  })

  dados = [
    { titulo: "Endereço", subtitulo: "Av. Paulista, 302" },
    { titulo: "Site", subtitulo: "www.developer.com.br" },
    { titulo: "Email", subtitulo: "developer@dev.com.br" },
    { titulo: "Telefone", subtitulo: "1127273030" },
  ]

  mascara() {
    let telefone: any = document.getElementById('telefone');
    telefone.value = telefone.value.replace(/\D/g, "");
    telefone.value = telefone.value.replace(/^(\d{2})(\d)/g, "($1) $2");
    telefone.value = telefone.value.replace(/(\d)(\d{4})$/, "$1-$2"); 
  }

  saveContact(dados){
    this.saveContactService.save(dados).subscribe(
      success => {
        this.modal = true;
        this.modalTitle = 'Sucesso';
        this.modalText = 'Contato salvo com sucesso'
        this.addContato.reset();
        console.log('sucesso')
      },
      error => {
        this.modal = true;
        this.modalTitle = 'Erro';
        this.modalText = error
        console.log('erro', error)
      },
      () => console.log('Completo')
    )
  }

}
