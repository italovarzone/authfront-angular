import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages Components
import { HomeComponent } from './home.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { AgendamentosComponent } from './components/agendamentos/agendamentos.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { ProcedimentosComponent } from './components/procedimentos/procedimentos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'clientes', component: ClientesComponent },
      { path: 'agendamentos', component: AgendamentosComponent },
      { path: 'agenda', component: AgendaComponent },
      { path: 'procedimentos', component: ProcedimentosComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
