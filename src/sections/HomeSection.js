import React, { Component } from 'react';
import Fullpage from '../components/Fullpage';
import ArrowIcon from '../components/ArrowIcon';
import { Link, Element } from 'react-scroll';
import { SocialIcon } from 'react-social-icons';
import data from '../Data.json';

class HomeSection extends Component{
    render(){
       
        return(
          <div ClassName="home">
            <Element name="home" className="element">
            </Element>
            <Fullpage className="first" FlexClassName="flexColumn">
             
              <h1 className="title">
                {data.title}
              </h1>

              <h2 className="subTitle">
                {data.subtitle}
              </h2>
              <h3 className="description">
                {data.description}
              </h3>
              <div calssName="icons_Wrapper" >
                {
                  Object.keys(data.links).map(key=>{
                    return(
                      <SocialIcon url={data.links[key]}  />
                    )
                  })
                }
             
              </div>

            </Fullpage>
           
            <div style={{justifyContent: "center",display:"flex",    alignItems: "center",flex:"auto",    flexDirection: "row",marginBottom:"24px",transform:"translateY(-45px)"}}>            
            <Link activeClass="active" to="About" spy={true} smooth={true} offset={50} duration={500} delay={0}>   
            <ArrowIcon icon={data.icons.down}></ArrowIcon>
            </Link>
            <Element name="About" className="element">
            </Element>
            </div>
            
            </div>

        )
    }
}
export default HomeSection;
