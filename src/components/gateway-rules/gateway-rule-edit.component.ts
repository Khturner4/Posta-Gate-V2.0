
import { Component, ChangeDetectionStrategy, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MockDataService } from '../../services/mock-data.service';
import { GatewayRule } from '../../models/security-gateway.models';

@Component({
  selector: 'app-gateway-rule-edit',
  templateUrl: './gateway-rule-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, RouterLink],
})
export class GatewayRuleEditComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private dataService = inject(MockDataService);
  
  activeTab = signal<'general' | 'senders' | 'content' | 'action' | 'advanced'>('general');
  pageTitle = signal('New Gateway Rule');
  addressGroups = this.dataService.addressGroups;

  rule = signal<GatewayRule>({
    id: 'new',
    priority: 100,
    name: '',
    direction: 'Inbound',
    from: [],
    to: [],
    contentFilters: 'Use default',
    action: 'Accept',
    status: 'Active',
  });

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== 'new') {
      const existingRule = this.dataService.getGatewayRule(id);
      if (existingRule) {
        this.rule.set(existingRule);
        this.pageTitle.set(`Edit Rule: ${existingRule.name}`);
      }
    }
  }

  save() {
    this.dataService.saveGatewayRule(this.rule());
    this.router.navigate(['/gateway-rules']);
  }
}
