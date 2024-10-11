import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { FormBuilder, } from '@angular/forms';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { UpdateTutorProfileComponent } from './update-tutor-profile/update-tutor-profile.component';
// import { number } from '@angular/common';
@Component({
  selector: 'app-tutor-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './tutor-profile.component.html',
  styleUrl: './tutor-profile.component.scss'
})
export class TutorProfileComponent {
  qualificationsForm: FormGroup;

  constructor(private fb: FormBuilder,public dialog: MatDialog,private renderer: Renderer2) {
    this.qualificationsForm = this.fb.group({
      graduationDegree: ['', Validators.required],
      graduationYear: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      graduationTotalMarks: ['', [Validators.required, Validators.min(1)]],
      graduationMarksObtained: ['', [Validators.required, Validators.min(0)]],
      postGraduationDegree: ['', Validators.required],
      postGraduationYear: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      postGraduationTotalMarks: ['', [Validators.required, Validators.min(1)]],
      postGraduationMarksObtained: ['', [Validators.required, Validators.min(0)]]
    });
  }
  profileData = {
    "profile_pic": "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp",
    "name": "Pawan Tiwari",
    "description": "I am well trained turor with 7 years of experience in maths and science teaching.",
    "tutor_type": "Home Tutor",
    "subjects": ["All", "Math", "Science"],
    "ratings": "5",
    "charges": " Rs 300 Per Hour",
    "class": "12st Class Free",
    "total_review": "30 Reviews",
    "email": "pawan.tiwari@gmail.com",
    "phone_number": 9794765234,
    "gender": "Male",
    "location": "Bangalore",
    "board": "CBSE",
    "experiance": 7,
    "languages": ["English", "Hindi"]

  }
  tutorQualifications = [
    {
      degree: 'Bachelor of Science',
      passingYear: 2015,
      totalMarks: 1000,
      marksObtained: 850,
      action: "info"
    },
    {
      degree: 'Master of Science',
      passingYear: 2017,
      totalMarks: 1000,
      marksObtained: 900,
      action: "info"
    }

  ]
  tutorExperiance = [
    {
      company: "Tutor",
      from: 2015,
      to: 2017

    }


  ]
  selectedOverViewTab = true;



  ngOnInit(): void {
    this.qualificationsForm.setValue({
      graduationDegree: 'Bachelor of Science',
      graduationYear: 2015,
      graduationTotalMarks: 1000,
      graduationMarksObtained: 850,
      postGraduationDegree: 'Master of Science',
      postGraduationYear: 2017,
      postGraduationTotalMarks: 1000,
      postGraduationMarksObtained: 900
    });
  }



  calculatePercentage(marksObtained: number, totalMarks: number): number {
    return (marksObtained / totalMarks) * 100;
  }

  onSubmit(): void {
    if (this.qualificationsForm.valid) {
      console.log('Qualification Data:', this.qualificationsForm.value);
      // Here you can perform further processing, like sending data to a server
    }
  }

  ViewSpecificTab(typeOfTab: string) {
    if (typeOfTab == 'overview') {
      this.selectedOverViewTab = true;
    } else {
      this.selectedOverViewTab = false;
    }

  }
  updateTutorDetails() {
    console.log("update tutor page")
    const dialogRef = this.dialog.open(UpdateTutorProfileComponent, {
      width: '700px', 
      panelClass: 'login_popup_panelclass',
      backdropClass: 'create_login_backdrop_class',
      data: { profileData: this.profileData },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  updateTutorProfile(){

  }

}
