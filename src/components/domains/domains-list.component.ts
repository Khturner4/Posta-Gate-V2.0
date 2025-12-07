
import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';
import { MockDataService } from '../../services/mock-data.service';
import { Domain } from '../../models/security-gateway.models';

@Component({
  selector: 'app-domains-list',
  templateUrl: './domains-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PageHeaderComponent, RouterLink],
})
export class DomainsListComponent {
  private dataService = inject(MockDataService);
  
  private allDomains = this.dataService.domains;
  searchTerm = signal('');

  filteredDomains = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) {
      return this.allDomains();
    }
    return this.allDomains().filter(domain => 
      domain.domainName.toLowerCase().includes(term) ||
      domain.destinationHost.toLowerCase().includes(term)
    );
  });

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }
}
