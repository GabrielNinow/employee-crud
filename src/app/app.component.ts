import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'first-app';

  constructor(private _dialog: MatDialog, private _empService: EmployeeService) { }

  openAddEditEmpForm() {
    this._dialog.open(EmpAddEditComponent);
  }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this._empService.getEmployeeList().subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.error(err)
      }
    });
  }
}
