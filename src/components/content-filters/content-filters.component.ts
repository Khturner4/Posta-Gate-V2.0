
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';

@Component({
  selector: 'app-content-filters',
  template: `
    <app-page-header title="Content Filters" subtitle="Central library for spam filters, URL rewrite filters, and links into DLP."></app-page-header>
    <div class="bg-white p-6 rounded-lg shadow-sm text-center text-gray-500">
      Content Filters module is under construction.
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PageHeaderComponent],
})
export class ContentFiltersComponent {}
