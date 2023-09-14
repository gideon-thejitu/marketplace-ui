import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {UsersServiceService} from "../../../../services/users-service.service";
import {NewUser} from "../../../../interfaces/user";
import {MessageService} from "../../../../services/shared/message.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  loading = false;

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.form.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  form = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required, this.confirmationValidator]],
  })
  constructor(private formBuilder: FormBuilder,
              private usersService: UsersServiceService,
              private messages: MessageService,
              private router: Router) {}

  ngOnInit() {
    this.form.controls.password.valueChanges.subscribe((value) => {
      if (value !== null) {
        this.updateConfirmValidator();
      }
    })
  }

  updateConfirmValidator(): void {
    Promise.resolve().then(() => this.form.controls.confirmPassword.updateValueAndValidity());
  }

  submitForm() {
    const  { valid } = this.form;

    if (valid) {
      this.handleRegisterUser();
    } else {
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  handleRegisterUser() {
    this.loading = true;
    this.usersService.createUser(this.form.value as NewUser).subscribe({
      next: () => this.handleSuccess(),
      error: (error: any) => {
        this.messages.errorMessage(error?.message || 'User was not registered successfully!')
        this.loading = false;
      },
    })
  }

  handleSuccess() {
    this.messages.successMessage('User registered successfully!')
    this.form.reset();
    this.router.navigate(['auth/signin'])
  }
}
