# Movie App 

## Must have features

- [x] Default UI - When the user lands on the page, he/she should be shown a list of popular movies sorted in descending order. Show at least 30 movies when the user lands on the page. Only show top 30 movies according to matching search, filters and sort criteria.
- [x] Tab layout - There are two tabs, movies and tv series. UI for both of them is exactly the same as you can see in the image. When I change tabs, search box, filters should reset to default.
- [x] Search - A user should be able to search for any term and that movie should be listed in the box below. The search results have to be fetches as and when user types (read debouncing).
- [x] Filters - User should be able to filter the listed movies by genres, languages etc (Add any filter which u think is suitable here)
- [ ] Sort - User should be able to sort the list by popularity, ratings etc. (Add any sorting criteria if you have time)
- [ ] Pagination - When the user scrolls near the end of the list, we should fetch the next batch of 30 movies. Like how facebook News Feed works.

## Bonus Points

- [ ] Unit tests for Search or Filter feature.
- [ ] Awesome and performant UI.
- [ ] Dark mode toggle.

## Points to remember

- [x] Add your code to GitHub and add a proper readme to bootstrap and run your project.
- [ ] Try to cover all the use cases to provide good UX.
- [x] DO NOT USE 3rd party libraries for building components. You can use bootstrap for CSS (but not the bootstrap components).
- [x] Since this is a time sensitive assignment, we will have a hard stop after 3 days. So prioritise accordingly.

## Available Scripts

In the project directory, you can run:
```sh
$ yarn start
```
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## `Notes`

* I wasn't able upload the node modules folder as it was too big for github. We can get it easily using the
```sh
$ yarn create react-app movie-app --template redux-typescript
``` 
command.

* The search bar is not working properly because I have used ComponentDidUpdate and not ComponentDidMount which is creating problems. I will find a solution for that soon.

* The UX is not that good and I will update the components to improve that by today or tommorow.



