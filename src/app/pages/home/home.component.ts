import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService } from 'src/app/app.state.service';
import { Usuario } from 'src/app/core/models/usuario';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  usuario: Usuario | null = null;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _appStateService: AppStateService
  ) {}

  ngOnInit(): void {
    debugger;
    this.usuario = this._appStateService.getUsuarioLogado();
  }

  public logout() {
    debugger;
    this._authService.clearToken();
    this._router.navigate(['/login']);
  }
}
