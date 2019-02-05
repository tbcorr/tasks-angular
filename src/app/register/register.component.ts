import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import {passwordConfirmValidator} from 'src/app/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.email],
    password: this.formBuilder.group({
      password: [''],
      passwordConfirm: ['']
    }, { validators: passwordConfirmValidator })
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

  }
}
