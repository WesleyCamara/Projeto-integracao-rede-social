import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  pessoa: any = null;

  isMobile = false;
  getIsMobile(): boolean {
    const w = document.documentElement.clientWidth;
    const breakpoint = 1024;
    console.log(w);
    if (w <= breakpoint) {
      return true;
    } else {
      return false;
    }
  }

  constructor() { }


  ngOnInit(): void {

    this.isMobile = this.getIsMobile();
    window.onresize = () => {
      this.isMobile = this.getIsMobile();
    };


  }

  escolhePessoa(nome){
    this.pessoa = nome;
  }

}
