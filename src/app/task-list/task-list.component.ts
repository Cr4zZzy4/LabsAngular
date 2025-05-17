import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { TaskItemComponent } from '../task-item/task-item.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, TaskItemComponent],
  providers: [TaskService],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: { title: string; description: string; difficulty: string; comments: string[] }[] = [];
  showTasks = true;
  authForm: FormGroup;
  isLoggedIn = false;

  constructor(private taskService: TaskService, private fb: FormBuilder) {
    this.authForm = this.fb.group({
      fullName: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[а-яА-ЯёЁa-zA-Z\s]+$/)
      ]],
      phone: ['', [
        Validators.required,
        Validators.pattern(/^[\d\s\-()+]{7,20}$/)
      ]],
      birthDate: ['', [
        Validators.required,
        this.validateBirthDate
      ]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]]
    });
  }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks().map(task => ({
      ...task,
      comments: []
    }));
  }

  validateBirthDate(control: any) {
    const birthDate = new Date(control.value);
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 100);
    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 12);

    if (birthDate < minDate || birthDate > maxDate) {
      return { invalidDate: true };
    }
    return null;
  }

  login() {
    if (this.authForm.valid) {
      console.log('Успешная авторизация:', this.authForm.value);
      this.isLoggedIn = true;
    } else {
      this.markAllAsTouched();
    }
  }

  markAllAsTouched() {
    Object.values(this.authForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  logout() {
    this.isLoggedIn = false;
    this.authForm.reset();
  }

  get fullName() { return this.authForm.get('fullName'); }
  get phone() { return this.authForm.get('phone'); }
  get birthDate() { return this.authForm.get('birthDate'); }
  get email() { return this.authForm.get('email'); }
  get password() { return this.authForm.get('password'); }
}