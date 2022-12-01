import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    const address = this.fb.group({
      street: '',
      city: '',
      state: '',
      zip: ''
    })

    this.myForm = this.fb.group({
      name: '',
      password: ['', [
        Validators.required,
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      phones: this.fb.array([]),
      homeAddress: address,
      companyAddress: address,
      agree: [false, [Validators.requiredTrue]]
    })

    this.myForm.valueChanges.subscribe(console.log)
  }

  get phoneForms() {
    return this.myForm.get('phones') as FormArray;
  }

  addPhone() {
    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: []
    })

    this.phoneForms.push(phone);
  }

  deletePhone(i: number) {
    this.phoneForms.removeAt(i);
  }

  get password() {
    return this.myForm.get('password');
  }

  get email() {
    return this.myForm.get('email');
  }

  get agree() {
    return this.myForm.get('agree');
  }
}
