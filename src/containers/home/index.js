import React, { Component } from "react";
import "./styles.css";
import Cover from "./cover";
import Feed from "./feed";

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  
  componentWillMount(){
    if(!localStorage.getItem('screen_name')){
      document.location.href='/'
      localStorage.clear()
    }
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    return (
      <div>
        {/* <Navigation /> */}
        <div className="row">
        <Cover height={this.state.height} />
          <Feed height={this.state.height} />
        
        </div>
      </div>
    );
  }
}

export default componentName;
