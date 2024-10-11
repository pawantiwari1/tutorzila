import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-update-tutor-profile',
  standalone: true,
  imports: [CommonModule,MatDialogModule,  MatIconModule,
    MatInputModule,ReactiveFormsModule,MatDividerModule],
  templateUrl: './update-tutor-profile.component.html',
  styleUrl: './update-tutor-profile.component.scss'
})
export class UpdateTutorProfileComponent {
  userProfile:FormGroup
constructor(public dialog:MatDialog, public dialogRef: MatDialogRef<UpdateTutorProfileComponent>, @Inject(MAT_DIALOG_DATA) public data: any){

  this.userProfile = new FormGroup({
    profile_pic:new FormControl(''),
    name:new FormControl('',[ Validators.required]),
    email: new FormControl('',[ Validators.required]),
    phone: new FormControl('',[ Validators.required]),
    gender:new FormControl('',[ Validators.required]),
    location:new FormControl('')
  });

}
  closeDialog(): void {
    this.dialogRef.close();
  }

  updateTutorProfile(){
console.log("profile data ",this.userProfile.value);
  }
}
