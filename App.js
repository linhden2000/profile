import React, { Component } from 'react';
import Navbar from './component/Navbar.js';
import Info from './component/Info.js';
import Posts from '../src/component/Posts';

import  avatar from './img/avatar.jpg';
import  haavatar from './img/haavatar.jpg';
import  thangavatar from './img/thangavatar.jpg';

import { LoremIpsum} from 'react-lorem-ipsum';
import './App.css';

import 'react-circular-progressbar/dist/styles.css';
import CircularProgress  from './component/CircularProgress.js'

class App extends Component {

  state = {
    Posts: [
      {
        id: 1,
        ava: thangavatar,
        username: 'Thang Le',
        content: <LoremIpsum p={1} />,
        liked: false,
        showComment: false,
        comments:[]
      },
      {
        id: 2,
        ava: haavatar,
        username: 'Ha Tran',
        content: <LoremIpsum p={1} />,
        liked: false,
        showComment: false,
        comments:[]
      },
      {
        id: 3,
        ava: avatar,
        username: 'Linhden',
        content: <LoremIpsum p={1} />,
        liked: false,
        showComment: false,
        comments:[]
      },
    ]
  }
  markedLike = (id) =>{
    console.log(id)
    this.setState({Posts: this.state.Posts.map(post => {
      if(post.id === id ){
        post.liked = !post.liked
        console.log(post.liked)
      }
      return post
    })})
  }

  showCommentBox = (id) =>{
    console.log(id)
    this.setState({Posts: this.state.Posts.map(post => {
      if(post.id === id ){
        post.showComment = !post.showComment
        console.log(post.showComment)
      }
      return post
    })})
  }

  addComment = (id, comment) => {
    console.log(id)
    console.log(comment)
    this.setState({Posts: this.state.Posts.map(post => {
      if(post.id === id ){
        post.comments.push(comment)
        console.log(post.comments)
      }
      return post
    })})
  }

  render(){
    return(
      <div style = {{backgroundColor:'lightgrey', height: '100%',marginBottom: '0px'}}>
        <Navbar/>
        <div className = "PageContent">  
            <div className = "Info">
              <Info/>
              <div className = "progress"> 
                <CircularProgress/>
              </div>
            </div>
            <Posts posts ={this.state.Posts} markedLike = {this.markedLike} showCommentBox ={this.showCommentBox} addComment = {this.addComment} className = "Posts" />
        </div>
        <div style = {{backgroundColor:'royalblue'}}></div>
      </div>
    );
  }
}
export default App;
