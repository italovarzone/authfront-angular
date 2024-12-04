import { Cliente } from './cliente';

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  tipo: TipoUsuario;
  criadoEm: Date;
  clientesUsuario: Cliente[];
}

export enum TipoUsuario {
  Admin = 1,
  Simples = 2,
}
