import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tutor-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tutor-list.component.html',
  styleUrl: './tutor-list.component.scss'
})
export class TutorListComponent {



  tutorListData = [
    {
      "profile_pic": "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp",
      "name": "Annu Singh",
      "description": "I am well trained turor with 7 years of experience in maths and science teaching.",
      "tutor_type": "Home Tutor",
      "subjects": ["Math", "Science"],
      "ratings": "5",
      "charges": " Rs 300 Per Hour",
      "class": "1st Class Free",
      "total_review": "30 Reviews"

    },

    {
      "profile_pic": "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp",
      "name": "Nithin",
      "description": "I am well trained turor with 7 years of experience in maths and science teaching.",
      "tutor_type": "Home Tutor",
      "subjects": ["Math", "Science"],
      "ratings": "5",
      "charges": " Rs 100 Per Hour",
      "class": "3st Class Free",
      "total_review": "100 Reviews"

    },
    {
      "profile_pic": "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp",
      "name": "Nithi Tiwari",
      "description": "I am well trained turor with 7 years of experience in maths and science teaching.",
      "tutor_type": "Home Tutor",
      "subjects": ["Math", "Science"],
      "ratings": "5",
      "charges": " Rs 200 Per Hour",
      "class": "4st Class Free",
      "total_review": "30 Reviews"

    },
    {
      "profile_pic": "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp",
      "name": "Pawan Tiwari",
      "description": "I am well trained turor with 7 years of experience in maths and science teaching.",
      "tutor_type": "Home Tutor",
      "subjects": ["All", "Math", "Science"],
      "ratings": "5",
      "charges": " Rs 300 Per Hour",
      "class": "12st Class Free",
      "total_review": "30 Reviews"

    }]

  classes = ["All",1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  selectedClass(cls: any) {
    console.log(cls.target.value);
  }
}
