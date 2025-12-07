
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { 
    path: 'dashboard', 
    loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent),
    title: 'Dashboard' 
  },
  { 
    path: 'gateway-logs', 
    loadComponent: () => import('./components/gateway-logs/gateway-logs.component').then(m => m.GatewayLogsComponent),
    title: 'Gateway Logs'
  },
  { 
    path: 'quarantine', 
    loadComponent: () => import('./components/quarantine/quarantine.component').then(m => m.QuarantineComponent),
    title: 'Quarantine' 
  },
  { 
    path: 'allow-block-rules', 
    loadComponent: () => import('./components/allow-block-rules/allow-block-rules-list.component').then(m => m.AllowBlockRulesListComponent),
    title: 'Allow / Block Rules'
  },
  { 
    path: 'ip-allow-block', 
    loadComponent: () => import('./components/ip-allow-block/ip-allow-block-list.component').then(m => m.IpAllowBlockListComponent),
    title: 'IP Allow / Block List'
  },
  { 
    path: 'dlp-filters', 
    loadComponent: () => import('./components/dlp-filters/dlp-filters-list.component').then(m => m.DlpFiltersListComponent),
    title: 'DLP Filters'
  },
  { 
    path: 'address-groups', 
    loadComponent: () => import('./components/address-groups/address-groups-list.component').then(m => m.AddressGroupsListComponent),
    title: 'Address Groups'
  },
  { 
    path: 'address-groups/edit/:id', 
    loadComponent: () => import('./components/address-groups/address-group-edit.component').then(m => m.AddressGroupEditComponent),
    title: 'Edit Address Group'
  },
  { 
    path: 'address-groups/new', 
    loadComponent: () => import('./components/address-groups/address-group-edit.component').then(m => m.AddressGroupEditComponent),
    title: 'New Address Group'
  },
  { 
    path: 'content-filters', 
    loadComponent: () => import('./components/content-filters/content-filters.component').then(m => m.ContentFiltersComponent),
    title: 'Content Filters'
  },
  { 
    path: 'actions', 
    loadComponent: () => import('./components/actions/actions-list.component').then(m => m.ActionsListComponent),
    title: 'Actions'
  },
  { 
    path: 'gateway-rules', 
    loadComponent: () => import('./components/gateway-rules/gateway-rules-list.component').then(m => m.GatewayRulesListComponent),
    title: 'Gateway Rules'
  },
  { 
    path: 'gateway-rules/edit/:id', 
    loadComponent: () => import('./components/gateway-rules/gateway-rule-edit.component').then(m => m.GatewayRuleEditComponent),
    title: 'Edit Gateway Rule'
  },
  { 
    path: 'gateway-rules/new', 
    loadComponent: () => import('./components/gateway-rules/gateway-rule-edit.component').then(m => m.GatewayRuleEditComponent),
    title: 'New Gateway Rule'
  },
  { 
    path: 'domains-routing', 
    loadComponent: () => import('./components/domains/domains-list.component').then(m => m.DomainsListComponent),
    title: 'Domains & Routing'
  },
  { 
    path: 'domains-routing/edit/:id', 
    loadComponent: () => import('./components/domains/domain-edit.component').then(m => m.DomainEditComponent),
    title: 'Edit Domain'
  },
  { 
    path: 'domains-routing/new', 
    loadComponent: () => import('./components/domains/domain-edit.component').then(m => m.DomainEditComponent),
    title: 'New Domain'
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];
