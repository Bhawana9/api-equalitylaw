import React ,{Fragment,useState}from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addComplaints} from '../../actions/profile'

import {Link , withRouter} from 'react-router-dom'
const ComplaintForm= ({addComplaints,history}) => {
    const [formData,setFormData]=useState({
      
        Status:'',
        Department:'',
        Description:'',
        CommitterName:'',
        CommitterPosition:'',
        from:'',
        to:'',
        note:'',
        
    });

    
    const {
        
        Status,
        Department,
        Description,
        CommitterName,
        CommitterPosition,
        from,
        to,
        note,
      
       
    }=formData;
    const [toDateDisabled]=useState(false)
    const onChange=e=>setFormData({...formData,[e.target.name]:e.target.value})

    const onSubmit=e=>{
      e.preventDefault()
           addComplaints(formData,history)
    }
    return (
       <Fragment>
        <h1 className="large text-primary">
          File your Complaint
        </h1>
        <p className="lead">
          <i className="fas fa-user"></i> Let's get some information to make your
          complaint 
        </p>
        <small>* Required Field</small>
        <form className="form" onSubmit={e=>onSubmit(e)}>
                   
        <div className="form-group">
           <select name="status" value={Status} onChange={e=>onChange(e)}>
              
              <option value="Other">Open</option>
            </select>
           </div>
            
            <div className="form-group">
             <select name="Department" value={Department} onChange={e=>onChange(e)}>
              <option value="0">* Select Department </option>
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
            <input type="text" placeholder="Describe your incident" name="Description" value={Description}  onChange={e=>onChange(e)}/>
            
          </div>
            <div className="form-group">
            <input type="text" placeholder="CommitterName" name="CommitterName" value={CommitterName}  onChange={e=>onChange(e)}/>
            </div>

            <div className="form-group">
            <input type="text" placeholder="CommitterPosition" name="CommitterPosition" value={CommitterPosition}  onChange={e=>onChange(e)}/>
            </div>      
               
        <div className="form-group">
            <input type="text" placeholder="note" name="note" value={note}  onChange={e=>onChange(e)}/>
         
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

ComplaintForm.propTypes = {
addComplaints:PropTypes.func.isRequired,

}


export default connect(null,{addComplaints})(withRouter(ComplaintForm))