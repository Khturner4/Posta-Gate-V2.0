
import { Injectable, signal } from '@angular/core';
import { Domain, AddressGroup, GatewayRule, LogEntry } from '../models/security-gateway.models';

@Injectable({ providedIn: 'root' })
export class MockDataService {
  private domainsDb: Domain[] = [
    { id: '1', domainName: 'customer.com', destinationHost: 'mail.customer.com', port: 25, isTlsRequired: true, status: 'Active', lastUpdated: '2023-10-26 10:00', createdBy: 'admin', createdAt: '2023-01-01', lastUpdatedBy: 'admin' },
    { id: '2', domainName: 'example.org', destinationHost: 'inbound.example.org', port: 25, isTlsRequired: false, status: 'Active', lastUpdated: '2023-10-25 14:30', createdBy: 'admin', createdAt: '2023-01-01', lastUpdatedBy: 'admin' },
    { id: '3', domainName: 'test-domain.net', destinationHost: 'mx.test-domain.net', port: 587, isTlsRequired: true, status: 'Disabled', lastUpdated: '2023-09-01 09:00', createdBy: 'admin', createdAt: '2023-01-01', lastUpdatedBy: 'admin' },
  ];

  private addressGroupsDb: AddressGroup[] = [
      { id: 'ag1', name: 'Blocked Senders', description: 'A list of senders that are always blocked.', members: [{type: 'Domain', value: 'spamdomain.com'}, {type: 'Email', value: 'spammer@another.com'}], usedIn: 3, lastUpdated: '2023-10-24 11:00' },
      { id: 'ag2', name: 'Internal Staff', description: 'All internal staff email addresses.', members: [{type: 'Domain', value: 'customer.com'}], usedIn: 5, lastUpdated: '2023-10-23 16:20' },
      { id: 'ag3', name: 'Marketing Partners', description: 'Approved marketing partners.', members: [{type: 'Email', value: 'contact@partner.com'}, {type: 'IP', value: '203.0.113.10'}], usedIn: 1, lastUpdated: '2023-10-22 09:45' },
  ];

  private gatewayRulesDb: GatewayRule[] = [
      { id: 'gr1', priority: 1, name: 'Block Known Spammers', direction: 'Inbound', from: ['Blocked Senders'], to: ['Any'], contentFilters: 'N/A', action: 'Block', status: 'Active' },
      { id: 'gr2', priority: 10, name: 'Scan Inbound for Viruses', direction: 'Inbound', from: ['Any'], to: ['Any'], contentFilters: 'AV Scan', action: 'Quarantine', status: 'Active' },
      { id: 'gr3', priority: 50, name: 'DLP for Financial Dept', direction: 'Outbound', from: ['Financial Dept'], to: ['Any'], contentFilters: 'Credit Cards DLP', action: 'BCC to Compliance', status: 'Disabled' },
  ];
  
  private logsDb: LogEntry[] = [
      { id: 'log1', time: '2023-10-27 10:05:12', from: 'user@external.com', to: 'sales@customer.com', subject: 'Inquiry about products', result: 'Delivered', rule: 'Default Delivery', spamScore: '1.2/5.0', spamAnalysis: '...', avResult: 'Clean', actionTaken: 'Accept', rawLog: '...' },
      { id: 'log2', time: '2023-10-27 10:04:30', from: 'spammer@spam.com', to: 'info@customer.com', subject: 'You won a prize!', result: 'Quarantined', rule: 'Block Known Spammers', spamScore: '8.9/5.0', spamAnalysis: '...', avResult: 'N/A', actionTaken: 'Quarantine', rawLog: '...' },
      { id: 'log3', time: '2023-10-27 10:02:01', from: 'marketing@partner.com', to: 'john@customer.com', subject: 'RE: Our meeting', result: 'Rejected', rule: 'Attachment Policy', spamScore: '0.5/5.0', spamAnalysis: '...', avResult: 'Clean', actionTaken: 'Reject', rawLog: '...' },
      { id: 'log4', time: '2023-10-27 09:55:45', from: 'ceo@customer.com', to: 'external.contact@corp.com', subject: 'Confidential proposal', result: 'Deferred', rule: 'N/A', spamScore: '-1.0/5.0', spamAnalysis: '...', avResult: 'Clean', actionTaken: 'Defer', rawLog: '...' },
  ];

  domains = signal<Domain[]>(this.domainsDb);
  addressGroups = signal<AddressGroup[]>(this.addressGroupsDb);
  gatewayRules = signal<GatewayRule[]>(this.gatewayRulesDb);
  logs = signal<LogEntry[]>(this.logsDb);

  // Domains
  getDomain(id: string): Domain | undefined {
    return this.domains().find(d => d.id === id);
  }
  
  saveDomain(domain: Domain) {
    if (domain.id && domain.id !== 'new') {
        this.domains.update(domains => domains.map(d => d.id === domain.id ? {...domain, lastUpdated: new Date().toISOString() } : d));
    } else {
        const newDomain = { ...domain, id: Date.now().toString(), createdAt: new Date().toISOString(), lastUpdated: new Date().toISOString() };
        this.domains.update(domains => [...domains, newDomain]);
    }
  }

  // Address Groups
  getAddressGroup(id: string): AddressGroup | undefined {
    return this.addressGroups().find(ag => ag.id === id);
  }

  saveAddressGroup(group: AddressGroup) {
     if (group.id && group.id !== 'new') {
        this.addressGroups.update(groups => groups.map(g => g.id === group.id ? {...group, lastUpdated: new Date().toISOString() } : g));
    } else {
        const newGroup = { ...group, id: Date.now().toString(), lastUpdated: new Date().toISOString() };
        this.addressGroups.update(groups => [...groups, newGroup]);
    }
  }

  // Gateway Rules
  getGatewayRule(id: string): GatewayRule | undefined {
      return this.gatewayRules().find(r => r.id === id);
  }

  saveGatewayRule(rule: GatewayRule) {
    if (rule.id && rule.id !== 'new') {
        this.gatewayRules.update(rules => rules.map(r => r.id === rule.id ? rule : r));
    } else {
        const newRule = {...rule, id: Date.now().toString() };
        this.gatewayRules.update(rules => [...rules, newRule].sort((a,b) => a.priority - b.priority));
    }
  }
}
