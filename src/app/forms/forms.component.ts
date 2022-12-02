import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})

export class FormsComponent implements OnInit {

  private fb = inject(FormBuilder);
  onSubmit = false;
  nicknames = [];

  myForm = this.fb.group({
    name: ['', Validators.required],
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
  })


  get password() {
    return this.myForm.get('password');
  }

  get email() {
    return this.myForm.get('email');
  }

  get agree() {
    return this.myForm.get('agree');
  }

  get nicks() {
    return this.myForm.get('nicknames') as FormArray;
  }

  displayNicknames(): void {
    this.nicknames = this.nicks.value.map((name: { newName: string; }) => name.newName);
    this.onSubmit = true;
  }

  ngOnInit() {
    this.myForm.valueChanges.subscribe(console.log)
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

}
