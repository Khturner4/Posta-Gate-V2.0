
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';

@Component({
  selector: 'app-dlp-filters-list',
  template: `
    <app-page-header title="DLP Filters" subtitle="Create and manage data-loss prevention templates and patterns."></app-page-header>
    <div class="bg-white p-6 rounded-lg shadow-sm text-center text-gray-500">
      DLP Filters module is under construction.
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PageHeaderComponent],
})
export class DlpFiltersListComponent {}
