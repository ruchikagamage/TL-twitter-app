
import React, { Component } from 'react';
import {Panal ,Button} from './../common'
import './styles.css'

class PostBox extends Component {

    postTweet = () =>{
        if(this.refs.tweetpost.value.trim()){
            this.props.getPost(this.refs.tweetpost.value);
            this.refs.tweetpost.value = "";
            this.refs.tweetpostError.innerHTML = "";
        } else {
            this.refs.tweetpostError.innerHTML = "Tweet should not be empty";
        }
    }

    render() {
        return (
            <Panal>
               <textarea className="post-box" ref="tweetpost"></textarea> 
               <div className="error" ref="tweetpostError"></div>
               <div className="action-button">
               <Button info  onClick={this.postTweet.bind(this)}>NEW TWEET</Button>
               </div>
            </Panal>
        );
    }
}

export default PostBox;