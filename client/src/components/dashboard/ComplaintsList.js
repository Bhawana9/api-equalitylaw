// import React, { Component } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import Moment from "react-moment";


// class ComplaintsList extends Component {
  
//   render() {
//     const complaints = this.props.complaint.map(comp => (
//       <tr key={comp._id}>
//         <td>{comp.department}</td>
//         <td>{comp.description}</td>
//         <td>
//           <Moment format="YYYY/MM/DD">{comp.from}</Moment>
//           -
//           {comp.to === null ? (
//             " Now"
//           ) : (
//             <Moment format="YYYY/MM/DD">{comp.to}</Moment>
//           )}
//         </td>
        
//       </tr>
//     ));

//     return (
//       <div>
//         <h4 className="mb-4">Complaints List</h4>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Department</th>
//               <th>Description</th>
//               <th>Years</th>
//               <th />
//             </tr>
//           </thead>
//           <tbody>{complaints}</tbody>
//         </table>
//       </div>
//     );
//   }
// }

// ComplaintsList.propTypes = {
//     complaint:PropTypes.array.isRequired,
//   };

// export default connect(null, )(ComplaintsList);