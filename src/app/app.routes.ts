import { Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CadastroPacienteComponent } from './pages/cadastro-paciente/cadastro-paciente.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { ProntuarioComponent } from './pages/prontuario/prontuario.component';
import { PrescricaoComponent } from './pages/prescricao/prescricao.component';
import { TelemedicinaComponent } from './pages/telemedicina/telemedicina.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'cadastro-paciente', component: CadastroPacienteComponent, canActivate: [AuthGuard] },
  { path: 'agenda', component: AgendaComponent, canActivate: [AuthGuard] },
  { path: 'prontuario', component: ProntuarioComponent, canActivate: [AuthGuard] },
  { path: 'prescricao', component: PrescricaoComponent, canActivate: [AuthGuard] },
  { path: 'telemedicina', component: TelemedicinaComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // fallback para rotas não definidas
];
