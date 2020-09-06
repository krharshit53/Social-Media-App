const mongoose=require('mongoose')
const validator=require('validator')

const commentSchema=new mongoose.Schema({

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
    }
    ,
       author:{
           type:String,
           required:true,
           trim:true
       },
       likes:[
        {
            username:{
                type:String
            }
        }
     ]
})
const Comment=mongoose.model('comment',commentSchema)
module.exports=Comment