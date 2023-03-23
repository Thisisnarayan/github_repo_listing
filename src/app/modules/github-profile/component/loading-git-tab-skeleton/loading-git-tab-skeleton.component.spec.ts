import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingGitTabSkeletonComponent } from './loading-git-tab-skeleton.component';

describe('LoadingGitTabSkeletonComponent', () => {
  let component: LoadingGitTabSkeletonComponent;
  let fixture: ComponentFixture<LoadingGitTabSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingGitTabSkeletonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingGitTabSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
