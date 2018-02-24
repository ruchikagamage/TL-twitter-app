import React, { Component } from "react";
import { Panal } from "./../../components/common";
import "./styles.css";
import reTweet from './../../images/repeat.svg'
import reply from './../../images//speech-bubble.svg'
import rate from './../../images/like.svg'
import PopUp from './../popup'
var moment = require('moment');

class Card extends Component {

  constructor(props) {
    super(props); 
    this.state = {
      isOpen: false
    };
  }

  openPopUp(){
      this.setState({isOpen:true})  
  }


  render() {
    let image = "";
    if (
      this.props.item.entities &&
      this.props.item.entities.media &&
      this.props.item.entities.media.length > 0
    ) {
      image = this.props.item.entities.media.map((item, i) => {
        return (
          <div key={i}>
            <img src={item.media_url} className="card-image" />
          </div>
        );
      });
    }


    return (
      <Panal>
        <article className="post">
        <PopUp isOpen={this.state.isOpen}/>
          <header>
            <div className="fakeimage">
            <img
              src={this.props.item.user.profile_image_url}
              className="card-profile-image"
            />
            </div>
            <div className="post-text-info">
            <h6 className="card-profile-name f-z-16 f-w-medium f-c-dark-ash">&nbsp;{this.props.item.user.name}</h6>
            <p>
              <i className="card-profile-id f-z-11 f-w-bold f-c-light-ash" />&nbsp;{this.props.item.user.screen_name}
            </p>
            <p className="card-profile-time f-z-11 f-w-regular f-c-light-ash">
            
              {moment(this.props.item.retweet_count).format('MMMM Do YYYY, h:mm:ss a')}
            </p>
            </div>
           
          </header>
          <div className="post-content">
          <p className="card-profile-post  f-c-dark-ash f-z-12">
                {this.props.item.text}
              </p>
              {image}
          </div>
           <div className="post-action-panal">
             <div onClick={this.openPopUp.bind(this)} className="four columns post-action"><a className="post-action-button">1 <img className="post-action-button-icon" src={reply}/></a></div>
             <div className="four columns post-action"><a className="post-action-button">{this.props.item.retweet_count} <img className="post-action-button-icon" src={reTweet}/></a></div>
             <div className="four columns post-action"><a className="post-action-button">{this.props.item.favorite_count} <img className="post-action-button-icon" src={rate}/></a></div>
           </div>
           <div>
           </div>
        </article>
      </Panal>
    );
  }
}

export default Card;
