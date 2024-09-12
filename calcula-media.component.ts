import { Component } from '@angular/core';

@Component({
  selector: 'app-calcula-media',
  templateUrl: './calcula-media.component.html',
  styleUrls: ['./calcula-media.component.css']
})
export class CalculaMediaComponent {
  mediaParcial: number = 0;
  mediaFinal: number = 0;
  situacao: string = '';

  calcularMediaParcial(b1: number, b2: number, b3: number, b4: number): void {
    this.mediaParcial = (b1 + b2 + b3 + b4) / 4;

    if (this.mediaParcial < 0 || this.mediaParcial > 100) {
      this.mediaParcial = 0; 
    }

    if (this.mediaParcial >= 60) {
      this.situacao = 'Aprovado(a)';
    } else if (this.mediaParcial < 60 && this.mediaParcial >= 10) {
      this.situacao = 'Recuperação';
    } else {
      this.situacao = 'Reprovado(a)';
    }

    console.log('Média Parcial:', this.mediaParcial);
    console.log('Situação:', this.situacao);
  }

  calcularMediaFinal(nf: number): void {
    if (this.mediaParcial < 60) {
      this.mediaFinal = (this.mediaParcial + nf) / 2;

      if (this.mediaFinal < 0 || this.mediaFinal > 100) {
        this.mediaFinal = 0; 
      }

      if (this.mediaFinal >= 60) {
        this.situacao = 'Aprovado(a)';
      } else {
        this.situacao = 'Reprovado(a)';
      }

      console.log('Média Final:', this.mediaFinal);
      console.log('Situação:', this.situacao);
    }
  }
}