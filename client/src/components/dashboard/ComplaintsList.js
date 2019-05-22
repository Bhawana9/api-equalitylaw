import React ,{Fragment}from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Moment from 'react-moment'


const ComplaintList=({complaint}) => {
    const complaints=complaint.map(exp=>(
        <tr key={exp._id}>
        <td>{exp.Description}</td>
        <td className='hide-sm'>{exp.Department}</td>
          
        <td><Moment format='YYYY/MM/DD'>{exp.from}</Moment>-{
            exp.to===null ? ('Now'):(<Moment format='YYYY/MM/DD'>{exp.to}</Moment>)
        }</td> 
        <td className='hide-sm'>{exp.Status}</td>  
        </tr>
    ))
  return (
    <Fragment>
     <h2 className='my-2'>Complaints List</h2> 
     <table className="table">
     <thead>
         <tr>
             <th>Description of Incident</th>
             <th className='hide-sm'>Department (Responsible Person)</th>
             <th className='hide-sm'>Years</th>
             <th className='hide-sm'>Status</th>
             <th/>
         </tr>
     </thead>
     <tbody>{complaints}</tbody>
     </table>
    </Fragment>
  )
}

ComplaintList.propTypes = {

    complaint:PropTypes.array.isRequired,
   

}
export default connect(null,)(ComplaintList)