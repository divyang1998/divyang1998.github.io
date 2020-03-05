import React, { Component } from 'react';
import pdf from '../docs/divyang_resume.pdf'

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio1 = this.props.data.bio1;
      var bio2 = this.props.data.bio2;
      var interests = this.props.data.interests;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

   return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Divyang Arora Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <div className="row">
               <div className="columns 1">
                  <h2>HEY, IT'S ME!</h2>
                  <p>I like building awesome software. I've built websites, corporate software and even games! If you are interested, you can view some of my favorite projects through my GitHub.</p><p>Need something built or simply want to have chat? Reach out to me on social media or send me an email.</p>
               </div>
               
            </div>
            <a href={pdf} className="button"><i className="fa fa-download"></i>Download Resume</a>
         </div>
      </div>
   </section>
    );
  }
}

export default About;
