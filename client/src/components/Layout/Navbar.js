import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {logout} from '../../actions/auth'

const Navbar =({auth:{isAuthenticated,loading},logout})=> {
  const authLinks=(
    <ul>
     <li><a href="#!"><i className="fas fa-user"></i>{''}<span className="hide-sm">Dashboard</span></a></li> 
    <li><a onClick={logout} href="#!"> <i className="fas fa-sign-out-alt"></i>{''}
    <span className="hide-sm">Logout</span></a></li>
    <li><Link to="/contact">Contact Us</Link></li>
    
  </ul>
  );

  const guestLinks=(
<ul>
              
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
  )
    
        return (
            <nav className="navbar bg-dark">
            <h1>
              <Link to="/">Equality</Link>
            </h1>
           {!loading && (<Fragment>{isAuthenticated ?authLinks :guestLinks}</Fragment>)}
          </nav>
        )
    }
    Navbar.propTypes={
      logout:PropTypes.func.isRequired,
      auth:PropTypes.object.isRequired,
      isAuthenticated:PropTypes.bool,
    }
    const mapStateToProps = (state) => {
      return {
        auth :state.auth
      }
    }

    export default connect(mapStateToProps,{logout})(Navbar)



