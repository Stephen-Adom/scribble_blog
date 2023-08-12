import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsOverviewComponent } from './blogs-overview.component';

describe('BlogsOverviewComponent', () => {
  let component: BlogsOverviewComponent;
  let fixture: ComponentFixture<BlogsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BlogsOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
