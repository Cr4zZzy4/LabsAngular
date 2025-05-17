import { Component } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-perviy',
  standalone: true,
  imports: [TaskItemComponent, TaskListComponent],
  templateUrl: './perviy.component.html',
  styleUrl: './perviy.component.scss'
})
export class PerviyComponent {

}
