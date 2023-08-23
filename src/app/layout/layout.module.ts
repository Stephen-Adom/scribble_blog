import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarModule } from 'primeng/sidebar';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from '../home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [LayoutComponent, NavigationComponent, SidebarComponent],
  imports: [CommonModule, LayoutRoutingModule, HomeComponent, SidebarModule],
})
export class LayoutModule {}
