import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBlogSidebarComponent } from './create-blog-sidebar.component';

describe('CreateBlogSidebarComponent', () => {
  let component: CreateBlogSidebarComponent;
  let fixture: ComponentFixture<CreateBlogSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBlogSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBlogSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
