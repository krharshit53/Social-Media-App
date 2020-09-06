const mongoose=require('mongoose')
const validator=require('validator')
const userSchema= new mongoose.Schema({

      name:{
             type:String,
             required:true,
             trim:true
      },
      image:{
            type:String,
            required:true,
            trim:true
      },
      address:{
          type:String,
          required:true,
          trim:true
      },
      email:{
          type:String,
          required:true,
          trim:true,
          validate:{
              validator:(value)=>
              {
                  return validator.isEmail(value)
              },
              message:'Email is not valid'
          }
      },
      username:{
                 type:String,
                 required:true,
                 trim:true
             },
        password:{
            type:String,
            required:true,
            trim:true
        },
        posts:[
            {
            postId:{
                type:[mongoose.Schema.Types.ObjectId],
                ref:'post'
            }
           }
        ],
        followers:[
            {
                 name:{
                     type:String
                 }
        }],
        following:[
            {
                
                name:{
                    type:String
                }
            }
        ]
        
})


const User=mongoose.model('user',userSchema)

module.exports=User