const express =require('express')
const auth=require('../../middleware/auth')
const router = express.Router();
const bcrypt =require('bcryptjs')
const User=require('../../models/users')
const {check,validationResult}=require('express-validator/check')
const jwt=require('jsonwebtoken')
const config=require('config')
const {sendWelcomeMail}=require('../../emails/account')


//@get api/auth (get user)
router.get('/', auth,async (req,res)=>{
    try {
        const user=await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        res.status(500).send('Server Error')  
    }
   
  
  });

//@route POST api/auth
//@desc Authenticate user & get token (Login)
router.post('/',[
check('email','Please include valid email').isEmail(),
check('password','Please enter a password with 7 or more characters').exists()], 

async (req,res)=>{
  const errors=validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
    const {email,password}=req.body
    try{
      let user =await User.findOne({email})
      sendWelcomeMail(user.email,user.name)
      if(!user)
      {
        res.status(400).json({errors:[{msg:'Invalid Credentials'}]})
         
      }

      const isMatch=await bcrypt.compare(password,user.password)

     if(!isMatch)
     {   
       return res.status(400).json({errors:[{msg:'Invalid Credentials'}]})
         
     }
    
      const payload={
        user:{
          id:user.id
        }
      }

      jwt.sign(payload,config.get('jwtSecret'),{expiresIn:360000},(err,token)=>{
        if(err) throw err;
        res.json({token})
      })
    }
    catch(e)
    {
      res.status(500).send('Server Error')
    }
   });

module.exports=router;
