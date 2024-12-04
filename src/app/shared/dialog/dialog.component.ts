import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnDestroy {
  @Input() titulo: string = 'Título';
  @Input() confirmarLabel: string = 'Confirmar';
  @Input() confirmarDesable: boolean = false;
  @Input() usaConfirmar: boolean = true;
  @Input() cancelarLabel: string = 'Cancelar';
  @Input() usaCancelar: boolean = true;
  @Input() carregando: boolean = false;

  @Output() confirmar: EventEmitter<boolean> = new EventEmitter();
  @Output() cancelar: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnDestroy(): void {
    this.confirmar.unsubscribe();
    this.cancelar.unsubscribe();
  }

  onConfirmar(): void {
    this.confirmar.emit();
  }

  onCancelar(): void {
    this.cancelar.emit();
  }
}
