import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { LoginComponent } from '../login.component';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule,MatDialogModule,  MatIconModule,
    MatInputModule,ReactiveFormsModule,MatDividerModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  signUpForm: FormGroup;
  constructor(public dialog:MatDialog, public dialogRef: MatDialogRef<SignUpComponent>) {
    this.signUpForm = new FormGroup({
      name:new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      typeOfUSer:new FormControl('')
    });
   }


  ngOnInit(): void {
   
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

  createAccount(){
    console.log("form group data ",this.signUpForm.value);
  }
  signIn(event: Event){
    event.preventDefault();
    this.closeDialog();
    this.openLoginPage();
  }

  openLoginPage(){
      const dialogRef = this.dialog.open(LoginComponent, {
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
