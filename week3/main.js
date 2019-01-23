const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false}))
app.use(cookieParser())
app.use('/static',express.static('public'))
app.set('view engine','pug')

// Assignment 1: Your First Web Server
app.get('/',(req,res)=>{
  res.send('homepage')
})

//Assignment 2: Build Simple RESTful API
app.get('/getData',(req,res)=>{
  const val = req.query.number
  const reg = /^\+?[1-9][0-9]*$/
  if(val ==='xyz'){
    res.send('Wrong Parameter')
  }
  else if(reg.test(val)){
    let total =0
    for(let i=1;i<=val;i++){
      total+=i
    }
    res.send(`${total}`)
  }
  else {
    res.send('Lack of Parameter')
  }
})

//Assignment 3: Connect to RESTful API by AJAX
//1+2+3...+10問題
app.get('/sum.html',(req,res)=>{
  res.render('sum')
})
//輸入數字與取得總和
app.get('/sumup',(req,res)=>{
  res.render('sumup')
})

//Assignment 4: HTTP Cookie
app.get('/myName',(req,res)=>{
  const name = req.cookies.username
  if(name){
    res.render('getName',{name})
  }
  else {
    res.redirect('/trackName')
  }
})

app.get('/trackName',(req,res)=>{
  res.render('inputName')
})

app.post('/trackName',(req,res)=>{
  const name = req.body.username
  if(name){
    res.cookie('username',req.body.username)
    res.redirect('/myName')
  }
  else {
    res.redirect('/trackName')
  }
})

app.listen(3000,()=>{
  console.log('port:3000')
})
