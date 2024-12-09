import {Component} from '@angular/core';
import {MatSidenav, MatSidenavContainer} from '@angular/material/sidenav';
import {MatButton} from '@angular/material/button';
import {MatList, MatListItem} from '@angular/material/list';
import {RouterLink,RouterOutlet} from '@angular/router';
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
    RouterLink,
    RouterOutlet,
    MatToolbarRow,

  ],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  opened=false

}
