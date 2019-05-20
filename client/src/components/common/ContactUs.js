import React,{Component} from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBContainer,MDBBtn} from "mdbreact";
import GoogleMapReact from 'google-map-react'
import {Link} from 'react-router-dom'
const AnyReactComponent = ({ text }) => <div>{ text }</div>;

class ContactUs extends Component {

  static defaultProps = {
    center: { lat: 40.7446790, lng: -73.9485420 },
    zoom: 11
  }
  render()
  {
    return(
       
        <section className="my-5">
         <Link className="btn btn-secondary" to="/">Go to Back</Link>
         <MDBContainer>
        <h2 className="h1-responsive red-text font-weight-bold text-center my-5">Contact-Us </h2>
        <p>Want know more about harassment question?
        Our helpline is here to connect you with information and resources to answer your questions.</p> 
<MDBRow>
        <MDBCol lg="12" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div>
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Write to us:</h3>

                </div>

              <MDBCol lg="10">
          <div        
            className=" google-map rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
            <AnyReactComponent
            lat={ 40.7473310 }
            lng={ -73.8517440 }
            />
            </GoogleMapReact>
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p>Dublin, 94126056</p>
              <p className="mb-md-0">Ireland</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>+ 01 234 567 89</p>
              <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p>info@gmail.com</p>
              <p className="mb-md-0">sale@gmail.com</p>
            </MDBCol>
            </MDBRow>
            </MDBCol>
              </MDBCardBody>
              </MDBCard>
              </MDBCol>
              </MDBRow>
              </MDBContainer>
        </section>
    )
}
}

export default ContactUs;