import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  showPopup: boolean = false;
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    timer(10000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.showPopup = true;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  closePopup(): void {
    this.showPopup = false;
  }
}
