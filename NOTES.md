##### All the code was checked into public repository on github, with each commit consisting one task/feature at a time (except a 1-2 commits)
##### Evaluator can evalute on the basis of commits.

##### Github Repository: https://github.com/imbharat/h24.git



##### Tasks Completed

1) 	Refactored code: Project folder structure changed, created smaller components with lesser responsibilities. Created helper functions, separate
	file for graphql queries etc.

2)	UI improved	

3)	Added a few basic unit and snapshot tests

4)	Implemented cart functionality with redux as store.
	
	Note: Cart functionality is at app level, i.e. as there were no end points (graphql mutations) available the items in the cart are cleared as soon as site is refreshed. Local storage could have been considered, but that was not the aim of implementing this feature. Rather, it was done to demonstrate redux and state management.
	
5)	Created an ErrorBoundary so that whole app doesn't crash if there is error in some child component.
	Note: This ErrorBoundary (named SearchErrorBoundary) was created for search suggestions not for the main page where products are displayed.

##### Other features implemented (but these require server cache either to be disabled or to be not dependent on just root route i.e. '/graphql')
##### Kindly disable cache in server.ts to check these features.

1) 	Load more: to load next batch of items on the page
	For this graphql query was modified, by passing offset (but as the query is cached it returns same items until disabled)

2) 	Search suggestions: allow user to search items
	For this another graphql query was added (taken from home24 website, from network tab on chrome dev tools)
	The search is debounced, and sends the server request only after 500ms after user has stopped typing, so as not to flood server with requests on every keypress in search bar
	
