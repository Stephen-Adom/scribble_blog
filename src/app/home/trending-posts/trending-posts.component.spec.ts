import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingPostsComponent } from './trending-posts.component';

describe('TrendingPostsComponent', () => {
  let component: TrendingPostsComponent;
  let fixture: ComponentFixture<TrendingPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TrendingPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
