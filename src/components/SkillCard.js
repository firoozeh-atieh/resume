import React, { Component } from 'react';
import './SkillCard.css'

class SkillCard extends Component{
    render(){
        const {skill}= this.props
        return(
            <div className="card">
            <div ClassName="skill_img-wrapper"  >
              <img  src={skill.content.image} alt={skill.content.title} style={{maxHeight:"80px",maxWidth:"150px"}} />
            </div>
            <div ClassName="skill_title_wrapper" >
              <h4>
              {skill.content.subtitle}
              </h4>
            </div>
            </div>
        )
    }
}
export default SkillCard;
