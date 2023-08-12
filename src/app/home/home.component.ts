import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsOverviewComponent } from './blogs-overview/blogs-overview.component';
import { TabViewModule } from 'primeng/tabview';
import { BlogsFollowingComponent } from './blogs-following/blogs-following.component';
import { TrendingPostsComponent } from './trending-posts/trending-posts.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BlogsOverviewComponent,
    TabViewModule,
    BlogsFollowingComponent,
    TrendingPostsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
