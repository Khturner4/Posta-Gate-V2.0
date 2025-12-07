
import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-header',
  template: `
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-800">{{ title() }}</h1>
      @if (subtitle()) {
        <p class="mt-1 text-gray-500">{{ subtitle() }}</p>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class PageHeaderComponent {
  title = input.required<string>();
  subtitle = input<string>();
}
