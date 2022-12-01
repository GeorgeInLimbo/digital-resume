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

    // const address = this.fb.group({
    //   street: '',
    //   city: '',
    //   state: '',
    //   zip: ''
    // })

    this.myForm = this.fb.group({
      name: '',
      password: ['', [
        Validators.required,
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      nicknames: this.fb.array([]),
      agree: [false, [Validators.requiredTrue]],
      // homeAddress: address,
      // companyAddress: address
    })

    this.myForm.valueChanges.subscribe(console.log)
  }

  get nicks() {
    return this.myForm.get('nicknames') as FormArray;
  }

  addNick() {
    const nickname = this.fb.group({
      newName: []
    })
    this.nicks.push(nickname);
  }

  deleteNick(i: number) {
    this.nicks.removeAt(i);
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
