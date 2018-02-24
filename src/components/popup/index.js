import React, { Component } from "react";
import styles from "./styles.css";
import {Button} from './../common'
import classNames from "classnames";

class PopUp extends Component {
 
    constructor(props) {
        super(props); 
        this.state = {
          isOpen: false,
        };
      }

      openModal = () =>{
        this.setState({isOpen : true})
      }
      closeModal = () =>{  
        this.setState({isOpen : false})
      }
    
      componentWillReceiveProps = (nextProps) => {
        console.log(nextProps.isOpen);
        
          if(nextProps.isOpen===true){
           this.openModal()
          }else if(nextProps.isOpen===false){
            this.closeModal()
          }
      }
 
    render() {

        let modalStyle = classNames('')
    return (
      <div className={this.state.isOpen === true ? "overlay-popup" : 'overlay-popup-close'} >
        <a onClick={this.closeModal} className="close ">X</a>
        <div className="popup-box-conitent" >
          <article className="post">
            <header>
              <div className="card-fakeimage">
                <img
                  src="http://a1.espncdn.com/combiner/i?img=/i/headshots/cricket/players/44936.png&h=108&w=108&scale=crop&transparent=true"
                  className="popup-profile-image"
                />
              </div>
              <div className="popup-text-info">
                <h6 className="popup-profile-name f-z-16 f-w-medium f-c-dark-ash">
                  &nbsp;AB de Villiers
                </h6>

                <p>
                  <i className="pop-profile-id f-z-11 f-w-bold f-c-light-ash" />&nbsp;@AB
                </p>
                <p className="popup-profile-time f-z-11 f-w-regular f-c-light-ash">
                  2013/11/11
                </p>
              </div>
            </header>
            <div className="popup-content">
              <p className="popup-profile-post  f-c-dark-ash f-z-12">
                were mostly undone by the lack of pace from the Indian pair,
                rather than their variations. "We struggled against Kuldeep but
                he was in form, he took his chances, and we gave some soft
                wickets away. I'm not sure if we struggled to pick him. His pace
                has been good," Behardien said. "He has bowled a bit slower. Not
                too many bowlers in our country bowl that slowly. Normally, when
                we play on the Highveld, where wickets are quite good, you bowl
                at quite a flatter pace with not a lot of revs on the ball."
              </p>
              <img style={{width:'100%',marginTop:'20px'}} src="http://a1.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1105130_900x506.jpg&w=375&h=211&scale=crop&cquality=40&location=origin" />
            </div>
            <div />
            <textarea className="post-box" ref="tweetpost"></textarea> 
               <div className="error" ref="tweetpostError"></div>
               <div className="action-button">
               <Button onClick={this.closeModal} >CLOSE</Button>&nbsp;
               <Button info>REPLY</Button>
               </div>
          </article>
        </div>
      </div>
    );
  }
}

export default PopUp;
