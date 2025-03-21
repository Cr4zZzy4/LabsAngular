import { Component, Input } from '@angular/core';
import { RouterLinkActive,RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent {
@Input () title = "";
@Input () description = "";
@Input() difficulty = "";
}
