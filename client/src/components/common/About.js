import React from 'react'
import { MDBRow,  MDBCol,MDBContainer} from "mdbreact";
import {Link} from 'react-router-dom'
const About =()=>{
        return (
        <section className="my-5">
        <Link className="btn btn-primary"to="/">Go to Back</Link>
        <MDBContainer>
        
       <h2 className="h1-responsive font-weight-bold text-center my-5">Who We Are</h2>
        <p className="lead black-text w-responsive text-center mx-auto mb-5">
        
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam.
        </p>
        
        <MDBRow>
        <MDBCol lg="5" className="text-center text-lg-left">
        <img src="./img/side-banner.png" className="img-fluid" alt=""/>
        </MDBCol>
        <MDBCol lg="7">
        <MDBRow className="mb-3">
        <MDBCol size="1">
        <MDBCol icon="share" size="lg" className="indigo-text"/>
        </MDBCol>
        <MDBCol xl="10" md="11" size="10">
        <h5 className="font-weight-bold mb-3"><i className="fas fa-eye"/>Vision</h5>
        <p className="red-text">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam.
        </p>
        </MDBCol>
        </MDBRow>
        

        <MDBRow className="mb-3">
        <MDBCol size="1">
        <MDBCol icon="share" size="lg" className="indigo-text"/>
        </MDBCol>
        <MDBCol xl="10" md="11" size="10">
        <h5 className="font-weight-bold mb-3"><i className="fas fa-bullseye"/>Mission</h5>
        <p className="red-text">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam.
        </p>
        </MDBCol>
        </MDBRow>


        <MDBRow className="mb-3">
        <MDBCol size="1">
        <MDBCol icon="share" size="lg" className="indigo-text"/>
        </MDBCol>
        <MDBCol xl="10" md="11" size="10">
        <h5 className="font-weight-bold mb-3"><i className="fas fa-chart-line"/>Goals</h5>
        <p className="red-text">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam.
        </p>
        </MDBCol>
        </MDBRow>
        
        
        </MDBCol>
        </MDBRow>
        </MDBContainer>
        </section>
                
            
        )
    }



export default About
