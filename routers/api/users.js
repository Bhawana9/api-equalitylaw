const express =require('express')
const auth=require('../../middleware/auth')
const User=require('../../models/users')
const bcrypt =require('bcryptjs')
const jwt=require('jsonwebtoken')
const config=require('config')
const router = express.Router(); // eslint-disable-line
const multer=require('multer')
const {sendWelcomeMail}=require('../../emails/account')
const {cancelEmail}=require('../../emails/account')
const {check,validationResult}=require('express-validator/check')

//Route to create user (register user)
router.post('/',[check('name','Name is required').not().isEmpty(),
check('email','Please include valid email').isEmail(),
check('password','Please enter a password with 7 or more characters').isLength({min:7})], 

async (req,res)=>{
  const errors=validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
    const {name,email,password}=req.body
    try{
      let user =await User.findOne({email})
      
      if(user)
      {
        res.status(400).json({errors:[{msg:'User already exists'}]})
      }

      user=new User({
        name,
        email,
        password
      });
      const salt=await bcrypt.genSalt(10);
      user.password=await bcrypt.hash(password,salt)
      await user.save();

      const payload={
        user:{
          id:user.id
        }
      }
      //sendWelcomeMail(user.email,user.name)
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {expiresIn:360000},
        (err,token)=>{
        if(err) throw err;
        res.json({token})
      })
    }
    catch(e)
    {
      res.status(400).send({error:e.message})
    }
   });
  
  
  
   

module.exports=router