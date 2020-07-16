import React, { Component } from 'react';
import avatar from '../img/avatar.jpg'
import '../App.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import CircularProgress  from './CircularProgress.js'

class Info extends Component {
  render(){
    return(
    <div className = "Profile">
        <div className = "InfoBox">
            <div className = "infoHeader">
                <img src = {avatar}/>
                <p>Linhden2000</p>
            </div>
            <div className = "bio">
                <p>Linh Nguyen </p>
                <p>Age: 19 </p>
                <p>Current weight: 67kg </p>
                <p>Current height: 1m70 </p>
                <p>Goal weight: 68kg</p>
            </div>
        </div> 
        
    </div>
    
    );
  }
}
export default Info;