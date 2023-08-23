import { Component, OnInit } from '@angular/core';
import { initFlowbite, initDropdowns } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'scribble-ui';

  ngOnInit(): void {
    initFlowbite();
    initDropdowns();
  }
}
