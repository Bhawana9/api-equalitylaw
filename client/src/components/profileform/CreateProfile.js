import React ,{useState, Fragment}from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createProfile} from '../../actions/profile'
import {Link,withRouter} from 'react-router-dom'

const CreateProfile = ({createProfile,history}) => {
    const [formData,setFormData]=useState({
        company:'',
        status:'',
        department:'',
        twitter:'',
        facebook:'',
        linkedin:'',
        location:''
    });

    const [displaySocialInputs,toggleSocialInputs]=useState(false)
    const {
        company,
        status,
        department,
        twitter,
        facebook,
        linkedin,
        location
    }=formData;
    const onChange=e=>setFormData({...formData,[e.target.name]:e.target.value})

    const onSubmit=e=>{
      e.preventDefault()
      createProfile(formData,history)
    }
    return (
       <Fragment>
        <h1 className="large text-primary">
          Create Your Profile
        </h1>
        <p className="lead">
          <i className="fas fa-user"></i> Let's get some information to make your
          profile stand out
        </p>
        <small>* Required Field</small>
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

            
          </div>
          <div className="form-group">
            <input type="text" placeholder="Company" name="company" value={company}  onChange={e=>onChange(e)}/>
            
          </div>
          
          <div className="form-group">
            <input type="text" placeholder="Location" name="location" value={location}  onChange={e=>onChange(e)}/>
            </div>
                   
           
          <div className="my-2">
            <button onClick={(e)=>toggleSocialInputs(!displaySocialInputs)}type="button" className="btn btn-light">
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

CreateProfile.propTypes={

createProfile:PropTypes.func.isRequired,
}


export default connect(null,{createProfile})(withRouter(CreateProfile))
