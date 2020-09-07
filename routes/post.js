const router=require('express').Router()
const Post=require('../models/post')
const User=require('../models/user')
const Comment=require('../models/comment')
const { route, options } = require('../middlewares')


router.get('/explore',(req,res)=>
{
    Post.find({}).sort({createdAt:-1}).exec((err,posts)=>
    {
        if(err)
        return res.send(err)

        res.render('post/explore',{posts})
    })
})

router.get('/home',(req,res)=>
{
    User.findOne({username:req.user.username},(err,user)=>
    {
          if(err)
          return res.send(err)
          let ids=[]
          for(let i=0;i<user.following.length;i++)
          ids.push(user.following[i].name)

          ids.push(req.user.username)
          User.find().where('username').in(ids).exec((err,users)=>
         {
              if(err)
              return res.send(err)
              
              let postids=[]
              for(let i=0;i<users.length;i++)
              {
                   let user=users[i];
                   for(let i=0;i<user.posts.length;i++)
                   postids.push(user.posts[i].postId)
              }
              Post.find().where('_id').in(postids).exec((err,posts)=>
              {
                   if(err)
                   return res.send(err)
                    res.render('post/home',{posts})
              })

         })
    })
})


router.get('/:id/readmore',(req,res)=>
{
       Post.findOne({_id:req.params.id},(err,post)=>
       {
             if(err)
             return res.render(err)

             let ids=[]
             for(let i=0;i<post.comments.length;i++)
             {
                  ids.push(post.comments[i].commentId)
             }

             Comment.find().where('_id').in(ids).exec((err,comments)=>
            {
                 if(err)
                 return res.send(err)
                  
                 res.render('post/specific_post',{post,comments})
            })
             
       })
})
/*
router.get('/mypost',(req,res)=>
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
                  res.render('post/show',{posts})
            })
       })
})*/

router.get('/new',(req,res)=>
{
      res.render('post/new')
})

router.post('/new',(req,res)=>
{
        Post.create({body:req.body.body,createdAt:Date.now(),author:{name:req.user.name,username:req.user.username,image:req.user.image}},(err,post)=>
        {
                if(err)
                return res.send(err)

                User.findOneAndUpdate({username:req.user.username},{
                    $push:{"posts": {
                          
                           postId:post._id
                      }}
                },(err,user)=>
                {
                     if(err)
                     return res.send(err)

                     res.redirect('/post/explore')
                })
                
                
        })
})


router.get('/:id/like/:no',(req,res)=>
{
        Post.findByIdAndUpdate(req.params.id,{
             $push:{"likes":{

               username:req.user.username
             }}
             },(err,post)=>
             {
                  if(err)
                  return res.send(err)

                  if(req.params.no==='1')
                  return res.redirect('/post/explore')
                  else if(req.params.no==='2')
                  return res.redirect('/post/home')
             }
        )
})

router.get('/:id/unlike/:no',(req,res)=>
{
        Post.findByIdAndUpdate(req.params.id,{
             $pull:{"likes":{

               username:req.user.username
             }}
             },(err,post)=>
             {
                  if(err)
                  return res.send(err)

                  if(req.params.no==='1')
                  return res.redirect('/post/explore')
                  else if(req.params.no==='2')
                  return res.redirect('/post/home')
             }
        )
})





module.exports=router