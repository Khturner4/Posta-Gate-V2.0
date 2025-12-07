
import { Component, ChangeDetectionStrategy, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MockDataService } from '../../services/mock-data.service';
import { AddressGroup, AddressGroupMember } from '../../models/security-gateway.models';

@Component({
  selector: 'app-address-group-edit',
  templateUrl: './address-group-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, RouterLink],
})
export class AddressGroupEditComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private dataService = inject(MockDataService);
  
  activeTab = signal<'general' | 'members' | 'usage'>('general');
  pageTitle = signal('New Address Group');

  group = signal<AddressGroup>({
    id: 'new',
    name: '',
    description: '',
    members: [],
    usedIn: 0,
    lastUpdated: '',
  });

  newMemberType: AddressGroupMember['type'] = 'Email';
  newMemberValue: string = '';

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== 'new') {
      const existingGroup = this.dataService.getAddressGroup(id);
      if (existingGroup) {
        this.group.set(existingGroup);
        this.pageTitle.set(`Edit Address Group: ${existingGroup.name}`);
      }
    }
  }
  
  addMember() {
    if (!this.newMemberValue.trim()) return;
    const newMember: AddressGroupMember = {
      type: this.newMemberType,
      value: this.newMemberValue.trim(),
    };
    this.group.update(g => ({ ...g, members: [...g.members, newMember] }));
    this.newMemberValue = '';
  }

  removeMember(index: number) {
    this.group.update(g => {
        const updatedMembers = [...g.members];
        updatedMembers.splice(index, 1);
        return { ...g, members: updatedMembers };
    });
  }

  save() {
    this.dataService.saveAddressGroup(this.group());
    this.router.navigate(['/address-groups']);
  }
}
