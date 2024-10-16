import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { SignUpComponent } from './sign-up/sign-up.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,MatDialogModule,  MatIconModule,
    MatInputModule,ReactiveFormsModule,MatDividerModule,SignUpComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  constructor(public dialog:MatDialog, public dialogRef: MatDialogRef<LoginComponent>) {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
   }


  ngOnInit(): void {
   
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

  login(){
    console.log("form group data ",this.loginForm.value);
  }

  signUp(event: Event){
    this.closeDialog();
    event.preventDefault();
    setTimeout(() => {
      this.openSignUpPage();
    }, 100);
     
    }
    openSignUpPage(){
      const dialogRef = this.dialog.open(SignUpComponent, {
        width: '700px', // You can set the width and height of the dialog
        panelClass: 'login_popup_panelclass',
        backdropClass: 'create_login_backdrop_class',
        data: { message: 'This is a message passed to the popup' }, // Pass data if needed
      });
  
      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
      });
    }
}
