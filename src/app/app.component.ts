import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import * as M from '@materializecss/materialize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: string) {}
  thisYear: number = new Date().getFullYear();

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const elems = document.querySelectorAll('.sidenav');
      const els = document.querySelectorAll('.dropdown-trigger');
      M.Dropdown.init(els);
      M.Sidenav.init(elems);
    }
  }
}
