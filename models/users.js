const mongoose=require('mongoose')
const validator=require('validator')


const UserSchema=new mongoose.Schema({
    name:{
       type:String,
       required:true,
       trim:true
    },
   
email:{
    type:String,
    unique:true,
    required:true,
    trim:true,
    lowercase:true,
    unique:true,
    validate(value){
        if(!validator.isEmail(value))
        {
            throw new Error('Email is invalid')
        }
    }
    
},
password:{
    type:String,
    required:true,
    minlength:7,
    trim:true,
    validate(value){
        if(value.toLowerCase().includes('password'))
        {
            throw new Error ('Password cannot contains "password"')
        }
    }
    },

avatar:{
    type:String
}

},{
    timestamps:true
})

// //Virtual relatiosnhip betwwen user and complaints
// userSchema.virtual('complaints',{
//     ref:'Complaints',
//     localField:'_id',
//     foreignField:'owner'
// })


// //Hiding Private data (password and awt token)
// userSchema.methods.toJSON=function(){
//     const user=this
//     const userObject=user.toObject()
    
//     delete userObject.password
//     delete userObject.tokens

//     return userObject
// }

// //Jwt Auth Token
// userSchema.methods.generateAuthToken=async function(){
//     const user=this
//     const token=jwt.sign({_id:user._id.toString()},config.get('jwtSecret'),{expiresIn:360000})

//     user.tokens=user.tokens.concat({token})
//     await user.save()
//     return token
// }



// //delete user complaints when user is removed
// userSchema.pre('remove',async function(next){
// const user=this
// await Complaints.deleteMany({ owner:user._id})
// next()
// })

const User=mongoose.model('User',UserSchema)
module.exports=User