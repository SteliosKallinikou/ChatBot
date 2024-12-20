import { Component, inject } from '@angular/core';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { MatButton } from '@angular/material/button';
import { MatList, MatListItem } from '@angular/material/list';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarRow } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { ChatType } from '../shared/enums';

@Component({
  selector: 'app-side-nav',
  imports: [MatIcon, MatSidenav, MatSidenavContainer, MatButton, MatList, MatListItem, RouterOutlet, MatToolbarRow],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  private router = inject(Router);
  isMenuOpened = false;

  onChatClick(route: string, name: string): void {
    this.router.navigate([route, name]);
  }

  onMenuClick(): void {
    this.isMenuOpened = true;
  }

  protected readonly ChatType = ChatType;
}
