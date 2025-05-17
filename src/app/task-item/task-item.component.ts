import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() title: string = ""; 
  @Input() description: string = ""; 
  @Input() difficulty: string = ""; 
  @Input() comments: string[] = []; 

  newComment: string = ""; 
  userName: string = "";
  rating: number | null = null;
  email: string = "";
  phone: string = "";
  birthDate: string = "";

  isEmailValid: boolean = true;
  isPhoneValid: boolean = true;

  addComment() {
    this.validateEmail();
    this.validatePhone();

    if (
      this.newComment.trim() &&
      this.userName.trim() &&
      this.rating !== null &&
      this.email.trim() &&
      this.phone.trim() &&
      this.birthDate &&
      this.isEmailValid &&
      this.isPhoneValid
    ) {
      const fullComment = `${this.userName} (${this.rating}/5) [${this.email}, ${this.phone}, ${this.birthDate}]: ${this.newComment}`;
      this.comments.push(fullComment);
      this.clearForm();
    }
  }

  validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.isEmailValid = emailPattern.test(this.email);
  }

  validatePhone() {
    const phonePattern = /^[\d\s\-()+]{7,20}$/;
    this.isPhoneValid = phonePattern.test(this.phone);
  }

  clearForm() {
    this.newComment = "";
    this.userName = "";
    this.rating = null;
    this.email = "";
    this.phone = "";
    this.birthDate = "";
    this.isEmailValid = true;
    this.isPhoneValid = true;
  }
}
