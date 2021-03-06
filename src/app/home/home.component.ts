import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiTwitterService } from '../services/api-twitter.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageObject: any = [];



  erroAtivo: any;
  @ViewChild('conteudoInput') conteudoInput: ElementRef;

  // retorno da chamada a API
  retornoAPI: any = [];

  // tweets com imagem
  tweetImagem: any = [];

  // tweets com imagem
  tweetTexto: any = [];

  // GIF com o loading
  loading: any = false;

  // Mostra o preenchimento da tela quando não houver conteudo pesquisado
  telaInicial: any = true;



  constructor(private apiTwitterService: ApiTwitterService) { }

  ngOnInit(): void {

  }

  // Após pesquisa chama a validação do valor
  pesquisar(event) {
    this.loading = true;
    const valorInput = this.conteudoInput.nativeElement.value;
    event.preventDefault();
    this.verificaConteudoVazio(valorInput);
    this.limpaHashtag(valorInput);
    this.buscarNaApi(valorInput);
    this.tweetTexto = [];
    this.imageObject = [];
    this.telaInicial = true;


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
        this.telaInicial = false;
        this.filtraTexto(this.retornoAPI);
        this.filtraImagens(this.retornoAPI);
      });
    }
  }


  // Área para inserção do código para mostrar imagens e textos
  // ______________________________________________________________

  filtraTexto(tweet) {
    for (const value of tweet) {
      if (this.tweetTexto.length < 10) {
        this.tweetTexto.push(value);
      }
    }
    this.loading = false;
  }

  filtraImagens(tweet) {
    for (const value of tweet) {
      if (value.entities.media && this.imageObject.length < 10) {
        this.imageObject.push(
          {
            image: value.entities.media[0].media_url_https,
            thumbImage: value.entities.media[0].media_url_https,
            alt: value.user.name,
            title: 'Postado por: @' + value.user.screen_name
          });
      }
    }
  }
}

