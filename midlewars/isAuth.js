var jwt=require('jsonwebtoken')
const conectSchema=require('../model/signeUp')

exports.isAuth=async (req,res,next)=>{
    try {
        const token=req.header('Authorisation')
        var decoded=jwt.verify(token,process.env.privateKey)

        if(!decoded){return res.json({errors})}
        const user=await conectSchema.findById(decoded.id)
        res.user=user
        next()
    } catch (err) {
        console.log(err)
    }
}