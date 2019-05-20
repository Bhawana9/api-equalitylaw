import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getCurrentProfile, deleteAccount} from '../../actions/profile'
import Spinner from '../Layout/spinner'
import {Link} from 'react-router-dom'
import DashboardActions from './DashboardActions'
import Experience from './ExperienceList'
import Complaints from './ComplaintsList'

const Dashboard =({getCurrentProfile,
  deleteAccount,
  auth:{user},
  profile:{profile,loading}})=>{
  useEffect(()=>{
      getCurrentProfile();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] )
    return (
     loading && profile ===null ? <Spinner/>:<Fragment>
   <h1 className='large text-primary'>Dashboard</h1>
   <p className='lead'><i className='fas fa-user'/>Welcome {user && user.name} </p>
   {profile !==null ?(<Fragment>
      <DashboardActions/>
      <Experience experience={profile.experience}/>
      {/* <Complaints Complaints={profile.Complaints}/> */}
      
      <div className="my-2">
      <button className="btn btn-danger" onClick={()=>deleteAccount()}>
      <i className='fas fa-user-minus'></i>Delete My Account
      </button>
      </div>
      
      </Fragment>):
      (<Fragment><p>You have not yet setup a profile,please add some info</p>
   <Link to='create-profile' className= 'btn btn-primary my-1'>Create Profile</Link></Fragment>)}

     </Fragment>
    )
  }


// eslint-disable-next-line react/no-typos
Dashboard.PropTypes={
   getCurrentProfile:PropTypes.func.isRequired,
   deleteAccount:PropTypes.func.isRequired,
   auth:PropTypes.object.isRequired,
   profile:PropTypes.object.isRequired, 
}
const mapStateToProps = (state) => {
    return {
        auth:state.auth,
        profile:state.profile
    }
}
export default connect(mapStateToProps,{getCurrentProfile,deleteAccount})(Dashboard)