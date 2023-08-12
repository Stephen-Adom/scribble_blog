import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { CreateComponent } from './create/create.component';
import { CreateBlogSidebarComponent } from './create-blog-sidebar/create-blog-sidebar.component';

@NgModule({
  declarations: [BlogComponent, CreateComponent, CreateBlogSidebarComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    QuillModule.forRoot(),
  ],
})
export class BlogModule {}
