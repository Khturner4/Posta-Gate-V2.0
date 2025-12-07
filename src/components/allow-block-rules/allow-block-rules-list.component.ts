
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';

@Component({
  selector: 'app-allow-block-rules-list',
  template: `
    <app-page-header title="Allow / Block Rules" subtitle="Global allow or block for specific senders or domains."></app-page-header>
    <div class="bg-white p-6 rounded-lg shadow-sm text-center text-gray-500">
      Allow / Block Rules module is under construction.
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PageHeaderComponent],
})
export class AllowBlockRulesListComponent {}
