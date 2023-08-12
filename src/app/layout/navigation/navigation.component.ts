import { Component, OnInit } from '@angular/core';
import { Dropdown, initTE } from 'tw-elements';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  ngOnInit(): void {
    initTE({ Dropdown });
  }
}
