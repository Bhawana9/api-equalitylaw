import axios from "axios";
import {
  GET_PROFILE,
   PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE, DELETE_ACCOUNT, CLEAR_PROFILE
} from "./types.js";
import { setAlert } from "./alert.js";

//Cureent user profile
export const getCurrentProfile = () => async dispatch => {
  
  try {
    const res=await axios.get('/api/profile/me') 
    dispatch({
        type:GET_PROFILE,
        payload:res.data
    }) 
  } catch (err) {
   dispatch({
       type:PROFILE_ERROR,
       //payload:{msg:err.response.statusText,status:err.response.status}
   })
      
  }
};



//Get profile by id
export const getProfileById = (userId) => async dispatch => {
  try {
    const res=await axios.get(`/api/profile/user/${userId}`) 
    dispatch({
        type:GET_PROFILE,
        payload:res.data
    }) 
  } catch (error) {
   dispatch({
       type:PROFILE_ERROR,
       payload:{msg:error.response.statusText,status:error.response.status}
   })
      
  }
};
//Create and edit profile
export const createProfile = (formData, history,edit=false) => async dispatch => {
    const config={
        headers:{
          'Content-Type':'application/json'
        }
      }
         try {
        const res=await axios.post('/api/profile',formData,config) 
        dispatch({
            type:GET_PROFILE,
            payload:res.data
        }) 

        dispatch(setAlert(edit ? 'Profile Updated':'Profile Created','success'))
        if(!edit){
            history.push('/dashboard')
        }
      } catch (err) {
        dispatch({
          type:PROFILE_ERROR,
          //payload:{msg:err.response.statusText,status:err.response.status}
      })
        } 
      
          
      
    };

    //Create experience
export const addExperience = (expData, history,edit=false) => async dispatch => {
  const config={
    headers:{
      'Content-Type':'application/json'
    }
  }
     try {
    const res=await axios.put('/api/profile/experience',expData,config) 
    dispatch({
        type:UPDATE_PROFILE,
        payload:res.data
    }) 
   
    dispatch(setAlert(edit ? 'Experience Updated':'Experience Created','success'))
        if(!edit){
            history.push('/dashboard')
        }
    
  } catch (err) {
    const errors=err.response.data.errors;
    if(errors){
        errors.forEach(error=>dispatch(setAlert(error.msg,'danger')))
    }  
   dispatch({
       type:PROFILE_ERROR,
       payload:{msg:err.response.statusText,status:err.response.status}
   })
      
  }
};

//add complaint
export const addComplaints = (expData) => async dispatch => {
  const config={
    headers:{
      'Content-Type':'application/json'
    }
  }
  if (window.confirm("Are you sure? This can Not be Undone!"))
  {
     try {
    const res=await axios.put('/api/profile/complaints',expData,config) 
    dispatch({
        type:UPDATE_PROFILE,
        payload:res.data
    }) 
   
    dispatch(setAlert('Complaint Filed !!','success'))
        
    
  } catch (err) {
     
   dispatch({
       type:PROFILE_ERROR,
       payload:{msg:err.response.statusText,status:err.response.status}
   })
      
  }
};
}
//delete experience
export const deleteExperience = id => async dispatch => {
       try {
    const res=await axios.delete(`/api/profile/experience/${id}`) 
    dispatch({
        type:UPDATE_PROFILE,
        payload:res.data
    }) 

    dispatch(setAlert('Experience Deleted','success'))
    
  } catch (err) {
    dispatch({
       type:PROFILE_ERROR,
       payload:{msg:err.response.statusText,status:err.response.status}
   })
      
  }
};

//edit experience
export const editExperience = id => async dispatch => {
  try {
const res=await axios.patch(`/api/profile/experience/${id}`) 
dispatch({
   type:UPDATE_PROFILE,
   payload:res.data
}) 

dispatch(setAlert('Experience Edit Successfully','success'))

} catch (err) {
dispatch({
  type:PROFILE_ERROR,
  payload:{msg:err.response.statusText,status:err.response.status}
})
 
}
};


//Delete user account
export const deleteAccount = () => async dispatch => {
  if (window.confirm("Are you sure? This can Not be Undone!")) {
    try {
      await axios.delete('/api/profile') 
      dispatch({type:DELETE_ACCOUNT}) 
      dispatch({type:CLEAR_PROFILE}) 
      dispatch(setAlert('Your Account has been Deleted!!'))
      
    } catch (err) {
      dispatch({
         type:PROFILE_ERROR,
         payload:{msg:err.response.statusText,status:err.response.status}
     })
        
    }
  };}
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
