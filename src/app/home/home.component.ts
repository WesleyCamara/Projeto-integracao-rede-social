import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiTwitterService } from '../services/api-twitter.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  erroAtivo: any;
  @ViewChild('conteudoInput') conteudoInput: ElementRef;

  // retorno da chamada a API
  retornoAPI: any = [];



  constructor(private apiTwitterService: ApiTwitterService) { }

  ngOnInit(): void {

  }

  // Após pesquisa chama a validação do valor
  pesquisar(event) {
    const valorInput = this.conteudoInput.nativeElement.value;
    event.preventDefault();
    this.verificaConteudoVazio(valorInput);
    this.limpaHashtag(valorInput);
    this.buscarNaApi(valorInput);
  }

  // Verifica se o conteudo de pesquisa não está vazio
  verificaConteudoVazio(valorInput) {
    if (!valorInput) {
      this.erroAtivo = true;
    } else {
      this.erroAtivo = false;
    }
  }

  // Valida os dados para pesquisa
  removeMensagemErro() {
    if (this.conteudoInput.nativeElement.value) {
      this.erroAtivo = false;
    }
  }

  // Limpa o texto tirando o caractere # se houver
  limpaHashtag(texto) {
    if (texto[0] === '#') {
      texto = texto.replace(texto[0], '');
    }

    // variavel que recebe o conteudo limpo que será pesquisado
    this.apiTwitterService.conteudoPesquisa = texto;
  }

  buscarNaApi(texto) {
    if (texto.length > 0) {
      this.apiTwitterService.getData(texto).subscribe((res: any) => {
        this.retornoAPI = Array.from(Object.keys(res), k => res[k])[0];
        console.log(this.retornoAPI);

      });
    }
  }


  // Área para inserção do código para mostrar imagens e textos

}

