import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = [
    { title: 'Задание 1', description: 'Описание 1', difficulty: 'easy' },
    { title: 'Задание 2', description: 'Описание 2', difficulty: 'medium' },
    { title: 'Задание 3', description: 'Описание 3', difficulty: 'hard' }
  ];

  getTasks() {
    return this.tasks;
  }
}
