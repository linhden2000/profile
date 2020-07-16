import React, { Component } from 'react';
import '../App.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class CircularProgress extends Component {   
  render(){
    const percentage = 20;
    return(
    <div style={{ width: 270, height: 270, textAlign:'center' }}>
        <CircularProgressbar value={percentage} 
         text={`${percentage}%`} 
         pathRadius = '10px'
         styles = {buildStyles({
            rotation: 0.25,
            circleRatio:0.1,
            pathRadius: '10px',
            textSize: '10px',
            pathTransition: 0.5,
            backgroundColor: '#000000',
            textColor: 'black',
         })}        
         />;
      <p style = {{color:"black"}}>My Progress</p>
    </div> 
    );
  }
}
export default CircularProgress;