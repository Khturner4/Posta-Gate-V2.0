
import { Component, ChangeDetectionStrategy, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';
import { MockDataService } from '../../services/mock-data.service';
import { LogEntry } from '../../models/security-gateway.models';

@Component({
  selector: 'app-gateway-logs',
  templateUrl: './gateway-logs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, PageHeaderComponent],
})
export class GatewayLogsComponent {
  private dataService = inject(MockDataService);
  
  logs = this.dataService.logs;
  selectedLog = signal<LogEntry | null>(null);

  openLogDetails(log: LogEntry) {
    this.selectedLog.set(log);
  }

  closeLogDetails() {
    this.selectedLog.set(null);
  }
}
