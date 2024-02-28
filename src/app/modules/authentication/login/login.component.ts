import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {MessageService} from "../../../services/shared/message.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loading = false;
  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private messages: MessageService,
              private router: Router) {
  }

  async ngOnInit() {
    this.authService.isAuthenticated.subscribe(value => {
      if (value) {
        this.authService.onAuthenticationSuccess()
      }
    })
  }

  ngOnDestroy() {
    this.authService.isAuthenticated.unsubscribe();
  }

  submit() {
    if (this.form.valid) {
      this.handleLoginUser()
    } else {
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  handleLoginUser() {
    this.loading = true;

    this.authService.authenticate(this.form.value).subscribe({
      next: () => {
        this.messages.successMessage('Logged in successfully!')
      },
      error: () => {
        this.messages.errorMessage('Invalid username or password!');
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    })
  }
}
