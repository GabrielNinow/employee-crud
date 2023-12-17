import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrl: './emp-add-edit.component.scss'
})
export class EmpAddEditComponent {
  empForm: FormGroup;

  education: String[] = [
    'Basic',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate'
  ]

  constructor(private _fb:FormBuilder){
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      birth: '',
      gender: '',
      education: '',
    })
  }
}
