import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss'],
})
export class MessageBoxComponent implements OnInit {
  titulo: string = '';
  mensagem: string = '';
  confirmarLabel: string = '';
  cancelarLabel: string = '';
  usaConfirmar: boolean = true;
  usaCancelar: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<MessageBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.titulo = this.data.titulo;
    this.mensagem = this.data.mensagem;
    this.confirmarLabel = this.data.confirmarLabel;
    this.cancelarLabel = this.data.cancelarLabel;
    this.usaConfirmar = this.data.usaConfirmar ?? true;
    this.usaCancelar = this.data.usaCancelar ?? true;

    this.dialogRef.disableClose = true;
    this.dialogRef.addPanelClass(['dialog-base']).updateSize('70%');
  }

  confirmar(): void {
    this.dialogRef.close(true);
  }

  cancelar(): void {
    this.dialogRef.close(false);
  }
}
