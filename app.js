const express=require('express')
const app=express()
const PORT=process.env.PORT||3000
const mongoose=require('mongoose')
const middlewares=require('./middlewares/index')
const User=require('./models/user.js')
const Post=require('./models/post')
const Comment=require('./models/comment')
const userRoute=require('./routes/user')
const postRoute=require('./routes/post')
const commentRoute=require('./routes/comment')

mongoose.connect(process.env.MONGODB_URI ||'mongodb://127.0.0.1:27017/social-media-app', {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true});

app.set('view engine','ejs')

app.use(middlewares)

app.use('/',userRoute)
app.use('/post',postRoute)
app.use('/comment',commentRoute)


app.get('/',(req,res)=>
{
    res.redirect('/login')
})

app.use('*',(req,res)=>
{
       res.render('error',{error:'page not found'})
})




app.listen(PORT,()=>
{
    console.log(`http://localhost:${PORT}`)
})