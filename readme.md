# Social media web App

### I have created a social media web app.In which many user can connect with each other
### A user can do the following things.
- Create a Post
- Like and Comment on Post
- Follow and Unfollow other Users

## Database Setup
### Models
- Comments.js <!--Comment Schema -->
- Post.js    <!--Post Schema -->
- User.js    <!--User Schema -->

## Routes Setup
- Comment.js <!--Comment Routes-->
- Post.js    <!--Post Routes -->
- User.js    <!--User Routes-->

## Views Setup
- +---partials <!--Footer and Header -->
- - footer.ejs <!--footer-->
- - header.ejs <!--header-->
- +---post     <!--Post Views-->
- - explore.ejs <!--Explore views-->
- - home.ejs  <!-- home views -->
- - new.ejs   <!-- for new post-->
- - show.ejs <!-- Show All Post-->
- - specific_post.ejs <!-- page for specific post-->
- \---user     <!-- User Views login and Signup page -->
- - login.ejs <!--login view-->
- - myprofile.ejs <!-- profile view of a user-->
- - register.ejs <!-- register view-->

## Middlewares setup
- - index.js <!-- All global middlewares-->

## Server setup
- - app.js <!--entry point-->