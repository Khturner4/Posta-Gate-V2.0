
import { Component, ChangeDetectionStrategy, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MockDataService } from '../../services/mock-data.service';
import { Domain } from '../../models/security-gateway.models';

@Component({
  selector: 'app-domain-edit',
  templateUrl: './domain-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, RouterLink],
})
export class DomainEditComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private dataService = inject(MockDataService);
  
  activeTab = signal<'general' | 'audit'>('general');
  pageTitle = signal('New Domain');

  domain = signal<Domain>({
    id: 'new',
    domainName: '',
    destinationHost: '',
    port: 25,
    isTlsRequired: false,
    status: 'Active',
    lastUpdated: '',
    createdBy: 'admin',
    createdAt: new Date().toISOString(),
    lastUpdatedBy: 'admin',
  });

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== 'new') {
      const existingDomain = this.dataService.getDomain(id);
      if (existingDomain) {
        this.domain.set(existingDomain);
        this.pageTitle.set(`Edit Domain: ${existingDomain.domainName}`);
      }
    }
  }
  
  save() {
    this.dataService.saveDomain(this.domain());
    this.router.navigate(['/domains-routing']);
  }
}
