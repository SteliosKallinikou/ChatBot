import {Component, EventEmitter, inject, Output} from '@angular/core';
import {MatSidenav, MatSidenavContainer} from '@angular/material/sidenav';
import {MatButton} from '@angular/material/button';
import {MatList, MatListItem} from '@angular/material/list';
import {Router, RouterOutlet} from '@angular/router';
import {MatToolbarRow} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';


@Component({
  selector: 'app-side-nav',
  imports: [
    MatIcon,
    MatSidenav,
    MatSidenavContainer,
    MatButton,
    MatList,
    MatListItem,
    RouterOutlet,
    MatToolbarRow,

  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  @Output() change = new EventEmitter<string>()
  private router=inject(Router)
  opened=false
  ChatClick(route:string,name:string):void {
    this.router.navigate([route,name])
  }
}
