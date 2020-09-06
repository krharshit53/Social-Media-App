const mongoose=require('mongoose')
const validator=require('validator')

const postSchema=new mongoose.Schema({

       body:{
           type:String,
           required:true,
           trim:true,
           validate:{
               validator:(value)=>
               {
                   return value.length<=500
               },
               message:'post should have less than 500 character'
           }
       },
       createdAt:{
           type:Date
       },
       author:{
           name:{
            type:String,
            trim:true
           },
           username:{
           type:String,
           trim:true
           }
           ,
           image:{
               type:String,
               trim:true
           }
       },
       comments:[
           {
               commentId:{
                   type:[mongoose.Schema.Types.ObjectId],
                   ref:'comment'
               }
           }
       ],
       likes:[
        {
            username:{
                type:String
            }
        }
     ]

})


const Post=mongoose.model('post',postSchema)

module.exports=Post