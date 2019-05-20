const jwt=require('jsonwebtoken')
const config=require('config')

const auth= async (req,res,next)=>{
   
       const token=req.header('x-auth-token')
       if(!token)
       {
        res.status(401).json({msg:'No token'})   
       }
       try{
       const decoded=jwt.verify(token,config.get('jwtSecret'))
       req.user=decoded.user;
       next()
      
   }catch(e){
       res.status(401).send({error:'Please authenticate'})
   }
}

module.exports=auth