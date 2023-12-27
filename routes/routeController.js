const express=require('express')
const routeController=express.Router()
const{addRegistre, addLogin}=require('../controllerRoute/controllerRoute')
const{isAuth}=require('../midlewars/isAuth')
const{reValidation,reLogin,validation}=require('../midlewars/reValidation')

routeController.post('/registre',reValidation,validation,addRegistre)
routeController.post('/login',reLogin,validation,addLogin)

routeController.get('/moncompte',isAuth,(res,req)=>{
    res.send(req.user)
})







module.exports=routeController