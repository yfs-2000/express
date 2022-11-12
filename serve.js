const mongoose  = require("mongoose")
const express = require("express")
const cors =require("cors")
const formidable = require('express-formidable')
const app = express()


app.use(formidable({ multiples: true }))
//跨域
app.use(cors())
//暴露静态资源文件夹
app.use(express.static('public'))
//解析 body 请求体  qs
app.use(express.urlencoded({extended:true}))
//解析body 请求体  json
app.use(express.json())

//解析 cookie  req.cookie
const cookieParser = require('cookie-parser')
app.use(cookieParser())


// 声明使用路由器中间件
const indexRouter = require('./routers')

const index = require('./routers/index')
//第一个为 所有route 的前缀
app.use('/', indexRouter)
app.use('/', index)



//连接数据库
mongoose.connect('mongodb://localhost:27017/user', { useNewUrlParser: true , useUnifiedTopology: true } ).then(()=>{
//监听端口号
    app.listen('5005', () => {
        console.log("链接成功")
    })
})
