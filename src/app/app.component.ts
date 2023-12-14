import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {SidebarComponent} from "./layouts/admin/sidebar/sidebar.component";
import {CompetitionListComponent} from "./competition/componets/competition-list/competition-list.component";
import {NotificationsComponent} from "./notifications/notifications.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent, CompetitionListComponent, NotificationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aftas-front';
}
