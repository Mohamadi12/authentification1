const express=require('express')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const conectSchema=require('../model/signeUp')




exports.addRegistre=async(req,res)=>{
    try {
        // Envoie des data
        const{name,email,password}=req.body
        const found=await conectSchema.findOne({email})
        if(found){return res.json({msg:'Vous êtes dejà inscrit'})}
        const newAdd=new conectSchema(req.body)
        // Utilisation de bcrypt
        const saltRounds=10
        const salt=bcrypt.genSaltSync(saltRounds)
        const hash=bcrypt.hashSync(password,salt)
        newAdd.password=hash
        await newAdd.save()
        res.status(200).json({msg:'Vous êtes inscrit',newAdd})
    } catch (err) {
        console.log(err)
    }
}






exports.addLogin=async(req,res)=>{
    try {
        const{email,password}=req.body
        const found=await conectSchema.findOne({email})
        if(!found){return res.json({msg:'Inscrivez-vous'})}

    //  Comparaison de password
    const match=bcrypt.compare(password, found.password)
    if(!match){res.json({msg:'Password errone'})}

    // Partie token
    const payload={id: found._id}
    var token=jwt.sign(payload, process.env.privateKey)
    res.json({msg:'Your are welcom', found,token})
    } catch (err) {
        console.log(err)
    }
}