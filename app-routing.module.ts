import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculaMediaComponent } from './calcula-media/calcula-media.component';
import { RecuperacaoComponent } from './recuperacao/recuperacao.component';  // Importa o componente de recuperação

const routes: Routes = [
  { path: '', component: CalculaMediaComponent },
  { path: 'recuperacao/:mediaParcial', component: RecuperacaoComponent },  // Define a rota com o parâmetro
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
