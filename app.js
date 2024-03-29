  const path = require('path');
const express = require('express')
const app = express();
const publicDirectoryPath = path.join(__dirname,'../public/views');
const PORT = process.env.PORT || 3030;
app.set('view engine','hbs')

app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
  res.render('index',{
    title:'weather',
    name:'weather Asistant'
  })
})

app.get('/about',(req,res)=>{
  res.render('about',{
    title:'About me',
    name:'weather Predector'
  })
})

app.get('/help',(req,res)=>{
  res.render('help',{
   helptext:'This is some helpful text'
  })
})

app.listen(PORT,()=>{
  console.log('Server is up ${PORT}.');
})
