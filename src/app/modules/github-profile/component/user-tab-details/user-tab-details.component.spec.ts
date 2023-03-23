import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CacheService } from 'src/app/core/utils/cache.service';
import { GithubProfileService } from '../../services/github-profile.service';

import { UserTabDetailsComponent } from './user-tab-details.component';

describe('UserTabDetailsComponent', () => {
  let component: UserTabDetailsComponent;
  let fixture: ComponentFixture<UserTabDetailsComponent>;
  let profileService: jasmine.SpyObj<GithubProfileService>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTabDetailsComponent ],
      providers: [ CacheService ],
      imports: [ HttpClientModule ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTabDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should update selectedBtnIndex when toggleButton is called', () => {
    component.toggleButton(2);
    expect(component.selectedBtnIndex).toEqual(2);
  });

  it('should open link in new tab when openLinkInNewTab is called', () => {
    spyOn(window, 'open');
    component.openLinkInNewTab('http://xyz.com');
    expect(window.open).toHaveBeenCalledWith('http://xyz.com', '_blank');
  });

  

});
