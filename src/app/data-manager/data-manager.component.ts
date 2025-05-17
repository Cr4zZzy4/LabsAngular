import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiDataService } from '../services/api-data.service';
import { Data } from '../models/data.model';
import { finalize, Subject, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-data-manager',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './data-manager.component.html',
  styleUrls: ['./data-manager.component.scss']
})
export class DataManagerComponent implements OnInit, OnDestroy {
  dataList: Data[] = [];
  newData: Data = { title: '', description: '' };
  isLoading = false;
  private destroy$ = new Subject<void>();

  constructor(private dataService: ApiDataService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadData(): void {
    this.isLoading = true;
    this.dataService.getData()
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.isLoading = false)
      )
      .subscribe({
        next: (data: Data[]) => this.dataList = [...data],
        error: (err) => console.error('Ошибка загрузки:', err)
      });
  }

  addData(): void {
    if (!this.newData.title.trim()) return;

    this.dataService.addData(this.newData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (created: Data) => {
          this.dataList.push(created); 
          this.newData = { title: '', description: '' };
        },
        error: (err) => console.error('Ошибка добавления:', err)
      });
  }

  deleteData(id: string): void {
    this.dataService.deleteData(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.dataList = this.dataList.filter(d => d.id !== id);
        },
        error: (err) => console.error('Ошибка удаления:', err)
      });
  }
}
