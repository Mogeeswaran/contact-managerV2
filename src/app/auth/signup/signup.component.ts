import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {
  signup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.signup = this.fb.group({
      name1: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  get f() { return this.signup.controls; }

  ngOnInit() {
  }

}
