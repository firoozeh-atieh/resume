import React, { Component } from 'react';
import Fullpage from '../components/Fullpage';
import SkillCard from  '../components/SkillCard';
import ArrowIcon from '../components/ArrowIcon';
import { Link, Element } from 'react-scroll';
import data from '../Data.json';
import './sections.css';

class SkillSection extends Component{
    render(){
       
        return(
          <div className="Skills">
            <Fullpage ClassName="third" FlexClassName="flexColumn">
           <h1 className="title">
          {data.sections[1].title}
        </h1>
        <div className="cards_wrapper"  style={{justifyContent: "center",display:"flex",    alignItems: "center",flex:"auto",    flexDirection: "row"}}>
        {
            data.sections[1].Items.map(eachSkill=>{
              return(
               <SkillCard skill={eachSkill}/>
              )
            })
          }
        </div>
            </Fullpage>
            <div style={{justifyContent: "center",display:"flex",    alignItems: "center",flex:"auto",    flexDirection: "row" ,transform:"translateY(-100px)"}}>            
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} delay={0}>   
            <ArrowIcon icon={data.icons.Up}></ArrowIcon>
            </Link>
            </div>
            </div>
        )
    }
}
export default SkillSection;
