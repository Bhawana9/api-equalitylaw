
const express =require('express')
const auth=require('../../middleware/auth')
const Profile=require('../../models/Profile')
const User=require('../../models/Users')
const router = express.Router();
const {check ,validationResult}=require('express-validator/check')

//Create  profile as per user
 //@route api/profile
 //@desc create or update profile
router.post('/', auth,async (req,res)=>{
   
  const errors=validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  const{
    company,
    status,
    department,
    twitter,
    facebook,
    linkedin,
    location
  }=req.body
  

  //Build profile object
  const profileFields={};
  profileFields.user=req.user.id;
  if(company) profileFields.company=company;
  if(status) profileFields.status=status;
  if(department) profileFields.department=department;

  profileFields.social={}
  if(twitter) profileFields.social.twitter=twitter;
  if(facebook) profileFields.social.facebook=facebook;
  if(linkedin) profileFields.social.linkedin=linkedin;
  if(location) profileFields.social.location=location;

  try {
    let profile=await Profile.findOne({user:req.user.id})
    if(profile){
      //Update
profile=await Profile.findOneAndUpdate({user:req.user.id},{$set:profileFields},{new:true})
      return res.json(profile)
    }

    //Create profile
    profile = new Profile(profileFields)
    await profile.save()
    res.json(profile)
  } catch (error) {
    res.status(500).send('Server Error')
    
  }
  });
  

    
  //@route api/profile/me
 //@desc get current user profile
   router.get('/me',auth,async (req,res)=>{
       try{

        const profile= await Profile.findOne({user:req.user.id}).populate('user',['name','email'])
        if(!profile){
        return res.status(400).json({msg:'There is no profile fo this user'})
        }
    
        res.json(profile)
    }
    catch(e)
    {
      res.status(500).send(e)
    }
    })
  
  //Create  profile as per user
 //@route GET api/profile
 //@desc get all profiles
 router.get('/',async (req,res)=>{
  try{

   const profiles= await Profile.find().populate('user',['name'])
   res.json(profiles)
}
catch(e)
{
 res.status(500).send(e)
}
})

 //Create  profile as per user
 //@route GET api/profile/user/:user_id
 //@desc get by profile by id
 router.get('/user/:user_id',async (req,res)=>{
  try{

   const profiles= await Profile.findOne({user:req.params.user_id}).populate('user',['name'])
   if(!profile){
    return res.status(400).json({msg:'There is no profile fo this user'})
    }
   res.json(profiles)
}
catch(e)
{
  if(e.kind=='ObjectId')
  {
     return res.status(400).json({msg:'Profile not found'})
  }
 res.status(500).send(e)
}
})



  //Delete profile and user
    router.delete('/',auth,async(req,res)=>{
    try{
     await Profile.findOneAndDelete({user:req.user.id})
     await User.findOneAndDelete({_id:req.user.id})

     res.json({msg:'User Deleted'})
  }
    catch(e)
    {
      res.status(500).send('user not deleted')
    }
  })
  
 // add profile experience 
 router.put('/experience',[auth,[check('title','Title is required').not().isEmpty(),
 check('company','Company is required').not().isEmpty()]], async(req,res)=>{
   
    const errors=validationResult(req);
    if(!errors)
    {
      return res.status(400).json({errors:errors.array()});
    }
    const{
      title,
      company,
      location,
      from,
      to
     
    }=req.body

    const newExp={
      title:title,
      company:company,
      location:location,
      from:from,
      to:to
      
    }
    try{
const profile=await Profile.findOne({user:req.user.id})

profile.experience.unshift(newExp)

await profile.save()
res.json(profile)
    }
   catch(e){
res.status(404).send(e)
   }
 })

 //delete profile experience
 router.delete('/experience/:exp_id',auth,async(req,res)=>{
   try{
    const profile=await Profile.findOne({user:req.user.id})

    const removeIndex=profile.experience.map(item=>item.id).indexOf(req.params.exp_id)
    profile.experience.splice(removeIndex,1);
    await profile.save()
    res.json(profile)
   }catch(e){
     console.log({e:e.message})
    res.status(404).send(e)
   }
 })

 router.patch('/experience/:exp_id',auth,async(req,res)=>{

   const updates=Object.keys(req.body)
   const allowedUpdates=['company','title','from','to','location']
   const isValidOperation=updates.every((update)=>{
     allowedUpdates.includes(update)

     if(!isValidOperation)
     {
      res.status(404).send({error:'Invalid updates'})
     }
   })
   try{
     const experience=await Profile.findByIdAndUpdate(req.params.id,req.body,{new:true})
     if(!experience)
     {
       res.status(404).send()
     }

     res.send(experience)
  }catch(e){
    console.log({e:e.message})
   res.status(404).send(e)
  }
})

 //add profile complaint

router.put('/complaints',[auth,[check('Department','department is required').not().isEmpty(),
check('Description','description is required')]],async(req,res)=>{
  
   const errors=validationResult(req);
   if(!errors)
   {
     return res.status(400).json({errors:errors.array()});
   }
   const{
    Status,
        Department,
        Description,
        Committername,
        CommitterPosition,
        from,
        to,
        note,
    
   }=req.body

   const newComp={
        
    Status,
    Department,
    Description,
    Committername,
    CommitterPosition,
    from,
    to,
    note,
        
     
   }
   try{
const profile=await Profile.findOne({user:req.user.id})

profile.complaint.unshift(newComp)

await profile.save()
res.json(profile)
   }
  catch(e){
res.status(404).send(e)
  }
})



  module.exports=router