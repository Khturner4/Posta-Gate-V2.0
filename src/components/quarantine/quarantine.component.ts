
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';

@Component({
  selector: 'app-quarantine',
  template: `
    <app-page-header title="Quarantine" subtitle="Review quarantined messages and decide what to do with them."></app-page-header>
    <div class="bg-white p-6 rounded-lg shadow-sm text-center text-gray-500">
      Quarantine module is under construction.
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PageHeaderComponent],
})
export class QuarantineComponent {}
