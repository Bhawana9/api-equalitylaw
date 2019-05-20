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
    unique:true
    
},
password:{
    type:String,
    required:true,
    minlength:7,
    trim:true,
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

// //Sign-in (Using hashing password compare)
// userSchema.statics.findByCredentials=async (email,password)=>{
//      const user=await User.findOne({email})

//      if(!user)
//      {
//          throw new Error('User profile not register!To LOGIN Please Register first')
//      }

//      const isMatch=await bcrypt.compare(password,user.password)

//      if(!isMatch)
//      {
//          throw new Error('Error in either email or password!')
//      }

//      return user
// }


// //delete user complaints when user is removed
// userSchema.pre('remove',async function(next){
// const user=this
// await Complaints.deleteMany({ owner:user._id})
// next()
// })

const User=mongoose.model('User',UserSchema)
module.exports=User