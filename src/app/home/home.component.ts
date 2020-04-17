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


  retorno: any = {};

  constructor( private apiTwitterService: ApiTwitterService  ) { }

  ngOnInit(): void {

  }

  // Após pesquisa chama a validação do valor
  pesquisar(event) {
    event.preventDefault();
    this.verificaConteudoVazio(this.conteudoInput.nativeElement.value);
    this.limpaHashtag(this.conteudoInput.nativeElement.value);
    this.busca(this.apiTwitterService.conteudoPesquisa);
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
  removeErro() {
    if (this.conteudoInput.nativeElement.value){
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
    console.log(this.apiTwitterService.conteudoPesquisa);
  }

  busca(conteudo){
    this.apiTwitterService.getData(conteudo).subscribe((res: any) => {
    this.retorno = Array.from(Object.keys(res), k => res[k]);
    console.log(this.retorno[0]);
  }); }

}


