import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageBoxService } from '../message-box/message-box.service';
import { AppStateService } from 'src/app/app.state.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  currentRoute: string = '';

  constructor(
    private router: Router,
    private _messageBoxService: MessageBoxService,
    private _authService: AuthService
  ) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url.replace('/', '');
    });
  }

  navigateTo(route: string): void {
    this.router.navigate([`/home/${route}`]);
  }

  logout() {
    this._messageBoxService
      .pergunta('Você deseja realmente sair?', 'Sair')
      .subscribe(resposta => {
        if (resposta) {
          this._authService.clearToken();
          this.router.navigate(['/login']);
        }
      });
  }
}
