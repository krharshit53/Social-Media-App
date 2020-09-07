const router=require('express').Router()
const Post=require('../models/post')
const Comment=require('../models/comment')
const { route } = require('../middlewares')


router.get('/:post_id/new',(req,res)=>
{
       res.render('comment/new',{id:req.params.post_id})
})

router.post('/:post_id/new',(req,res)=>
{
    Comment.create({body:req.body.body,author:req.user.username},(err,comment)=>
    {
           if(err)
           return res.ssend(err)

           Post.findOneAndUpdate({_id:req.params.post_id},{
            $push:{"comments": {
                  
                   commentId:comment._id
              }}
        },(err,post)=>
        {
             if(err)
             return res.send(err)

             res.redirect('/post')
        })
    })
})
module.exports





module.exports=router