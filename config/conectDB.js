const mongoose=require('mongoose')

const conectDB=async()=>{
    try {
        await mongoose.connect('mongodb+srv://moha1:dAVgB4WOd1FODlSr@cluster0.n06tzyl.mongodb.net/?retryWrites=true&w=majority')
        console.log('Successfull')
    } catch (err) {
        console.log(err)
    }
}

module.exports=conectDB