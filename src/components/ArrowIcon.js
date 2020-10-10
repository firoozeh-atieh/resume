import React, { Component } from 'react';
import './ArrowIcon.css'

const ArrowIcon = (props) =>
{
    return(
        <div>
              <img src={props.icon} style={{maxWidth:"25px"}}></img>
            </div>

    )
}
export default ArrowIcon
