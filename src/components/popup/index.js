import React, { Component } from "react";
import styles from "./styles.css";
import { Button } from './../common';
var moment = require('moment');

class PopUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isOpen: true })
  }
  closeModal = () => {
    this.setState({ isOpen: false })
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.isOpen === true) {
      this.openModal()
    } else if (nextProps.isOpen === false) {
      this.closeModal()
    }
  }

  replyTweet = () => {
    this.props.setReplyTweet(this.refs.tweetpost.value, this.props.item);
  }

  render() {
    let image = "";
    if (
      this.props.item &&
      this.props.item.entities &&
      this.props.item.entities.media &&
      this.props.item.entities.media.length > 0
    ) {
      image = this.props.item.entities.media.map((item, i) => {
        return (
          <div key={i}>
            <img style={{ width: '100%', marginTop: '20px' }} src={item.media_url} alt="profile"/>
          </div>
        );
      });
    }

    return (
      <div className={this.state.isOpen === true ? "overlay-popup" : 'overlay-popup-close'} >
        <a onClick={this.closeModal} className="close ">X</a>
        <div className="popup-box-conitent" >
          <article className="post">
            <header>
              <div className="card-fakeimage">
                <img
                  src={this.props.item.user && this.props.item.user.profile_image_url}
                  className="popup-profile-image"
                  alt="cover"
                />
              </div>
              <div className="popup-text-info">
                <h6 className="popup-profile-name f-z-16 f-w-medium f-c-dark-ash">
                  &nbsp;{this.props.item.user && this.props.item.user.name}
                </h6>
                <p>
                  <i className="pop-profile-id f-z-11 f-w-bold f-c-light-ash" />&nbsp;{this.props.item.user && this.props.item.user.screen_name}
                </p>
                {this.props.item.created_at && <p className="popup-profile-time f-z-11 f-w-regular f-c-light-ash">
                  {moment(this.props.item.created_at).format('MMMM Do YYYY, h:mm:ss a')}
                </p>}
              </div>
            </header>
            <div className="popup-content">
              {this.props.item.text && <p className="popup-profile-post  f-c-dark-ash f-z-12">
                {this.props.item.text}
              </p>}
              {image}
            </div>
            <div />
            <textarea className="post-box" ref="tweetpost"></textarea>
            <div className="error" ref="tweetpostError"></div>
            <div className="action-button">
              <Button onClick={this.closeModal} >CLOSE</Button>&nbsp;
               <Button onClick={this.replyTweet} info>REPLY</Button>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default PopUp;
