# Blog-Project_React

This is a react project that  allows a user to retrieve blog posts from different API endpoints. 

  A user can access the users and post details for each blog. In addition it  also creates a new user on the blog.
  
  
The project focuses on the fundamental bases of React App's using  functional components. 
  Included in this project are: 
  * Bootstrap (to style the components)
  * Axios (to make  the API calls to the server),
  * react-router (to create route  for the components)
  * json-server to create the backend api.


  I chose to use Axios to make API calls because of  its flexibility and ease of use. In this project, I created a base API services (in     api~BaseApi.js )that stored the root url of the backend api, and then created api sub-classes  with methods that use the relevant Axios method   like (get(), post(), delete(), and put() to make the API calls. 
  
  
  `json-server` is what I used for my  backend API. I was able to create the RESTful API so that I can perform the CRUD operations.
  
  
   When working with  many components in a react project, `react-router` makes it easy to create  a route for each component 
