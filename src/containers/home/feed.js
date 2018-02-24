import React, { Component } from "react";
import Navigation from "./../../components/nav";
import Card from "./../../components/card";
import PostBox from "./../../components/postBox";
import { Loader } from "./../../components/common";
import { connect } from "react-redux";
import * as Timeline from '../../actions/timeline';
// import * as Auth from '../../actions/auth';
import PopUp from './../../components/popup';




class Feed extends Component {

  constructor(props) {
    super(props); 
    this.state = {
      isOpen: false,
      item: {}
    };
  }

  componentWillMount = () => {
    this.props.dispatch(Timeline.getTimeline(this.props));
  };

  setPost = (tweet) => {
    this.props.dispatch(Timeline.tweet(tweet));
  }

  getLogout = () => {
    localStorage.clear()
    document.location.href='/'
    // this.props.history.push('/');
    //localStorage.clear();
  }

  openReplyModel = (item) =>{
    console.log("item ",item);
    this.setState({isOpen: true, item: item})
  }

  closePopUpModel = (status) => {
    this.setState({isOpen: status})
  }

  getReplyTweet = (value, item) =>{
    console.log("item ",value, item);
  }


  render() {

    let feeds = this.props.feeds.map((item, i) => {
      return (<Card item={item} key={i} openPopUp={this.openReplyModel}/>);
    });
    let boxStyle = { height: this.props.height, margin: "0px", padding: "0px" };
    let innerBoxStyle = { height: this.props.height - 30 };
    return (
      <div className="home-left-side" style={boxStyle}>
        <Navigation setLogout={this.getLogout} />
        <div className="feed-box" style={innerBoxStyle}>
          <PopUp isOpen={this.state.isOpen} modelClose={this.closePopUpModel} item={this.state.item} setReplyTweet={this.getReplyTweet}/>
          <PostBox getPost={this.setPost} />
          {feeds}
          {this.props.fetching && <Loader />}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    feeds: state.timeline.feeds,
    fetching: state.timeline.fetching
  };
}

export default connect(mapStateToProps)(Feed);
