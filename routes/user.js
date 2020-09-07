const router=require('express').Router()
const User=require('../models/user')
const Post=require('../models/post')
const passport=require('passport');
const { route } = require('../middlewares');
const LocalStrategy=require('passport-local').Strategy


passport.serializeUser(function(user, done){
    done(null, user._id);
  });
  
  passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
      done(err, user);
    });
  });


  passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (user.password!=password) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));

router.get('/register',(req,res)=>
{
      res.render('user/register')
})
router.post('/register',(req,res)=>
{
     
       

          let body=req.body
          User.create(body,(err,user)=>
          {
               if(err)
               return res.send(err)

          
            res.render('user/login')
        })
          
    })
  
  router.get('/login',(req,res)=>
  {
         res.render('user/login')
  })

  
  router.post('/login', 
     passport.authenticate('local', { failureRedirect: '/login' }),
     function(req, res) {
        
      
           
           res.redirect('/post/home')
         
     });
    
     router.get('/logout', function(req, res){
      req.logout();
      
      res.redirect('/login');
  });



  router.get('/follow/:author_name/:no',(req,res)=>
  {
     /*follower update*/
      
        User.findOneAndUpdate({username:req.params.author_name},{
          $push:{"followers": {
                          
            name:req.user.username
       }}
      },(err,follower)=>
      {
          if(err)
          return res.send(err)

         
        
        })


      /*following update*/


   User.findOneAndUpdate({username:req.user.username},{
        $push:{"following": {
                        
          name:req.params.author_name
     }}
    },(err,following)=>
    {
        if(err)
        return res.send(err)


      
      })
      if(req.params.no==='1')
      return res.redirect('/post/home')
      else if(req.params.no==='2')
      return res.redirect('/post/explore')
     
                
                
 })

 router.get('/unfollow/:author_name/:no',(req,res)=>
 {
    /*follower update*/
     
       User.findOneAndUpdate({username:req.params.author_name},{
         $pull:{"followers": {
                         
           name:req.user.username
      }}
     },(err,follower)=>
     {
         if(err)
         return res.send(err)

        
       
       })


     /*following update*/


     User.findOneAndUpdate({username:req.user.username},{
       $pull:{"following": {
                       
         name:req.params.author_name
    }}
   },(err,following)=>
   {
       if(err)
       return res.send(err)


     
     })

     if(req.params.no==='1')
     return res.redirect('/post/home')
     else if(req.params.no==='2')
     return res.redirect('/post/explore')
     
               
               
               
})






 router.get('/myfollower',(req,res)=>
 {
      
      User.findOne({username:req.user.username},(err,user)=>
      {
        if(err)
        return res.send(err)
        let ids=[]
        for(let i=0;i<user.followers.length;i++)
        ids.push(user.followers[i].name)

            
        User.find().where('username').in(ids).exec((err,users)=>
        {
             if(err)
             return res.send(err)
              res.render('user/follower',{users})
        })

      })
 })


 router.get('/myfollwing',(req,res)=>
 {
      
      User.findOne({username:req.user.username},(err,user)=>
      {
        if(err)
        return res.send(err)
        let ids=[]
        for(let i=0;i<user.following.length;i++)
        ids.push(user.following[i].name)

            
        User.find().where('username').in(ids).exec((err,users)=>
        {
             if(err)
             return res.send(err)
              res.render('user/follower',{users})
        })

      })
 })

 router.get('/myprofile',(req,res)=>
 {
   

       User.findOne({username:req.user.username},(err,user)=>
       {
             if(err)
             return res.send(err)
             let ids=[]
             for(let i=0;i<user.posts.length;i++)
             ids.push(user.posts[i].postId)

             Post.find().where('_id').in(ids).exec((err,posts)=>
            {
                 if(err)
                 return res.send(err)
                 res.render('user/myprofile',{user,posts})
            })
       })

       
   })
   


   router.get('/myprofile/:username',(req,res)=>
 {
   

       User.findOne({username:req.params.username},(err,user)=>
       {
             if(err)
             return res.send(err)
             let ids=[]
             for(let i=0;i<user.posts.length;i++)
             ids.push(user.posts[i].postId)

             Post.find().where('_id').in(ids).exec((err,posts)=>
            {
                 if(err)
                 return res.send(err)
                 res.render('user/myprofile',{user,posts})
            })
       })

       
   })
 


  module.exports=router
  