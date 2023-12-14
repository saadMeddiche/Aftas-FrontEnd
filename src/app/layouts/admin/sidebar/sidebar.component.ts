import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menuItems: MenuItem[] = [
    { name: 'Competitions', route: 'competitions' },
    { name: 'Add Competition', route: 'competitions/add'},
    { name: 'Members', route: 'members' },
    { name: 'Add Member', route: 'members/add'}
  ];
}

interface MenuItem {
  name: string;
  route: string;
}
