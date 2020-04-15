import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  erroAtivo: any;
  conteudoInput: any;

  constructor() { }

  ngOnInit(): void {
  }

   // função de consultar a API, ainda não foi implementada, no momento só previne o envio do formulário
    pesquisar(event: any) {
      event.preventDefault();
      this.verificaConteudoVazio(event);
    }

    verificaConteudoVazio(event) {
      if (!this.conteudoInput) {
        this.erroAtivo = 'erro';
      } else {
        this.erroAtivo = '';
      }
  }

    // // Valida os dados para pesquisa
    valida(event){
      this.erroAtivo = '';
      const textoVerificar = event.target.value;
      this.limpaHashtag(textoVerificar);
    }


    // Limpa o texto tirando o caractere # se houver
    limpaHashtag(texto) {
        if (texto[0] === '#') {
          texto = texto.replace(texto[0], '');
        }
    }

}
