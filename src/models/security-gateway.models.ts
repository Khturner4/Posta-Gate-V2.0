
export interface Domain {
  id: string;
  domainName: string;
  destinationHost: string;
  port: number;
  isTlsRequired: boolean;
  status: 'Active' | 'Disabled';
  lastUpdated: string;
  createdBy: string;
  createdAt: string;
  lastUpdatedBy: string;
}

export interface AddressGroup {
  id: string;
  name: string;
  description: string;
  members: AddressGroupMember[];
  usedIn: number;
  lastUpdated: string;
}

export interface AddressGroupMember {
  type: 'Domain' | 'Email' | 'IP' | 'Subnet';
  value: string;
}

export interface GatewayRule {
  id: string;
  priority: number;
  name: string;
  direction: 'Inbound' | 'Outbound' | 'Both';
  from: string[]; // Names of Address Groups
  to: string[]; // Names of Address Groups
  contentFilters: string;
  action: string;
  status: 'Active' | 'Disabled';
}

export interface LogEntry {
  id: string;
  time: string;
  from: string;
  to: string;
  subject: string;
  result: 'Delivered' | 'Quarantined' | 'Rejected' | 'Deferred';
  rule: string;
  spamScore: string;
  spamAnalysis: string;
  avResult: string;
  actionTaken: string;
  rawLog: string;
}

// Minimal placeholder models for other modules
export interface PlaceholderListItem {
    id: string;
    name: string;
    description: string;
    lastUpdated: string;
}
