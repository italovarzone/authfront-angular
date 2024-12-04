import { Injectable } from '@angular/core';
import { Usuario } from './core/models/usuario';

@Injectable({
  providedIn: 'root', // Disponível globalmente
})
export class AppStateService {
  private _usuarioLogado: Usuario | null = null; // Armazena o usuário logado

  setUsuarioLogado(usuario: any): void {
    this._usuarioLogado = usuario;
  }

  getUsuarioLogado(): any {
    return this._usuarioLogado;
  }

  clearUsuarioLogado(): void {
    this._usuarioLogado = null;
  }
}
