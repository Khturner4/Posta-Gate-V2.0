
import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';
import { MockDataService } from '../../services/mock-data.service';
import { AddressGroup } from '../../models/security-gateway.models';

@Component({
  selector: 'app-address-groups-list',
  templateUrl: './address-groups-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PageHeaderComponent, RouterLink],
})
export class AddressGroupsListComponent {
  private dataService = inject(MockDataService);
  
  private allGroups = this.dataService.addressGroups;
  searchTerm = signal('');

  filteredGroups = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) {
      return this.allGroups();
    }
    return this.allGroups().filter(group => 
      group.name.toLowerCase().includes(term)
    );
  });
  
  getMemberTypes(group: AddressGroup): string[] {
    return [...new Set(group.members.map(m => m.type))];
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }
}
