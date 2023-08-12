import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsFollowingComponent } from './blogs-following.component';

describe('BlogsFollowingComponent', () => {
  let component: BlogsFollowingComponent;
  let fixture: ComponentFixture<BlogsFollowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BlogsFollowingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
