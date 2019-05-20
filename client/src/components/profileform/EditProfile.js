import React ,{useState, useEffect,Fragment}from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createProfile,getCurrentProfile} from '../../actions/profile'
import {Link,withRouter} from 'react-router-dom'

const EditProfile = ({profile:{ profile, loading},createProfile,getCurrentProfile,history}) => {
    const [profileData,setFormData]=useState({
        company:'',
        status:'',
        department:'',
        twitter:'',
        facebook:'',
        linkedin:'',
        location:''
    });

    const [displaySocialInputs,toggleSocialInputs]=useState(false)
    useEffect(() => {
        getCurrentProfile();
        setFormData({
            company:loading||!profile.company?'':profile.company,
            status:loading||!profile.status?'':profile.status,
            department:loading||!profile.department?'':profile.department,
            twitter:loading||!profile.twitter?'':profile.twitter,
            facebook:loading||!profile.facebook?'':profile.facebook,
            linkedin:loading||!profile.linkedin?'':profile.linkedin,
            location:loading||!profile.location?'':profile.location
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[loading])
     
    const {
        company,
        status,
        department,
        twitter,
        facebook,
        linkedin,
        location
    }=profileData;
    const onChange=e=>setFormData({...profileData,[e.target.name]:e.target.value})
    const onSubmit=e=>{
      e.preventDefault()
      createProfile(profileData,history,true)
    }
    return (
       <Fragment>
        <h1 className="large text-primary">
          Edit Your Profile
        </h1>
        <p className="lead">
          <i className="fas fa-user"></i> Let's get some information to make your
          profile stand out
        </p>
        <small>* required field</small>
        <form className="form" onSubmit={e=>onSubmit(e)}>
          <div className="form-group">
            <select name="status" value={status} onChange={e=>onChange(e)}>
              <option value="0">* Select Professional Status</option>
              <option value="Developer Manager">Developer Manager</option>
              <option value="Team-Lead">Team Lead</option>
              <option value="Manager">Manager</option>
              <option value="Developer">Developer</option>
              <option value="Junior Developer">Junior Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Manager">Manager</option>
              <option value="Student or Learning">Student or Learning</option>
              <option value="Instructor">Instructor or Teacher</option>
              <option value="Intern">Intern</option>
              <option value="Other">Other</option>
            </select>
          
          </div>
          <div className="form-group">
                      <select name="department" value={department} onChange={e=>onChange(e)}>
              <option value="0">* Select Deaprtment </option>
              <option value="IT Services">IT Services</option>
              <option value="HR and Payroll">HR and Payroll</option>
              <option value="Admin Department">Admin Department</option>
              <option value="Sales and Marketing">Sales and Marketing</option>
              <option value="Security and Transport">Security and Transport</option>
              <option value="Infrastructures">Infrastructures</option>
              <option value="Manager">Manager</option>
              <option value="Other">Other</option>
            </select>
            </div>
          
        
          <div className="form-group">
            <input type="text" placeholder="Company" name="company" value={company}  onChange={e=>onChange(e)}/>
          
          </div>
          
          <div className="form-group">
            <input type="text" placeholder="Location" name="location" value={location}  onChange={e=>onChange(e)}/>
            </div>
                   
           
          <div className="my-2">
            <button onClick={()=>toggleSocialInputs(!displaySocialInputs)}type="button" className="btn btn-light">
              Add Social Network Links
            </button>
            <span>Optional</span>
          </div>
  
         
         {displaySocialInputs && <Fragment>
            <div className="form-group social-input">
            <i className="fab fa-facebook fa-2x"></i>
            <input type="text" placeholder="Facebook URL" name="facebook"  onChange={e=>onChange(e)} value={facebook} />
          </div>
  
          <div className="form-group social-input">
            <i className="fab fa-twitter fa-2x"></i>
            <input type="text" placeholder="Twitter URL" name="twitter" value={twitter}  onChange={e=>onChange(e)} />
          </div>
          <div className="form-group social-input">
            <i className="fab fa-linkedin fa-2x"></i>
            <input type="text" placeholder="Linkedin URL" name="linkedin"  onChange={e=>onChange(e)} value={linkedin} />
          </div>
         </Fragment>}
        
  
          <input type="submit" className="btn btn-primary my-1" />
          <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
        </form>
      </Fragment>
    )
}

EditProfile.propTypes={

createProfile:PropTypes.func.isRequired,
getCurrentProfile:PropTypes.func.isRequired,
profile:PropTypes.object.isRequired
}
const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

export default connect(mapStateToProps,{createProfile,getCurrentProfile})(withRouter(EditProfile))
