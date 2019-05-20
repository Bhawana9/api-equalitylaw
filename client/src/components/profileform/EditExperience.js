import React, { Component, Fragment,useState ,useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {addExperience,getCurrentProfile} from '../../actions/profile'
import {Link , withRouter} from 'react-router-dom'

const EditExperience =({profile:{profile,loading},addExperience,history})=>{
    const [expData,setFormData]=useState({
        title:'',
        company:'',
        location:'',
        from:'',
        to:'',
        });

    const [toDateDisabled]=useState(false)
    useEffect(() => {
        getCurrentProfile();
        setFormData({
            company:loading||!profile.company?'':profile.company,
            title:loading||!profile.title?'':profile.title,
            from:loading||!profile.from?'':profile.from,
            to:loading||!profile.to?'':profile.to,
            location:loading||!profile.location?'':profile.location
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[loading])
    const {
        title,
        company,
        from,
        to,
        location
    }=expData;
    const onChange=e=>setFormData({...expData,[e.target.name]:e.target.value})
    const onSubmit=e=>{
      e.preventDefault()
      addExperience(expData,history,true)
      
    } 
        return (
       <Fragment>
       <h1 className="large text-primary">
       Edit An Experience
      </h1>
       <small>* required field</small>
      <form className="form" onSubmit={e=>onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="* Job Title" name="title"value={title} onChange={e=>onChange(e)} required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Company" name="company" value={company} onChange={e=>onChange(e)} required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Location" name="location" value={location} onChange={e=>onChange(e)}/>
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" value={from} onChange={e=>onChange(e)}/>
        </div>
         
        <div className="form-group">
          <h4>To Date</h4>
          <input type="date" name="to" value={to} onChange={e=>onChange(e)} disabled={toDateDisabled ?'disabled':''}/>
        </div>
        
        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
      </form> 
            </Fragment>
        )
    }


    EditExperience.propTypes={
   addExperience:PropTypes.func.isRequired,
   getCurrentProfile:PropTypes.func.isRequired,
profile:PropTypes.object.isRequired
    }

    const mapStateToProps = (state) => {
        return {
            profile: state.profile
        }
    }
    

export default connect(mapStateToProps,{addExperience})(withRouter(EditExperience))
