const express = require('express')
const userMoles = require('../modle/userModles')

const multer  = require('multer')
const upload = multer()
const router = express.Router()
/*router.get("/",(req,res)=>{
    res.send(index)
})*/
router.get("/login",async (req,res)=>{
   const  {username,userpasswrod}   =  req.query
    const   result =   await userMoles.findOne({username,userpasswrod})
    if (result){
        res.send({code:1})
    }else {
        res.send({code:0})
    }

})

router.post("/register",upload.array("file"),async (req,res)=>{
    console.log(req.body);
    console.log(req.files.length);
    const  {username,userpasswrod}   =  req.body
    console.log(username, userpasswrod);
    const   result = await userMoles.findOne({username})
    console.log(result);
    if (!result){

        const  result =  await  userMoles.create({username,userpasswrod})

        if (result){
            res.send({code:1})
        }


    }else {
        res.send({code:0})
    }
})
module.exports = router
