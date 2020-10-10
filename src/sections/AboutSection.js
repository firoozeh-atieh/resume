import React, { Component } from 'react';
import Fullpage from '../components/Fullpage';
import ArrowIcon from '../components/ArrowIcon';
import { Link, Element } from 'react-scroll';
import data from '../Data.json';
import './sections.css';

class AboutSection extends Component{
    render(){
       
        return(
          <div className="about">

<Fullpage className="Second" FlexClassName="flexColumn">
        <h1 className="title">
          {data.sections[0].title}
        </h1>
        <div calssName="subTitle_Wrapper" >
        {
                  Object.keys(data.sections[0].Items).map(key=>{
                    return(
                      <p className="subTitle"> {data.sections[0].Items[key].content}</p>
                    )
                  })
                }
             

        </div>

            </Fullpage> 
           <div style={{justifyContent: "center",display:"flex",    alignItems: "center",flex:"auto",    flexDirection: "row",marginBottom:"24px",transform:"translateY(-62px)"}}>            
            <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={50} duration={500} delay={0}>   
            <ArrowIcon icon={data.icons.down}></ArrowIcon>
            </Link>
            <Element name="Skills" className="element">
            </Element>
          </div>
          </div>
            


        )
    }
}
export default AboutSection;
