import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { CacheService } from 'src/app/core/utils/cache.service';
import { RepoDetails, tabTypes, UserRepo } from '../../modal/user-repo';
import { GithubProfileService } from '../../services/github-profile.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-user-tab-details',
  templateUrl: './user-tab-details.component.html',
  styleUrls: ['./user-tab-details.component.scss'],
})
export class UserTabDetailsComponent {
  user$: Observable<UserRepo | null>;
  repos: Array<RepoDetails> | null = [];
  isLoading$ : Observable<Boolean>;
  buttons : tabTypes[] = [
   
    {
      text: 'Repositories',
      value: null,
    },
    {
      text: 'Stars',
      value: null,
    },
    {
      text: 'Followers',
      value: null,
    },
    {
      text: 'Following',
      value: null,
    },
  ];
  selectedBtnIndex = 0;
  totalRecords: number = 0;
  username: string = '';
  // private selectedBtnIndex$ = new BehaviorSubject<number>(0);
  constructor(
    private profileService: GithubProfileService,
    private cacheNetworkService: CacheService,
    private loadingService: LoadingService
  ) {
    this.isLoading$ = this.loadingService.isLoading;
    this.user$ = this.profileService.selectedUser$.pipe(
      switchMap((user) => {
        if (user) {
          return this.cacheNetworkService.get<UserRepo>(`/users/${user.login}`); // make API call using user id
        } else {
          return of(null); // return null if user is null
        }
      })
    );

    
    this.user$
      .pipe(
        switchMap((user) => {
          if (user) {
            this.totalRecords = user.public_repos;
            this.username = user.login;
            const { public_repos, followers, following } = user;

            this.buttons[0].value = public_repos;
           // this.buttons[1].value = user.starred_url ? 'loading' : 0; 
            this.buttons[2].value = followers;
            this.buttons[3].value = following;
            this.profileService.userCompleteDetails$.next(user);
            return this.cacheNetworkService.get<RepoDetails[]>(
              `/users/${user.login}/repos` + '?per_page=10&page=1' 
            );
          } else {
            return of(null);
          }
        })
      )
      .subscribe((repos) => {
        this.repos = repos;
        this.loadingService.hide();
      });
  }

  ngOnInit() {}

  // curl https://api.github.com/users/{username}/starred

  toggleButton(index: number) {
    this.selectedBtnIndex = index;
    //   this.selectedBtnIndex$.next(index);
  }

  paginate(event: any) {
    console.log(event);
    const page = event.first / event.rows + 1;
    const pageSize = event.rows;
    this.cacheNetworkService.get<RepoDetails[]>(
      `/users/${this.username}/repos` + `?per_page=${event.rows}&page=${page}`
    ).subscribe((repos)=>{
      this.repos = repos;
    })
  }

  openLinkInNewTab(url: string) {
   window.open(url, '_blank');
  }
}
