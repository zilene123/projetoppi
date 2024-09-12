import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // Importa ActivatedRoute para receber o parâmetro de rota
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperacao',
  templateUrl: './recuperacao.component.html',
  styleUrls: ['./recuperacao.component.css']
})
export class RecuperacaoComponent implements OnInit {
  mediaParcial: number = 0;
  mediaFinal: number = 0;
  situacao: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Recebe o parâmetro de rota
    this.mediaParcial = +this.route.snapshot.paramMap.get('mediaParcial')!;
  }

  calcularMediaFinal(notaFinal: number): void {
    this.mediaFinal = (this.mediaParcial + notaFinal) / 2;

    // Define a nova situação com base na média final
    if (this.mediaFinal >= 60) {
      this.situacao = 'Aprovado(a)';
    } else {
      this.situacao = 'Reprovado(a)';
    }

    // Log para depuração
    console.log('Média Final:', this.mediaFinal);
    console.log('Situação:', this.situacao);
  }

  // Método para voltar à página inicial, se necessário
  voltar(): void {
    this.router.navigate(['/']);
  }
}
