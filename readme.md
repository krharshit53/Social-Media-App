# Social media web App

### I have created a social media web app.In which many user can connect with each other
### A user can do the following things.
- Create a Post
- Like and Comment on Post
- Follow and Unfollow other Users

## Database Setup
### Models

- Comments.js                        &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;# Comment Schema
- Post.js                            &emsp; &emsp; &emsp; &emsp;  &emsp; &emsp;# Post Schema 
- User.js                            &emsp; &emsp; &emsp; &emsp;  &emsp; &emsp;# User Schema 

## Routes Setup
- Comment.js                         &emsp; &emsp; &emsp; &emsp; &emsp;&emsp; # Comment Routes 
- Post.js                            &emsp; &emsp; &emsp; &emsp; &emsp;&emsp; # Post Routes 
- User.js                            &emsp; &emsp; &emsp; &emsp; &emsp;&emsp; # User Routes 

## Views Setup
- +---partials                       &emsp; &emsp; &emsp; &emsp; &emsp;&emsp; # Footer and Header 
    - footer.ejs                       &emsp; &emsp; &emsp; &emsp;&emsp;&emsp; # footer 
    - header.ejs                       &emsp; &emsp; &emsp; &emsp;&emsp;&emsp; # header 
- +---post                           &emsp; &emsp; &emsp; &emsp;&emsp;&emsp; # Post Views 
    - explore.ejs                      &emsp; &emsp; &emsp; &emsp;&emsp;&emsp; # Explore views 
    - home.ejs                         &emsp; &emsp; &emsp; &emsp; &emsp;&emsp; # home views 
    - new.ejs                          &emsp; &emsp; &emsp; &emsp;&emsp;&emsp; # for new post 
    - show.ejs                         &emsp; &emsp; &emsp; &emsp;&emsp;&emsp; # Show All Post 
    - specific_post.ejs                &emsp; &emsp; &emsp; &emsp;&emsp;&emsp;#page for specific post 
- \---user                           &emsp; &emsp; &emsp; &emsp;&emsp;&emsp;# User Views login and Signup page 
    - login.ejs                        &emsp; &emsp; &emsp; &emsp; &emsp;&emsp;# login view 
    - myprofile.ejs                    &emsp; &emsp; &emsp; &emsp;&emsp;&emsp;# profile view of a user 
    - register.ejs                     &emsp; &emsp; &emsp; &emsp;&emsp;&emsp;# register view 

## Middlewares setup
    - index.js                         &emsp; &emsp; &emsp; &emsp; &emsp;&emsp;# All global middlewares 

## Server setup
    - app.js                          &emsp; &emsp; &emsp; &emsp; &emsp;&emsp;# entry point 


