import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  login: FormGroup

  constructor(private fb: FormBuilder) {
  this.login = this.fb.group({
    Email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required, Validators.maxLength(6)]
  })
  }

  get f() { return this.login.controls; }

  ngOnInit() {
  }

}
