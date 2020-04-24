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

  // tweets com imagem
  tweetImagem: any = [];

  // Mostra o preenchimento da tela quando não houver conteudo pesquisado
  telaInicial: any = true;



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
    console.log('chamou');
    if (texto.length > 0) {
      this.apiTwitterService.getData(texto).subscribe((res: any) => {
        this.retornoAPI = Array.from(Object.keys(res), k => res[k])[0];
        this.telaInicial = false;
        this.filtraImagens(this.retornoAPI);
      });
    }

  }



  // Área para inserção do código para mostrar imagens e textos

  filtraImagens(tweet){

    console.log(tweet);
    for (const value of tweet) {
      if (value.entities.media){
        this.tweetImagem.push(value);
        console.log(value.entities.media[0].media_url_https);
      }

    }
    console.log(this.tweetImagem);
  }

}

