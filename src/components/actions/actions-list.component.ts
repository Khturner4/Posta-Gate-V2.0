
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';

@Component({
  selector: 'app-actions-list',
  template: `
    <app-page-header title="Actions" subtitle="Define what happens when a rule is triggered."></app-page-header>
    <div class="bg-white p-6 rounded-lg shadow-sm text-center text-gray-500">
      Actions module is under construction.
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PageHeaderComponent],
})
export class ActionsListComponent {}
