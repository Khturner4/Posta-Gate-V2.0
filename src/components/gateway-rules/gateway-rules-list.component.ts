
import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';
import { MockDataService } from '../../services/mock-data.service';

@Component({
  selector: 'app-gateway-rules-list',
  templateUrl: './gateway-rules-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PageHeaderComponent, RouterLink],
})
export class GatewayRulesListComponent {
  private dataService = inject(MockDataService);
  
  private allRules = this.dataService.gatewayRules;
  searchTerm = signal('');

  filteredRules = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) {
      return this.allRules();
    }
    return this.allRules().filter(rule => 
      rule.name.toLowerCase().includes(term)
    );
  });

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }
}
