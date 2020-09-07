const router=require('express').Router()
const Post=require('../models/post')
const Comment=require('../models/comment')
const { route } = require('../middlewares')




router.get('/:post_id/new',ensureAuthenticated,(req,res)=>
{
       res.render('comment/new',{id:req.params.post_id})
})

router.post('/:post_id/new',ensureAuthenticated,(req,res)=>
{
    Comment.create({body:req.body.body,author:req.user.username},(err,comment)=>
    {
           if(err)
           return res.send(err)

           Post.findByIdAndUpdate(req.params.post_id,{
            $push:{"comments": {
                  
                   commentId:comment._id
              }}
        },(err,post)=>
        {
             if(err)
             return res.send(err)

             res.redirect(`/post/${req.params.post_id}/readmore`)
        })
    })
})

router.get('/:post_id/:id/like',ensureAuthenticated,(req,res)=>
{
       Comment.findByIdAndUpdate(req.params.id,{
              $push:{"likes":{
                  username:req.user.username
              }}
       },(err,comment)=>
       {
             if(err)
             return res.send(err)
       
             res.redirect(`/post/${req.params.post_id}/readmore`)
       }
       )
})

router.get('/:post_id/:id/unlike',ensureAuthenticated,(req,res)=>
{
       Comment.findByIdAndUpdate(req.params.id,{
              $pull:{"likes":{
                  username:req.user.username
              }}
       },(err,comment)=>
       {
             if(err)
             return res.send(err)

             res.redirect(`/post/${req.params.post_id}/readmore`)

       }
       )
})

function ensureAuthenticated(req, res, next){
       if (req.isAuthenticated()){
           return next();
       }
       res.redirect('/');
     }
   



module.exports=router