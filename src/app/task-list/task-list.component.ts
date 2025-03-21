import { Component } from '@angular/core';
import { RouterLinkActive,RouterLink } from '@angular/router';
import { TaskItemComponent } from '../task-item/task-item.component';
import {  NgSwitch  } from '@angular/common';
import { NgIf } from '@angular/common'; 
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent, NgSwitch, NgIf, NgFor],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks = [
    { id: 1, title: 'Задание 1', description: 'Решить уравнение', difficulty: 'easy' },
    { id: 2, title: 'Задание 2', description: 'Написать программу', difficulty: 'hard' },
    { id: 3, title: 'Задание 3', description: 'Анализ алгоритма', difficulty: 'medium' }
  ];

  showTasks = true; 
}
