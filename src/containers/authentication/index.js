import React, { Component } from "react";
import { Button, Logo } from "../../components/common";
import { connect } from "react-redux";
import * as Authentication from '../../actions/auth';
import "./styles.css";



class Login extends Component {


    constructor(props) {
        super(props);
        this.state = { width: 0,
             height: 0,
             btnText: "SIGN IN WITH TWITTER", };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    buttonOnClick = () => {
        this.setState({ btnText: "Processing Please Wait"});
        this.props.dispatch(Authentication.signin(this.props));
    };

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
            <div className="login-wrap" style={{ height: this.state.height }}>
                <div className="login-html">
                    <Logo size={100} />
                    <div className="row">
                    <div className="login-button-top-space">
                        <Button onClick={this.buttonOnClick} info lg>{this.state.btnText}</Button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cb: state.auth.cb
    };
}

export default connect(mapStateToProps)(Login);