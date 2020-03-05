import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em><span>&bull;</span><em className="date">{education.city}</em></p>
        <p>{education.gpa}</p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em><span>&bull;</span><em className="date">{work.city}</em></p>
            <ul><li>{work.description1}</li>
            <li>{work.description2}</li>
            <li>{work.description3}</li>
            <li>{work.description4}</li>
            <li>{work.description5}</li>
            <li>{work.description6}</li>
            <li>{work.description7}</li>
            <li>{work.description8}</li>
            </ul>
        </div>
      })

    var research = this.props.data.research.map(function(research){
        return <div key={research.company}><h3>{research.company}</h3>
            <p className="info">{research.title}<span>&bull;</span> <em className="date">{research.years}</em><span>&bull;</span><em className="date">{research.city}</em></p>
            <ul><li>{research.description1}</li>
            <li>{research.description2}</li>
            <li>{research.description3}</li>
            <li>{research.description4}</li>
            <li>{research.description5}</li>
            <li>{research.description6}</li>
            <li>{research.description7}</li>
            <li>{research.description8}</li>
            </ul> 
        </div>
    })

    var projects = this.props.data.projects.map(function(projects){
      return <div key={projects.company}><h3>{projects.company}</h3>
          <p className="pro">{projects.title}</p>
      </div>
  })

  var skills2 = this.props.data.skills2.map(function(skills2){
    return <div key={skills2.type}><h3>{skills2.type}</h3>
    <p className="info">{skills2.description}</p>
    
    </div>
})


  

     {/*
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })*/}
    }

    return (
      <section id="resume">
      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>

      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Research</span></h1>
         </div>

         <div className="nine columns main-col">
          {research}
        </div>
    </div>

    <div className="row work">
         <div className="three columns header-col">
            <h1><span>Projects</span></h1>
         </div>
         <div className="nine columns main-col">
          {projects}
        </div>
    </div>

    <div className="row skill2">
         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">
          {skills2}
        </div>
    </div>


    {/* <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
    </div> */}
   </section>
    );
  }
}

export default Resume;
