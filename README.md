# Features
 * Github user search:  includes a component for searching Github users based on a query string. It uses the Github API to fetch search results and displays them in a list.

 * User details: includes components for displaying basic user details such as name, bio, and avatar, as well as more detailed information such as repositories, followers, and following.

 * Repository details: includes a component for displaying repository details such as name, description, and number of stars.

* Caching:  includes a caching service that stores API responses in memory to reduce the number of API calls and improve performance.

* Loading indicators: includes a loading service that displays loading indicators while data is being fetched from the API.
    * showing a skeleton loader wherever applicable. Skeleton is created using primeng `SkeletonModule`

* Pagination:  includes pagination functionality for displaying large lists of repositories.
    * Pagination is done at server side. 
    * By default, show `10` repositories per page
    * Users can able to choose maximum of 100 repositories per page.


# Running Test for service folder 
      
 * Run the service file test using `npm run test -- --include src/app/core/utils/` command in cli
 * Run Specific component file test using `npm run test -- --include src/app/modules/github-profile/component/user-tab-details` command in cli
 * Run `ng test` to execute the unit tests  

## Build

 * Run `ng build --configuration=uat` to build the project for UAT enviroment same can be build with prodction envirnoment configuration

# FyleChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
