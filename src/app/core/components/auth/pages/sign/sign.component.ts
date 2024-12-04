import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Service
import { AuthService } from 'src/app/core/services/auth.service';
import { finalize } from 'rxjs';
import { LoginPostDto } from 'src/app/core/models/postDto/login.post.dto';
import { AppStateService } from 'src/app/app.state.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss'],
})
export class SignComponent implements OnInit {
  carregando = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private appStateService: AppStateService,
    private router: Router
  ) {}

  public formAuth: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  public msgError!: string;
  ngOnInit(): void {}

  public submitForm() {
    if (this.formAuth.valid) {
      const dto: LoginPostDto = {
        email: this.formAuth.value.email,
        senha: this.formAuth.value.password,
      };
      this.carregando = true;
      this.authService
        .login(dto)
        .pipe(finalize(() => (this.carregando = false)))
        .subscribe({
          next: resultado => {
            debugger;
            this.appStateService.setUsuarioLogado(resultado.usuario);
            this.authService.saveToken(resultado.token);
            this.router.navigate(['/home']); // Ajuste o path conforme necessário
            console.log('Login bem-sucedido!');
          },
          error: err => {
            this.msgError = 'Email ou senha inválidos.';
          },
        });
    }
  }
}
