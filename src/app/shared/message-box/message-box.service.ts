import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageBoxComponent } from './message-box.component';

@Injectable()
export class MessageBoxService {
  constructor(public dialog: MatDialog) {}

  pergunta(mensagem: string, titulo: string = 'Pergunta'): Observable<any> {
    return this.dialog
      .open(MessageBoxComponent, {
        height: '80%',
        maxHeight: '680px',
        width: '80%',
        maxWidth: '680px',
        data: { mensagem, titulo, confirmarLabel: 'Sim', cancelarLabel: 'Não' },
      })
      .afterClosed();
  }

  aviso(mensagem: string, titulo: string = 'Aviso'): Observable<any> {
    return this.dialog
      .open(MessageBoxComponent, {
        height: '80%',
        maxHeight: '680px',
        width: '80%',
        maxWidth: '680px',
        data: { mensagem, titulo, confirmarLabel: 'Ok', usaCancelar: false },
      })
      .afterClosed();
  }

  erro(mensagem: string, titulo: string = 'Erro'): Observable<any> {
    return this.dialog
      .open(MessageBoxComponent, {
        height: '80%',
        maxHeight: '680px',
        width: '80%',
        maxWidth: '680px',
        data: { mensagem, titulo, confirmarLabel: 'Ok', usaCancelar: false },
      })
      .afterClosed();
  }
}
