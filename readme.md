# Social media web App

### I have created a social media web app.In which many user can connect with each other
### A user can do the following things.
- Create a Post
- Like and Comment on Post
- Follow and Unfollow other Users

## Database Setup
### Models
- Comments.js    &emsp; ** Comment Schema**
- Post.js        &emsp; ** Post Schema **
- User.js         &emsp;** User Schema **

## Routes Setup
- Comment.js     &emsp; ** Comment Routes **
- Post.js        &emsp; ** Post Routes **
- User.js         &emsp;** User Routes **

## Views Setup
- +---partials  &emsp;** Footer and Header **
- - footer.ejs  &emsp;** footer **
- - header.ejs  &emsp;** header **
- +---post      &emsp;** Post Views **
- - explore.ejs &emsp;** Explore views **
- - home.ejs    &emsp;** home views **
- - new.ejs     &emsp;** for new post **
- - show.ejs    &emsp;** Show All Post **
- - specific_post.ejs &emsp;** page for specific post **
- \---user     &emsp;** User Views login and Signup page **
- - login.ejs  &emsp;** login view **
- - myprofile.ejs &emsp;** profile view of a user **
- - register.ejs  &emsp;** register view **

## Middlewares setup
- - index.js &emsp;** All global middlewares **

## Server setup
- - app.js  &emsp;** entry point **