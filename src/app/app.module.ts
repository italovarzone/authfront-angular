import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ClientesComponent } from './pages/home/components/clientes/clientes.component';
import { AgendamentosComponent } from './pages/home/components/agendamentos/agendamentos.component';
import { AgendaComponent } from './pages/home/components/agenda/agenda.component';
import { ProcedimentosComponent } from './pages/home/components/procedimentos/procedimentos.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    AgendamentosComponent,
    AgendaComponent,
    ProcedimentosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
