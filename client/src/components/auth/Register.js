import React, { Fragment ,useState} from 'react'
import {connect} from 'react-redux'
import {setAlert} from '../../actions/alert'
import {register} from '../../actions/auth'
import {Link,Redirect} from 'react-router-dom'
import PropTypes from 'prop-types';


const Register =({setAlert,register,isAuthenticated})=> {
  const [formData,setFormData]=useState({
      name:'',
      email:'',
      password:'',
      password2:''
  });  

  const {name,email,password,password2}=formData

  const onNameChange=e=>setFormData({...formData,name:e.target.value})
  const onEmailChange=e=>setFormData({...formData,email:e.target.value})
  const onPasswordChange=e=>setFormData({...formData,password:e.target.value})
  const onPassword2Change=e=>setFormData({...formData,password2:e.target.value})
  const onSubmit=async e=>{
      e.preventDefault();
      if(password!==password2)
      {
  setAlert('Password do not match','danger')
      }
      else{
      register({name,email,password})  
      }
  }
  //Redirect to dashboard
  if(isAuthenticated)
  {
    return <Redirect to='/dashboard'/>
  }

        return (
            <Fragment>
      <section className="container">
      <h1 className="medium text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={e=>onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="Name" name="name" value={name} onChange={e=>onNameChange(e)}  />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e=>onEmailChange(e)} required/>
          
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password} onChange={e=>onPasswordChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2} onChange={e=>onPassword2Change(e)} 
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </section>
            </Fragment>
        )
    }
    // eslint-disable-next-line react/no-typos
    Register.propTypes={
      setAlert: PropTypes.func.isRequired,
      register:PropTypes.func.isRequired,
      isAuthenticated:PropTypes.bool
    };
    const  mapStateToProps = state => {
      return {
        isAuthenticated: state.auth.isAuthenticated
      }
    }
    export default connect(mapStateToProps,{setAlert,register}) (Register); 