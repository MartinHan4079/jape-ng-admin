import { Component, OnInit } from '@angular/core';

import { PAGE_MENU } from '../../page.menu';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  opened: true;

  PAGE_MENU = PAGE_MENU;

  constructor() { }

  ngOnInit() {
  }

}
